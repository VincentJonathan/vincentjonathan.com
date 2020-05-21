<template>
  <v-navigation-drawer
    app
    fixed
    permanent
    color="secondary"
    v-if="!$vuetify.breakpoint.smAndDown"
  >
    <v-row
      class="flex-column fill-height py-5 mx-0 align-center"
      mobile-break-point="sm"
    >
      <h2 class="headline text-center">Vincent Jonathan</h2>
      <v-divider class="my-4" />
      <v-btn
        v-for="(nav, i) in navs"
        :key="i"
        text
        class="body-2 my-2 font-weight-light"
        v-scroll-to="nav.scrollTo"
      >
        {{ nav.title }}
      </v-btn>
      <v-spacer />
      <div class="no-decoration">
        <a
          href="https://github.com/VincentJonathan"
          target="_blank"
          class="mx-4"
        >
          <v-icon>fab fa-github</v-icon>
        </a>
        <a
          href="https://stackoverflow.com/users/12397250/owl"
          target="_blank"
          class="mx-4"
        >
          <v-icon>fab fa-stack-overflow</v-icon>
        </a>
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Navigation extends Vue {
  navs = [
    {
      title: "About Me",
      scrollTo: "#about"
    },
    {
      title: "Skills",
      scrollTo: "#skills"
    },
    {
      title: "Projects",
      scrollTo: "#projects"
    },
    {
      title: "Learning Roadmap",
      scrollTo: "#learning"
    },
    {
      title: "Contact",
      scrollTo: "#contact"
    }
  ];
}
</script>
