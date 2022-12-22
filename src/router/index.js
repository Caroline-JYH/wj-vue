import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/home'
import LibRaryIndex from '../components/library/LibRaryIndex'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'LibRary',
          component: LibRaryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
