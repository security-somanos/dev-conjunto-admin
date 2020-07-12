import 'firebase'
import Vue from 'vue'
import App from './App.vue'
import Login from "./components/Login"
import Admin from './components/Admin'
import Ventas from './components/Ventas'
import Totals from './components/Totals'
import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'
import { rtdbPlugin } from 'vuefire'
import vueHeadful from 'vue-headful'

Vue.component('vue-headful', vueHeadful)
Vue.use(VueRouter)
Vue.use(Vue2Filters)
Vue.use(rtdbPlugin)


const routes = [
  { path: '/admin', component: Admin },
  { path: '/ventas', component: Ventas },
  { path: '/totals', component: Totals },
  { path: '/login', component: Login },
  { path: '/', component: Login }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

