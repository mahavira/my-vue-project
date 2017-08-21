import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)
var token = localStorage.getItem('token') || ''
var user = JSON.parse(localStorage.getItem('user') || '{}')
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    menu: menu,
    menuActiveName: '',
    menuOpenNames: [],
    user: user,
    token: token
  },
  getters,
  mutations,
  actions
})

export default store
