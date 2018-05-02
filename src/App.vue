<template>
  <div id="app">
    <main class="container">
      <menu-list></menu-list>
      <router-view/>
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
  @media screen and (min-width: 60em)
    left: $column
    right: $column
  @media screen and (min-width: 80em)
    left: 2 * $column
    right: 2 * $column
</style>
