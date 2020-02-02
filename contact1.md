---
layout: default
title: Contact Long Haul
---
<html>
<head>
	   <meta charset="utf-8">
	   <meta name="viewport" content="width=device-width, initial-scale=1.0">	
     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css"
            integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
            crossorigin=""/>
    <link rel="stylesheet" href="/src/plugins/leaflet-search-master/src/leaflet-search.css" />
     <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"
            integrity="sha512-tAGcCfR4Sc5ZP5ZoVz0quoZDYX5aCtEm/eu1KhSLj2c9eFrylXZknQYmxUssFaVJKvvc0dJQixhGjG2yXWiV9Q=="
            crossorigin=""></script>            
     <script type="text/javascript" src="/src/plugins/leaflet-ajax/dist/leaflet.ajax.min.js"></script>           
     <script src="/data/wald.js"
             integrity ="sha384-9n+5qBid8T6CAGn/asTCqn1sjAUCTMBpcbtql7rMnlsMPCdj0ahpzU9qZ7Ghjbqz"
             crossorigin=""></script>
     <script src="/data/deeper.js"></script>
     <script src="/data/states/worldstates.js"></script>
     <script src="https://unpkg.com/leaflet.vectorgrid@latest/dist/Leaflet.VectorGrid.bundled.js"></script>          
     <script src="https://unpkg.com/shpjs@latest/dist/shp.js"></script>    
     <script src="/src/plugins/leaflet.shapefile-gh-pages/leaflet.shpfile.js"></script>
    <script src="/data/tiffs/Caldern1_trans.jpeg"></script>
    <script src="/src/plugins/leaflet-search-master/src/leaflet-search.js"></script>    
    <style type="text/css">
        .countryLabel{
            color: darkgray;
            background: rgba(255, 255, 255, 0);
            border:0;
            border-radius:0px;
            box-shadow: 0 0px 0px;
            font-weight: bold;
    }
        </style>
  </head>
<body>
    
<div>    
<div id="contact">
<h1 class="pageTitle">Schreib uns</h1>
<div class="contactContent">
    <p class="intro">This is an example Contact page. If you want to make changes then do so in the <code>contact.html</code> file.</p>
    <p>The form is provided by <a href="https://formspree.io/">Formspree.</a> Follow the directions on their site to set up the form for use.</p>
    <p>If you have questions about the theme feel free to <a href="mailto:brimaidesigns@gmail.com">email me</a> or create an issue on <a href="https://github.com/brianmaierjr/long-haul">GitHub</a>. Enjoy!</p>
  </div>
  <form action="https://formspree.io/l-giese@web.de" method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="full-width"><br>
    <label for="email">Email Address</label>
    <input type="email" id="email" name="_replyto" class="full-width"><br>
    <label for="message">Message</label>
    <textarea name="message" id="message" cols="30" rows="10" class="full-width"></textarea><br>
    <input type="submit" value="Send" class="button">
  </form>
</div>
    
</body>

{% leaflet_map { "zoom" : 4,
            "providerBasemap": "MapBox"
            "maxZoom" : 18 } %}
    {}
{% endleaflet_map %} 


{% leaflet_map {"zoom" : 4 } %}

    {% leaflet_marker { "latitude" : 48.7596,
                       "longitude" : -113.787,
                       "popupContent" : "Glacier National Park, Montana"} %}

    {% leaflet_geojson {
        "type": "Feature",
        "properties": { "popupContent": "The whole state of North Dakota",
                        "href": "https://nd.gov" },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-104.05, 48.99],
                [-97.22,  48.98],
                [-96.58,  45.94],
                [-104.03, 45.94],
                [-104.05, 48.99] ]] } } %}

{% endleaflet_map %}

</html>

<!--       
var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ2llc2VsYSIsImEiOiJjamp5aXprZ25hNnI1M3dyNXAzMHEydWZrIn0.myomssXvnHLk8ad6o1B_Qg'
            });

            
            var satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Map data &copy; i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community, <a href="http://www.esri.com/">Esri</a>',
                maxZoom: 18,               
            });
            
            var baseMaps = {
                'Streets' : streets,
                'Satellite' : satellite
            };
            var geojsonLayer = L.geoJson(wald)
  
            
            var rivermark = L.marker([-1.537752, -78.676270]);
            var riverpop = rivermark.bindPopup('Rivers Ecuador').openPopup();
            
            function onEachfeature(feature, layer) {
                layer.on({
                    click: function(e){
                    var ourPopup = 'Depth:'+ e.target.feature.properties.Depth;
                    layer.bindPopup(ourPopup).openPopup(e.latlng);
                    }
                });
            }
            
            var geojsonLayer3 = L.geoJson(deeper, {
                onEachFeature: onEachfeature
            });
            

            function onEachFEature(feature, layer) {
                 layer.bindTooltip(
                     feature.properties.LONG_NAME,
    	               {
        	           direction:'center',
        	           className: 'countryLabel'
    	               });
            }
            
            function style(feature) {
                return {
                    fill: 'true',
                    fillColor: 'rgba(255, 255, 255, 0)',
                    weight: 1,
                    opacity: 1,
                    color: 'grey',
                    fillOpacity: 0.7,
                    clickable: 'false'
                };
            }

            
            var worldstates = L.geoJson(worldstates, {
                onEachFeature: onEachFEature,
                style: style
            });

            
            var raster = L.imageOverlay('data/tiffs/Caldern1_trans.jpeg',
                                       [[50.83929,8.687432],[50.85735,8.687432],
                                        [50.83929,8.715955],[50.85735,8.715955]]).addTo(mymap);
            
            var searchControl = new L.Control.Search({
		      layer: worldstates,
                propertyName: 'LONG_NAME',
                marker: false,
                moveToLocation: function(latlng, title, mymap) {
                    //map.fitBounds( latlng.layer.getBounds() );
                    var zoom = mymap.getBoundsZoom(latlng.layer.getBounds());
                    mymap.setView(latlng, zoom); // access the zoom
                }
            });
            searchControl.on('search:locationfound', function(e) {

                //console.log('search:locationfound', );
                //map.removeLayer(this._markerSearch)
                e.layer.setStyle({fillColor: 'grey', color: 'grey', opacity: 0.7});
                if(e.layer._popup)
                    e.layer.openPopup();
                }).on('search:collapsed', function(e) {
                    featuresLayer.eachLayer(function(layer) {	//restore feature color
                    featuresLayer.resetStyle(layer);
                });	
            });
            
            mymap.addControl( searchControl );  //inizialize search control
            
            var overlayMaps = {
                'States' : worldstates,
                'CaldernTest' : geojsonLayer,
                'popup' : geojsonLayer3,
                'cadernRaster' : raster
            };
            
            streets.addTo(mymap);
            satellite.addTo(mymap);
            worldstates.addTo(mymap);
            geojsonLayer.addTo(mymap);
            riverpop.addTo(mymap);
            geojsonLayer3.addTo(mymap);
            raster.addTo(mymap);
           
            L.control.layers(baseMaps, overlayMaps).addTo(mymap);
            
    -->
               


<!--some unused code: L.Projection.LonLat-->
<!-- esri worl imagery arcgis online -->
           <!-- var biotope = new L.Shapefile("http://vhrz669.hrz.uni-marburg.de:8080/html/shptest/BasisDataEcuador.zip"); -->
        <!-- + 'Biotope' : biotope in overlayMaps + biotope.addTo(mymap);-->
 <!--  var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
L.marker([50.505, 30.57], {icon: myIcon}).addTo(map); -->
 <!-- <script type="text/javascript" src="https://unpkg.com/geotiff@0.4.1/dist/main.js"></script>
    <script type="text/javascript" src="https://unpkg.com/plotty@0.2.0/src/plotty.js"></script>
    <script src="src/plugins/leaflet-geotiff/leaflet-geotiff.js"></script> -->
    <!-- Load any renderer you need -->
    <!-- var mymap = L.map('mapid').setView([-1.017356, -79.475394], 6); -->
    <!-- <script src="src/plugins/leaflet-geotiff/leaflet-geotiff-plotty.js"></script>
         <script src="src/plugins/leaflet-geotiff/leaflet-geotiff-vector.js"></script> -->

        <!---var geojsonLayer2 = L.geoJson(BaseECproj) 
                'RiversEcuador' : geojsonLayer2,
            geojsonLayer2.addTo(mymap);

-->
