import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "class",
	theme: {
		extend: {
			colors: {
				purple: "#d4cafa",
				red: "#ff6961",
				dark: "#212121",
			},
			borderRadius: {
				DEFAULT: "1.5rem",
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
  