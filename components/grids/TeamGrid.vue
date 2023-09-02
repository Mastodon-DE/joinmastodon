<script setup lang="ts">
const people = [
	{
		name: "Erik Uden",
		role: "teamMemberErikPosition",
		imageUrl: "/images/people/erikuden-resized.webp",
	},
	{
		name: "Joe Biden",
		role: "President of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
	},
	{
		name: "Erik Uden",
		role: "teamMemberErikPosition",
		imageUrl: "/images/people/erikuden-resized.webp",
	},
	{
		name: "Joe Biden",
		role: "President of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
	},
	{
		name: "Erik Uden",
		role: "teamMemberErikPosition",
		imageUrl: "/images/people/erikuden-resized.webp",
	},
	{
		name: "Joe Biden",
		role: "President of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
	},
	{
		name: "Erik Uden",
		role: "teamMemberErikPosition",
		imageUrl: "/images/people/erikuden-resized.webp",
	},
	{
		name: "Joe Biden",
		role: "President of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
	},
	// More people...
];
</script>

<template>
	<div class="grid gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 py-24">
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
