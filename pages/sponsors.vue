<script setup lang="ts">
const sponsors = [
	{
		name: "Banana.com",
		imageUrl: "/images/sponsors/banana.svg",
		href: "https://banana.com",
		description: "Banana.com is a company that sells bananas.",
	},
];
</script>
<template>
	<HeadersNavbar />

	<div class="mx-auto max-w-7xl pb-24 sm:pb-32 px-6 lg:px-8">
		<div class="py-24 sm:py-32">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2
					class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Donate to us
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					You make Mastodon.de possible. We wouldn't be here without
					your generous contributions!
				</p>
			</div>
		</div>
	</div>
</template>
