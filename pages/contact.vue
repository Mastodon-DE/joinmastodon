<script setup lang="ts">
const socials = [
	{
		name: "Mastodon",
		href: "https://mastodon.de/@UdenAI",
		icon: "tabler:brand-mastodon",
		description:
			"Mastodon.de is a free and open source social network server based on ActivityPub.",
	},
	{
		name: "GitHub",
		href: "https://github.com/uden-AI/",
		icon: "tabler:brand-github",
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/@Mastodon_DE",
		icon: "tabler:brand-youtube",
	},
	{
		name: "Signal",
		href: "https://signal.group/#CjQKIFMct-WMIEFeKGHvSBUwi4geZr_cXltR1NnY88vP9kdGEhAr6CRNfqONvZB_kngJmLRw",
		icon: "tabler:message-circle",
	},
	{
		name: "Telegram",
		href: "https://t.me/mastodon_de",
		icon: "tabler:brand-telegram",
	},
	{
		name: "Twitch",
		href: "https://www.twitch.tv/Mastodon_DE",
		icon: "tabler:brand-twitch",
	},
	{
		name: "E-Main",
		href: "mailto:info@mastodon.de",
		icon: "tabler:mail",
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
					Contact
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					add text here
				</p>

				<ul class="flex flex-col gap-4 mt-15">
					<li v-for="social of socials" :key="social.name">
						<a
							:href="social.href"
							class="flex gap-2 flex-col max-w-sm group">
							<div class="flex gap-3 items-center">
								<Icon
									:name="social.icon"
									class="w-6 h-6 text-gray-300" />
								<span
									class="font-semibold text-gray-200 group-hover:underline"
									>{{ social.name }}</span
								>
							</div>
							<div class="text-gray-300 ml-9">
								{{ social.description }}
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
