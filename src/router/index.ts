import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/:page?',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    // lazy load
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/error',
    name: 'error',
    // lazy load
    component: () => import('../views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
