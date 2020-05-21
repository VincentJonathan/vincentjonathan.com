<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <navigation />
    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<style>
@import "./assets/css/main.css";
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Navigation from "./components/Navigation.vue";
import Home from "./views/Home.vue";

@Component({
  components: {
    navigation: Navigation,
    home: Home
  }
})
export default class App extends Vue {}
</script>
