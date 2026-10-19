"use client";

export default function WorkspaceError({ reset }: { reset: () => void }) {
  return (
    <main className="workspace">
      <section className="workspace-panel" role="alert">
        <h1>Could not load the workspace</h1>
        <p>The analysis list could not be read. Try again; if it keeps failing, check the server logs and database configuration.</p>
        <button className="button" onClick={reset}>Try again</button>
      </section>
    </main>
  );
}
