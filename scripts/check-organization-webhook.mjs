import assert from "node:assert/strict";
import { createHmac, randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const origin = new URL(process.argv[2] ?? "http://localhost:3102");
assert.ok(["localhost", "127.0.0.1"].includes(origin.hostname), "Use a local app server for this check.");
const signingSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET?.trim();
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY?.trim();
assert.ok(signingSecret, "CLERK_WEBHOOK_SIGNING_SECRET is required.");
assert.ok(supabaseSecretKey, "SUPABASE_SECRET_KEY is required.");
assert.ok(process.env.NEXT_PUBLIC_SUPABASE_URL, "NEXT_PUBLIC_SUPABASE_URL is required.");

const database = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseSecretKey, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: {
    fetch: (input, options) => fetch(input, { ...options, signal: AbortSignal.timeout(10_000) }),
  },
});
const organizationId = `org_webhook_check_${randomUUID().replaceAll("-", "")}`;
const createdAt = Date.now();
let mayHaveCreatedOrganization = false;

async function deliver(type, name = "Webhook check", valid = true) {
  const body = JSON.stringify({
    type,
    object: "event",
    timestamp: Date.now(),
    data: { id: organizationId, object: "organization", name, created_at: createdAt },
  });
  const messageId = `msg_${randomUUID()}`;
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", Buffer.from(signingSecret.replace(/^whsec_/, ""), "base64"))
    .update(`${messageId}.${timestamp}.${body}`).digest("base64");
  const response = await fetch(new URL("/api/webhooks/clerk", origin), {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: {
      "content-type": "application/json",
      "svix-id": messageId,
      "svix-timestamp": timestamp,
      "svix-signature": valid ? `v1,${signature}` : "v1,aW52YWxpZA==",
    },
    body,
  });
  assert.equal(response.status, valid ? 200 : 400, `${type}: ${await response.text()}`);
}

async function readOrganization() {
  const { data, error } = await database.from("organizations").select("id, name")
    .eq("id", organizationId).maybeSingle();
  if (error) throw new Error(error.message);
  return data;
}

try {
  await deliver("organization.created", "Rejected signature", false);
  assert.equal(await readOrganization(), null, "Invalid signature wrote a row.");

  mayHaveCreatedOrganization = true;
  await deliver("organization.created");
  await deliver("organization.created");
  assert.equal((await readOrganization())?.name, "Webhook check", "Create/retry did not upsert one row.");

  await deliver("organization.updated", "Updated webhook check");
  assert.equal((await readOrganization())?.name, "Updated webhook check", "Update did not persist.");

  const { data: project, error: projectError } = await database.from("projects").insert({
    organization_id: organizationId,
    name: "Webhook cascade fixture",
    repository_url: "https://github.com/vercel/next.js",
  }).select("id").single();
  if (projectError) throw new Error(projectError.message);
  const { error: analysisError } = await database.from("analyses").insert({
    organization_id: organizationId, project_id: project.id, is_seed: true,
  });
  if (analysisError) throw new Error(analysisError.message);

  await deliver("organization.deleted");
  await deliver("organization.deleted");
  assert.equal(await readOrganization(), null, "Delete/retry left the organization row.");
  for (const table of ["projects", "analyses"]) {
    const { data, error } = await database.from(table).select("id")
      .eq("organization_id", organizationId).limit(1);
    if (error) throw new Error(error.message);
    assert.equal(data.length, 0, `Deletion did not cascade to ${table}.`);
  }
  console.log("Webhook check passed: invalid signature rejected; create, update, retries, and cascading delete verified.");
} finally {
  if (mayHaveCreatedOrganization) {
    const { error } = await database.from("organizations").delete().eq("id", organizationId);
    if (error) throw new Error(`Webhook fixture cleanup failed: ${error.message}`);
  }
}
