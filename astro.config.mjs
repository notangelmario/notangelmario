import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000
	},
	security: {
		checkOrigin: true
	},
	output: "hybrid",
	adapter: cloudflare({
		imageService: "compile"
	}),
	integrations: [tailwind({
		applyBaseStyles: false
	}), svelte()]
});
