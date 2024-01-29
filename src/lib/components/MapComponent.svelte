<!-- MapComponent.svelte -->
<script>
    export let latitude;
    export let longitude;
    export let zoom;

    let mapElement;
    let map;

    import { onMount } from 'svelte';

    onMount(() => {
        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIt2qrYoiqJK-W46RWdydj6x9UAV7BtiM';
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
