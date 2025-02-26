import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import "./style.css";
import "./assets/main.css"

const app = createApp(App);

// Use the router
app.use(router);
// Use the vuex
app.use(store);
// Use the prime
app.use(PrimeVue, {
     theme: {
         preset: Aura
     }
 });

app.mount("#app");
