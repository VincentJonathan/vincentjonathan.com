import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.lighten1,
        secondary: "#181818",
        background: colors.grey.darken4
      }
    }
  }
});
