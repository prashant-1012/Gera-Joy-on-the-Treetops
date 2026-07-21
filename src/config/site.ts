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

// A function, not a top-level object: the Sheets credentials are required only
// once someone actually submits the enquiry form, and evaluating requireEnv()
// there (inside the flow's try/catch) lets a missing var fail gracefully
// instead of crashing the server action with an unhandled module-load error.
export function getSiteConfig() {
  return {
    googleSheetId: requireEnv('GOOGLE_SHEET_ID'),
    googleServiceAccountCredentials: {
      client_email: requireEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
      private_key: requireEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY'),
    },
    // Optional: enquiry notification email. If any SMTP var is missing, email
    // sending is skipped (Sheets remains the source of truth for leads).
    emailNotification: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      secure: process.env.EMAIL_SMTP_SECURE === 'true',
      user: process.env.EMAIL_SMTP_USER,
      pass: process.env.EMAIL_SMTP_PASS,
      to: process.env.ENQUIRY_NOTIFICATION_EMAIL,
    },
  };
}
