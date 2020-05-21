<template>
  <div>
    <hero />
    <v-container fluid>
      <about />
      <skills />
      <projects />
      <learning />
      <contact />
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";

@Component({
  components: {
    hero: Hero,
    about: About,
    skills: Skills,
    projects: Projects,
    learning: Learning,
    contact: Contact
  }
})
export default class Home extends Vue {}
</script>
