import { auth } from "@clerk/nextjs/server";
import { InviteMembersButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getDashboardAnalyses } from "@/utils/supabase/dashboard";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});

async function Workspace() {
  const { orgId, orgRole, sessionClaims } = await auth.protect();
  if (!orgId) redirect("/choose-organization");
  const organizationName =
    typeof sessionClaims.org_name === "string" && sessionClaims.org_name.trim()
      ? sessionClaims.org_name.trim()
      : null;
  const { analyses, hasMore } = await getDashboardAnalyses();

  return (
    <main className="workspace">
      <div className="workspace-breadcrumb" aria-label="Page location">
        <span>Workspace</span><span aria-hidden="true">/</span><span>Overview</span>
      </div>
      <div className="workspace-heading">
        <div>
          <h1>{organizationName ?? "Workspace"}</h1>
          <p className="workspace-description">Your team’s repository analyses, in one place.</p>
          <details className="organization-details">
            <summary>Organization ID</summary>
            <p className="organization-id">{orgId}</p>
          </details>
        </div>
        {orgRole === "org:admin" && (
          <InviteMembersButton>
            <button className="button invite-button">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="6" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.25" />
                <path d="M1.75 13v-1a4.25 4.25 0 0 1 8.5 0v1M13 5v5M10.5 7.5h5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
              Invite teammate
            </button>
          </InviteMembersButton>
        )}
      </div>
      <section className="analyses-panel" aria-labelledby="analyses-title">
        <div className="analyses-heading">
          <div className="analyses-heading-label">
            <h2 id="analyses-title">Repository analyses</h2>
            <span className="analysis-count">{hasMore ? "50+" : analyses.length}</span>
          </div>
          <span className="analyses-order">Latest first</span>
        </div>
        {analyses.length === 0 ? (
          <div className="analyses-empty">
            <svg className="empty-mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M5 8h9l3 4h10v14H5V8Z" stroke="currentColor" strokeWidth="1.25" />
              <path d="M12 19h8M16 15v8" stroke="currentColor" strokeWidth="1.25" />
            </svg>
            <h3>No analyses yet</h3>
            <p>This organization hasn’t run a repository analysis.</p>
          </div>
        ) : (
          <div className="analyses-scroll">
            <table className="analyses-table">
              <caption className="sr-only">Repository analyses for the current organization</caption>
              <thead>
                <tr><th scope="col">Repository</th><th scope="col">Run</th><th scope="col">State</th><th scope="col" className="date-heading">Created <span className="timezone">UTC</span></th></tr>
              </thead>
              <tbody>
                {analyses.map((analysis) => (
                  <tr key={analysis.id}>
                    <td className="repository-cell">
                      <div className="repository-heading">
                        <svg className="repository-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 2.25h9.5v11H4.75A1.75 1.75 0 0 1 3 11.5V2.25Z" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M3 10h9.5M6 4.5h4M6 6.75h2.5" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                        {analysis.project ? (
                          <a className="repository-link" href={analysis.project.repository_url}>{analysis.project.name}</a>
                        ) : <span className="muted">Repository unavailable</span>}
                        {analysis.is_seed && <span className="seed-label">Seed</span>}
                      </div>
                      {analysis.error_message && <p className="analysis-note">{analysis.error_message}</p>}
                    </td>
                    <td className="analysis-run"><span title={analysis.id}>{analysis.id.slice(0, 8)}</span></td>
                    <td>
                      <span className="analysis-state" data-state={analysis.status}>
                        <span className="state-symbol" aria-hidden="true">
                          {analysis.status === "completed" ? "✓" : analysis.status === "failed" ? "×" : analysis.status === "running" ? "◐" : "·"}
                        </span>
                        {analysis.status}
                      </span>
                    </td>
                    <td className="analysis-date"><time dateTime={analysis.created_at}>{dateFormat.format(new Date(analysis.created_at))}</time></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {analyses.some((analysis) => analysis.is_seed) && (
          <p className="analyses-footnote"><span className="seed-label">Seed</span> Sample runs for this workspace. These repositories have not been analyzed.</p>
        )}
        {hasMore && <p className="analyses-footnote">Showing the 50 most recent analyses.</p>}
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
