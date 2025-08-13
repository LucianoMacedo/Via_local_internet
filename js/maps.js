// Inicializa o mapa centralizado em Maracajá
var map = L.map('map').setView([-28.8467, -49.4494], 12);

// Adiciona o tile layer (mapa base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> colaboradores'
}).addTo(map);

// Adiciona um marcador em Maracajá
L.marker([-28.8467, -49.4494]).addTo(map)
    .bindPopup('<b>Maracajá</b><br>Estamos aqui!')
    .openPopup();

// Adiciona outro marcador em Arroio do Silva
L.marker([-28.9921, -49.4255]).addTo(map)
    .bindPopup('<b>Balneário Arroio do Silva</b><br>Também atendemos aqui!');
