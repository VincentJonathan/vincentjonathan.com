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
            <p class="body-1 font-weight-light">{{ project.description }}</p>
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
      title: "Colte",
      description:
        "Colte is a website for Indonesian programmer and developer community",
      github: "https://github.com/colte-dev/colte.dev/",
      site: "http://colte.dev/",
      tags: ["Vue", "Quasar", "MongoDB", "Express.js", "Redis"]
    },
    {
      title: "Web Frameworks Benchmark",
      description:
        "Colte is a website for Indonesian programmer and developer community",
      github:
        "https://github.com/SuspiciousLookingOwl/web-frameworks-benchmark",
      site: "https://web-frameworks-benchmark.netlify.app/",
      tags: ["React"]
    },
    {
      title: "youtubei",
      description:
        "youtubei is a simple javascript package to fetch information from Youtube",
      github: "https://github.com/SuspiciousLookingOwl/youtubei/",
      site: "https://www.npmjs.com/package/youtubei/",
      tags: ["Typescript"]
    },
    {
      title: "vincentjonathan.com",
      description: "My personal website",
      github: "https://github.com/SuspiciousLookingOwl/vincentjonathan.com",
      site: "https://vincentjonathan.com/",
      tags: ["Vue", "Vuetify", "Socket.IO"]
    },
    {
      title: "Socket.IO Emitter [VSCode]",
      description:
        "Socket.IO Emitter is a simple Visual Studio Code extension that allows you to connect to a Socket.IO server, listens to VSCode events, and emits it to your server",
      github:
        "https://github.com/SuspiciousLookingOwl/vscode-socket.io-emitter",
      site:
        "https://marketplace.visualstudio.com/items?itemName=vincentjonathan.socket-io-emitter",
      tags: ["Socket.IO"]
    },
    {
      title: "Keyblind",
      description:
        "Keyblind is a typing practice website with many language and options to choose",
      site: "https://keyblind.netlify.app/",
      github: "https://github.com/SuspiciousLookingOwl/keyblind",
      tags: ["Vue"]
    },
    {
      title: "DMR",
      description:
        "DMR is a private web application for store stock management",
      tags: ["Express", "MySQL", "Vue", "Quasar"]
    }
  ];
}
</script>
