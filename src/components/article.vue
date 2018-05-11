<template>
  <section>
    <tools-bar :is-add="false" :title="title"></tools-bar>
    <mark-editor :is-edit="editor"></mark-editor>
    <div class="created-time">
      {{ time }}
    </div>
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
    time () {
      return this.article.createTime
    },
    ...mapGetters([
      'article',
      'editor'
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
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.created-time
  position(absolute, auto, 1rem, 1rem, auto)
</style>
