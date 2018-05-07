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
</style>
