<template>
	<div class="py-32 px-6">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
				<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
					<h2
						class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
						{{ $t("embedsGridTitle") }}
					</h2>
					<p class="mt-6 text-xl leading-8 text-gray-300">
						{{ $t("embedsGridSubText1") }}
					</p>
					<p class="mt-6 text-base leading-7 text-gray-300">
						{{ $t("embedsGridSubText2") }}
					</p>
					<div class="mt-10 flex">
						<a
							href="#"
							class="rounded-md group bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
							>{{ $t("signUpButton") }}
							<ButtonsAnimatedArrow />
						</a>
					</div>
				</div>
				<div
					class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents w-full">
					<div
						class="flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
						<iframe
							title="Mastodon.de post by @ErikUden about visiting a Soviet submarine"
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
								title="Post by @futurebird about black hole horizons"
								src="https://sauropods.win/@futurebird/110954249572809982/embed"
								class="aspect-[4/3.7] md:w-[24rem] max-w-none flex-none rounded-2xl object-cover"
								allowfullscreen
								sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>
						</div>
						<div
							class="flex w-full flex-auto justify-end lg:w-auto lg:flex-none">
							<iframe
								title="Post by @KittyPictures about cats and sunlight"
								src="https://mastodon.de/@KittyPictures/110846921993091882/embed"
								class="aspect-[7/6] md:w-[37rem] max-w-none flex-none rounded-2xl object-cover"
								allowfullscreen
								sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>
						</div>
						<div
							class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
							<iframe
								title="Poll by @ErikUden about East Germany vs West Germany"
								src="https://mastodon.de/@ErikUden/110944073939853113/embed"
								class="aspect-[4/4.6] md:w-[26rem] max-w-none rounded-2xl object-cover"
								sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
								allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
