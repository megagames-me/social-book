<script lang="ts">
	import type { PostResult } from '$lib/data/datatypes';
	import Post from '$lib/posts/Post.svelte';

	export let post: PostResult;
</script>

<svelte:head>
	<title>App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-32 pt-4">
    
	<Post post={post} />
    <a href="/posts" class="underline">&lArr; Back</a>
</section>
