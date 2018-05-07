<template>
  <section>
    <tools-bar :is-add="false" :title="title"></tools-bar>
    <mark-editor :is-edit="false" :content="content"></mark-editor>
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
    title () {
      return this.article.title
    },
    content () {
      return this.article.content
    },
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
