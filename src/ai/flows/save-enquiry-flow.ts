
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
import {siteConfig} from '@/config/site'; // Config for credentials and sheet ID

async function sendEnquiryNotificationEmail(input: SaveEnquiryInput): Promise<void> {
  const {host, port, secure, user, pass, to} = siteConfig.emailNotification;
  if (!host || !port || !user || !pass || !to) {
    console.warn('Email notification skipped: SMTP env vars are not fully configured.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure,
    auth: {user, pass},
  });

  await transporter.sendMail({
    from: user,
    to,
    subject: `New Enquiry — Gera's Joy on the Treetops (${input.configuration})`,
    html: `
      <h2>New Site Visit Enquiry</h2>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phoneNumber}</p>
      <p><strong>Configuration:</strong> ${input.configuration}</p>
      <p><strong>Submitted at:</strong> ${input.submissionTimestamp}</p>
    `,
  });
}

const SaveEnquiryInputSchema = z.object({
  name: z.string().min(1, {message: 'Name is required.'}),
  email: z.string().email({message: 'Invalid email address.'}),
  phoneNumber: z.string().min(10, {message: 'Phone number is required and should be at least 10 digits.'}),
  configuration: z.string().min(1, {message: 'Configuration is required.'}),
  submissionTimestamp: z.string().datetime(),
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
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: siteConfig.googleServiceAccountCredentials.client_email,
          private_key: siteConfig.googleServiceAccountCredentials.private_key.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({version: 'v4', auth});
      const spreadsheetId = siteConfig.googleSheetId;
      const range = 'Sheet1!A1'; // Appends data starting from the first empty row in Sheet1

      // Prepare the row data. Order should match your sheet columns.
      const rowData = [
        input.submissionTimestamp,
        input.name,
        input.email,
        input.phoneNumber,
        input.configuration,
        "true", // Consent is now implicit
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED', // Interprets data as if user typed it
        insertDataOption: 'INSERT_ROWS', // Inserts new rows for the data
        requestBody: {
          values: [rowData],
        },
      });

      try {
        await sendEnquiryNotificationEmail(input);
      } catch (emailError) {
        // The lead is already saved to the Sheet, so don't fail the submission over email.
        console.error('Error sending enquiry notification email:', emailError);
      }

      return {
        success: true,
        message: 'Enquiry saved successfully!',
      };
    } catch (error) {
      console.error('Error saving to Google Sheet:', error);
      let errorMessage = 'Failed to save enquiry.';
      if (error instanceof Error) {
        // For security, you might not want to expose detailed error messages to the client.
        // Log the full error on the server, but return a generic message.
        errorMessage = `Failed to save enquiry. Please check server logs.`;
      }
      return {
        success: false,
        message: errorMessage,
      };
    }
  }
);
