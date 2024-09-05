var map = L.map('map').setView([28, 77], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(latitude, longitude)

var marker = L.marker([latitude, longitude]).addTo(map);
