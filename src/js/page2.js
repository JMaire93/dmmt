console.log('page2.js');
map = L.map('map').setView([46.603354, 1.8883335 ], 6);
L.tileLayer('https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=b914f1bc5df3487b90f45141a0956f7b', {
    attribution: '<a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> | <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>        .',
}).addTo(map);