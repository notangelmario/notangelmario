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
		themes: ["lofi", "black"],
		darkTheme: "black",
		logs: false
	}
}
