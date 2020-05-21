<template>
  <section id="skills">
    <v-row class="px-6 py-10 mx-0">
      <v-col cols="12">
        <h3 class="primary--text display-2 font-weight-medium">Skills</h3>
      </v-col>
      <v-col cols="12">
        <template v-for="skill in skills">
          <div :key="skill.title">
            <v-parallax
              :src="getImgUrl(skill.background)"
              class="mx-n11"
              :height="300"
            >
              <div class="pa-8">
                <v-row class="justify-center">
                  <v-col cols="auto" v-if="skill.logo">
                    <v-img
                      :src="getImgUrl(skill.logo)"
                      contain
                      width="50"
                      height="50"
                    ></v-img>
                  </v-col>
                  <v-col cols="auto">
                    <div class="display-1">
                      {{ skill.title }}
                    </div>
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col
                    cols="12"
                    md="auto"
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
            <v-divider class="my-6"></v-divider>
          </div>
        </template>
      </v-col>
      <v-col cols="12">
        <h4 class="primary--text headline mb-4">Other Skills</h4>
        <div class="font-weight-light">
          <div class="mb-2">
            I mostly use Javascript / Typescript and Python, but i also know
            Java and PHP.
          </div>
          <v-row class="ml-n1">
            <v-col
              cols="auto"
              class="pa-1"
              v-for="pill in otherSkills"
              :key="pill"
            >
              <v-chip color="primary" outlined small>
                {{ pill }}
              </v-chip>
            </v-col>
          </v-row>
        </div>
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
      pills: ["Vuex", "Vue-Socket.io", "Vuetify", "BootstrapVue"]
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
    "Javascript",
    "Typescript",
    "Java",
    "PHP",
    "Bootstrap",
    "jQuery",
    "REST API",
    "socket.io"
  ];
}
</script>
