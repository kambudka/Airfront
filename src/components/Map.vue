<template>
  <div id="map" style="text-align: left">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="[19.080392, 52.125736]"
      :zoom="6"
      @load="onload"
      @mouseenter="check"
    >
      <Search> </Search>
      <MglNavigationControl :showZoom="true" :showCompass="false" />

      <MglMarker
        v-for="marker in markers.data.markers"
        :key="marker.id"
        :coordinates="marker.coords"
        :color="marker.color"
      >
        <MglPopup anchor="bottom-left">
          <Popup
            :title="marker.title"
            :shortDesc="marker.shortDesc"
            :type="marker.type"
            :date="marker.date"
            :maxCount="marker.maxCount"
            :count="marker.count"
          >
          </Popup>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Search from "@/components/ExpansionSearch";
import Mapbox from "mapbox-gl";
import Popup from "@/components/Popup";
import { MglMap, MglMarker, MglNavigationControl, MglPopup } from "vue-mapbox";

export default {
  name: "map",
  components: {
    MglMap,
    MglMarker,
    Popup,
    Search,
    MglPopup,
    MglNavigationControl
    //MglGeojsonLayer
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibWlrZWhhbWlsdG9uMDAiLCJhIjoiNDVjS2puUSJ9.aLvWM5BnllUGJ0e6nwMSEg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/light-v10", // your map style
      markers: [
        {
          id: 1,
          title: "Larpowisko",
          coords: [21.967764, 53.785334],
          shortDesc: "Impreza typu LARP w klimatach post-apo",
          type: "LARP",
          date: "2019-04-23T18:25:43.511Z",
          maxCount: 30,
          count: 10,
          color: "blue"
        }
      ]
    };
  },
  methods: {
    check() {},
    onload() {}
  },
  created() {
    const baseURI = "https://api.myjson.com/bins/zc18i";
    this.$axios.get(baseURI).then(response => (this.markers = response));
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
  text-align: center;
  align-content: center;
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
  border: 1px solid gray;
  background-color: lightblue;
}
</style>
