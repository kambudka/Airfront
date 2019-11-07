<template>
  <div id="map">
    <MglMap 
    :accessToken="accessToken" 
    :mapStyle="mapStyle"
    @map-load="onload"
    >
      <MglGeojsonLayer
        sourceId="geoJsonSource"
        :source="geoJsonSource"
        layerId="somethingSomething"
        :layer="geoJsonLayer"
      />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";

export default {
  name:'map',
  components: {
    MglMap,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/light-v10", // your map style
      geoJsonSource: {
        type: 'geojson',
        data: 'https://api.myjson.com/bins/lcwhw'
      },
      geoJsonLayer: {
        type: "symbol",
        layout: {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
          "icon-allow-overlap" : true,
          "text-allow-overlap": true
        }
        
      }
    };
  },
  methods:{
    onload(){
      
    }

  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
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
</style>