<script lang="ts">
    import type { PostResult } from "$lib/data/datatypes";

    /**
     * Post object from endpoint
     */
    export let post: PostResult;
</script>

<div class=''>
    <h1 class="text-4xl font-bold mb-1 max-w-full">{post.title} by 
		<a href="/users/{post.creatorId}" class="underline">{post.creator.name}</a>
        <span class="font-thin">[{post.id}]</span></h1> 
        
    <p class="unreset">{@html post.content}</p>
</div>