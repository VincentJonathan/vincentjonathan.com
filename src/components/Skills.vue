<template>
  <section id="skills">
    <v-row class="px-md-6 py-12 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">Skills</h3>
      </v-col>
      <v-col cols="12">
        <template v-for="skill in skills">
          <div :key="skill.title">
            <v-parallax
              :src="getImgUrl(skill.background)"
              class="mx-n5 mx-md-n11"
              :height="250"
            >
              <div class="pa-8">
                <v-row class="justify-center">
                  <v-col cols="auto" v-if="skill.logo">
                    <v-img
                      :src="getImgUrl(skill.logo)"
                      contain
                      width="50"
                      height="50"
                      :alt="skill.title"
                    ></v-img>
                  </v-col>
                  <v-col cols="auto" class="align-center d-flex">
                    <div class="display-1">
                      {{ skill.title }}
                    </div>
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col
                    cols="auto"
                    class="pa-1 text-center"
                    v-for="pill in skill.pills"
                    :key="pill"
                  >
                    <v-chip color="primary" outlined>
                      {{ pill }}
                    </v-chip>
                  </v-col>
                </v-row>
              </div>
            </v-parallax>
            <v-divider class="my-12"></v-divider>
          </div>
        </template>
      </v-col>
      <v-col cols="12">
        <v-slide-group class="" mandatory show-arrows>
          <v-slide-item v-for="skill in otherSkills" :key="skill.title">
            <v-row>
              <v-col cols="12" class="justify-center d-flex">
                <v-img
                  :src="getImgUrl(skill.logo)"
                  v-if="skill.logo"
                  contain
                  :width="$vuetify.breakpoint.mdAndUp ? '115' : '25'"
                  height="50"
                  :alt="skill.title"
                ></v-img>
              </v-col>
              <v-col cols="12" class="justify-center">
                <div class="text-center font-weight-light">
                  {{ skill.title }}
                </div>
              </v-col>
            </v-row>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Skills extends Vue {
  skills = [
    {
      title: "Vue.js",
      logo: "vue-logo.png",
      background: "vue.png",
      pills: ["Vuex", "Vue-Socket.IO", "Vuetify", "BootstrapVue"]
    },
    {
      title: "mongoDB",
      logo: "mongodb-logo.png",
      background: "mongodb.png",
      pills: ["Aggregation", "Transaction"]
    },
    {
      title: "MySQL",
      logo: "mysql-logo.png",
      background: "mysql.png"
    },
    {
      title: "Flask",
      logo: "flask-logo.png",
      background: "flask.png",
      pills: ["JWT", "PyMongo"]
    },
    {
      title: "express",
      logo: "",
      background: "express.png",
      pills: ["JWT", "Mongoose", "Passport"]
    },
    {
      title: "Slim",
      logo: "slim-logo.png",
      background: "slim.png",
      pills: ["JWT", "PDO"]
    }
  ];

  otherSkills = [
    {
      title: "Javascript",
      logo: "js-logo.png"
    },
    {
      title: "Typescript",
      logo: "ts-logo.png"
    },
    {
      title: "ESLint",
      logo: "eslint-logo.png"
    },
    {
      title: "Prettier",
      logo: "prettier-logo.png"
    },
    {
      title: "Python",
      logo: "python-logo.png"
    },
    {
      title: "Nginx",
      logo: "nginx-logo.png"
    },
    {
      title: "Redis",
      logo: "redis-logo.png"
    },
    {
      title: "JWT",
      logo: "jwt-logo.png"
    },
    {
      title: "Java",
      logo: "java-logo.png"
    },
    {
      title: "PHP",
      logo: "php-logo.png"
    },
    {
      title: "Docker",
      logo: "docker-logo.png"
    },
    {
      title: "Bootstrap",
      logo: "bootstrap-logo.png"
    },
    {
      title: "jQuery",
      logo: "jquery-logo.png"
    },
    {
      title: "REST API",
      logo: "rest-logo.png"
    },
    {
      title: "Socket.IO",
      logo: "socket.io-logo.png"
    },
    {
      title: "WebSocket",
      logo: "websocket-logo.png"
    }
  ];
}
</script>
