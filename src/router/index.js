import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router
