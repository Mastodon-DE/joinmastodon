<script setup lang="ts">
const socials = [
    {
        name: "Mastodon",
        href: "https://mastodon.de/@MastodonDE",
        icon: "tabler:brand-mastodon",
    },
    {
        name: "GitHub",
        href: "https://github.com/Mastodon-DE/",
        icon: "tabler:brand-github",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@Mastodon_DE",
        icon: "tabler:brand-youtube",
    },
    {
        name: "Signal",
        href: "https://signal.group/#CjQKIFMct-WMIEFeKGHvSBUwi4geZr_cXltR1NnY88vP9kdGEhAr6CRNfqONvZB_kngJmLRw",
        icon: "tabler:message-circle",
    },
    {
        name: "Telegram",
        href: "https://t.me/mastodon_de",
        icon: "tabler:brand-telegram",
    },
    {
        name: "Twitch",
        href: "https://www.twitch.tv/Mastodon_DE",
        icon: "tabler:brand-twitch",
    },
    {
        name: "E-Mail",
        href: "mailto:info@mastodon.de",
        icon: "tabler:mail",
    },
];
</script>
<template>
    <HeadersNavbar />

    <div class="mx-auto max-w-7xl pb-24 sm:pb-32 px-6 lg:px-8">
        <div class="py-24 sm:py-32">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    {{ $t("contactheading") }}
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    {{ $t("contacttext") }}
                </p>

                <ul class="flex flex-col gap-4 mt-16">
                    <li v-for="social of socials" :key="social.name">
                        <a :href="social.href" class="flex gap-2 flex-col max-w-sm group">
                            <div class="flex gap-3 items-center">
                                <iconify-icon width="unset" :icon="social.icon" class="size-6 text-gray-300" />
                                <span class="font-semibold text-gray-200 group-hover:underline">{{ social.name }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
