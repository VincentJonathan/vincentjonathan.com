<template>
  <section id="hero">
    <v-img class="bg-main" src="@/assets/img/bg.jpg">
      <v-row
        class="fill-height text-right pa-md-5 pa-3 mx-0 align-center justify-center"
      >
        <div class="text-center bg-dark pa-8">
          <div class="text-uppercase display-1">Vincent Jonathan</div>
          <h1 class="primary--text text-uppercase display-3">
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
