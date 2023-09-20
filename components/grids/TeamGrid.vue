<script setup lang="ts">
const people = [
	{
		name: "Erik Uden",
		role: "teamMemberErikPosition",
		imageUrl: "/images/people/erikuden-resized.webp",
	},
	{
		name: "Rodirick",
		role: "teamMemberRodirikPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/696/726/121/965/579/original/b8f1e64fce0c91ba.png",
	},
	{
		name: "Nick",
		role: "teamMemberNickPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/697/359/471/395/422/original/3fe84c0d34658f35.png",
	},
	{
		name: "Simen",
		role: "teamMemberSimenPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/708/949/322/652/956/original/64fbdf0c11828601.png",
	},
	{
		name: "Ivan",
		role: "teamMemberIvanPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/696/744/280/479/098/original/c94c48832cb7b9af.png",
	},
	{
		name: "Emily",
		role: "teamMemberEmilyPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/696/739/299/965/692/original/4da2f06273a3e0ed.png",
	},
	{
		name: "Niklas",
		role: "teamMemberNiklasPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/961/284/696/885/054/original/30302bd5153ebb84.png",
	},
	{
		name: "Ebowski",
		role: "teamMemberEbowskiPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/696/723/858/822/953/original/a00bcaa62e194336.png",
	},
	{
		name: "Walter Uden",
		role: "teamMemberWalterPosition",
		imageUrl:
			"https://media.mastodon.de/accounts/avatars/110/696/833/299/709/033/original/2209f6209ff48d44.jpg",
	},
	// More people...
];
</script>

<template>
	<div
		id="team"
		class="grid gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 py-24">
		<div class="max-w-2xl">
			<h2
				class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
				{{ $t("teamTitle") }}
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				{{ $t("teamSubText") }}
			</p>
		</div>
		<ul
			role="list"
			class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
			<li v-for="person of people" :key="person.name">
				<div class="flex items-center gap-x-6">
					<img
						class="h-16 w-16 rounded-xl"
						:src="person.imageUrl"
						alt="" />
					<div>
						<h3
							class="text-base font-semibold leading-7 tracking-tight text-gray-50">
							{{ person.name }}
						</h3>
						<p class="text-sm font-semibold leading-6 text-red-400">
							{{ $t(person.role) }}
						</p>
					</div>
				</div>
			</li>

			<!-- More people... -->
		</ul>
	</div>
</template>
