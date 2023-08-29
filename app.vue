<script setup lang="ts">
import "./styles/index.css";
import "@unocss/reset/tailwind.css";

const udenAiAddress = {
	streetAddress: "Wirde Langen 8",
	addressLocality: "Norden",
	postalCode: "26506",
	addressCountry: "DE",
};

useSchemaOrg([
	defineOrganization({
		name: "Uden AI",
		logo: "/images/icons/logo.svg",
		sameAs: ["https://uden.ai", "https://instagram.com/uden.ai"],
		address: udenAiAddress,
		contactPoint: {
			contactType: "customer support",
			telephone: "+4949319550634",
			email: "info@uden.ai",
			areaServed: "DE",
		},
	}),
	definePerson({
		name: "Erik Uden",
		url: "https://erikuden.com",
		image: "/images/people/erikuden.webp",
		sameAs: [
			"https://mastodon.de/@ErikUden",
			"https://instagram.com/erik.uden",
			"https://linkedin.com/in/erikuden",
		],
	}),
]);
</script>

<template>
	<OgImageScreenshot />
	<OgImageStatic />
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>
