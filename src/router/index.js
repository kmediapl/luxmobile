import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import MojeZlecenia from '@/components/MojeZlecenia'
import DaneZlecenia from '@/components/DaneZlecenia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mz',
      name: 'MojeZlecenia',
      component: MojeZlecenia
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/zlecenia',
      name: 'DaneZlecenia',
      component: DaneZlecenia
    }
  ]
})
