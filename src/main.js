import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "devextreme/dist/css/dx.light.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
