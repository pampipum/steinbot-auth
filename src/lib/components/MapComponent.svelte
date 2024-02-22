<!-- MapComponent.svelte -->
<script lang="ts">
    export let latitude: number;
    export let longitude: number;
    export let zoom: number;

    let mapElement: HTMLElement;
    let map: google.maps.Map;

    import { onMount } from 'svelte';

    // Access the API key from the environment variable
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    onMount(() => {
        loadGoogleMapsApi().then(() => {
            initMap();
        }).catch(error => console.error("Google Maps API failed to load", error));
    });

    async function loadGoogleMapsApi() {
        if (window.google && window.google.maps) {
            return; // The Google Maps API is already loaded
        }

        await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = () => {
                resolve();
            };
            script.onerror = () => reject(new Error("Google Maps API failed to load"));
            document.head.appendChild(script);
        });
    }

    async function initMap() {
        const { Map, Marker, LatLng } = await google.maps;
        map = new Map(mapElement, {
            center: new LatLng(latitude, longitude),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            tilt: 45
        });

        new Marker({
            position: new LatLng(latitude, longitude),
            map: map,
            title: 'Location'
        });
    }

    $: if (map) {
        map.setCenter(new google.maps.LatLng(latitude, longitude));
        map.setZoom(zoom);
    }
</script>

<div bind:this={mapElement} class="w-full h-full"></div>
