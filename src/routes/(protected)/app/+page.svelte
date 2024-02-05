<script lang="ts">
	import { onMount } from 'svelte';
	import ChatMessage from '$lib/components/ChatMessage.svelte';
	import SolarPanelReport from '$lib/components/SolarPanelReport.svelte';
	import SolarPanelData from '$lib/components/SolarPanelData.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import OlMap from '$lib/components/OlMap.svelte';
	import { initializeThread, postChat } from '$lib/api/api';
	import { Button } from '$lib/components/ui/button';

	let apiUrl = 'http://app1.aisolar.pro/';
	// Code block for local development
	//let apiUrl = 'http://localhost:8080';
	let query = '';
	let loading = false;
	let chatMessages: ChatMessage[] = [];
	let scrollToDiv: HTMLDivElement;
	let threadId: string | null = null;
	let solarPanelData: any = null;
	let solarPanelReport: any = null;
	let showMap = false;
	let latitude = 46.16631476067755;
	let longitude = 6.121641804137095;
	let zoom = 18;
	

	onMount(async () => {
		try {
			threadId = await initializeThread(apiUrl);
		} catch (err) {
			handleError(err);
		}
	});

	const handleSubmit = async () => {

		loading = true;
		chatMessages = [...chatMessages, { role: 'user', content: query }];

		try {
			const data = await postChat(apiUrl, threadId, query);
			chatMessages = [...chatMessages, { role: 'assistant', content: data.response }];
			processResponseData(data);
		} catch (err) {
			handleError(err);
		} finally {
			loading = false;
			query = '';
			scrollToBottom();
		}
		
		
	};

	function processResponseData(data: any) {
		solarPanelData = data?.solar_panel_data || null;
		solarPanelReport = data?.solar_panel_report || null;
		if (data?.coordinates) {
			updateMapCoordinates(data.coordinates);
		}
	}

	function updateMapCoordinates(coordinates: { lat: number; lng: number }) {
		({ lat: latitude, lng: longitude } = coordinates);
		//zoom = 19;
		showMap = true;
	}

	function handleError(err: any, message: string = 'An error occurred') {
		console.error(message, err);
		loading = false;
		query = '';
	}

	$: if (chatMessages.length) {
		scrollToBottom();
	}

	function scrollToBottom() {
		setTimeout(() => {
			scrollToDiv?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	}
</script>

<div class="flex flex-col md:flex-row w-full px-5 py-5">
	<!-- Chat Column -->
	<div class="flex flex-col w-full md:w-1/2 h-screen rounded-2xl overflow-hidden mr-2">
		<div class="flex flex-col w-full h-full">
			<div class="p-4">
				<h1 class="text-2xl font-bold text-center">Steinbo(T) Solar Expert</h1>
				<p class="text-sm italic text-center">Powered by gpt-4 🔆</p>
			</div>
			<div class="flex-grow rounded-md p-4 overflow-y-auto">
				<div class="flex flex-col gap-2">
					<ChatMessage
						type="assistant"
						message="🌞🏡 Welcome to AI Solar Pro! 🌞🏡

					Hello there! I'm your friendly virtual assistant, here to shine a light on the wonderful world of solar energy for your single-family home! 🏠✨
					
					What I Can Do For You:
					
					1) Solar Education: Have questions about solar energy? I'm here to help! From the basics of solar power to the specific advantages it offers for single-family homes, I've got the info. 📚☀️
					
					2)Swiss Solar Insights: Interested in solar incentives in Switzerland? Ask away! I'm equipped with all the latest details for each Canton, ensuring you get the most accurate and relevant information. 🇨🇭💰
					
					3)Solar Potential Analysis: Curious about how much solar power your home can generate? Give me your address, and I'll calculate your solar potential and environmental impact. 📏🔆"
					/>
					{#each chatMessages as message}
						<ChatMessage type={message.role} message={message.content} />
					{/each}
					{#if loading}
						<ChatMessage type="assistant" message="Loading..." />
					{/if}
				</div>
				<div class="" bind:this={scrollToDiv} />
			</div>
			<form class="flex w-full gap-4 bg-gray-900 p-4" on:submit|preventDefault={handleSubmit}>
				<input
					type="text"
					class="input input-bordered flex-grow"
					bind:value={query}
					disabled={loading}
				/>
				<Button type="submit" disabled={loading}>Send</Button>
			</form>
		</div>
	</div>

	<!-- Map Column -->
	<div class="hidden md:block w-full md:w-1/2 h-screen rounded-2xl overflow-hidden ml-2 relative mt-2 md:mt-0">
		{#if showMap}
			<OlMap {latitude} {longitude} {zoom} />
			{#if solarPanelReport}
				<SolarPanelReport {solarPanelReport} />
			{:else if solarPanelData}
				<SolarPanelData {solarPanelData} />
			{/if}
		{:else}
			<img src="house_panels.png" alt="Placeholder" class="w-full h-full object-cover" />
		{/if}
	</div>
</div>
