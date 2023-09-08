<script setup lang="ts">
const accounts = [
	{
		name: "Daily Dose of Kitty",
		avatarUrl:
			"https://mastodon.de/system/accounts/avatars/110/718/480/989/497/647/original/6829b8f69ba0cbd3.jpg",
		handle: "@KittyPictures",
		href: "https://mastodon.de/@KittyPictures",
	},
	{
		name: "E L H O T Z O",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/108/194/513/323/477/977/original/5d1e2ca045b87ac5.jpg",
		handle: "@elhotzo@mastodon.social",
		href: "https://mastodon.social/@elhotzo",
	},
	{
		name: "Jan Böhmermann 🤨",
		avatarUrl:
			"https://edi.social/system/accounts/avatars/108/236/804/944/204/154/original/ceade2df0c9129a6.jpg",
		handle: "@janboehm@edi.social",
		href: "https://edi.social/@janboehm",
	},
	{
		name: "Ralph Caspers",
		avatarUrl:
			"https://files.mastodon.social/accounts/avatars/000/449/624/original/6d1642100f473992.jpeg",
		handle: "@hyperjinx@mastodon.social",
		href: "https://mastodon.social/@hyperjinx",
	},
	{
		name: "Greta Thunberg",
		avatarUrl:
			"https://media.mastodon.nu/accounts/avatars/109/303/381/328/440/258/original/cae3e3f7a0006811.png",
		handle: "@gretathunberg@mastodon.nu",
		href: "https://mastodon.nu/@gretathunberg",
	},
	{
		name: "Amira Mohamed Ali",
		avatarUrl:
			"https://social.linksfraktion.de/system/accounts/avatars/108/243/911/069/247/630/original/31294ed973d4dc0b.jpeg",
		handle: "@amira_mohamed_ali@social.linksfraktion.de",
		href: "https://social.linksfraktion.de/@amira_mohamed_ali",
	},
	{
		name: "Dietmar Bartsch",
		avatarUrl:
			"https://social.linksfraktion.de/system/accounts/avatars/108/243/885/801/745/725/original/0a4a4bdfb9043772.jpeg",
		handle: "@dietmarbartsch@social.linksfraktion.de",
		href: "https://social.linksfraktion.de/@dietmarbartsch",
	},
	{
		name: "Gregor Gysi",
		avatarUrl:
			"https://social.linksfraktion.de/system/accounts/avatars/108/244/318/362/038/411/original/0412628757583163.jpeg",
		handle: "@gregorgysi@social.linksfraktion.de",
		href: "https://social.linksfraktion.de/@gregorgysi",
	},
];
</script>

<template>
	<div
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
