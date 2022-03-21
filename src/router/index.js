import Vue from 'vue'
import VueRouter from 'vue-router'
import { pages } from './pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout'),
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      ...pages
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
