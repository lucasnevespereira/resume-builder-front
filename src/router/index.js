import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/templates',
      name: 'templates',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TemplatesView.vue')
    }
  ]
})

export default router
