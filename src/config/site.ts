// IMPORTANT: This file reads sensitive credentials from environment variables.
// It should ONLY be accessed by server-side code (e.g., Genkit flows).
// DO NOT import this file directly into client-side components.

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Functions, not top-level objects: each is only evaluated once someone
// actually submits the enquiry form, and only for the channel (Sheets vs.
// email) that's being attempted — so a missing var fails gracefully inside
// that channel's own try/catch instead of crashing the whole server action,
// and the two channels can be configured independently of each other.
export function getGoogleSheetsConfig() {
  return {
    googleSheetId: requireEnv('GOOGLE_SHEET_ID'),
    googleServiceAccountCredentials: {
      client_email: requireEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
      private_key: requireEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY'),
    },
  };
}

export function getEmailNotificationConfig() {
  return {
    host: process.env.EMAIL_SMTP_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    secure: process.env.EMAIL_SMTP_SECURE === 'true',
    user: process.env.EMAIL_SMTP_USER,
    pass: process.env.EMAIL_SMTP_PASS,
    to: process.env.ENQUIRY_NOTIFICATION_EMAIL,
  };
}
