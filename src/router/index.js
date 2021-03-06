import Vue from 'vue'
import Router from 'vue-router'
import Layouts from 'components/layouts'
import Index from 'components/index'
import Add from 'components/add'
import Article from 'components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layouts,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/add',
          component: Add
        },
        {
          path: '/article/:id',
          component: Article
        }
      ]
    }
  ]
})
