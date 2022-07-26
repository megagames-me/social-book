<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="hidden active items"><a href=""></a></div>
	<nav class="bg-gray-900 shadow-xl flex justify-between items-center py-4 text-white px-6">
		<!-- Left -->
		<div class="flex gap-x-5">
			<div> <!-- Website name/logo -->
				<h1 class="font-semibold tracking-tight text-3xl">SocialBook</h1>
			</div>
			<div class="flex items-center gap-x-3 text-lg items"> <!-- Page links-->
				<a href="/" class:active="{$page.url.pathname === "/"}">Home</a>
				<a href="/about" class:active="{$page.url.pathname === "/about"}">About</a>
			</div>
		</div>

		<!-- Right  -->
	</nav>
</header>

<style>


	
</style>