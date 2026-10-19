import "server-only";

import { createClient } from "./server";

export async function getDashboardAnalyses() {
  // The token and RLS select the organization. Never add an organization filter here.
  const { data, error } = await createClient()
    .from("analyses")
    .select("id, status, is_seed, error_message, created_at, project:projects!analyses_organization_id_project_id_fkey(name, repository_url)")
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .limit(51);

  if (error) throw new Error(`Could not load analyses: ${error.message}`);

  return { analyses: data.slice(0, 50), hasMore: data.length > 50 };
}
