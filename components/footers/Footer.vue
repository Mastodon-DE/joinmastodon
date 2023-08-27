<script setup lang="ts">
const footerNavigation = {
	solutions: [
		{ name: "Mastodon.de", href: "#" },
		{ name: "AIP", href: "#" },
	],
	support: [{ name: "Contact", href: "#" }],
	company: [{ name: "Website", href: "#" }],
	legal: [
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "#",
			icon: "tabler:brand-facebook",
		},
		{
			name: "Instagram",
			href: "#",
			icon: "tabler:brand-instagram",
		},
		{
			name: "Twitter",
			href: "#",
			icon: "tabler:brand-twitter",
		},
		{
			name: "GitHub",
			href: "#",
			icon: "tabler:brand-github",
		},
		{
			name: "YouTube",
			href: "#",
			icon: "tabler:brand-youtube",
		},
	],
};
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
						src="/images/icons/logo.svg"
						alt="Company name" />
					<p class="text-sm leading-6 text-gray-300">
						Constructing sites, apps and communities through open
						standards
					</p>
					<div class="flex space-x-6">
						<a
							v-for="item in footerNavigation.social"
							:key="item.name"
							:href="item.href"
							class="text-gray-500 hover:text-gray-400">
							<span class="sr-only">{{ item.name }}</span>
							<Icon
								:name="item.icon"
								class="h-6 w-6"
								aria-hidden="true" />
						</a>
					</div>
				</div>
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3
								class="text-sm font-semibold leading-6 text-white">
								Services
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
						<div class="mt-10 md:mt-0">
							<h3
								class="text-sm font-semibold leading-6 text-white">
								Support
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
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3
								class="text-sm font-semibold leading-6 text-white">
								Company
							</h3>
							<ul role="list" class="mt-6 space-y-4">
								<li
									v-for="item in footerNavigation.company"
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
								Legal
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
			<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
				<p class="text-xs leading-5 text-gray-400">
					&copy; {{ new Date().getFullYear() }} Uden AI. Licensed
					under GPLv3
				</p>
			</div>
		</div>
	</footer>
</template>
