
'use server';
/**
 * @fileOverview Flow to save enquiry data to Google Sheets.
 *
 * - saveEnquiry - A function that handles saving the enquiry.
 * - SaveEnquiryInput - The input type for the saveEnquiry function.
 * - SaveEnquiryOutput - The return type for the saveEnquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {google} from 'googleapis';
import nodemailer from 'nodemailer';
import {getGoogleSheetsConfig, getEmailNotificationConfig} from '@/config/site';

async function sendEnquiryNotificationEmail(input: SaveEnquiryInput): Promise<void> {
  const {host, port, secure, user, pass, to} = getEmailNotificationConfig();
  if (!host || !port || !user || !pass || !to) {
    throw new Error('SMTP env vars are not fully configured.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure,
    auth: {user, pass},
  });

  await transporter.sendMail({
    from: {name: "Gera's Joy on the Treetops", address: user},
    to,
    subject: `New Enquiry — Gera's Joy on the Treetops (${input.configuration})`,
    html: `
      <h2>New Site Visit Enquiry</h2>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phoneNumber}</p>
      <p><strong>Configuration:</strong> ${input.configuration}</p>
      <p><strong>Submitted at:</strong> ${input.submissionTimestamp}</p>
      <p><strong>UTM Source:</strong> ${input.utmSource || '—'}</p>
      <p><strong>UTM Medium:</strong> ${input.utmMedium || '—'}</p>
      <p><strong>UTM ID:</strong> ${input.utmId || '—'}</p>
    `,
  });
}

const SaveEnquiryInputSchema = z.object({
  name: z.string().min(1, {message: 'Name is required.'}),
  email: z.string().email({message: 'Invalid email address.'}),
  phoneNumber: z.string().min(10, {message: 'Phone number is required and should be at least 10 digits.'}),
  configuration: z.string().min(1, {message: 'Configuration is required.'}),
  submissionTimestamp: z.string().datetime(),
  utmSource: z.string().optional().default(''),
  utmMedium: z.string().optional().default(''),
  utmId: z.string().optional().default(''),
});
export type SaveEnquiryInput = z.infer<typeof SaveEnquiryInputSchema>;

const SaveEnquiryOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SaveEnquiryOutput = z.infer<typeof SaveEnquiryOutputSchema>;

// This is the wrapper function that will be called from the client.
export async function saveEnquiry(input: SaveEnquiryInput): Promise<SaveEnquiryOutput> {
  return saveEnquiryToSheetFlow(input);
}

const saveEnquiryToSheetFlow = ai.defineFlow(
  {
    name: 'saveEnquiryToSheetFlow',
    inputSchema: SaveEnquiryInputSchema,
    outputSchema: SaveEnquiryOutputSchema,
  },
  async (input) => {
    // Sheets and email are independent notification channels — each is
    // attempted regardless of whether the other is configured or succeeds.
    let sheetSaved = false;
    let emailSent = false;

    try {
      const {googleSheetId, googleServiceAccountCredentials} = getGoogleSheetsConfig();

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: googleServiceAccountCredentials.client_email,
          private_key: googleServiceAccountCredentials.private_key.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({version: 'v4', auth});
      const range = 'Sheet1!A1'; // Appends data starting from the first empty row in Sheet1

      // Order must match the sheet's header row: Name, Phone, Email,
      // Configuration, Date & Time, UTM Source, UTM Medium, UTM ID.
      const rowData = [
        input.name,
        input.phoneNumber,
        input.email,
        input.configuration,
        input.submissionTimestamp,
        input.utmSource,
        input.utmMedium,
        input.utmId,
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: googleSheetId,
        range,
        valueInputOption: 'RAW', // Store values as literal text — USER_ENTERED parses a leading "+" (e.g. phone numbers) as a formula
        insertDataOption: 'INSERT_ROWS', // Inserts new rows for the data
        requestBody: {
          values: [rowData],
        },
      });

      sheetSaved = true;
    } catch (error) {
      console.error('Google Sheets Error:');
      console.error(error instanceof Error ? error.message : error);
    }

    try {
      await sendEnquiryNotificationEmail(input);
      emailSent = true;
    } catch (emailError) {
      console.error('Error sending enquiry notification email:', emailError);
    }

    if (sheetSaved || emailSent) {
      return {
        success: true,
        message: 'Enquiry saved successfully!',
      };
    }

    return {
      success: false,
      message: 'Failed to save enquiry. Please check server logs.',
    };
  }
);
