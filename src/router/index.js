import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
import config from '@/config'
import util from '@/utils'
import routers from './routers'
Vue.use(Router)
const RouterConfig = {
  mode: 'history', // history hash
  base: config.root,
  routes: routers
}
const router = new Router(RouterConfig)
var currentRouter = null
router.toReferrer = function () {
  if (!currentRouter) router.push({path: '/'})
  else router.push({path: currentRouter})
}
router.beforeEach((to, from, next) => {
  util.title(to.meta.title)
  if (to.name !== 'login') {
    currentRouter = to.path
  }
  next()
})
router.afterEach(() => {
  window.scrollTo(0, 0)
  // var currentRoutePath = router.currentRoute.path
  // store.commit('breadcrumb', currentRoutePath)
  // store.commit('menu', router.currentRoute)
})
export default router
