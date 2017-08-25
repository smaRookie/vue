import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from './../components/main'
import d1 from './../components/d1.vue'
import d2 from './../components/d2.vue'
import d3 from './../components/d3.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'd1',
          name: 'd1',
          component: d1
        },
        {
          path: 'd2',
          name: 'd2',
          component: d2
        },
        {
          path: 'd3',
          name: 'd3',
          component: d3
        }
      ]
    }
  ]
})
