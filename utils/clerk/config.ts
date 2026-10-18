const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim();
const secretKey = process.env.CLERK_SECRET_KEY?.trim();

if (!publishableKey) {
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY. Set it in .env.local.");
}
if (!secretKey) {
  throw new Error("Missing CLERK_SECRET_KEY. Set it in .env.local.");
}
