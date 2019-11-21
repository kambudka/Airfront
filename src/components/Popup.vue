<template>
  <v-container align-start>
    <v-layout wrap>
      <v-flex xl12 sm12>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <h2>{{ title }}</h2>
          </v-col>
        </v-row>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <h3>{{ type }}</h3>
          </v-col>
        </v-row>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <div>{{ date }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <div>{{ shortDesc }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <div>{{ count }}/{{ maxCount }}</div>
          </v-col>
        </v-row>
        <v-row class="mb-1" no-gutters>
          <v-col>
            <v-btn color="success">Event</v-btn>
          </v-col>
          <v-col>
            <v-btn text color="primary">Close</v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
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

<style>
.container {
  padding: 0%;
}
</style>
