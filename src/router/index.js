import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/", component: "Map" },
  { path: "/userprofile", component: "UserProfile" },
  { path: "/usersettings", component: "UserSettings" },
  { path: "/map", component: "TestMap" },
  { path: "/home", component: "Map" },
  { path: "/events", component: "Events" },
  { path: "/event", component: "Event" },
  {
    path: "event/:id",
    name: "eventSingle",
    component: () => import("../components/Event.vue")
  }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes
});
