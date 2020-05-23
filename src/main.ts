import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueScrollTo from "vue-scrollto";
import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

const socket = io("https://sio1.vincentjonathan.com:3000");
Vue.use(VueSocketIOExt, socket);

Vue.mixin({
  methods: {
    getImgUrl(name) {
      const images = require.context("./assets/img", false, /\.png$/);
      return images("./" + name);
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
