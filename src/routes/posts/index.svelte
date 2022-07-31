<script lang="ts">
	import type { Data } from '$lib/data/Data';
import type { PostsResult } from '$lib/data/datatypes';

	export let posts: PostsResult[];
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content="Posts and stuff" />
</svelte:head>

<section class="px-32 pt-4">
	<h1 class="text-4xl font-bold mb-2">Posts</h1>
	<div class="flex flex-col gap-y-2">
		{#each posts as post}
			<article>
				<h2 class="text-2xl"><a href="/posts/{post.id}" class="underline">{post.title}</a>
					 by <a href="/users/{post.creatorId}" class="underline">{post.creator.name}</a> <span class="font-thin">[{post.id}]</span></h2>
			</article>
		{/each}
	</div>
</section>
<!-- http://localhost:5173/ -->