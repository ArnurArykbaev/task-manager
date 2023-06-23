import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import "./plugins/bootstrap";
import "./styles/main.css";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false
Vue.use(BootstrapVue);

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
