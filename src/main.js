import 'firebase'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
import { rtdbPlugin } from 'vuefire'
import vueHeadful from 'vue-headful'
import VueRouter from 'vue-router'

import './custom.scss'
import Navigation from '@/components/Navigation'
import HomeNavigation from '@/components/HomeNavigation'
import Login from './components/Login'
import Admin from './components/Admin'
import Ventas from './components/Ventas'
import VentasMinoristas from './components/VentasMinoristas'
import Totals from './components/Totals'
import Historiales from './components/Historiales'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component('vue-headful', vueHeadful)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(Vue2Filters)
Vue.use(rtdbPlugin)


const routes = [
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/ventas',
    component: Ventas
  },
  {
    path: '/ventasminoristas',
    component: VentasMinoristas
  },
  { 
    path: '/totals',
    component: Totals
  },
  {
    path: '/historiales',
    component: Historiales
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

