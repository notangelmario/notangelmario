import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: "media",
	theme: {
		extend: {
			colors: {
				primary: "#d4cafa",
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
  