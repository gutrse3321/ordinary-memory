import * as types from './../mutation-types'

const mutations = {
  [types.SET_MENU_SHOW] (state, flag) {
    state.menuShow = flag
  },
  [types.SET_ARTICLE] (state, article) {
    state.article = article
  }
}

export default mutations
