<template>
  <div id="geopopip">
    <MglPopup
      ref="popup"
      :coordinates="getCoordinates"
      :closeButton="closeButton"
      :closeOnClick="closeOnClick"
      .map-popup-content.has-text-centered
      strong
      {{
      content}}
    >
    </MglPopup>
  </div>
</template>

<script>
import { MglPopup } from "vue-mapbox";

export default {
  name: "GeoPopup",
  components: {
    MglPopup
  },
  props: {
    coordinates: {
      type: Array,
      default: undefined /* this will not initialise the popup when you add it */
    },
    content: {
      type: Object,
      default() {
        return {};
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    popupContent: null,
    closeButton: false,
    closeOnClick: false,
    show: true
  }),
  watch: {
    show: function() {
      this.showMe();
    }
  },
  computed: {
    getCoordinates() {
      // Here we can do stuff with the coordinates if needed
      // ...
      return this.coordinates;
    }
  },
  methods: {
    showMe(){
      alert("lol");
      if (!this.show) {
        if (this.$refs.popup) {
          this.$refs.popup.popup.remove();
        }
      } else if (this.$refs.popup) {
        this.$refs.popup.popup.addTo(this.$store.map);
      }
    }
  }
};
</script>
<style scoped></style>
