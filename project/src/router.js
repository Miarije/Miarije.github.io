import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Find from '@/views/Find.vue'
import Login from '@/views/password.vue'
import Admin from '@/views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/password',
      name: 'password',
      component: Login
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
