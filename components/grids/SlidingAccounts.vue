<script setup lang="ts">
const accounts = [
		{
		name: "Tagesschau",
		avatarUrl:
			"https://storage.googleapis.com/mastodon-prod-bucket/accounts/avatars/110/316/234/024/575/088/original/44d05faa621f371b.png",
		handle: "@tagesschau@ard.social",
		href: "https://ard.social/@tagesschau",
	},
	{
		name: "Bundestag",
		avatarUrl:
			"https://social.bund.de/system/accounts/avatars/110/784/325/911/431/821/original/86e6304bdb9b26a7.png",
		handle: "@bundestag@social.bund.de",
		href: "https://social.bund.de/@bundestag",
	},
	{
		name: "Rust",
		avatarUrl:
			"https://cdn.masto.host/socialrustlangorg/accounts/avatars/111/250/853/473/809/020/original/e761c85205588b37.png",
		handle: "@rust@social.rust-lang.org",
		href: "https://social.rust-lang.org/@rust",
	},
	{
		name: "NixOS",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/107/829/824/358/955/190/original/dc376d16f7077b2a.png",
		handle: "@nixos_org@chaos.social",
		href: "https://chaos.social/@nixos_org",
	},
	{
		name: "Correctiv",
		avatarUrl:
			"https://usercontent.correctiv.social/accounts/avatars/109/404/977/223/540/217/original/b8757bf832989e61.png",
		handle: "@correctiv_org@correctiv.social",
		href: "https://correctiv.social/@correctiv_org",
	},
	{
		name: "Frag den Staat",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/000/106/976/original/2a6d76fa8906e3bf.png",
		handle: "@fragdenstaat@chaos.social",
		href: "https://chaos.social/@fragdenstaat",
	},
	{
		name: "Auschwitz Memorial",
		avatarUrl:
			"https://s3.eu-central-2.wasabisys.com/mastodonworld/accounts/avatars/109/362/825/494/156/334/original/03ae37dcfbf94e56.jpg",
		handle: "@auschwitzmuseum@mastodon.world",
		href: "https://mastodon.world/@auschwitzmuseum",
	},
	{
		name: "Volker Quaschning",
		avatarUrl:
			"https://files.mastodon.green/accounts/avatars/109/261/637/888/939/055/original/6ce3bea697fbe61a.jpg",
		handle: "@VQuaschning@mastodon.green",
		href: "https://mastodon.green/@VQuaschning",
	},
	{
		name: "Robert McNees",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/000/010/908/original/a92bd0fffe57a93f.jpeg",
		handle: "@mcnees@mastodon.social",
		href: "https://mastodon.social/@mcnees",
	},
	{
		name: "Technology Connections",
		avatarUrl:
			"https://media.mas.to/masto-public/accounts/avatars/109/322/052/660/944/600/original/aae3fb7490d08c57.jpg",
		handle: "@TechConnectify@mas.to",
		href: "https://mas.to/@TechConnectify",
	},
	{
		name: "VCD",
		avatarUrl:
			"https://media.mstdn.social/accounts/avatars/109/710/708/034/675/243/original/47eea147514dc63d.jpg",
		handle: "@VCDeV@mstdn.social",
		href: "https://mstdn.social/@VCDeV",
	},
	{
		name: "Jeff Geerling",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/109/434/496/883/816/897/original/d8a616764f9ac860.jpg",
		handle: "@geerlingguy@mastodon.social",
		href: "https://mastodon.social/@geerlingguy",
	},
	{
		name: "Netzpolitik.org",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/000/016/863/original/1658c25e98d1e0d0.png",
		handle: "@netzpolitik_feed@chaos.social",
		href: "https://chaos.social/@netzpolitik_feed",
	},
	{
		name: "Universität Jena",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/001/090/353/original/1ea55d6205ba806c.jpg",
		handle: "@unijena@mastodon.social",
		href: "https://mastodon.social/@unijena",
	},
	{
		name: "Edeka Peper",
		avatarUrl:
			"https://media.mastodon.de/accounts/avatars/111/113/824/357/680/569/original/2eb794e308182892.png",
		handle: "@EDEKA_Peper",
		href: "https://mastodon.de/@EDEKA_Peper",
	},
	{
		name: "Eichkat3er",
		avatarUrl:
			"https://hessen.social/system/accounts/avatars/107/563/777/355/832/623/original/d9700cebf275c7c0.png",
		handle: "@eichkat3r@hessen.social",
		href: "https://hessen.social/@eichkat3r",
	},
];
</script>

<template>
	<div
		id="accounts"
		class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto flex-wrap px-4 md:px-6">
		<NuxtLink
			v-for="person in accounts"
			:key="person.href"
			:to="person.href"
			class="rounded items-center w-full bg-dark-400 ring-dark-200 ring-1 duration-200 hover:ring-2 hover:ring-red-500 flex flex-row p-2 gap-2">
			<div
				class="h-15 w-15 rounded overflow-hidden flex items-center justify-center shrink-0">
				<img
					:src="person.avatarUrl"
					class="h-full w-full object-cover" />
			</div>
			<div
				class="flex flex-col gap-2 justify-center text-sm text-left max-w-50 text-ellipsis pr-2">
				<h3 class="font-semibold text-gray-50">
					{{ person.name }}
				</h3>
				<p class="text-gray-300 overflow-hidden text-ellipsis">
					{{ person.handle }}
				</p>
			</div>
		</NuxtLink>
	</div>
</template>
