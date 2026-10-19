# Phase 2 database

The tracked migration creates eight data tables plus `organizations`. Organization IDs
are the original Clerk text IDs. Each data table references that ID with `ON DELETE
CASCADE`; composite foreign keys also keep related rows in the same organization and
analysis. All nine tables enable RLS and expose only SELECT to authenticated sessions.
The second migration tracks the existing auto-RLS event trigger, makes failure abort
table creation, and revokes client execution of its implementation function.
Policies read Clerk v2 `o.id`, with support for the older `org_id` claim. Anonymous
requests have no table grants.

Apply migrations using the Supabase migration workflow. The first migration was also
applied to the connected Cartograph project. The Supabase CLI is not installed in
this workspace; no package was installed to run it.

Existing Clerk organizations GogAi and GogeCode were backfilled using their actual
IDs and creation timestamps through a one-time trusted server operation. Organization
IDs and credentials are not baked into the migration. `seed.sql` adds labeled dashboard
fixtures to the first two organization rows, and can safely be rerun. It does not seed
parsed files, edges, routes, or AI output. Other teams retain an empty dashboard.

Run `checks/phase-02.sql` through a trusted SQL connection to verify all nine RLS
settings and policies, token-based isolation on every table, missing-organization
denial, cross-organization foreign key rejection, and cascading deletion. Its fixtures
are always rolled back. A SQL error must be treated as a failed check.

Clerk must be configured as a trusted third-party auth provider in Supabase, and its
session tokens must contain `role: authenticated`. The app uses the publishable key
and the current Clerk session token for every dashboard query. It never uses privileged
credentials for reads. The dashboard shows at most 50 recent rows, with an explicit
notice when more exist, and does not poll.

Clerk lifecycle sync uses `POST /api/webhooks/clerk`. Configure that endpoint for
`organization.created`, `organization.updated`, and `organization.deleted`, with
server-only `SUPABASE_SECRET_KEY` and `CLERK_WEBHOOK_SIGNING_SECRET` in `.env.local`.
Missing credentials fail at startup. Each delivery is signature-verified before
writing; database failures return 500 so Clerk retries. Creates and updates upsert
the parent row, and deletes remove it with all dependent data through foreign keys.
Repeated upserts and deletes are safe. Webhook delivery is asynchronous: a new team
can show its empty dashboard before its database organization row arrives.

For local development, keep the app and Clerk relay running:

```bash
npx clerk@latest webhooks listen --forward-to http://localhost:3000/api/webhooks/clerk
```

Use the printed relay URL exactly as the Clerk endpoint URL. Its signing secret goes
in `.env.local`; restart the app after changing it. Keep the relay token if you need
the same URL after restarting the relay. Browser checks remain manual.

With a local app server on port 3102, the terminal integration check is:

```bash
node --env-file=.env.local scripts/check-organization-webhook.mjs http://localhost:3102
```

It sends signed fixture events directly to the handler, verifies database writes and
signature rejection, and removes its temporary organization even if a check fails.
It does not test the external Clerk relay or replace the manual browser checks.
