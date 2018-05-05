import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './module/getters'
import state from './module/state'
import mutations from './module/mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 浏览器控制台显示状态日志，打包后不会显示
// 判断是否是生产环境
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
