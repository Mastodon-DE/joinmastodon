<script setup lang="ts">
const post = await queryContent(useRoute().path).findOne();
</script>

<template>
	<HeadersNavbar />

	<div class="mx-auto max-w-7xl pb-24 sm:pb-32 px-6 lg:px-8 pt-30">
		<div class="mx-auto max-w-2xl text-center mt-40">
			<h1
				class="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl">
				{{ post.title }}
			</h1>
		</div>
		<img
			:src="post.image"
			alt=""
			class="aspect-[16/9] mt-30 w-full max-w-3xl mx-auto rounded-2xl bg-dark-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
		<div
			class="mx-auto max-w-3xl prose prose-invert prose-truegray pb-24 sm:pb-32 mt-15 [&_figcaption]:mt-4 [&_h1,&_h2,&_h3,&_h4]:tracking-tight [&_p]:!leading-8 [&_ul]:max-w-xl [&_ul]:space-y-4 [&_p]:!mt-6 [&_img]:aspect-video [&_img]:rounded-xl">
			<ContentRenderer :value="post" />
		</div>
	</div>
</template>
