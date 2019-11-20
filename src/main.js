import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMapbox from "../node_modules/vue-mapbox";
import axios from "../node_modules/axios";
import VueAxios from "../node_modules/vue-axios";
import Mapbox from "mapbox-gl";
import vuetify from "./plugins/vuetify";
import '../node_modules/material-design-icons-iconfont'

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueMapbox, { mapboxgl: Mapbox });

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
