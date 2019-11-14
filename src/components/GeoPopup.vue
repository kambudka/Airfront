<template>
  <v-container>
    <MglPopup
      v-if="!show"
      ref="popup"
      :coordinates="getCoordinates"
      :closeOnClick="true"
      :closeButton="closeButton"
      anchor="bottom"
    >
      <VCard> <div>Hello, I'm popup!</div> </VCard>
    </MglPopup>
  </v-container>
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
      default: false
    }
  },
  data: () => ({
    popupContent: null,
    closeButton: false,
    closeOnClick: false
  }),
  watch: {
    coordinates: function() {
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
    showMe() {
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
