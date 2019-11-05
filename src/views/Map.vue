<template>
  <MglMap
    id="map"
    :mapboxGl="mapbox - gl"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
    @load="onMapLoaded"
  >
    <MglMarker :coordinates="coordinates">
      <v-icon slot="marker">mdi-map-marker</v-icon>
    </MglMarker>
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiemFsZ28iLCJhIjoiY2sybG5jZm5mMDg5azNvcGU1OXN2bWN5cCJ9.OVOPxFZXtOZz7zre4JI4yg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/light-v10", // your map style
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>

<style>
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
</style>
