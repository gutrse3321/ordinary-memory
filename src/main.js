import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 自定义全局指令
// 自动聚焦focus
Vue.directive('focus', {
  inserted: (el, binding) => {
    if (binding.value) {
      el.focus()
    } else {
      el.blur()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
