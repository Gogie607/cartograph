"use client";

import {
  OrganizationList,
  RedirectToSignIn,
  RedirectToTasks,
  TaskChooseOrganization,
  useClerk,
  useSession,
} from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";

function PrepareOrganization() {
  const clerk = useClerk();
  const started = useRef(false);
  const [state, setState] = useState<"loading" | "choose" | "error">("loading");

  useEffect(() => {
    const user = clerk.user;
    const session = clerk.session;
    if (!user || !session || started.current) return;
    started.current = true;

    const prepare = async () => {
      if (clerk.session?.id !== session.id) return;
      if (clerk.session.lastActiveOrganizationId) {
        window.location.replace("/");
        return;
      }

      const memberships = await user.getOrganizationMemberships({ pageSize: 2 });
      if (clerk.session?.id !== session.id) return;
      if (memberships.total_count > 1) {
        setState("choose");
        return;
      }

      // Recheck membership inside the lock so concurrent tabs don't create duplicate teams.
      const organization = memberships.total_count === 0
        ? await clerk.createOrganization({ name: "My Organization" })
        : memberships.data[0]?.organization;
      if (!organization) throw new Error("Organization membership could not be read.");
      if (clerk.session?.id !== session.id) return;
      await clerk.setActive({ organization: organization.id });
      window.location.replace("/");
    };

    // Clerk's required-membership task doesn't run in optional-membership mode.
    const preparation = navigator.locks
      ? navigator.locks.request(`cartograph-onboarding:${user.id}`, prepare)
      : prepare();
    void preparation.catch(() => setState("error"));
  }, [clerk]);

  if (state === "choose") {
    return (
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/"
        afterCreateOrganizationUrl="/"
      />
    );
  }

  if (state === "error") {
    return (
      <div className="workspace-panel">
        <p role="alert">Could not prepare your organization. Please try again.</p>
        <button className="button" onClick={() => window.location.reload()}>Try again</button>
      </div>
    );
  }

  return <div className="auth-placeholder" role="status">Preparing your workspace…</div>;
}

export function OrganizationOnboarding() {
  const { isLoaded, session } = useSession();
  if (!isLoaded) {
    return <div className="auth-placeholder" role="status">Loading organizations…</div>;
  }
  if (!session) return <RedirectToSignIn />;
  if (session.currentTask?.key === "choose-organization") {
    return <TaskChooseOrganization redirectUrlComplete="/" />;
  }
  if (session.currentTask) return <RedirectToTasks />;
  return <PrepareOrganization key={session.id} />;
}
