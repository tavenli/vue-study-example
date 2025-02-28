import './assets/main.css'

import { createApp } from 'vue'
import naive from "naive-ui";
import App from './App.vue'

//createApp(App).mount('#app')

const app = createApp(App);
app.use(naive);
app.mount("#app");

