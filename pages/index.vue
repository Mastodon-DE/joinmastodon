<script setup lang="ts">
const people = [
	{
		name: "Erik Uden",
		role: "CEO, Uden AI",
		imageUrl: "https://avatars.githubusercontent.com/u/52011431?v=4",
		bio: "Erik Uden is the leader of mastodon.de and CEO of Uden AI. He started working on mastodon.de in November 2022, and made it what it is now.",
	},
	{
		name: "Joe Biden",
		role: "President of the United States",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg",
		bio: "Joe Biden is the current president of the United States and has been an instrumental part in creating this community.",
	},
	// More people...
];
</script>

<template>
	<HeadersNavbar />

	<div class="relative isolate">
		<svg
			class="absolute inset-0 -z-10 h-full w-full stroke-dark-100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true">
			<defs>
				<pattern
					id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse">
					<path d="M100 200V.5M.5 .5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-gray-900">
				<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					stroke-width="0" />
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
		</svg>
		<div
			class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
				<h1
					class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
					Social networking that's not for sale
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Mastodon.de is a truly open social network. No ads, no
					tracking, no data mining, no algorithms! The network is run
					by the community for the community.
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
						>Sign Up</a
					>
					<a
						href="#"
						class="text-sm font-semibold leading-6 text-gray-100"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
				<svg
					viewBox="0 0 366 729"
					role="img"
					class="mx-auto w-[22.875rem] max-w-full md:rotate-10 drop-shadow-xl text-dark-200 fill-dark-400">
					<title>App screenshot</title>
					<defs>
						<clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
							<rect width="316" height="684" rx="36" />
						</clipPath>
					</defs>
					<path
						fill="currentColor"
						d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
					<path
						fill="currenFill"
						d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
					<foreignObject
						width="316"
						height="684"
						transform="translate(24 24)"
						clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
						<img
							src="/images/screenshots/phone-homepage.webp"
							alt="" />
					</foreignObject>
				</svg>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
		<div class="py-32">
			<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
				<div
					class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
						<h2
							class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
							Community Spaces
						</h2>
						<p class="mt-6 text-xl leading-8 text-gray-300">
							Mastodon.de is dedicated to providing its users with
							a community experience, where likes, followers or
							boosts don't mean anything
						</p>
						<p class="mt-6 text-base leading-7 text-gray-300">
							Since there is no algorithm that decides what posts
							are shown in your feed, you can just relax and post
							for fun!
						</p>
						<div class="mt-10 flex">
							<a
								href="#"
								class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
								>Sign Up
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
					<div
						class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents w-full">
						<div
							class="flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
							<iframe
								src="https://mastodon.de/@ErikUden/110951792713928937/embed"
								class="md:aspect-[7/6.2] md:w-[32rem] max-w-none rounded-2xl object-cover"
								allowfullscreen
								sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>
						</div>
						<div
							class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end w-full justify-center lg:gap-x-8 flex-col md:flex-row">
							<div
								class="order-first flex w-full flex-none justify-end self-start lg:w-auto">
								<iframe
									src="https://sauropods.win/@futurebird/110954249572809982/embed"
									class="aspect-[4/3.7] md:w-[24rem] max-w-none flex-none rounded-2xl object-cover"
									allowfullscreen
									sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>
							</div>
							<div
								class="flex w-full flex-auto justify-end lg:w-auto lg:flex-none">
								<iframe
									src="https://infosec.exchange/@AnthonyCollette/110957221963719882/embed"
									class="aspect-[7/7.3] md:w-[37rem] max-w-none flex-none rounded-2xl object-cover"
									allowfullscreen
									sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>
							</div>
							<div
								class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
								<iframe
									src="https://mastodon.de/@ErikUden/110944073939853113/embed"
									class="aspect-[4/5] md:w-[26rem] max-w-none rounded-2xl object-cover"
									sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
									allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl sm:text-center">
					<h2
						class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
						Meet our team
					</h2>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						We are a dynamic group of individuals who are passionate
						about what we do and dedicated to proving a great
						experience to our community!
					</p>
				</div>
				<ul
					role="list"
					class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
					<li
						v-for="person in people"
						:key="person.name"
						class="flex flex-col gap-6 xl:flex-row">
						<img
							class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
							:src="person.imageUrl"
							alt="" />
						<div class="flex-auto">
							<h3
								class="text-lg font-semibold leading-8 tracking-tight text-gray-50">
								{{ person.name }}
							</h3>
							<p class="text-base leading-7 text-gray-300">
								{{ person.role }}
							</p>
							<p class="mt-6 text-base leading-7 text-gray-300">
								{{ person.bio }}
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
