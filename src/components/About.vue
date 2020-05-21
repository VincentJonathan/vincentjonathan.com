<template>
  <section id="about">
    <v-row class="px-6 py-10 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">About Me</h3>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="font-weight-light">
        I'm a junior full-stack developer, but currently focusing more on front
        end and back end developing, and after that i will improve my DevOps
        skill. I started learning about programming since mid 2017 and since
        then I've become passionate about programming.
      </v-col>
      <v-col cols="12" md="6" lg="7" class="pl-md-12">
        <v-row>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              <v-icon class="primary--text">fas fa-map-marker-alt</v-icon>
            </div>
            <div>
              <v-icon class="primary--text">fas fa-envelope</v-icon>
            </div>
          </v-col>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              Indonesia
            </div>
            <div>
              me@vincentjonathan.com
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class About extends Vue {}
</script>
