<script lang="ts">
	import { APP_NAME } from '$lib/config/constants';
	import Hero from '$lib/components/Hero.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Features from '$lib/components/Features.svelte';
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta
		name="description"
		content="Sveltekit Auth Starter - An open source auth starter project utilizing lucia-auth, skeleton ui, prisma and sveltekit."
	/>
</svelte:head>

<div class="flex-1">

			<Hero />
			<Features /> 
			<Footer /> 

</div>
