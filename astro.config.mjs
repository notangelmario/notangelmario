import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000
	},
	output: "server",
	adapter: cloudflare(),
	integrations: [tailwind({
		applyBaseStyles: false
	}), svelte()]
});
