<template>
  <section id="hero">
    <v-img class="bg-main">
      <v-row class="fill-height mx-0 align-center justify-end">
        <div class="text-center py-8 mr-4 pa-md-12 mr-md-12">
          <div
            class="text-uppercase text-right"
            :class="$vuetify.breakpoint.lgAndUp ? 'display-3' : 'display-2'"
          >
            Vincent Jonathan
          </div>
          <h1
            class="primary--text text-uppercase text-right"
            :class="$vuetify.breakpoint.lgAndUp ? 'display-4' : 'display-2'"
          >
            FULL STACK DEVELOPER
          </h1>
        </div>
      </v-row>
    </v-img>
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Hero extends Vue {}
</script>
