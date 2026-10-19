import type { NextConfig } from "next";
import "./utils/supabase/config";
import "./utils/clerk/config";
import "./utils/organizations/config";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Preserve Next's CSS Module handling for component stylesheets.
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
