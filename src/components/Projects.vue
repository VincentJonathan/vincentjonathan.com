<template>
  <section id="projects">
    <v-row class="px-md-6 py-12 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">Projects</h3>
      </v-col>
      <v-col>
        <v-row v-for="(project, index) in projects" :key="index">
          <v-col cols="12" lg="6" class="no-decoration">
            <h5 class="title primary--text mb-1">{{ project.title }}</h5>
            <p class="body-2 font-weight-light">{{ project.description }}</p>
            <v-row class="ml-n1">
              <v-col cols="auto">
                <v-row>
                  <v-col
                    cols="auto"
                    class="pa-1"
                    v-for="tag in project.tags"
                    :key="tag"
                  >
                    <v-chip color="primary" outlined small>
                      {{ tag }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-col>
              <v-spacer />
              <v-col cols="auto" class="text-right">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="mr-4 white--text"
                >
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
                <a
                  v-if="project.site"
                  :href="project.site"
                  target="_blank"
                  class="mr-4 white--text"
                >
                  <font-awesome-icon :icon="['fas', 'eye']" />
                </a>
              </v-col>
            </v-row>
            <v-divider></v-divider>
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
export default class Projects extends Vue {
  projects = [
    {
      title: "Nobar",
      description: "Nobar is a simple website to watch youtube videos together",
      github: "https://github.com/VincentJonathan/nobar-vue/",
      site: "http://nobar.vincentjonathan.com/",
      tags: ["Vue", "Vuetify", "Socket.IO"]
    },
    {
      title: "Ulas",
      description:
        "Ulas is a website that allows user to give a review to a product or place",
      site: "http://ulas.vincentjonathan.com/",
      tags: ["Vue", "Vuetify", "Flask", "mongoDB"]
    },
    {
      title: "scrape-yt",
      description:
        "scrape-yt is a simple javascript package to scrape information from Youtube",
      github: "https://github.com/VincentJonathan/scrape-yt/",
      site: "https://www.npmjs.com/package/scrape-yt/",
      tags: ["Javascript", "Typescript", "cheerio"]
    },
    {
      title: "vincentjonathan.com",
      description: "My personal website",
      github: "https://github.com/VincentJonathan/vincentjonathan.com",
      site: "https://vincentjonathan.com/",
      tags: ["Vue", "Vuetify", "Socket.IO"]
    },
    {
      title: "Socket.IO Emitter [VSCode]",
      description:
        "Socket.IO Emitter is a simple Visual Studio Code extension that allows you to connect to a Socket.IO server, listens to VSCode events, and emits it to your server",
      github: "https://github.com/VincentJonathan/vscode-socket.io-emitter",
      site:
        "https://marketplace.visualstudio.com/items?itemName=vincentjonathan.socket-io-emitter",
      tags: ["Socket.IO"]
    },
    {
      title: "Keyblind",
      description:
        "Keyblind is a typing practice website with many language and options to choose",
      site: "https://keyblind.com",
      tags: ["Vue"]
    },
    {
      title: "DMR",
      description:
        "DMR is a private web application for store inventory management",
      tags: ["Slim", "MySQL", "Vue", "BootstrapVue"]
    }
  ];
}
</script>
