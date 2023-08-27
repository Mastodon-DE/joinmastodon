// https://nuxt.com/docs/api/configuration/nuxt-config
import { nodePolyfills } from "vite-plugin-node-polyfills";
import "reflect-metadata";

export default defineNuxtConfig({
	modules: [
		"@nuxtjs/robots",
		"@unocss/nuxt",
		"nuxt-headlessui",
		"nuxt-icon",
		"@vueuse/nuxt",
	],
	app: {
		head: {
			link: [
				{
					rel: "icon",
					href: "/favicon.png",
					type: "image/png",
				},
			],
			htmlAttrs: { lang: "en-us" },
		},
	},
	ssr: false,
	nitro: {
		compressPublicAssets: true,
		routeRules: {
			"/_nuxt/**": {
				headers: {
					"cache-control": `public,max-age=${
						60 * 60 * 24 * 365
					},s-maxage=${60 * 60 * 24 * 365}`,
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			siteName: "",
			siteDescription: "",
			language: "en-US", // prefer more explicit language codes like `en-AU` over `en`,
			titleSeparator: "·",
		},
	},
});
