import { createRouter, createWebHistory } from 'vue-router'
import Skills from '../views/Skills.vue'

console.log(import.meta)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
    },
  ],
})

export default router
