import {createApp} from 'vue'
import {createPinia} from 'pinia'

import PrimeVue from "primevue/config"
import Lara from "@primeuix/themes/lara";

import App from '@/App.vue'
import router from '@/router'
import '@/assets/main.css'
import CatalystApi from "@/api/CatalystApi";
import {ToastService} from "primevue";

// TODO Change this to your local Catalyst server URL
CatalystApi.init("http://localhost:8080")

const app = createApp(App)
        .use(PrimeVue, {
                theme: {
                        preset: Lara
                }})
        .use(ToastService)
        .use(createPinia())
        .use(router)
        .mount('#app')