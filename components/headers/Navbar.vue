<script setup lang="ts">
const { locale } = useI18n();
const aboutUs = [
	{
		name: "navbar.aboutUs.team",
		href: "/#team",
	},
	{
		name: "navbar.aboutUs.history",
		href: `/${locale.value}/blog/2023/09/history-of-the-domain-mastodon.de`,
	},
	{
		name: "navbar.aboutUs.moreAccounts",
		href: "#accounts",
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

const mobileMenuOpen = ref(false);

const switchLocalePath = useSwitchLocalePath();
</script>
<template>
	<header
		:class="['bg-dark-500/40 backdrop-blur-lg']"
		class="fixed top-0 inset-x-0 z-50">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<NuxtLink to="/" class="p-1.5 -m-1.5">
					<span class="sr-only">mastodon.de</span>
					<img class="h-8 w-36" src="/images/icons/logo.svg" alt="" />
				</NuxtLink>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
					@click="mobileMenuOpen = true">
					<span class="sr-only">Open main menu</span>
					<iconify-icon
						width="unset"
						icon="tabler:menu-2"
						class="size-6"
						aria-hidden="true" />
				</button>
			</div>
			<HeadlessPopoverGroup class="hidden lg:flex lg:gap-x-12">
				<HeadlessPopover class="relative">
					<HeadlessPopoverButton
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
						{{ $t("navbar.aboutUs") }}
						<iconify-icon
							width="unset"
							icon="tabler:chevron-down"
							class="h-5 w-5 flex-none text-gray-500"
							aria-hidden="true" />
					</HeadlessPopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1">
						<HeadlessPopoverPanel
							class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-dark-300 p-2 shadow-lg ring-1 ring-gray-900/5">
							<a
								v-for="item in aboutUs"
								:key="item.name"
								:href="item.href"
								class="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-50 hover:bg-dark-400 duration-100"
								>{{ $t(item.name) }}</a
							>
						</HeadlessPopoverPanel>
					</transition>
				</HeadlessPopover>

				<a
					href="https://status.mastodon.de"
					class="text-sm font-semibold leading-6 text-gray-50"
					>{{ $t("navbar.status") }}</a
				>

				<a
					href="/donate"
					class="text-sm font-semibold leading-6 text-gray-50"
					>{{ $t("navbar.donate") }}</a
				>
				<NuxtLink
					href="/contact"
					class="text-sm font-semibold leading-6 text-gray-50"
					>{{ $t("navbar.contact") }}</NuxtLink
				>
			</HeadlessPopoverGroup>
			<div
				class="hidden lg:flex lg:flex-1 lg:justify-end gap-4 lg:items-center">
				<HeadlessMenu as="div" class="relative inline-block text-left">
					<div>
						<HeadlessMenuButton
							class="rounded-md group font-semibold leading-6 text-white">
							<iconify-icon
								width="unset"
								icon="tabler:language"
								class="size-6" />
						</HeadlessMenuButton>
					</div>

					<transition
						enter-active-class="transition ease-out duration-100"
						enter-from-class="transform opacity-0 scale-95"
						enter-to-class="transform opacity-100 scale-100"
						leave-active-class="transition ease-in duration-75"
						leave-from-class="transform opacity-100 scale-100"
						leave-to-class="transform opacity-0 scale-95">
						<HeadlessMenuItems
							class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div class="py-1">
								<HeadlessMenuItem
									v-for="language in languages"
									:key="language.name">
									<NuxtLink
										:class="[
											'text-gray-200 group px-4 py-2 text-sm flex flex-row items-center gap-4 font-semibold hover:bg-dark-100',
										]"
										:to="switchLocalePath(language.lang)">
										{{ language.name
										}}<span class="ml-auto">
											<ButtonsAnimatedArrow />
										</span>
									</NuxtLink>
								</HeadlessMenuItem>
							</div>
						</HeadlessMenuItems>
					</transition>
				</HeadlessMenu>
				<a
					href="https://mastodon.de"
					class="text-sm group font-semibold leading-6 text-gray-50"
					>{{ $t("navbar.explore") }}
					<ButtonsAnimatedArrow />
				</a>
			</div>
		</nav>
		<HeadlessTransitionRoot appear :show="mobileMenuOpen" as="template">
			<HeadlessDialog
				as="div"
				class="lg:hidden"
				@close="mobileMenuOpen = false">
				<div class="fixed inset-0 z-10" />

				<HeadlessTransitionChild
					as="template"
					enter-active-class="transition ease-out duration-200"
					enter-from-class="opacity-0 scale-90 translate-y-4"
					enter-to-class="opacity-100 scale-100 translate-y-0"
					leave-active-class="transition ease-in duration-150"
					leave-from-class="opacity-100 scale-100 translate-y-0"
					leave-to-class="opacity-0 scale-90 translate-y-4">
					<HeadlessDialogPanel
						class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
						<div class="flex items-center justify-between">
							<NuxtLink to="/" class="-m-1.5 p-1.5">
								<span class="sr-only">Uden AI</span>
								<img
									class="h-8 w-auto"
									src="/images/icons/logo.svg"
									alt="" />
							</NuxtLink>
							<button
								type="button"
								class="-m-2.5 rounded-md p-2.5 text-gray-200"
								@click="mobileMenuOpen = false">
								<span class="sr-only">Close menu</span>
								<iconify-icon
									width="unset"
									icon="tabler:x"
									class="size-6"
									aria-hidden="true" />
							</button>
						</div>
						<div class="mt-6 flow-root">
							<div class="-my-6 divide-y divide-gray-400/10">
								<div class="space-y-2 py-6">
									<HeadlessDisclosure
										v-slot="{ open }"
										as="div"
										class="-mx-3">
										<HeadlessDisclosureButton
											class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300">
											{{ $t("aboutUs") }}
											<iconify-icon
												width="unset"
												icon="tabler:chevron-down"
												:class="[
													open ? 'rotate-180' : '',
													'h-5 w-5 flex-none',
												]"
												aria-hidden="true" />
										</HeadlessDisclosureButton>
										<HeadlessDisclosurePanel
											class="mt-2 space-y-2">
											<HeadlessDisclosureButton
												v-for="item in aboutUs"
												:key="item.name"
												as="a"
												:href="item.href"
												class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-dark-400">
												{{
													item.name
												}}</HeadlessDisclosureButton
											>
										</HeadlessDisclosurePanel>
									</HeadlessDisclosure>
									<a
										href="https://status.mastodon.de"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>{{ $t("navbar.status") }}</a
									>
									<a
										href="/donate"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>{{ $t("navbar.donate") }}</a
									>
									<NuxtLink
										href="/contact"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300">
										{{ $t("navbar.contact") }}</NuxtLink
									>
								</div>
								<div class="py-6">
									<a
										href="https://mastodon.de/"
										class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>{{ $t("navbar.explore") }}</a
									>
								</div>
							</div>
						</div>
					</HeadlessDialogPanel>
				</HeadlessTransitionChild>
			</HeadlessDialog>
		</HeadlessTransitionRoot>
	</header>
</template>
