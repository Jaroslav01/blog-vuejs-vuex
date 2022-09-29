import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostDetailsView.vue')
  },
  {
    path: '/post-details/:id',
    name: 'post-details',
    component: () => import('../views/PostDetailsView')
  },
  {
    path: '/page-not-found',
    name: 'page-not-found',
    component: () => import('../components/AppPageNotFounded')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
