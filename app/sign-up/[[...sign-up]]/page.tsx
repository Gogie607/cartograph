import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <div className="auth-heading"><h1>Join Cartograph</h1><p>A shared workspace for your team.</p></div>
      <Suspense fallback={<div className="auth-placeholder" role="status">Loading sign-up…</div>}>
        <SignUp />
      </Suspense>
    </main>
  );
}
