<script setup lang="ts">
import "./styles/index.css";
import "@unocss/reset/tailwind.css";

useSchemaOrg([
	defineOrganization({
		name: "Uden AI",
		logo: "/images/icons/logo.svg",
		sameAs: ["https://uden.ai"],
		address: {
			streetAddress: "Wirde Langen 8",
			addressLocality: "Norden",
			postalCode: "26506",
			addressCountry: "DE",
		},
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
