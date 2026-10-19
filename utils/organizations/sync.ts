import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/utils/supabase/database.types";
import { supabaseConfig } from "@/utils/supabase/config";
import { organizationSyncConfig } from "./config";

// Privileged access is confined to verified identity writes, never workspace reads.
const database = createClient<Database>(
  supabaseConfig.url,
  organizationSyncConfig.supabaseSecretKey,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

export async function syncOrganization(organization: {
  id: string;
  name: string;
  created_at: number;
}) {
  const { error } = await database.from("organizations").upsert({
    id: organization.id,
    name: organization.name,
    created_at: new Date(organization.created_at).toISOString(),
  }, { onConflict: "id" });
  if (error) throw new Error(`Organization sync failed: ${error.message}`);
}

export async function deleteOrganization(id: string) {
  // Foreign keys own the cascade. Repeated deliveries are harmless.
  const { error } = await database.from("organizations").delete().eq("id", id);
  if (error) throw new Error(`Organization deletion failed: ${error.message}`);
}
