// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import VueProgressBar from 'vue-progressbar'
// import echarts from 'echarts'
const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
}
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Vuex)
Vue.use(VueProgressBar,options)

const store = new Vuex.Store({
  state: {
    flag: '',
    name: '11',
    login: false
  },
  mutations: {
    changeFlag (state, nvalue) {
      return state.flag = nvalue
    },
    changeName (state, nvalue) {
      return state.name += nvalue.n
    },
    islogin (state, nvalue) {
      return state.login = nvalue
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
export function getLogin () {
  var s = store.state.login
  return s
}
