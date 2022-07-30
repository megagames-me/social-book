<script lang="ts">
import Editor from '@tinymce/tinymce-svelte';

let value: string = "Bruh u suck";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="p-5">
	<h1 class="font-bold text-4xl mb-4">Editor</h1>
	<div class="mb-4">
		<Editor
			bind:value={value}
		/>
	</div>
	<div class="prose leading-5">
		{@html value}
	</div>
	
</section>



<!-- 
	
	SERVER: john.db.elephantsql.com 
	USERNAME: sjsogqej
	PASWORD: 0xrqbucSTJPsGJCnfwJeosO3V-faT9Nw
	CONNECTION URL: postgres://sjsogqej:0xrqbucSTJPsGJCnfwJeosO3V-faT9Nw@john.db.elephantsql.com/sjsogqej
-->

