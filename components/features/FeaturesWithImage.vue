<script setup lang="ts">
const features = [
	{
		name: "feature1Title",
		description: "feature1SubText",
		icon: "tabler:hammer",
	},
	{
		name: "feature2Title",
		description: "feature2SubText",
		icon: "tabler:timeline",
	},
	{
		name: "feature3Title",
		description: "feature3SubText",
		icon: "tabler:road",
	},
];
</script>

<template>
	<div
		class="relative isolate overflow-hidden bg-dark-950 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
			<div class="lg:row-start-2 lg:max-w-md">
				<h2
					class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{{ $t("featuresTitle") }}
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					{{ $t("featuresSubText") }}
				</p>
			</div>
			<img
				src="/images/screenshots/desktop1-resized.webp"
				alt="Product screenshot"
				class="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
				width="2432"
				height="1442" />
			<div
				class="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
				<dl
					class="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
					<div
						v-for="feature in features"
						:key="feature.name"
						class="relative">
						<dt class="ml-9 inline-block font-semibold text-white">
							<Icon
								:name="feature.icon"
								class="absolute left-1 top-1 h-5 w-5 text-red-500"
								aria-hidden="true" />
							{{ $t(feature.name) }}
						</dt>
						{{ " " }}
						<dd class="inline">
							{{ $t(feature.description) }}
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<div
			class="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
			aria-hidden="true">
			<div
				class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-rose-400 to-red-700 opacity-25"
				style="
					clip-path: polygon(
						74.1% 44.1%,
						100% 61.6%,
						97.5% 26.9%,
						85.5% 0.1%,
						80.7% 2%,
						72.5% 32.5%,
						60.2% 62.4%,
						52.4% 68.1%,
						47.5% 58.3%,
						45.2% 34.5%,
						27.5% 76.7%,
						0.1% 64.9%,
						17.9% 100%,
						27.6% 76.8%,
						76.1% 97.7%,
						74.1% 44.1%
					);
				" />
		</div>
	</div>
</template>
