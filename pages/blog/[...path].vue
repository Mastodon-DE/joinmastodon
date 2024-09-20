<script setup lang="ts">
import type { Post } from "~/types/posts";

const filePath = [
	useI18n().locale.value,
	"blog",
	...(useRoute().params.path as string[]),
].join("/");

const { data: post } = await useFetch<Post>(
	`/api/article?path=${encodeURIComponent(`/${filePath}`)}`
);

if (!post.value) {
	throw createError({
		statusCode: 404,
		message: "Post not found",
	});
}

useSchemaOrg([
	defineArticle({
		author: post.value.author.name,
		datePublished: post.value.created_at,
		image: post.value.image,
		description: post.value.description,
		inLanguage: "en-US",
		thumbnailUrl: post.value.image,
	}),
]);

useServerSeoMeta({
	title: post.value.title,
	ogTitle: post.value.title,
	author: post.value.author.name,
	description: post.value.description,
	ogDescription: post.value.description,
	ogImage: post.value.image,
	twitterCard: "summary_large_image",
});

let body = post.value.content;
// Fix for optimizing images during prerendering
const img = useImage();

// Find all links of type /_ipx/ in body
const ipxLinks = body.match(/\/_ipx\/[^"]+/g) || [];

for (const ipxLink of ipxLinks) {
	body = body.replace(
		ipxLink,
		// Replace the link with the optimized image
		img(`/${ipxLink.split("/").slice(3).join("/")}` || "", {
			width: 800,
			format: "webp",
		})
	);
}

const formatDate = (date?: string) => {
	return new Intl.DateTimeFormat(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	}).format(Date.parse(date ?? new Date().toISOString()));
};
</script>

<template>
	<HeadersNavbar />

	<div
		v-if="post"
		class="mx-auto max-w-7xl w-full pb-24 sm:pb-32 px-6 lg:px-8 pt-1">
		<div class="mx-auto max-w-2xl text-center mt-40">
			<h1
				v-if="post.title"
				class="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl">
				{{ post.title }}
			</h1>

			<div class="mt-8 mx-auto">
				<time
					v-if="post.created_at"
					:datetime="post.created_at"
					class="text-gray-500"
					>{{ formatDate(post.created_at) }}</time
				>
			</div>
		</div>
		<nuxt-img
			v-if="post.image"
			:src="post.image"
			width="800"
			format="webp"
			alt=""
			class="aspect-[16/9] drop-shadow-2xl mt-20 w-full max-w-3xl mx-auto rounded bg-dark-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
		<article
			class="mx-auto max-w-3xl w-full prose prose-invert mt-10 content prose-code:before:content-none prose-code:after:content-none prose-a:text-red-500 prose-a:underline break-words overflow-hidden text-ellipsis"
			v-html="body"></article>
	</div>
	<Errors404 v-else />
</template>

<style>
/*Give images round corners*/
img {
  border-radius: 25px;
}

/*Give make the table of content smaller*/
  .toc-container {
    max-height: 300px; /* Adjust this height as necessary */
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #EF4444; /* Adds a red border around the TOC */
    width: 100%; /* Makes the TOC as wide as the webpage */
    box-sizing: border-box; /* Includes padding and border in element's total width */
    border-radius: 15px; /* Adds rounded corners to the border */
  }

  .toc-container a {
    text-decoration: none; /* Removes underline from links */
    color: #EF4444; /* Set a default color for the links */
  }

  .toc-container a:hover {
    text-decoration: underline; /* Underline only on hover */
  }
  
  .bordered-link {
    display: inline-block; /* Makes the border fit the text size */
    border: 2px solid #EF4444; /* Adds a red border */
    border-radius: 15px; /* Adds rounded corners to the border */
    padding: 5px 10px 3px 10px; /* Adjusts padding: top, right, bottom, left */
    text-decoration: none; /* Removes underline from the link */
    color: inherit; /* Ensures the link text inherits the color of the surrounding text */
  }

  .bordered-link:hover {
    background-color: #EF4444; /* Adds a slight background color change on hover (optional) */
  }
</style>