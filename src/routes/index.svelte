<script context="module" lang="ts">
	// export const prerender = true;
</script>


<script lang="ts">
	import { session } from "$app/stores";
	// import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-slate-200 px-32 text-center py-32 bg-gradient-to-b from-blue-500 to-blue-700">
	<h1 class="text-5xl font-bold mb-2">Welcome to SocialBook!</h1>
	<p class="text-2xl mb-4">
		This is a demo app for SvelteKit. Go to <a sveltekit:prefetch href="/posts" class="underline">posts</a>.
	</p>
	<!-- <a href="/api/auth/signin/google?redirect=/">Login with Google</a> -->
	{#if !$session?.user}
	<a href="/api/auth/signin/google?redirect=/" role="button" class="border focus:outline-none  focus:ring-4  font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">Sign in with Google</a>
	{/if}
	
</section>

