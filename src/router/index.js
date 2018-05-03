import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Add from 'components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
