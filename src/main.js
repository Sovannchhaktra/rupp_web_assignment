import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createI18n } from 'vue-i18n';

import "./style.css";
import "./assets/main.css"

import kh from './utils/json/i18n/kh.json';
import en from './utils/json/i18n/en.json';

// Create i18n instance
const i18n = createI18n({
    legacy: false,  // Required for Vue 3 Composition API
    locale: localStorage.getItem('lang') || 'en',   // Default locale
    fallbackLocale: 'en', // Fallback locale
    messages: { en, kh }
});

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
app.use(i18n);

app.mount("#app");
