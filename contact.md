---
layout: default
title: Kontakt
maps: true
---

<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.js'></script>
<link href='https://api.mapbox.com/mapbox.js/v3.2.1/mapbox.css' rel='stylesheet' />
</head>

<div id="contact">
    <h1 class="pageTitle">Schreib uns</h1>
    <div class="contactContent">
    <p class="intro">Interesse geweckt?</p>
    <p>Wenn du mehr Infos brauchst, mal reinschnuppern oder mitmachen willst, dann schreib uns! Wir freuen uns über Unterstützung beim ackern und neue Gartenfreunde!</p>
  </div>
  <form action="https://formspree.io/wachsenlassen@posteo.de" method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="full-width"><br>
    <label for="email">E-mail Addresse</label>
    <input type="email" id="email" name="_replyto" class="full-width"><br>
    <label for="message">Nachricht</label>
    <textarea name="message" id="message" cols="30" rows="10" class="full-width"></textarea><br>
    <input type="submit" value="Senden" class="button">
  </form>
</div>

<body>
<section>
<h3>Oder komm einfach vorbei...</h3>
    <div>
        <p>Den Garten findest du hier:</p>
        <p>Aus Richtung der Vitos Klinik kommend (auf der Karte in rot):</p>
        <p>Cappeler Str. 72, 35039 Marburg</p>
        </div>
        <div id="mapid" style ="height: 700px;"></div>
        <!-- Basemaps -->
        <script type="text/javascript">
            L.mapbox.accessToken = 'pk.eyJ1IjoiZ2llc2VsYSIsImEiOiJjamp5aXprZ25hNnI1M3dyNXAzMHEydWZrIn0.myomssXvnHLk8ad6o1B_Qg';
            var mymap = L.mapbox.map('mapid')
                .setView([50.800131, 8.772969], 14).addLayer(L.mapbox.styleLayer('mapbox://styles/giesela/ck63qwjjw0sed1ip7zff7tac1'));
            var satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Map data &copy; i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community, <a href="http://www.esri.com/">Esri</a>',
            });
            satellite.addTo(mymap);
            var baseMaps = {               
                'Satellit' : satellite,
                'Straßen' : mymap,
            };
            L.control.layers(baseMaps).addTo(mymap);
            var polygon = L.polygon([
                [50.794633, 8.770415],
                [50.794219, 8.770463],
                [50.794397, 8.771383],
                [50.794748, 8.771112]
                ], {color: 'yellow'}).addTo(mymap);
            var polyline1 = L.polyline([
                [50.794204, 8.770601],
                [50.794258, 8.770676],
                [50.794238, 8.770767],
                [50.794258, 8.770676],
                [50.793648, 8.770891],
                [50.79396, 8.770794],
                [50.794105, 8.772425]], {color: 'red'}).addTo(mymap);
            var yellowIcon = L.icon({
                iconUrl: '/assets/img/leaf.png',
                iconSize:     [70, 70], // size of the icon
                iconAnchor:   [35, 65], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            var marker = L.marker([50.794522, 8.770829], {icon: yellowIcon}).addTo(mymap);            
            var coordinates = L.popup();
            function onMapClick(e) {
                coordinates
                    .setLatLng(e.latlng)
                    .setContent("Was ist hier? " + e.latlng.toString())
                    .openOn(mymap);
            }            
            mymap.on('click', onMapClick);
            marker.bindPopup("<b>WachsenlassenEV</b><br>Gemeinschaftsgarten").closedPopup();
        </script>
            
            <!-- var streets = L.tileLayer('https://api.mapbox.com/mapbox://styles/giesela/ck63qwjjw0sed1ip7zff7tac1?access_token=' + L.mapbox.accessToken, {                
                attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                id: 'mapbox.streets'
            });            
                        
            var baseMaps = {
                'Streets' : streets,
                'Satellite' : satellite
            };
            streets.addTo(mymap);
             -->   

</section>
</body>
</html>