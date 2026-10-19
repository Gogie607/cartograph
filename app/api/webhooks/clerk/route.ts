import { verifyWebhook } from "@clerk/nextjs/webhooks";
import type { NextRequest } from "next/server";
import { organizationSyncConfig } from "@/utils/organizations/config";
import { deleteOrganization, syncOrganization } from "@/utils/organizations/sync";

export async function POST(request: NextRequest) {
  let event;
  try {
    event = await verifyWebhook(request, {
      signingSecret: organizationSyncConfig.signingSecret,
    });
  } catch {
    return new Response("Invalid webhook signature", { status: 400 });
  }

  try {
    switch (event.type) {
      case "organization.created":
      case "organization.updated":
        await syncOrganization(event.data);
        break;
      case "organization.deleted":
        if (!event.data.id) {
          return new Response("Missing organization ID", { status: 400 });
        }
        await deleteOrganization(event.data.id);
        break;
    }
  } catch (error) {
    console.error("Clerk organization webhook failed", error);
    // Acknowledge only committed writes so Clerk retries database failures.
    return new Response("Organization sync failed", { status: 500 });
  }

  return new Response("OK");
}
