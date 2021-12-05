import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin } from 'pinia';

const pinia = createPinia();

Vue.use(PiniaVuePlugin);

Vue.config.productionTip = false;

const app = new Vue({
  pinia,
  render: (h) => h(App),
}).$mount("#app");

