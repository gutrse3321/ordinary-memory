<template>
  <section class="menu">
    <div class="menu-list">
      <a class="add-text">
        <i class="icon-add"></i>
        新增日记
      </a>
      <ul>
        <li class="list-item active">
          <i class="list-icon icon-face-happy"></i>
          在和解后的渐渐成熟
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-done"></i>
          在辗转中的度过
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-notbad"></i>
          纠结
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
        <li class="list-item">
          <i class="list-icon icon-face-lmfao"></i>
          冬天了
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

::-webkit-scrollbar
  width: 13px
  height: 13px
::-webkit-scrollbar-track
  display: none
::-webkit-scrollbar-thumb
  background-color: inherit
  border-radius: 10px

.menu
  position(absolute, 0, 0, 0, 0)
  width: $menu-width
  background-color: rgba(255, 255, 255, 0)
  -webkit-background-clip: text
  overflow-y: scroll
  overflow-x: hidden
  transition: background-color .8s
  &:hover
    background-color: $color-text-a
  .list-item
    display: block
    position(relative)
    padding: .75em 1em
    line-height: $font-size-medium
    text-align: left
    color: $color-text-b
    box-shadow: 0 1px 0 0 $color-text-b
    no-wrap()
    cursor: default
    transition: color .2s ease-out
    .list-icon
      float: left
      margin-right: .5rem
      font-size: $font-size-medium
      line-height: 1
    &:hover
      color: #fff
  .add-text
    display: block
    position(relative)
    padding: .75em 1em
    line-height: $font-size-medium
    text-align: left
    color: #969696
    cursor: pointer
    transition: all .3s
    .icon-add
      float: left
      margin-right: .5rem
      font-size: $font-size-small
      line-height: $font-size-medium
    &:hover
      color: $color-text-c
      padding: .75em 4.5em
  .active
    color: #fff
</style>
