<script lang="ts">
	import { page } from '$app/stores';
	import { session } from '$app/stores';
import Dropdown from './Dropdown.svelte';
</script>

<header class="fixed w-full top-0 left-0">
	<div class="hidden active items"><a href="/">m</a></div>
	<nav class="bg-gray-900 shadow-2xl flex justify-between items-center py-4 text-white px-6">
		<!-- Left -->
		<div class="flex gap-x-5">
			<div>
				<!-- Website name/logo -->
				<a
					class="website-name"
					href="/"
					sveltekit:prefetch>SocialBook</a
				>
			</div>
			<div class="flex items-center gap-x-3 text-lg items">
				<!-- Page links-->
				<a href="/"  class:active={$page.url.pathname === '/'} sveltekit:prefetch>Home</a>
				<a href="/about"  class:active={$page.url.pathname === '/about'} sveltekit:prefetch>About</a>
				<a href="/posts"  class:active={$page.url.pathname === '/posts'} sveltekit:prefetch>Posts</a>
			</div>
		</div>

		<!-- Right  -->
		<div class="flex gap-x-5">
			<Dropdown />
		</div>
	</nav>
	
	  
</header>

<style>
</style>
