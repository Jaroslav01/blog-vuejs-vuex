import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/styles/style.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App)
app.use(router)
app.use(store)
app.component(VueCountdown.name, VueCountdown);

app.mount('#app')