import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import ImpressumView from '@/views/ImpressumView.vue'
import AboutView from '@/views/AboutView.vue'
import HazardView from '@/views/HazardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ai-search',
      name: 'ai-search',
      component: SearchView
    },
    {
      path: '/hazard-search',
      name: 'hazard',
      component: HazardView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImpressumView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found page',
      redirect: '/'
    }
  ]
})

export default router
