<script setup lang="ts">
const footerNavigation = {
	solutions: [{ name: "Mastodon.de", href: "#" }],
	support: [{ name: "Contact", href: "#" }],
	legal: [
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
	social: [
		{
			name: "Mastodon",
			href: "https://mastodon.de/@MastodonDE",
			icon: "tabler:brand-mastodon",
		},
		{
			name: "GitHub",
			href: "https://github.com/Mastodon-DE/",
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
			name: "E-Mail",
			href: "mailto:info@mastodon.de",
			icon: "tabler:mail",
		},
	],
};

const showBankInfo = ref(false);
</script>

<template>
	<footer class="bg-dark-400" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div
			class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<div class="space-y-8">
					<img
						class="h-7"
						src="/images/icons/uden-logo.svg"
						alt="Company name" />
					<p class="text-sm leading-6 text-gray-300">
						{{ $t("footertext") }}
					</p>
					<div class="flex space-x-6">
						<a
							v-for="item in footerNavigation.social"
							:key="item.name"
							:href="item.href"
							class="text-gray-500 hover:text-gray-400">
							<span class="sr-only">{{ item.name }}</span>
							<iconify-icon
								width="unset"
								:icon="item.icon"
								class="size-6"
								aria-hidden="true" />
						</a>
					</div>
				</div>
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="md:grid md:grid-cols-2 md:gap-8 ml-auto">
						<div>
							<h3
								class="text-sm font-semibold leading-6 text-white">
								{{ $t("footer1") }}
							</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li
									v-for="item in footerNavigation.solutions"
									:key="item.name">
									<a
										:href="item.href"
										class="text-sm leading-6 text-gray-300 hover:text-white"
										>{{ item.name }}</a
									>
								</li>
							</ul>
						</div>
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div class="mt-10 md:mt-0">
							<h3
								class="text-sm font-semibold leading-6 text-white">
								{{ $t("footer2") }}
							</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li
									v-for="item in footerNavigation.support"
									:key="item.name">
									<a
										:href="item.href"
										class="text-sm leading-6 text-gray-300 hover:text-white"
										>{{ item.name }}</a
									>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3
								class="text-sm font-semibold leading-6 text-white">
								{{ $t("footer3") }}
							</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li
									v-for="item in footerNavigation.legal"
									:key="item.name">
									<a
										:href="item.href"
										class="text-sm leading-6 text-gray-300 hover:text-white"
										>{{ item.name }}</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				id="sponsors"
				class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex lg:flex-row flex-col gap-4">
				<p class="text-xs leading-5 text-gray-400 mr-auto">
					&copy; {{ new Date().getFullYear() }} Uden AI -
					<a href="https://github.com/Mastodon-DE/joinmastodon"
						>Open Source</a
					>
				</p>
				<a
					href="https://liberapay.com/MastodonDE/donate"
					class="bg-yellow-500 text-black flex flex-row items-center px-2 py-1 rounded font-semibold gap-3 text-sm">
					<iconify-icon
						width="unset"
						icon="simple-icons:liberapay"
						class="size-4" />
					LiberaPay
				</a>
				<a
					href="https://patreon.com/MastodonDE"
					class="bg-rose-500 text-black flex flex-row items-center px-2 py-1 rounded font-semibold gap-3 text-sm">
					<iconify-icon
						width="unset"
						icon="simple-icons:patreon"
						class="size-4" />
					Patreon
				</a>
				<a
					href="https://ko-fi.com/mastodonde/"
					class="bg-green-500 text-black flex flex-row items-center px-2 py-1 rounded font-semibold gap-3 text-sm">
					<iconify-icon
						width="unset"
						icon="cib:ko-fi"
						class="size-4" />
					Ko-Fi
				</a>
				<form
					action="https://www.paypal.com/donate"
					method="post"
					target="_top">
					<button
						type="submit"
						class="!bg-blue-500 text-black flex flex-row items-center px-2 py-1 rounded font-semibold gap-3 text-sm">
						<iconify-icon
							width="unset"
							icon="ic:baseline-paypal"
							class="size-4" />
						PayPal
					</button>
					<input
						type="hidden"
						name="hosted_button_id"
						value="7CZ4CXZ2L32R8" />
				</form>
				<button
					class="bg-orange-500 text-black flex flex-row items-center px-2 py-1 rounded font-semibold gap-3 text-sm"
					@click="showBankInfo = !showBankInfo">
					<iconify-icon
						width="unset"
						icon="tabler:credit-card"
						class="size-4" />
					IBAN
				</button>
			</div>
		</div>
		<div
			:class="[
				'w-full prose mx-auto max-w-7xl prose-invert prose-white text-center grid duration-200',
				showBankInfo
					? '[grid-template-rows:min-content_1fr]'
					: '[grid-template-rows:min-content_0fr]',
			]">
			<div></div>
			<div
				:class="[
					'min-h-0 px-6 lg:px-8 py-8 overflow-hidden',
					!showBankInfo && 'hidden',
				]">
				<strong>IBAN:</strong> DE36283500000145760443<br />
				<strong>BIC:</strong> BRLADE21ANO<br />
				<strong>Account holder:</strong> Uden UG
				(haftungsbeschraenkt)<br />
				Set your Memo / Reference as “Donation for mastodon.de”
			</div>
		</div>
	</footer>
</template>
