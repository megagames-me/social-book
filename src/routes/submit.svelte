<script lang="ts">
import { session } from '$app/stores';
import Post from '$lib/posts/Post.svelte';
import Editor from '@tinymce/tinymce-svelte';

let value: string = "<p>Use [Return] for a new paragraph</p><p>Use [Shift]+[Return] for a line break.</p><hr/><p>This is a</p><p>new paragraph.</p><hr/><p>This is a<br/>line break.</p>";
let title: string = "Ur mom";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="p-5">
	{#if $session?.user?.id}
	<h1 class="font-bold text-4xl mb-4">Submit</h1>
	<div class="mb-4">
		<Editor
			bind:value={value}
			conf={
				{
					
				}
			}
		/>
	</div>
	<h1 class="font-bold text-4xl mb-4">Preview</h1>
	<div class="rounded-xl border-2 p-5">
	<Post post={{
		content: value,
		id: 68419,
		title: title,
		creatorId: $session.user.id,
		creator: {
			name: $session.user.connections.google.name
		}
	}}/>
	</div>
	{/if}
</section>



