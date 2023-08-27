<script setup lang="ts">
const products = [
	{
		name: "Uden AI",
		description: "About Uden AI and what we do",
		href: "#",
		icon: "tabler:server-2",
	},
];
const callsToAction = [
	{ name: "Contact us", href: "#", icon: "tabler:mail" },
	{ name: "mastodon.de", href: "#", icon: "tabler:brand-mastodon" },
];

const { y: scrollY } = useWindowScroll();

const mobileMenuOpen = ref(false);

const scrolledBackground = computed(() => scrollY.value > 100);
</script>
<template>
	<header
		:class="[
			scrolledBackground
				? 'bg-dark-500/40 backdrop-blur-lg'
				: 'bg-transparent',
		]"
		class="fixed top-0 inset-x-0 z-50">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Uden AI</span>
					<img
						class="h-8 w-auto"
						src="/images/icons/logo.svg"
						alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
					@click="mobileMenuOpen = true">
					<span class="sr-only">Open main menu</span>
					<Icon
						name="tabler:menu-2"
						class="h-6 w-6"
						aria-hidden="true" />
				</button>
			</div>
			<HeadlessPopoverGroup class="hidden lg:flex lg:gap-x-12">
				<HeadlessPopover class="relative">
					<HeadlessPopoverButton
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
						About Us
						<Icon
							name="tabler:chevron-down"
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
							class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-dark-200 shadow-lg ring-1 ring-gray-900/5">
							<div class="p-4">
								<div
									v-for="item in products"
									:key="item.name"
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-dark-400 duration-200">
									<div
										class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-dark-300 group-hover:bg-dark-200">
										<Icon
											:name="item.icon"
											class="h-6 w-6 text-gray-300 group-hover:text-red-300"
											aria-hidden="true" />
									</div>
									<div class="flex-auto">
										<a
											:href="item.href"
											class="block font-semibold text-gray-50">
											{{ item.name }}
											<span class="absolute inset-0" />
										</a>
										<p class="mt-1 text-gray-300">
											{{ item.description }}
										</p>
									</div>
								</div>
							</div>
							<div
								class="grid grid-cols-2 divide-x divide-gray-900/5 bg-dark-100">
								<a
									v-for="item in callsToAction"
									:key="item.name"
									:href="item.href"
									class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-50 hover:bg-dark-400">
									<Icon
										:name="item.icon"
										class="h-5 w-5 flex-none text-gray-500"
										aria-hidden="true" />
									{{ item.name }}
								</a>
							</div>
						</HeadlessPopoverPanel>
					</transition>
				</HeadlessPopover>

				<a href="#" class="text-sm font-semibold leading-6 text-gray-50"
					>Mastodon</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-50"
					>Clients</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-50"
					>Attributions</a
				>
			</HeadlessPopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a
					href="#"
					class="text-sm group font-semibold leading-6 text-gray-50"
					>Log in <ButtonsAnimatedArrow
				/></a>
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
							<a href="#" class="-m-1.5 p-1.5">
								<span class="sr-only">Uden AI</span>
								<img
									class="h-8 w-auto"
									src="/images/icons/logo.svg"
									alt="" />
							</a>
							<button
								type="button"
								class="-m-2.5 rounded-md p-2.5 text-gray-200"
								@click="mobileMenuOpen = false">
								<span class="sr-only">Close menu</span>
								<Icon
									name="tabler:x"
									class="h-6 w-6"
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
											About Us
											<Icon
												name="tabler:chevron-down"
												:class="[
													open ? 'rotate-180' : '',
													'h-5 w-5 flex-none',
												]"
												aria-hidden="true" />
										</HeadlessDisclosureButton>
										<HeadlessDisclosurePanel
											class="mt-2 space-y-2">
											<HeadlessDisclosureButton
												v-for="item in [
													...products,
													...callsToAction,
												]"
												:key="item.name"
												as="a"
												:href="item.href"
												class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-dark-400"
												>{{
													item.name
												}}</HeadlessDisclosureButton
											>
										</HeadlessDisclosurePanel>
									</HeadlessDisclosure>
									<a
										href="#"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>Mastodon</a
									>
									<a
										href="#"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>Clients</a
									>
									<a
										href="#"
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>Attributions</a
									>
								</div>
								<div class="py-6">
									<a
										href="#"
										class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-300"
										>Log in</a
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
