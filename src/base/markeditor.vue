<template>
  <section class="markeditor-wrapper">
    <div class="marked">
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
@import '~common/stylus/markdown'

::-webkit-scrollbar
  width: 13px
  height: 13px
::-webkit-scrollbar-track
  display: none
::-webkit-scrollbar-thumb
  background-color: inherit
  border-radius: 10px

.markeditor-wrapper
  position(absolute, 50px, 0, 0, 0)
  background-color: rgba(255, 255, 255, 0)
  -webkit-background-clip: text
  overflow-y: scroll
  overflow-x: hidden
  transition: background-color .8s
  &:hover
    background-color: $color-text-a
  .marked
    padding: 1rem
</style>
