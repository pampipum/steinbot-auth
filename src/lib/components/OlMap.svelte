<script>
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import XYZ from 'ol/source/XYZ';
  import { fromLonLat } from 'ol/proj';
  import { onMount } from 'svelte';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import VectorSource from 'ol/source/Vector';
  import VectorLayer from 'ol/layer/Vector';
  import { Icon, Style } from 'ol/style';

  export let latitude;
  export let longitude;
  export let zoom;

  let myMap;

  onMount(async () => {
    const view = new View({
      center: fromLonLat([longitude, latitude], 'EPSG:3857'),
      zoom: zoom,
    });

    // Define the URLs for fetching map tiles through the CORS proxy
    const swissImageUrl = 'https://cors-anywhere.herokuapp.com/https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg';
    const solarImageUrl = 'https://cors-anywhere.herokuapp.com/https://wmts.geo.admin.ch/1.0.0/ch.bfe.solarenergie-eignung-daecher/default/current/3857/{z}/{x}/{y}.png';

    try {
      // Fetch map tiles
      const [swissImageLayer, solarEnergyLayer] = await Promise.all([
        fetchTileLayer(swissImageUrl),
        fetchTileLayer(solarImageUrl)
      ]);

      // Create a marker feature
      const marker = new Feature({
        geometry: new Point(fromLonLat([longitude, latitude])),
      });

      // Optionally, style your marker
      marker.setStyle(new Style({
        image: new Icon({
          // Example icon URL, you can use your own
          src: 'https://mapmarker.io/api/v3/font-awesome/v6/pin?text=D&size=50&color=000000&background=FFFFFF&hoffset=0&voffset=0'
        })
      }));

      // Create a vector source and layer
      const vectorSource = new VectorSource({
        features: [marker],
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      // Add the layers to the map
      myMap = new Map({
        target: 'map',
        layers: [swissImageLayer, solarEnergyLayer, vectorLayer],
        view: view,
      });

      // Update the view if myMap exists
      if (myMap) {
        myMap.setView(view);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  /**
   * Function to fetch a tile layer based on the given URL
   * @param {string} url - The URL of the tile layer
   * @returns {Promise<TileLayer>} - The fetched TileLayer
   */
  async function fetchTileLayer(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const source = new XYZ({
      url: url
    });
    return new TileLayer({ source });
  }
</script>

<div id="map" style="width: 100%; height: 100%;"></div>
