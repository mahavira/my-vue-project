import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
Vue.use(Router)
const RouterConfig = {
  mode: 'hash', // history hash
  routes: routers
}
const router = new Router(RouterConfig)
export default router
