import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // For all routes, use saved position if available, otherwise scroll to top
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutUsView.vue')
    },
    {
      path: '/concept',
      name: 'concept',
      component: () => import('@/views/ConceptView.vue')
    },
    {
      path: '/a-la-carte',
      name: 'a-la-carte',
      component: () => import('@/views/ALaCarteView.vue')
    }
  ]
})

export default router
