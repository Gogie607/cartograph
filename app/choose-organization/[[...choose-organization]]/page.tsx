import { Suspense } from "react";
import { OrganizationOnboarding } from "@/components/organization-onboarding";

export default function ChooseOrganizationPage() {
  return (
    <main className="auth-page">
      <div className="auth-heading"><h1>Your organization</h1><p>Continue to your team workspace.</p></div>
      <Suspense fallback={<div className="auth-placeholder" role="status">Loading organizations…</div>}>
        <OrganizationOnboarding />
      </Suspense>
    </main>
  );
}
