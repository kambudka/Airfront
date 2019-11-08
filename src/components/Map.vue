<template>
  <div id="map">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @load="onload"
      @mouseenter="check"
    >
      <MglGeojsonLayer
        sourceId="geoJsonSource"
        :source="geoJsonSource"
        layerId="geoLayer"
        :layer="geoJsonLayer"
      />
      <GeoPopup
        ref="popup"
        :coordinates="popupCoordinates"
        :content="popupContent"
        show="msg"
        anchor="bottom"
      >
      </GeoPopup>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import GeoPopup from "./GeoPopup";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";

export default {
  name: "map",
  components: {
    MglMap,
    GeoPopup,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/light-v10", // your map style
      popupCoordinates: [0, 0],
      msg: true,
      popupContent: null,
      geoJsonSource: {
        type: "geojson",
        data: "https://api.myjson.com/bins/lcwhw"
      },
      geoJsonLayer: {
        type: "symbol",
        layout: {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": [
            "Open Sans Semibold",
            "Arial Unicode MS Bold",
            "Arial Unicode MS Bold"
          ],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
          "icon-allow-overlap": true,
          "text-allow-overlap": true
        }
      }
    };
  },
  methods: {
    check() {},
    onload(e) {
      e.map.on("mouseenter", "geoLayer", event => {
        e.map.getCanvas().style.cursor = "pointer";
        const coordinates = event.features[0].geometry.coordinates.slice();
        const content = event.features[0].properties.name;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        this.popupCoordinates = coordinates;
        this.popupContent = content;
        this.msg = false; // not the best way to do this
      });
      e.map.on("mouseleave", "geoLayer", () => {
        e.map.getCanvas().style.cursor = "";
        this.$refs.popup.popup.remove(); // not the best way to do this
      });
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
