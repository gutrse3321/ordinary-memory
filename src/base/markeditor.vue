<template>
  <section class="markeditor-wrapper">
    <div class="marked" v-show="!isEdit" v-html="content"></div>
    <div class="editor" v-show="isEdit">
      <textarea class="textarea"
                :value="inputVal"
                @input="updateVal"
                ref="textarea"
      ></textarea>
      <div class="marked"
          v-html="markdown"
          ref="editMark"
      ></div>
      <div class="iconShow-wrapper">
        <i class="icon-face-lmfao" @click="toggleShow"></i>
      </div>
    </div>
  </section>
</template>
<script>
import marked from 'marked'

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputVal: '# Hello World',
      flag: true
    }
  },
  computed: {
    markdown () {
      return marked(this.inputVal)
    }
  },
  methods: {
    updateVal (e) {
      this.inputVal = e.target.value
    },
    toggleShow () {
      if (this.flag === true) {
        this.$refs.textarea.style['opacity'] = 0
        this.$refs.editMark.style['opacity'] = 1
        setTimeout(() => {
          this.$refs.textarea.style['display'] = 'none'
          this.$refs.editMark.style['display'] = 'inline-block'
        }, 300)
        this.flag = false
      } else {
        this.$refs.editMark.style['opacity'] = 0
        this.$refs.textarea.style['opacity'] = 1
        setTimeout(() => {
          this.$refs.editMark.style['display'] = 'none'
          this.$refs.textarea.style['display'] = 'inline-block'
        }, 300)
        this.flag = true
      }
    }
  }
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
.editor
  height: 100%
  .textarea, .marked
    display: inline-block
    width: 49%
    height: 100%
    vertical-align: top
    box-sizing: border-box
    padding: 0 20px
    transition: all .3s ease
    @media screen and (max-width: 40rem)
      width: 100%
  .textarea
    border: none
    border-right: 1px solid $color-text-c
    border-radius: 5px
    resize: none
    outline: none
    background: $color-text-a
    font-size: $font-size-small
    font-family: sans-serif
    padding: 20px
  .marked
    display: none
    overflow-y: scroll
    overflow-x: hidden
    @media screen and (min-width: 40rem)
      display: inline-block
  .iconShow-wrapper
    opacity: 0
    position(absolute, auto, .5rem, .5rem, auto)
    transition: opacity .2s ease
    i
      font-size: $font-size-medium-m
    @media screen and (max-width: 40rem)
      opacity: 1
</style>
