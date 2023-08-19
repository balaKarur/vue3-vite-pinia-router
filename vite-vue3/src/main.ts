import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router/index";

let pinia = createPinia();
let app = createApp(App)
app.use(pinia);
app.use(router);
app.mount('#app')
