import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./style.css";

import PrimeVue from "primevue/config";

const app = createApp(App);

// Use the router
app.use(router);
// Use the vuex
app.use(store);
app.use(PrimeVue);

app.mount("#app");
