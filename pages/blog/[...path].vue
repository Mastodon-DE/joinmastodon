<script setup lang="ts">
const { locale } = useI18n();

let post: {
	author: string;
	created_at: string;
	description: string;
	image: string;
	title: string;
} | null;
try {
	post = await queryContent(
		`/blog/${(useRoute().params.path as string[]).join("/") ?? ""}`
	)
		.locale(locale.value)
		.findOne();
} catch {
	post = null;
}

useSchemaOrg([
	defineArticle({
		author: post?.author,
		datePublished: post?.created_at,
		image: post?.title,
		description: post?.description,
		inLanguage: locale.value,
		thumbnailUrl: post?.image,
	}),
]);

useServerSeoMeta({
	title: post?.title,
	description: post?.description,
	ogImage: post?.image,
	twitterCard: "summary_large_image",
});
</script>

<template>
	<HeadersNavbar />

	<div
		v-if="post"
		class="mx-auto max-w-7xl flex flex-col pt-20 pb-24 sm:pb-32 px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mt-32">
			<h1
				v-if="post.title"
				class="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl">
				{{ post.title }}
			</h1>
		</div>
		<img
			v-if="post.image"
			:src="post.image"
			alt=""
			class="aspect-[16/9] mt-32 w-full max-w-3xl mx-auto rounded-2xl bg-dark-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
		<div
			class="mx-auto max-w-3xl prose prose-invert prose-gray pb-24 sm:pb-32 mt-16 [&_figcaption]:mt-4 [&_img]:mt-6 [&_img]:rounded-xl">
			<ContentRenderer :value="post" />
		</div>
	</div>
	<Errors404 v-else />
</template>
