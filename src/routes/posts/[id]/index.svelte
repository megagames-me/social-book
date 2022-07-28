<script lang="ts">
	import type { PostResult } from '$lib/data/datatypes';

	export let post: PostResult;
</script>

<svelte:head>
	<title>App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-32 pt-4">
    
	<h1 class="text-4xl mb-1 font-bold">{post.title} by 
		<a href="/users/{post.creatorId}" class="underline">{post.creator.username}</a>
        <span class="font-thin">[{post.id}]</span></h1>
        
    <p class="text-2xl">{post.content}</p>
    <a href="/posts" class="underline">&lArr; Back</a>
</section>
