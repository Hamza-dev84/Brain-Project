import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Self-hosted build config (no platform-specific wrappers).
//
//   npm run build              -> .output/  (Node server bundle)
//   node .output/server/index.mjs
//
// The Nitro preset targets a plain Node server by default. Override it with
// NITRO_PRESET (e.g. "bun", "vercel", "cloudflare-module").
//
// Inside the Lovable editor/preview sandbox the build must still emit the
// Cloudflare worker bundle it deploys from (dist/), so that case is detected
// automatically. It has no effect on your own server.
const isLovableSandbox = Boolean(process.env["LOVABLE_SANDBOX"] || process.env["LOVABLE"]);

const nitroOptions = isLovableSandbox
  ? {
      preset: "cloudflare-module",
      output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
      cloudflare: { nodeCompat: true, deployConfig: true },
    }
  : { preset: process.env["NITRO_PRESET"] || "node-server" };

// Editor-sandbox only: workers with a compatibility_date on/after 2026-08-04
// enable nodejs_compat implicitly, and repeating the flag is rejected.
const stripRedundantNodejsCompatFlag = () => ({
  name: "strip-redundant-nodejs-compat",
  apply: "build" as const,
  buildApp: {
    order: "post" as const,
    handler: async () => {
      const { readFile, writeFile } = await import("node:fs/promises");
      const path = "dist/server/wrangler.json";
      let config: Record<string, unknown>;
      try {
        config = JSON.parse(await readFile(path, "utf8"));
      } catch {
        return;
      }
      const date = config["compatibility_date"];
      const flags = config["compatibility_flags"];
      if (typeof date !== "string" || date < "2026-08-04" || !Array.isArray(flags)) return;
      const next = flags.filter((flag) => flag !== "nodejs_compat");
      if (next.length === flags.length) return;
      await writeFile(path, JSON.stringify({ ...config, compatibility_flags: next }, null, 2));
    },
  },
});

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Route the SSR entry through src/server.ts (our error-page wrapper).
      server: { entry: "server" },
    }),
    viteReact(),
    nitro(nitroOptions),
    ...(isLovableSandbox ? [stripRedundantNodejsCompatFlag()] : []),
  ],



  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  server: {
    host: true,
    port: Number(process.env["PORT"] ?? 8080),
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: Number(process.env["PORT"] ?? 8080),
  },
});
