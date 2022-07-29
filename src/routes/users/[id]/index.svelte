<script lang="ts">
import type { UserResult } from "$lib/data/datatypes";




	export let user: UserResult;
</script>

<svelte:head>
	<title>App</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-32 pt-4">
    
	<h1 class="text-4xl mb-1 font-bold">{user.username}
         <span class="font-thin">[{user.id}]</span></h1>
        
    <p class="text-2xl mb-3">Description: {user.description}</p>

    <p>Posts: {#each user.posts as post, i}{i !== 0 ? ", " : ""}<a href="/posts/{post.id}" class="underline">{post.title}</a>{/each}</p>
    <a href="/posts" class="underline">&lArr; Back</a>
</section>

