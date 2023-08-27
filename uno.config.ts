import {
	defineConfig,
	presetUno,
	presetTypography,
	presetWebFonts,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetUno(),
		presetTypography({
			cssExtend: {
				"h1,h2,h3,h4,h5.h6": {
					"font-family": "'Poppins'",
				},
			},
		}),
		presetWebFonts(),
		presetForms(),
	],
	theme: {
		colors: {
			gray: {
				50: "#f7f7f8",
				100: "#ececf1",
				200: "#d9d9e3",
				300: "#c5c5d2",
				400: "#acacbe",
				500: "#8e8ea0",
				600: "#565869",
				700: "#40414f",
				800: "#343541",
				900: "#202123",
				950: "#050509",
			},
		},
	},
});
