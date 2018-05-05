import * as types from './../mutation-types'

const mutations = {
  [types.SET_MENU_SHOW] (state, flag) {
    state.menuShow = flag
  }
}

export default mutations
