// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import main from '@/components/main'
import Vuex from 'vuex'
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    changeName (state, nvalue) {
      return (state.name = nvalue)
    }
  }
})
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
