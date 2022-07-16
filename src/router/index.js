import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Signin from '../views/Signin.vue'
import Join from '../views/Join.vue'
import About from '../views/About.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home  
  },
  {
    path:'/about',
    name:'about',
    component: About,
    meta: {
      authRequired: true
  }
  },
  {
    path:'/menu',
    name:'menu',
    component:Menu
  },
  {
    path:'/sign-in',
    name:'signin',
    component:Signin
  },
  {
    path:'/join',
    name:'join',
    component:Join
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
 