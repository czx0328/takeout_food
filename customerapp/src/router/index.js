import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import User from '../views/User.vue'
import Manger from '../views/Manger.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manger',
    component: Manger
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  },
  {
    path: '/manger',
    name: 'Manger',
    component: Manger,
    children:[
      {
        path:'user',
        component:User
      },
      {
        path:'order',
        component:Order
      },
      {
        path:'home',
        component:Home
      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
