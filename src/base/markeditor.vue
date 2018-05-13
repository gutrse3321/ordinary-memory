<template>
  <section class="markeditor-wrapper">
    <div class="marked" v-show="!isEdit" v-html="markedResult"></div>
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
      <div class="save-wrapper">
        <div class="btn save" v-if="!editor" @click="saveMemory">发布</div>
        <div class="btn edit" v-else @click="updateMemory">修改</div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { Message } from 'element-ui'
import { updateMemory } from '@/api'
import marked from 'marked'
import axios from 'axios'

export default {
  props: {
    isEdit: {
      type: Boolean,
      default: true
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
      return this.article.mid !== undefined ? marked(this.inputVal) : ''
    },
    markedResult () {
      return this.article.mid !== undefined ? marked(this.article.content) : ''
    },
    ...mapGetters([
      'article',
      'menuList',
      'editor'
    ])
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
    },
    saveMemory () {
      // 前端验证
      if (this.$refs.textarea.value === '') {
        Message({
          type: 'warning',
          showClose: true,
          message: '没有写任何内容哦！'
        })
        this.$refs.textarea.focus()
        return
      }
      // 前端验证标题
      if (this.article.title === '') {
        Message({
          type: 'warning',
          showClose: true,
          message: '没有写上标题哦！'
        })
        return
      }
      let newArticle = Object.assign({}, this.article, {
        content: this.$refs.textarea.value
      })
      this.setArticle(newArticle)
      const url = '/api/addMemory'
      // 拷贝Getters获取的菜单列表
      let newList = this.menuList.slice()
      axios.post(url, this.article).then(res => {
        // 提示message
        Message({
          type: 'success',
          showClose: true,
          message: '发布成功~'
        })
        // 跳转到刚刚发布的日记
        this.$router.push({
          path: `/article/${this.article.mid}`
        })
        // 将新添加的日记push进去
        newList.push(this.article)
        newList = newList.sort(this._compare('mid'))
        this.setMenuList(newList)
      }).catch(err => {
        // 提示错误信息
        Message({
          type: 'error',
          showClose: true,
          message: `发布失败: ${err}`
        })
      })
    },
    updateMemory () {
      // 前端验证
      if (this.$refs.textarea.value === '') {
        Message({
          type: 'warning',
          showClose: true,
          message: '没有写任何内容哦！'
        })
        this.$refs.textarea.focus()
        return
      }
      // 前端验证标题
      if (this.article.title === '') {
        Message({
          type: 'warning',
          showClose: true,
          message: '没有写上标题哦！'
        })
        return
      }
      // 组见修改后的日记对象
      let newArticle = Object.assign({}, this.article, {
        content: this.$refs.textarea.value
      })
      this.setArticle(newArticle)
      // 拷贝getters获取的菜单列表
      let newList = this.menuList.slice()

      // axios操作
      updateMemory(this.article).then(res => {
        // 提示消息
        Message({
          type: 'success',
          showClose: true,
          message: '修改完成！'
        })
        // 遍历newList，找到之前的日记对象，将新的日记替换到newList中
        // 提交新的list到mutation中
        newList.forEach((item, index) => {
          if (item.mid === newArticle.mid) {
            newList.splice(index, 1, newArticle)
          }
        })
        newList = newList.sort(this._compare('mid'))
        this.setMenuList(newList)
      }).catch(err => {
        // 提示修改失败的消息
        Message({
          type: 'error',
          showClose: true,
          message: `修改失败:${err}`
        })
      })
    },
    // 比较器，根据对象某属性排序
    _compare (propName) {
      return (obj1, obj2) => {
        let val1 = obj1[propName]
        let val2 = obj2[propName]
        if (val1 < val2) {
          return 1
        } else if (val1 > val2) {
          return -1
        } else {
          return 0
        }
      }
    },
    _putContent () {
      this.inputVal = this.article.content
    },
    ...mapMutations({
      setArticle: 'SET_ARTICLE',
      setMenuList: 'SET_MENU_LIST'
    })
  },
  watch: {
    article (newItem, oldItem) {
      if (oldItem !== newItem) {
        this.inputVal = newItem.content
      }
    }
  },
  created () {
    this._putContent()
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
    padding: 20px 10px 60px 10px
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
  .save-wrapper
    position(absolute, auto, auto, .5rem, .5rem)
    .btn
      padding: .5rem
      border-radius: 6px
      border: 1px solid rgba(255, 255, 255, .5)
      cursor: pointer
      transition: all .3s ease
      &:hover
        background: rgba(255, 255, 255, .5)
        color: #000
</style>
