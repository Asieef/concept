import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Admin from '../views/Admin.vue'
import Remote from '../views/Remote.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/remote',
    name: 'Remote',
    component: Remote
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
