<template>
  <section id="learning">
    <v-row class="px-md-6 py-12 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">
          Learning Roadmap
        </h3>
      </v-col>
      <v-col cols="12" md="6" lg="5" class="font-weight-light no-decoration">
        My learning roadmap is based (but not stricted) on
        <a href="https://github.com/kamranahmedse" target="_blank">
          Kamran Ahmed's
        </a>
        <a href="https://roadmap.sh/frontend" target="_blank"> Frontend </a>,
        <a href="https://roadmap.sh/backend" target="_blank"> Backend </a> and
        <a href="https://roadmap.sh/devops" target="_blank"> DevOps </a>
        developer roadmap, but currently focusing more on Frontend and Backend.
        And most of my application design is based on
        <a href="https://github.com/gothinkster" target="_blank">Thinkster's</a>
        <a href="https://github.com/gothinkster/realworld" target="_blank">
          Real World Example
        </a>
      </v-col>
      <v-col cols="12" md="6" lg="7" class="pl-md-12"></v-col>
    </v-row>
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Learning extends Vue {}
</script>
