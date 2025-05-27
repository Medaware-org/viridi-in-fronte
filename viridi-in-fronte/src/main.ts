import {createApp} from 'vue'
import {createPinia} from 'pinia'

import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura";

import App from '@/App.vue'
import router from '@/router'
import '@/assets/main.css'
import CatalystApi from "@/api/CatalystApi";
import {ToastService} from "primevue";

// TODO Change this to your local Catalyst server URL
CatalystApi.init("https://api.medaware.dev")

const app = createApp(App)
        .use(PrimeVue, {
                theme: {
                        preset: Aura
                }})
        .use(ToastService)
        .use(createPinia())
        .use(router)
        .mount('#app')
