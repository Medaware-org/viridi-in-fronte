import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import ImprintView from '@/views/ImprintView.vue'
import AboutView from '@/views/AboutView.vue'
import ArticleView from "@/views/ArticleView.vue";
import ArticlesDashView from "@/views/ArticlesDashView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticlesDashView
    },
    {
      path: '/ai-search',
      name: 'ai-search',
      component: SearchView
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: ImprintView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found page',
      redirect: '/'
    }
  ]
})

export default router
