import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },

  // Force-enable Nitro with cloudflare-module preset for Cloudflare Workers deploy.
  nitro: {
    preset: "cloudflare-module",
  },

  // Explicit plugins array so Wrangler's setup can detect / modify the config.
  plugins: [],
});
