<!-- MapComponent.svelte -->
<script>
    export let latitude;
    export let longitude;
    export let zoom;

    let mapElement;
    let map;

    import { onMount } from 'svelte';

    // Access the API key from the environment variable
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    onMount(() => {
        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.defer = true;
            script.async = true;
            script.onload = () => {
                initializeMap();
            };
            document.head.appendChild(script);
        }
    });

    function initializeMap() {
        const mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            tilt: 45
        };
        map = new google.maps.Map(mapElement, mapOptions);

        new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'House'
        });
    }

    $: if (map) {
        map.setCenter(new google.maps.LatLng(latitude, longitude));
        map.setZoom(zoom);
    }
</script>

<div bind:this={mapElement} class="w-full h-full"></div>
