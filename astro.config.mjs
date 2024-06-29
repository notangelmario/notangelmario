import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  security: {
    checkOrigin: true
  },
  site: "https://notangelmario.dev",
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind({
    applyBaseStyles: false
  }), svelte()]
});
