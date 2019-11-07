<template>
  <MglMap id="map"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
    @click="addSourceMarkers"
    @map-load="addMarkers"
  >
  <MglNavigationControl :showZoom="true" :showCompass="false" />
    <MglMarker v-for="marker in markers" 
     :key="marker.id" 
     :coordinates="marker.coords" 
     :color="marker.color"
    >
            <MglPopup :anchor="bottom-left" >
            <v-content>
              <Popup :text="marker.text"/>
            </v-content>
            </MglPopup>
    </MglMarker>
  </MglMap>

</template>

<script>
import { MglMap,MglMarker,Popup, MglNavigationControl   } from "vue-mapbox";
//import Popup from './Popup';

export default {
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
    Popup
  },
  //inject: ["mapbox", "map", "actions"],
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiemFsZ28iLCJhIjoiY2sybG5jZm5mMDg5azNvcGU1OXN2bWN5cCJ9.OVOPxFZXtOZz7zre4JI4yg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v10", // your map style
      coordinates: [-111.549668, 39.014],
      markerCoords: [ -88.225114, 41.7673166 ],
      
      markers: [
			  {text: 'Marker 1', coords: [ -88.225114, 41.7673166 ] , color:"red" },
			  {text: 'Marker 2', coords: [ -89.225114, 41.7673166 ], color:"blue"},
			  {text: 'Marker 3', coords: [ -87.225114, 42.7673166 ], color:"green"}
		  ]

    };
  },
methods: {
    mapLoaded(map) {
      this.map = map;
    },
    addSourceMarkers: function(){
      var test = '{ "markers" : [' +
      '{ "Id":1, "Name":"CQB", "ShortDesc":"Krotki opis","coords":[ -88.225114, 41.7673166 ] },' +
'{ "Id":2, "Name":"MILSIM", "ShortDesc":"Krotki opis opis","coords":[ -88.225114, 41.7673166 ] },' +
'{ "Id":3, "Name":"LARP", "ShortDesc":"Krotki","coords":[ -88.225114, 41.7673166 ] } ]}';
      var jsonMarkers = JSON.parse(test);
      var newCoord = jsonMarkers[jsonMarkers.length-1].coords
      newCoord[0] = newCoord[0] + 0.25;
			newCoord[1] = newCoord[1] + 0.25;
			this.markers.push({
				text:jsonMarkers.ShortDesc,
        coords: newCoord,
        color:"blue"
			})
    },
    clicked(){
        this.map.flyTo({center: [
            -74.50 + (Math.random() - 0.5) * 10,
            40 + (Math.random() - 0.5) * 10]});
        
     },
      addMarkers(map) {
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl')
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.032, 38.913]
            },
            properties: {
              title: 'Mapbox',
              description: 'Washington, D.C.'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.414, 37.776]
            },
            properties: {
              title: 'Mapbox',
              description: 'San Francisco, California'
            }
          }
        ]
      }

      geojson.features.forEach((marker) => {
        // create a HTML element for each feature
        const el = document.createElement('div')
        el.className = 'Map__marker'

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)
      })
    }
    }
}

</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: center;
}
.mgl-map-wrapper {
  height: 100%;
  position: absolute;
  width: 100%;
}
.mgl-map-wrapper .mapboxgl-map {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.mapboxgl-marker {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border:1px solid gray;
    background-color:lightblue;
}

</style>