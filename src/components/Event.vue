<template>
  <v-container align-start>
    <v-layout justify-center wrap>
      <v-flex xs12 sm8>
        <v-card hover>
          <v-card-title>
            <h2>{{ title }}</h2>
          </v-card-title>

          <v-card-subtitle>
            <h3>{{ type }}</h3>
          </v-card-subtitle>
          <v-card-text>
            <div>{{ date }}</div>
            <div>{{ count }}/{{ maxCount }}</div>
            <div class="text--primary">
              <p class="display-1 text--primary">
                {{ longDesc }}
              </p>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="success">Click #1</v-btn>
            <v-btn text color="primary">Click #2</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    id: {
      type: Number,
      default: 1 
    },
    title: {
      type: String,
      default:
        "undefined"
    },
    longDesc: {
      type: String,
      default:
        "undefined"
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
  //data(){},
  // methods: {
  //  complete() {}
  //}
};
</script>
