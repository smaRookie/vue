import Vue from 'vue'
import Router from 'vue-router'
import {getLogin} from './../main.js'
Vue.use(Router)
const login = r => require.ensure([], () => r(require('./../components/login')), 'login')
const main  = r => require.ensure([], () => r(require('./../components/main')), 'main')
const manage = r => require.ensure([], () => r(require('./../components/manage')), 'manage')
const report = r => require.ensure([], () => r(require('./../components/report')), 'report')
const details = r => require.ensure([], () => r(require('./../components/details')), 'details')
const router =new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: login,
    },
    {
      path: '/main',
      name: 'main',
      redirect: '/main/manage',
      meta: {
        requ: true
      },
      component: main,
      children: [
        {
          path: 'manage',
          name: 'manage',
          component: manage,
          meta: {
            requ: true
          }
        },
        {
          path: 'report',
          meta: {
            requ: true
          },
          component: report
        },
        {
          path: 'details',
          meta: {
            requ: true
          },
          component: details
        }
      ]
    }
  ]
})
router.beforeEach((to,from,next) => {
  var login = getLogin()
  if(to.meta.requ){
    if(localStorage.getItem('login')==='true'){
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})
export default router
