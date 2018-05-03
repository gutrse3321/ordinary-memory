<template>
  <div id="app">
    <main class="container">
      <menu-list></menu-list>
      <keep-alive>
        <transition name="slide">
          <router-view/>
        </transition>
      </keep-alive>
    </main>
  </div>
</template>
<script>
import MenuList from 'components/menu-list'

export default {
  components: {
    MenuList
  }
}
</script>
<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.container
  position(absolute, 8px, 8px, 8px, 8px)
  transition: all .2s ease-out
  transform: translate3d(0, 0, 0)
  @media screen and (min-width: 60rem)
    left: $column
    right: $column
  @media screen and (min-width: 80rem)
    left: 2 * $column
    right: 2 * $column
.slide-enter-active
  transition: all .6s
.slide-enter, .fade-leave-to
  transform: translate3d(1rem, 0, 0)
  opacity: 0
</style>
