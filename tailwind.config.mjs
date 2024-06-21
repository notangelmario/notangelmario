/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: ['./src/**/*.{astro,html,md,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: ["retro", "coffee"],
		darkTheme: "coffee",
		logs: false
	}
}
