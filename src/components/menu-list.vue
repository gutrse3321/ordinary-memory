<template>
  <section class="menu" ref="menu" :style="{'display': show}">
    <div class="menu-list">
      <div class="add-text"
        @click="toAdd"
        :class="{'add-active': selectMid === (-2)}"
      >
        <i class="icon-add"></i>
        新增日记
      </div>
      <ul>
        <li class="list-item"
            :class="{'active': item.mid === selectMid}"
            v-for="(item, index) in list"
            :key="index"
            @click="toArticle(item)"
        >
          <i class="list-icon" :class="faceArr[item.face - 1]"></i>
          {{ item.title }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getMemories } from '@/api'
import { face } from 'common/js/config'

export default {
  data () {
    return {
      list: [],
      selectMid: -1,
      faceArr: []
    }
  },
  computed: {
    show () {
      return this.menuShow ? 'block' : 'none'
    },
    newMid () {
      return this.list[0].mid + 1
    },
    ...mapGetters([
      'menuShow',
      'editor',
      'menuList'
    ])
  },
  methods: {
    toArticle (item) {
      this.$router.push({
        path: `/article/${item.mid}`
      })
      this.setArticle(item)
      this.selectMid = item.mid
      if (this.menuShow) {
        this.setMenuShow(false)
      }
      if (this.editor) {
        this.setEditor(false)
      }
    },
    toAdd () {
      this.$router.push({path: '/add'})
      let article = {
        mid: this.newMid,
        title: '',
        face: 1,
        content: '# 一天的结束...'
      }
      this.setArticle(article)
      this.selectMid = -2
      if (this.menuShow) {
        this.setMenuShow(false)
      }
    },
    _getMemories () {
      getMemories().then(res => {
        let data = res.data.sort(this._compare('mid'))
        this.setMenuList(data)
        this.list = this.menuList
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
    ...mapMutations({
      setArticle: 'SET_ARTICLE',
      setMenuShow: 'SET_MENU_SHOW',
      setEditor: 'SET_EDITOR',
      setMenuList: 'SET_MENU_LIST'
    })
  },
  watch: {
    menuList (newList, oldList) {
      if (newList !== oldList) {
        getMemories().then(res => {
          let data = res.data.sort(this._compare('mid'))
          this.list = data
        })
      }
    }
  },
  created () {
    this._getMemories()
    this.faceArr = face.slice()
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

::-webkit-scrollbar
  width: 13px
  height: 13px
::-webkit-scrollbar-track
  display: none
::-webkit-scrollbar-thumb
  background-color: inherit
  border-radius: 10px

.menu
  display: none
  position(absolute, 0, 0, 0, 0)
  width: $menu-width
  background-color: rgba(255, 255, 255, 0)
  -webkit-background-clip: text
  overflow-y: scroll
  overflow-x: hidden
  transition: background-color .8s
  &:hover
    background-color: $color-text-a
  .list-item
    display: block
    position(relative)
    padding: .75em 1em
    line-height: $font-size-medium
    text-align: left
    color: $color-text-b
    box-shadow: 0 1px 0 0 $color-text-b
    no-wrap()
    cursor: default
    transition: color .2s ease-out
    .list-icon
      float: left
      margin-right: .5rem
      font-size: $font-size-medium
      line-height: 1
    &:hover
      color: #fff
  .add-text
    display: block
    position(relative)
    padding: .75em 1em
    line-height: $font-size-medium
    text-align: left
    color: #969696
    cursor: pointer
    transition: all .3s
    .icon-add
      float: left
      margin-right: .5rem
      font-size: $font-size-small
      line-height: $font-size-medium
    &:hover
      color: $color-text-c
      padding: .75em 4.5em
  .add-active
    color: $color-text-c
    padding: .75em 4.5em
  .active
    color: #fff
  @media screen and (min-width: 40em)
    display: block !important
</style>
