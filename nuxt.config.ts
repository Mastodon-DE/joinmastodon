// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@unocss/nuxt", "nuxt-headlessui", "nuxt-icon", "@vueuse/nuxt"],
	extends: ["nuxt-seo-kit"],
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
			siteName: "Mastodon.de",
			siteUrl: "https://join-mastodon.de",
			siteDescription:
				"Join Mastodon.de, a free and open-source social network.",
			language: "en-US", // prefer more explicit language codes like `en-AU` over `en`,
			titleSeparator: "·",
			trailingSlash: true,
		},
	},
});
