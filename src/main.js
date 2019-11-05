import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMapbox from "../node_modules/vue-mapbox";
import Mapbox from "mapbox-gl";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueMapbox, { mapboxgl: Mapbox });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
