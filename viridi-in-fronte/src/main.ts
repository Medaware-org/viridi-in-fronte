import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import '@/assets/main.css'
import CatalystApi from "@/api/CatalystApi";

// TODO Change this to your local Catalyst server URL
CatalystApi.init("http://localhost:8080")

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
