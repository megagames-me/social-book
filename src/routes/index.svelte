<script context="module" lang="ts">
	export const prerender = true;
</script>


<script lang="ts">
	// import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-slate-200 px-32 text-center py-32 bg-gradient-to-b from-blue-500 to-blue-700">
	<h1 class="text-5xl font-bold mb-2">Welcome to SocialBook!</h1>
	<p class="text-2xl">
		This is a demo app for SvelteKit. Go to <a sveltekit:prefetch href="/posts" class="underline">posts</a>.
	</p>
</section>

