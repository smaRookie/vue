// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
// import echarts from 'echarts'
const options = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
}

Vue.use(ElementUi)
Vue.use(Vuex)
Vue.use(VueProgressBar,options)
Vue.config.productionTip = false

const modela = {
  state: {
    name: 1
  },
  mutations: {
    chan (state,n) {
      return state.name= n
    }
  }
}
const modelb = {
  state: {
    name: 2
  }
}
const store = new Vuex.Store({
  // state: {
  //   flag: '',
  //   name: '11',
  //   login: false,
  //   totds: [12,10,13,15,20,21,35]
  // },
  modules: {
    a: modela,
    b: modelb
  },
  // mutations: {
  //   changeFlag (state, nvalue) {
  //     return state.flag = nvalue
  //   },
  //   changeName (state, nvalue) {
  //     return state.name += nvalue.n
  //   },
  //   islogin (state, nvalue) {
  //     return state.login = nvalue
  //   },
  //   fi (state,n) {
  //     axios.get('http://rapapi.org/mockjs/23070/api/products?').then((res)=> {
  //       console.log(res)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //
  //   }
  // },
  getters: {
    fil: state => {
      return state.totds.filter((totd) => totd>20)
    }
  },
  actions: {
    sss (context) {
      context.commit('fi',1)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
export function getLogin () {
  var s = store.state.login
  return s
}

axios.interceptors.request.use(function (config) {
  Vue.prototype.$Progress.start()
  console.log('ssygjgfjhss')
  return config
}, function (error) {
  Vue.prototype.$Progress.fail()
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  Vue.prototype.$Progress.finish()
  console.log('ssygjgfjhss')
  return response
}, function (error) {
  Vue.prototype.$Progress.fail()
  return Promise.reject(error)
})
