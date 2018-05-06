<template>
  <section>
    <tools-bar :is-add="true"></tools-bar>
    <mark-editor></mark-editor>
  </section>
</template>
<script>
import ToolsBar from '@/base/toolsbar'
import MarkEditor from '@/base/markeditor'

export default {
  components: {
    ToolsBar, MarkEditor
  }
}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/mixin'

  .test
    background: #ccc
    position(absolute, 50px, 0, 0, 0)
    overflow-y: scroll
    overflow-x: hidden
</style>
