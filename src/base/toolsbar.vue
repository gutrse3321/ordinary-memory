<template>
  <div class="toolbar">
    <div class="icon-menu-wrapper">
      <i class="icon-menu" @click="toggleShow"></i>
    </div>
    <div class="title">
      <i class="icon-lock" v-show="!isAdd"></i>
      <input class="title-input"
            type="text"
            ref="title"
            :placeholder="titlePlaceholder"
            v-focus="isAdd"
      >
    </div>
    <div class="tool-container" v-show="!isAdd">
      <div class="edit-icon-con">
        <i class="icon icon-edit"></i>
      </div>
      <div class="delete-icon-con">
        <i class="icon icon-delete"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    isAdd: {
      type: Boolean,
      default: false
    },
    titlePlaceholder: {
      type: String,
      default: '请输入标题'
    }
  },
  methods: {
    toggleShow () {
      this.setMenuShow(true)
    },
    ...mapMutations({
      setMenuShow: 'SET_MENU_SHOW'
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.toolbar
    position(absolute, 0, 0, 0, 0)
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    height: 50px
    color: $color-text
    .icon-menu-wrapper
      font-size: $font-size-medium-m
      flex-grow: 1
      opacity: 1
      transition: opacity .3s ease-out
      i
        width: 30px
        cursor: pointer
        display: block
      @media screen and (min-width: 40rem)
        opacity: 0
        i
          display: none
    .title
      position(relative, 0, 0, 0, 0)
      flex-grow: 4
      i
        width: 30px
        color: #ccc
        cursor: pointer
      .title-input
        appearance: none
        width: 80%
        background: transparent
        padding: .25rem .35rem
        font-size: $font-size-small
        color: #fff
        border-radius: 6px
        outline: 0
        border: none
        transition: all .6s ease
        &:hover
          border: 1px solid rgba(255, 255, 255, .6)
          background: rgba(255, 255, 255, .1)
        &:focus
          color: #000
          box-shadow: 0 0 8px #ccc inset
          background: rgba(255, 255, 255, .8)
    .tool-container
      flex-grow: 2
      display: flex
      flex-direction: row
      justify-content: space-around
      .icon
        font-size: $font-size-small
        width: 30px
      .edit-icon-con
        position(relative, 0, 0, 0, 0)
        &:after
          opacity: 0
          position(absolute, 20px, 0, 0, 0)
          min-width: 50px
          min-height: 18px
          content: '修改文章'
          padding: .3rem
          font-size: $font-size-small-s
          border-radius: 10px
          background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898
          background-blend-mode: multiply,multiply
          transition: opacity .2s
        &:hover
          &:after
            opacity: 1
      .delete-icon-con
        position(relative, 0, 0, 0, 0)
        &:after
          opacity: 0
          position(absolute, 20px, 0, 0, 0)
          min-width: 26px
          min-height: 18px
          content: '删除'
          padding: .3rem
          font-size: $font-size-small-s
          border-radius: 10px
          background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898
          background-blend-mode: multiply,multiply
          transition: opacity .2s
        &:hover
          &:after
            opacity: 1
</style>
