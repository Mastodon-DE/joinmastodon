<script setup lang="ts">
import { NuxtError } from "nuxt/app";

defineProps<{
	error: NuxtError;
}>();
</script>

<template>
	<main
		class="w-full h-full !min-h-[100dvh] min-h-screen font-['Inter'] bg-dark-800">
		<HeadersNavbar />
		<Errors404 v-if="error.statusCode === 404" />
	</main>
</template>
