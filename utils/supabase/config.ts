const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

if (!url) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL. Set it in .env.local.");
}

if (!publishableKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Set it in .env.local.",
  );
}

const parsedUrl = new URL(url);
if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL must be an HTTP or HTTPS URL.");
}

export const supabaseConfig = { url, publishableKey };
