const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY?.trim();
const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET?.trim();

if (!supabaseSecretKey) {
  throw new Error("Missing SUPABASE_SECRET_KEY. Set it in .env.local.");
}
if (!signingSecret) {
  throw new Error("Missing CLERK_WEBHOOK_SIGNING_SECRET. Set it in .env.local.");
}

// Also imported by next.config.ts so missing sync credentials fail at startup.
export const organizationSyncConfig = { supabaseSecretKey, signingSecret };
