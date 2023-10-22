import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "devextreme/dist/css/dx.light.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

/* add icons Line Awesome to the library */
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
