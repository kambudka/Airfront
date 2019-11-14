<template>
  <v-container align-start fill-height fluid pa="5">
    <v-layout justify-center wrap column align start>
      <v-flex xs12 sm8>
        <v-content
          pa="0"
          v-for="marker in events.data.markers"
          :key="marker.id"
        >
          <router-link :to="'/event/' + marker.id">
            <Event
              :id="marker.id"
              :title="marker.title"
              :longDesc="marker.shortDesc"
              :type="marker.type"
              :date="marker.date"
              :maxCount="marker.maxCount"
              :count="marker.count"
            >
            </Event>
          </router-link>
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Event from "@/components/Event";
export default {
  name: "Dashboard",
  components: {
    Event
  },
  data() {
    return {
      events: []
    };
  },
  methods: {
    complete() {}
  },
  created() {
    const baseURI = "https://api.myjson.com/bins/zc18i";
    this.$axios.get(baseURI).then(response => (this.events = response));
    // We need to set mapbox-gl library here in order to use it in template
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
