import "server-only";

import { auth } from "@clerk/nextjs/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { supabaseConfig } from "./config";
import type { Database } from "./database.types";

export function createClient() {
  return createSupabaseClient<Database>(
    supabaseConfig.url,
    supabaseConfig.publishableKey,
    {
      async accessToken() {
        const { orgId, getToken } = await auth.protect();
        if (!orgId) throw new Error("An active organization is required for database access.");
        const token = await getToken();
        if (!token) throw new Error("A Clerk session token is required for database access.");
        return token;
      },
    },
  );
}
