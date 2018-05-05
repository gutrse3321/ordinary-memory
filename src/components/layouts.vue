<template>
  <main class="container">
    <menu-list></menu-list>
    <div class="menu-overlay"
        v-show="menuShow"
        @click="toggleShow"
    ></div>
    <keep-alive>
      <section class="content" :class="containerCls">
        <transition name="slide">
          <router-view/>
        </transition>
      </section>
    </keep-alive>
  </main>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import MenuList from 'components/menu-list'

export default {
  components: {
    MenuList
  },
  computed: {
    containerCls () {
      return this.menuShow ? 'container-move' : ''
    },
    ...mapGetters([
      'menuShow'
    ])
  },
  methods: {
    toggleShow () {
      this.setMenuShow(false)
    },
    ...mapMutations({
      setMenuShow: 'SET_MENU_SHOW'
    })
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
.content
  position(absolute, 0, 0, 0, 0)
  transition: transform .2s ease
  @media screen and (min-width: 40em)
    left: $menu-width
    transform: translate3d(0, 0, 0) !important
.container-move
  transform: translate3d($menu-width, 0, 0)
.menu-overlay
  position(absolute, 0, 0, 0, 0)
  backgoround: rgba(0, 0, 0, .2)
  transform: translate3d($menu-width, 0, 0)
  cursor: pointer
  z-index: 1
.slide-enter-active
  transition: all .6s
.slide-enter, .fade-leave-to
  transform: translate3d(1rem, 0, 0)
  opacity: 0
</style>
