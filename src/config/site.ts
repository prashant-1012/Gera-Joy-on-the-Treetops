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
  // Some hosts (e.g. Hostinger's env var panel) mangle a raw multi-line PEM
  // pasted with literal "\n" escapes — smart-quote/dash autocorrection or
  // stray wrapping characters corrupt the "-----BEGIN...-----" line. Base64
  // has no such risky characters, so prefer it when present; local dev keeps
  // using the raw .env format.
  const base64Key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_BASE64;
  const privateKey = base64Key
    ? Buffer.from(base64Key, 'base64').toString('utf8')
    : requireEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY').replace(/\\n/g, '\n');

  return {
    googleSheetId: requireEnv('GOOGLE_SHEET_ID'),
    googleServiceAccountCredentials: {
      client_email: requireEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL'),
      private_key: privateKey,
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
