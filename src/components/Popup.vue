<template>
  <v-Card>
    <h3 class="red--text">Tytuł: {{ title }}</h3>
    <h3 class="red--text">Kategoria {{ type }}</h3>
    <h3 class="red--text">{{ shortDesc }}</h3>
    <h3 class="red--text">Data {{ date }}</h3>
    <h3 class="red--text">Max uczestnikow {{ maxCount }}</h3>
    <h3 class="red--text">Zapisanych {{ count }}</h3>
    <v-btn raised="true" to="/home">Click</v-btn>
  </v-Card>
</template>

<script>
export default {
  name: "PopupContent",
  props: {
    title: {
      type: String,
      default:
        "undefined" /* this will not initialise the popup when you add it */
    },
    shortDesc: {
      type: String,
      default:
        "undefined" /* this will not initialise the popup when you add it */
    },
    type: {
      type: String,
      default: "undefined"
    },
    date: {
      type: String,
      default: "undefined"
    },
    maxCount: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 5
    }
  }
};
</script>
