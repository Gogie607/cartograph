import { auth } from "@clerk/nextjs/server";
import { InviteMembersButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function Workspace() {
  const { orgId, orgRole, sessionClaims } = await auth.protect();
  if (!orgId) redirect("/choose-organization");
  const organizationName =
    typeof sessionClaims.org_name === "string" && sessionClaims.org_name.trim()
      ? sessionClaims.org_name.trim()
      : null;

  return (
    <main className="workspace">
      <div className="workspace-heading">
        <div>
          <p className="eyebrow">Current organization</p>
          <h1>{organizationName ?? "Workspace"}</h1>
          <p className="organization-id">{orgId}</p>
        </div>
        {orgRole === "org:admin" && (
          <InviteMembersButton><button className="button">Invite teammate</button></InviteMembersButton>
        )}
      </div>
      <section className="workspace-panel" aria-labelledby="workspace-title">
        <h2 id="workspace-title">Your team workspace is ready</h2>
        <p>Switch organizations or manage your team from the organization menu above.</p>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<main className="workspace" role="status">Loading workspace…</main>}>
      <Workspace />
    </Suspense>
  );
}
