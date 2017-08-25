// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import mai from './components/main'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'Vuex'
import axios from 'axios'
import mock from 'mockjs'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(router)
// Vue.use(axios)
Vue.prototype.$http = axios
Vue.use(mock)

const store = new Vuex.Store({
  state: {
    x: '',
    y: ''
  },
  mutations: {
    setx (state, mes) {
      return state.x = mes
    },
    sety (state, mes) {
      return state.y = mes
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<mai/>',
  components: { mai },
  render: h => h(App)
})
