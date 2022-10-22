import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
	theme: {
		extend: {
			colors: {
				purple: "#d4cafa",
				dark: "#121212",
				darkish: "#212121"
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
  