import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
import { VueExtendLayout, layout } from "vue-extend-layout";

import "./plugins";

// Vue.use(VueExtendLayout);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  ...App
  // ...layout
});
