<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-start justify-start justify-content-start>
      <v-flex>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header v-slot="{ open }">
              <v-row no-gutters>
                <v-col cols="4">Advanced Search</v-col>
                <v-col cols="8" class="text--secondary">
                  <v-fade-transition leave-absolute>
                    <span v-if="open" key="0"> </span>
                    <span v-else key="1">
                      {{ events.location }}
                    </span>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field>
                <v-icon slot="append" color="red">search</v-icon>
              </v-text-field>
              <v-slider
                v-model="menCount"
                label="Max"
                min="1"
                max="30"
              ></v-slider>
              <v-expansion-panels>
                <v-expansion-panel id="TypePanel">
                  <v-expansion-panel-header v-slot="{ open }">
                    <v-row no-gutters>
                      <v-col cols="4">Type</v-col>
                      <v-col cols="8" class="text--secondary">
                        <v-fade-transition leave-absolute>
                          <span v-if="open" key="0">
                            Pick type
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-container fluid>
                      <v-checkbox
                        v-model="selectedType"
                        label="GunFight"
                        value="GunFight"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedType"
                        label="MILSIM"
                        value="MILSIM"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedType"
                        label="LARP"
                        value="LARP"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="selectedType"
                        label="CQB"
                        value="CQB"
                      ></v-checkbox>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel id="DatePanel">
                  <v-expansion-panel-header v-slot="{ open }">
                    <v-row no-gutters>
                      <v-col cols="4">Date</v-col>
                      <v-col cols="8" class="text--secondary">
                        <v-fade-transition leave-absolute>
                          <span v-if="open" key="0">
                            Pick Date
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row justify="space-around" no-gutters>
                      <v-col cols="3">
                        <v-menu
                          ref="startMenu"
                          :close-on-content-click="false"
                          :return-value.sync="events.start"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="events.start"
                              label="Start date"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="date" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.startMenu.isActive = false"
                              >Cancel</v-btn
                            >
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.startMenu.save(date)"
                              >OK</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="3">
                        <v-menu
                          ref="endMenu"
                          :close-on-content-click="false"
                          :return-value.sync="events.end"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="events.end"
                              label="End date"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker v-model="picker" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.endMenu.isActive = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.endMenu.save(date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    date: null,
    events: {
      name: "",
      location: null,
      start: null,
      end: null
    },
    locations: [
      "Australia",
      "Barbados",
      "Chile",
      "Denmark",
      "Equador",
      "France"
    ],
    selectedType: [],
    menCount: 40
  })
};
</script>
<style>
.v-expansion-panel {
  max-width: 500px;
}
.v-expansion-panels {
  justify-content: start;
}
.v-expansion-panel-content__wrap {
  padding: 0%;
}
.v-input--checkbox {
  margin: 0%;
}
.v-text-field--is-booted {
  padding-right: 12px;
  padding-left: 12px;
  margin: 0%;
}
.v-input__slot {
  padding-right: 12px;
  padding-left: 12px;
}
</style>
