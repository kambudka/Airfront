<template>
  <v-content>
    <v-app id="main-view" dark>
      <Menu />
      <Toolbar />
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-app>
  </v-content>
</template>

<script>
//import UserProfile from "@/components/UserProfile";
//import Map from "@/components/Map";
import Menu from "@/components/Menu";
import Toolbar from "@/components/Toolbar";
export default {
  name: "App",
  components: {
    //Map,
    Toolbar,
    Menu
  },
  metaInfo() {
    return {
      title: "Vuetify Admin Dashboard by ClintOxx"
    };
  }
};
</script>

<style></style>
