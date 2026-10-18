import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <main className="auth-page">
      <div className="auth-heading"><h1>Sign in to Cartograph</h1></div>
      <Suspense fallback={<div className="auth-placeholder" role="status">Loading sign-in…</div>}>
        <SignIn />
      </Suspense>
    </main>
  );
}
