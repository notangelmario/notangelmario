import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
	theme: {
		extend: {
			colors: {
				purple: "#d4cafa",
				dark: "#212121",
				darkish: "#343434"
			},
			borderRadius: {
				DEFAULT: "2.5rem",
			},
			container: {
				center: true,
			},
			screens: {
				"betterhover": { "raw": "(hover: hover)" },
			},
		},
	},
} as Options;
  