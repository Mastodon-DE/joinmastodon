import { readdirSync } from "node:fs";
import { join } from "node:path";

/*
 * Reads the content directory and returns an array of all the files in the directory and subdirectories.
 */
const getRouteRenderingPaths = () => {
	const contentDir = join(process.cwd(), "content");
	const paths: string[] = [];

	const readDir = (dir: string) => {
		const files = readdirSync(dir);
		for (const file of files) {
			const filePath = join(dir, file);
			if (file.endsWith(".md")) {
				paths.push(
					filePath.replace(contentDir, "/blog").replace(".md", "")
				);
			} else {
				readDir(filePath);
			}
		}
	};

	readDir(contentDir);

	return paths;
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"nuxt-headlessui",
		"@vueuse/nuxt",
		"@nuxtjs/seo",
		"@nuxtjs/i18n",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
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

	sitemap: {
		sources: [...getRouteRenderingPaths(), "/", "/privacy", "/contact"],
	},

	i18n: {
		vueI18n: "./i18n.config.ts",
		baseUrl: "https://join-mastodon.de",
		strategy: "prefix_and_default",
		defaultLocale: "de",
		trailingSlash: true,
		detectBrowserLanguage: {
			alwaysRedirect: true,
			fallbackLocale: "en",
			redirectOn: "root",
		},
		locales: [
			{
				code: "en",
				iso: "en-US",
			},
			{
				code: "de",
				iso: "de-DE",
			},
		],
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
		prerender: {
			failOnError: true,
		},
	},

	ogImage: {
		enabled: false,
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
	vue: {
		compilerOptions: {
			isCustomElement: tag => tag === "iconify-icon",
		},
	},
	compatibilityDate: "2024-07-19",
});
