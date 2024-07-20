<script setup lang="ts">
useServerSeoMeta({
	title: "Soziales Netzwerk, für das Gemeinwohl",
	ogImage: "/images/screenshots/desktop1-resized.webp",
	ogImageAlt: "Screenshot of the Mastodon.de public timeline",
	description:
		"Mastodon.de ist ein wahrlich offenes und soziales Netzwerk. Ohne Werbung, Tracking oder Algorithmen, die dir den Schlaf rauben. Von der Gemeinschaft für die Gemeinschaft bereitgestellt.",
	author: "Erik Uden",
});

const faqs = [
	{
		question: "Unterstützt Mastodon Direktnachrichten?",
		answer: "Ja, bei der Veröffentlichung eines Posts kannst du, durch Erwähnung, die Sichtbarkeit auf einen bestimmten Nutzer beschränken. Bitte beachte, dass diese DMs unverschlüsselt sind, weshalb für sensible Konversationen ein anderer weg in Betracht gezogen werden sollte.",
	},
	{
		question: "Warum ist die Optik so mangelhaft?",
		answer: "Sollte dir das Nutzerinterface nicht gefallen, kannst du einen von dutzenden Clients in betracht ziehen. Da ist bestimmt etwas für dich dabei.",
	},
	{
		question:
			"Wer sieht was ich unter einem Hashtag poste? Wessen Posts sehe ich wenn ich einem Hashtag folge?",
		answer: "Sofern dein Post öffentlich sichtbar ist, können deine Post von jedem gesehen werden, der sich auf einer Instanz befindet, die mit der eigenen im Kontakt steht. Das selbe gilt für das Folgen von Hashtags.",
	},
	{
		question: "Teilen oder favorisieren - was sorgt für mehr Reichweite?",
		answer: "Teilen, da der Inhalt hierdurch mit all deinen Followern geteilt wird. Favorisieren zeigt lediglich, dass dir ein Post gefällt.",
	},
	{
		question: "Wie wechsel ich die Instanz?",
		answer: "1) Erstelle ein Konto auf der Instanz deiner Wahl. 2) In den Einstellungen des neuen Accounts kannst du über den Reiter >> Konto << die Option >> Von einem Konto umziehen << auswählen. 3) Auf dem alten Konto musst du nun (ebenfalls im Konto Tab) die Option >> Umzug zu einem neuen Konto << wählen. 4) Du hast deinen Account erfolgreich umgezogen. Nun musst kannst du ihn wieder nach Belieben anpassen :D",
	},
	{
		question: "An wen kann ich mich wenden, wenn ich ein Problem habe?",
		answer: "Du kannst auf der jeweiligen About Seite (z.B. https://mastodon.de/about eine Kontakt E-Mail finden). Eine andere Möglichkeit ist einen, an den Admin adressierten, Post zu veröffentlichen.",
	},
	{
		question: "Wie finde ich 'meine' Bubble?",
		answer: "Du kannst über Hashtags, die lokale/föderierte Timeline oder die Suche nach Accounts suchen, die deine Interessen vertreten. Diesen kannst du dann folgen und mit der Zeit wächst dein Repertoire an Accounts.",
	},
	{
		question: "Warum sind manche Tröts so viel länger als 500 Zeichen?",
		answer: "Abhängig von der Instanz, ist das 500 Zeichen Limit erhöht (wie auf MastodonDE)",
	},
	{
		question:
			"Kann ich Nutzer aus der Timeline in Listen verschieben? Ich möchte etwa professionelle Accounts auslagern.",
		answer: "In den Einstellungen zur jeweiligen Liste, kannst du sie von deiner Timeline ausblenden",
	},
	{
		question:
			"Wie funktioniert das mit der Interoperabilität zwischen Mastodon/Peertube/Pixelfed/Lemmy/etc?",
		answer: "Alle diese Dienste sprechen ein einheitliches Protokoll (ActivityPub). Deshalb können Videos in Peertube zum Beispiel als Posts angezeigt werden, da die Daten im Code relativ gleich aussehen, nur die Ansicht anders ist.",
	},
	{
		question: "Wie wird man verifizierter Nutzer?",
		answer: "Die Verifizierung im Fediverse basiert auf dem verlinken der eigenen Website. Besitzt deine Website einen HTML Link zu Mastodon und du hast diese Website in deinem Profil verlinkt, dann wird sie mit einem grünen Haken versehen.",
	},
	{
		question:
			"Da es mich gerade selbst beschäftigt hat: Kann man nach einem Umzug (bei mir wars troet.cafe zu literatur.social) den alten Account löschen?",
		answer: "Natürlich, jedoch solltest du zumindest eine kurze Übergangsfrist einführen, da sonst Nutzer, die den alten Tag kennen, nicht mehr zu deinem Profil finden.",
	},
	{
		question:
			"Warum unterscheiden sich die Followerzahlen eines Accounts - abhängig davon, von welchem Account oder von welcher Instanz ich draufsehe?",
		answer: "Manche Instanzen stehen mit anderen nicht in Kontakt. Daher kann es hier zu Unstimmigkeiten bei Interaktionen von Nutzern kommen. Das ist normal.",
	},
	{
		question:
			"Was muss ich tun, damit andere mit meinen Interessen mich finden?",
		answer: "Das verwenden von Hastags macht auf dich Aufmerksam, weshalb du sie passend wählen solltest. Nebenbei lohnt sich eine gute Bio, damit jeder weiß, wer du bist und was dir wichtig ist. So findest du schnell neue Freunde.",
	},
];

const languages = [
	{
		name: "Deutsch",
		lang: "de",
	},
	{
		name: "English",
		lang: "en",
	},
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
					class="mt-10 max-w-[35rem] text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
					{{ $t("tagline") }}
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					{{ $t("taglineSubText") }}
				</p>
				<div class="mt-10 flex items-center gap-x-6">
					<a
						href="https://mastodon.de/auth/sign_up"
						class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
						>{{ $t("signUpButton") }}</a
					>
					<a
						href="https://mastodon.de/about"
						class="text-sm group font-semibold leading-6 text-gray-100"
						>{{ $t("learnMoreButton") }}
						<ButtonsAnimatedArrow />
					</a>
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
							src="/images/screenshots/phone-homepage-resized.webp"
							alt="" />
					</foreignObject>
				</svg>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl pb-24 sm:pb-32">
		<FeaturesWhatIsMastodon />

		<FeaturesWithImage />

		<div
			class="px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
			<h2
				class="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
				{{ $t("donate1") }}<br />
				{{ $t("donate2") }}
			</h2>
			<div
				class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex flex-row flex-wrap gap-4 text-white">
					<iconify-icon
						width="unset"
						icon="logos:paypal"
						class="size-6" />
					<iconify-icon
						width="unset"
						icon="logos:patreon"
						class="size-6" />
					<iconify-icon
						width="unset"
						icon="cib:ko-fi"
						class="size-6" />
					<iconify-icon
						width="unset"
						icon="cib:liberapay"
						class="size-6" />
				</div>
				<NuxtLink
					to="/en/donate"
					class="rounded-md group bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
					Donate
					<ButtonsAnimatedArrow />
				</NuxtLink>
			</div>
		</div>

		<GridsEmbedGrid />
	</div>

	<div class="pb-24 sm:pb-32">
		<GridsSlidingAccounts />
	</div>

	<div class="mx-auto max-w-7xl pb-24 sm:pb-32">
		<GridsTeamGrid />

		<BlogPresentation />

		<div
			class="mx-auto max-w-4xl py-24 sm:py-32 px-6 divide-y divide-white/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-white">
				{{ $t("faqheading") }}
			</h2>
			<dl class="mt-10 space-y-6 divide-y divide-white/10">
				<HeadlessDisclosure
					v-for="faq in faqs"
					:key="faq.question"
					v-slot="{ open }"
					as="div"
					class="pt-6">
					<dt>
						<HeadlessDisclosureButton
							class="flex w-full items-start justify-between text-left text-white">
							<span class="text-base font-semibold leading-7">{{
								faq.question
							}}</span>
							<span class="ml-6 flex h-7 items-center">
								<iconify-icon
									width="unset"
									v-if="!open"
									icon="tabler:plus"
									class="size-6"
									aria-hidden="true" />
								<iconify-icon
									width="unset"
									v-else
									icon="tabler:minus"
									class="size-6"
									aria-hidden="true" />
							</span>
						</HeadlessDisclosureButton>
					</dt>
					<HeadlessDisclosurePanel as="dd" class="mt-2 pr-12">
						<p class="text-base leading-7 text-gray-300">
							{{ faq.answer }}
						</p>
					</HeadlessDisclosurePanel>
				</HeadlessDisclosure>
			</dl>
		</div>
	</div>

	<FootersFooter />
</template>
