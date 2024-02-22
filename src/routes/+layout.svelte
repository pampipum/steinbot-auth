<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { getFlash } from 'sveltekit-flash-message';
	import { Toaster } from '$lib/components/ui/sonner';
	import { toast } from 'svelte-sonner';
	import Navigation from '$lib/components/navigation/navigation.svelte';
	import { userStore } from '$lib/stores/userStore';

	export let data: any;
    let user: Lucia.UserAttributes;
    $: user = data.user;
    $: userStore.set(user);

	const flash = getFlash(page);


	$: if ($flash) {
		switch ($flash.type) {
			case 'success':
				//console.log('flash.message.success: ' + $flash.message);
				toast.success($flash.message);
				break;
			case 'error':
				//console.log('flash.message.error: ' + $flash.message);
				toast.error($flash.message);
				break;
		}
	}
</script>

<ModeWatcher />
<Toaster richColors />
<div class="relative flex min-h-screen flex-col">
	<Navigation {user} />
	
	
		<slot />

		
		
</div>
