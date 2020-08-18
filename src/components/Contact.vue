<template>
  <section id="contact">
    <v-row class="px-md-6 py-12 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">Contact Me</h3>
      </v-col>
      <v-col cols="12" class="no-decoration">
        <v-row>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fab', 'github']"
              />
            </div>
            <div class="mb-4">
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fas', 'envelope']"
              />
            </div>
            <div class="mb-4">
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fab', 'discord']"
              />
            </div>
            <div>
              <font-awesome-icon
                size="lg"
                class="primary--text"
                :icon="['fab', 'stack-overflow']"
              />
            </div>
          </v-col>
          <v-col cols="auto" class="pt-0">
            <div class="mb-4">
              <a
                href="https://github.com/SuspiciousLookingOwl"
                class="white--text"
                target="_blank"
              >
                VincentJonathan
              </a>
            </div>
            <div class="mb-4">
              <a
                href="mailto:me@vincentjonathan.com"
                class="white--text"
                target="_blank"
              >
                me@vincentjonathan.com
              </a>
            </div>
            <div class="mb-4">
              Owl#9652
            </div>
            <div>
              <a
                href="https://stackoverflow.com/users/12397250/owl"
                class="white--text"
                target="_blank"
              >
                Owl
              </a>
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
export default class Learning extends Vue {}
</script>
