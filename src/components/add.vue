<template>
  <section>
    <tools-bar :is-add="true"></tools-bar>
    <mark-editor></mark-editor>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
import ToolsBar from '@/base/toolsbar'
import MarkEditor from '@/base/markeditor'

export default {
  components: {
    ToolsBar, MarkEditor
  },
  computed: {
    ...mapGetters([
      'article'
    ])
  },
  methods: {
    refresh () {
      if (!this.article.mid) {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.refresh()
  }
}
</script>
<style lang="stylus" scoped>
</style>
