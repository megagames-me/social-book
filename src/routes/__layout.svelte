<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import "flowbite/dist/flowbite.css";
	// import "flowbite/dist/flowbite.js"
</script>

<!-- yay!!! -->
<div class="min-h-screen">
	<Header />
<main class="">
	<slot />
</main>

<footer>

</footer>

</div>