<script setup lang="ts">
const accounts = [
	{
		name: "ZDF Magazin Royale",
		avatarUrl:
			"https://edi.social/system/accounts/avatars/108/242/597/965/460/626/original/d6f058f7ac6a87ad.png",
		handle: "@zdfmagazin@edi.social",
		href: "https://edi.social/@zdfmagazin",
	},	
	{
		name: "Jan Böhmermann",
		avatarUrl:
			"https://edi.social/system/accounts/avatars/108/236/804/944/204/154/original/ceade2df0c9129a6.jpg",
		handle: "@janboehm@edi.social",
		href: "https://edi.social/@janboehm",
	},
	{
		name: "Bundesregierung",
		avatarUrl:	
			"https://social.bund.de/system/accounts/avatars/109/563/508/325/494/356/original/7ae12ac7be042b20.png",
		handle: "@Bundesregierung@social.bund.de",
		href: "https://social.bund.de/@Bundesregierung",
	},
	{
		name: "Volksverpetzer",
		avatarUrl:
			"https://digitalcourage.social/system/accounts/avatars/106/597/008/317/323/897/original/1b72982d88341037.png",
		handle: "@Volksverpetzer@digitalcourage.social",
		href: "https://digitalcourage.social/@Volksverpetzer",
	},
	{
		name: "ZDF",
		avatarUrl:
			"https://zdf.social/system/accounts/avatars/109/438/993/676/569/361/original/4db0a964d2530292.png",
		handle: "@ZDF@zdf.social",
		href: "https://zdf.social/@ZDF/",
	},
	{
		name: "Nico Semsrott",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/000/826/210/original/547d0613d7838fb8.jpg",
		handle: "@nicosemsrott@mastodon.social",
		href: "https://mastodon.social/@nicosemsrott",
	},
	{
		name: "European Commission",
		avatarUrl:
			"https://ec.social-network.europa.eu/system/accounts/avatars/112/444/733/147/411/609/original/0cc352fad0ead830.png",
		handle: "@EUCommission@ec.social-network.europa.eu",
		href: "https://ec.social-network.europa.eu/@EUCommission",
	},
	{
		name: "Frag den Staat",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/000/106/976/original/2a6d76fa8906e3bf.png",
		handle: "@fragdenstaat@chaos.social",
		href: "https://chaos.social/@fragdenstaat",
	},
	{
		name: "Tagesschau",
		avatarUrl:
			"https://storage.googleapis.com/mastodon-prod-bucket/accounts/avatars/110/316/234/024/575/088/original/44d05faa621f371b.png",
		handle: "@tagesschau@ard.social",
		href: "https://ard.social/@tagesschau",
	},
	{
		name: "Greta Thunberg",
		avatarUrl:
			"https://media.mastodon.nu/accounts/avatars/109/303/381/328/440/258/original/cae3e3f7a0006811.png",
		handle: "@gretathunberg@mastodon.nu",
		href: "https://mastodon.nu/@GretaThunberg",
	},
	{
		name: "Fridays for Future",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/000/284/705/original/bf2b5d45fa485e40.png",
		handle: "@fff@chaos.social",
		href: "https://chaos.social/@FFF",
	},
	{
		name: "LobbyControl",
		avatarUrl:
			"https://bewegung.social/system/accounts/avatars/109/397/987/788/227/436/original/49d9658e479783f9.jpg",
		handle: "@lobbycontrol@bewegung.social",
		href: "https://bewegung.social/@LobbyControl",
	},
	{
		name: "NDR",
		avatarUrl:
			"https://storage.googleapis.com/mastodon-prod-bucket/accounts/avatars/110/337/485/003/489/943/original/ecfdb4a36219ea9b.jpg",
		handle: "@NDR@ard.social",
		href: "https://ard.social/@NDR",
	},
	{
		name: "Ralph Ruthe",
		avatarUrl:
			"https://digitalcourage.social/system/cache/accounts/avatars/108/197/523/336/547/055/original/17ca96c79f57f9b5.png",
		handle: "@ralphruthe@troet.cafe",
		href: "https://troet.cafe/@ralphruthe",
	},
	{
		name: "VCD",
		avatarUrl:
			"https://media.mstdn.social/accounts/avatars/109/710/708/034/675/243/original/47eea147514dc63d.jpg",
		handle: "@VCDeV@mstdn.social",
		href: "https://mstdn.social/@VCDeV",
	},
	{
		name: "abgeordnetenwatch.de",
		avatarUrl:
			"https://bewegung.social/system/accounts/avatars/109/422/475/555/391/411/original/5b70e2ea44bcd001.jpg",
		handle: "@a_watch@bewegung.social",
		href: "https://bewegung.social/@a_watch",
	},
	{
		name: "nd.aktuell",
		avatarUrl:
			"https://media.troet.cafe/troet.cafe/accounts/avatars/109/308/806/095/501/890/original/3a37e9c791561f3e.png",
		handle: "@ndaktuell@troet.cafe",
		href: "https://troet.cafe/@ndaktuell/",
	},
	{
		name: "Volker Quaschning",
		avatarUrl:
			"https://files.mastodon.green/accounts/avatars/109/261/637/888/939/055/original/6ce3bea697fbe61a.jpg",
		handle: "@VQuaschning@mastodon.green",
		href: "https://mastodon.green/@VQuaschning",
	},
	{
		name: "Auschwitz Memorial",
		avatarUrl:
			"https://s3.eu-central-2.wasabisys.com/mastodonworld/accounts/avatars/109/362/825/494/156/334/original/03ae37dcfbf94e56.jpg",
		handle: "@auschwitzmuseum@mastodon.world",
		href: "https://mastodon.world/@auschwitzmuseum",
	},
	{
		name: "Netzpolitik.org",
		avatarUrl:
			"https://assets.chaos.social/accounts/avatars/000/016/863/original/1658c25e98d1e0d0.png",
		handle: "@netzpolitik_feed@chaos.social",
		href: "https://chaos.social/@netzpolitik_feed",
	},
	{
		name: "taz",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/108/197/206/903/840/287/original/89fc51b4504aa806.png",
		handle: "@tazgetroete@mastodon.social",
		href: "https://mastodon.social/@tazgetroete",
	},
	{
		name: "E L H O T Z O",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/108/194/513/323/477/977/original/5d1e2ca045b87ac5.jpg",
		handle: "@elhotzo@mastodon.social",
		href: "https://mastodon.social/@elhotzo",
	},
	{
		name: "Rosa-Luxemburg-Stiftung",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/108/764/954/339/910/263/original/189b5316441ead1c.png",
		handle: "@rosaluxstiftung@mastodon.social",
		href: "https://mastodon.social/@rosaluxstiftung/",
	},
	{
		name: "Correctiv",
		avatarUrl:
			"https://media.mastodon.de/cache/accounts/avatars/110/698/843/323/359/648/original/7d8f8d03e5c2be9a.png",
		handle: "@correctiv_org@correctiv.social",
		href: "https://correctiv.social/@correctiv_org",
	},
	{
		name: "Der Postillon",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/109/244/847/047/894/222/original/62e97f2ed68d047f.png",
		handle: "@derpostillon@mastodon.social",
		href: "https://mastodon.social/@derpostillon",
	},
	{
		name: "Krieg und Freitag",
		avatarUrl:
			"https://media.troet.cafe/troet.cafe/accounts/avatars/108/197/644/025/315/889/original/0052e590fa2aa803.gif",
		handle: "@kriegundfreitag@troet.cafe",
		href: "https://troet.cafe/@kriegundfreitag",
	},
	{
		name: "Wikipedia",
		avatarUrl:
			"https://cdn.masto.host/wikisworld/accounts/avatars/110/188/109/032/478/686/original/6e1a9c10ca787772.png",
		handle: "@wikipedia@wikis.world",
		href: "https://wikis.world/@Wikipedia",
	},
	{
		name: "Gewerkschaft ver.di",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/110/967/281/252/761/640/original/1de93e9e8fef683c.png",
		handle: "@wirsindverdi@mastodon.social",
		href: "https://mastodon.social/@wirsindverdi",
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
