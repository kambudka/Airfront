<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="general"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Miasto (najbliższe)" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Preferowana odległość (km)"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Preferowane kategorie"
                    class="purple-input"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="First Name" class="purple-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Last Name" class="purple-input" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Adress" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="City" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Country" class="purple-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit(Thats 'Hire me' in english)."
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="general">
                    Update Settings
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  //
};
</script>
