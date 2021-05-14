import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faEye,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

Vue.use(Vuetify);
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(
  faGithub,
  faStackOverflow,
  faMapMarkerAlt,
  faEnvelope,
  faEye,
  faChevronRight,
  faChevronLeft
);

export default new Vuetify({
  icons: {
    iconfont: "faSvg"
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.lighten1,
        secondary: "#111314",
        background: "#181a1f"
      }
    }
  }
});
