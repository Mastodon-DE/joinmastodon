<script setup lang="ts"></script>
<template>
	<HeadersNavbar />

	<div class="mx-auto max-w-7xl pb-24 sm:pb-32 px-6 lg:px-8">
		<div class="py-24 sm:py-32">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2
					class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					{{ $t("donationheading") }}
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					{{ $t("donationtext") }}
				</p>
			</div>
		</div>

		<div>
			<iframe
				src="https://mastodon.de/@MastodonDE/111080741382091815"
				class="mastodon-embed mr-auto w-full max-w-[40rem] rounded-2xl aspect-[1/1]"
				allowfullscreen></iframe>
		</div>
		<Component
			:is="'script'"
			src="https://mastodon.de/embed.js"
			async="async"></Component>
	</div>
</template>
