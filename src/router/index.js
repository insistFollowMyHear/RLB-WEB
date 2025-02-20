import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
