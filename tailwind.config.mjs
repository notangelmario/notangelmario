/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: ['./src/**/*.{astro,html,md,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: ["retro", "coffee"],
		darkTheme: "coffee"
	}
}
