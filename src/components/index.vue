<template>
  <section>
    <div class="icon-wrapper" @click="toggleShow">
      <i class="icon-menu"></i>
    </div>
    <div class="content-title">
      平凡的记忆
      <span>"我们所度过的每一个日常,也许就是连续发生的奇迹"</span>
    </div>
    <div class="content-add-text" @click="addNote">
      <i class="icon-add"></i>
      新增日记
    </div>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    addNote () {
      this.$router.push({
        path: '/add'
      })
    },
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

.content-title
  position(absolute, 50%, 0, 0, 0)
  transform: translate3d(0, -60%, 0)
  text-align: center
  font-size: $font-size-medium-m
  span
    font-size: .5rem
.content-add-text
  position(absolute, 50%, 0, 0, 50%)
  transform: translate3d(-50%, -50%, 0) scale(1)
  border: 2px solid rgba(255, 255, 255, .3)
  border-radius: 30px
  width: 220px
  height: 70px
  font-size: $font-size-big
  color: $color-text-c
  text-align: center
  line-height: 70px
  transition: transform .8s, border .8s
  cursor: pointer
  &:hover
    transform: translate3d(-50%, -50%, 0) scale(1.2)
    border-color: $color-text-c
.icon-wrapper
  padding: .75rem .5rem
  font-size: $font-size-medium-m
  opacity: 1
  transition: opacity .3s ease-out
  i
    cursor: pointer
  @media screen and (min-width: 40rem)
    opacity: 0
</style>
