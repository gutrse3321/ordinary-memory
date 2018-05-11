import * as types from './../mutation-types'

const mutations = {
  [types.SET_MENU_SHOW] (state, flag) {
    state.menuShow = flag
  },
  [types.SET_ARTICLE] (state, article) {
    state.article = article
  },
  [types.SET_EDITOR] (state, flag) {
    state.editor = flag
  },
  [types.SET_MENU_LIST] (state, list) {
    state.menuList = list
  }
}

export default mutations
