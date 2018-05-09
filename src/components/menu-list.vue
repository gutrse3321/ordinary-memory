<template>
  <section class="menu" ref="menu" :style="{'display': show}">
    <div class="menu-list">
      <div class="add-text" @click="toAdd">
        <i class="icon-add"></i>
        新增日记
      </div>
      <ul>
        <li class="list-item"
            v-for="(item, index) in list"
            :key="index"
            @click="toArticle(item)"
        >
          <i class="list-icon icon-face-happy"></i>
          {{ item.title }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { getMemories } from '@/api'

export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    show () {
      return this.menuShow ? 'block' : 'none'
    },
    newMid () {
      return this.list[this.list.length - 1].mid + 1
    },
    ...mapGetters([
      'menuShow'
    ])
  },
  methods: {
    toArticle (item) {
      this.$router.push({
        path: `/article/${item.mid}`
      })
      this.setArticle(item)
    },
    toAdd () {
      this.$router.push({path: '/add'})
      let article = {
        mid: this.newMid,
        title: '',
        face: 1,
        content: ''
      }
      this.setArticle(article)
    },
    _getMemories () {
      getMemories().then(res => {
        this.list = res.data
      })
    },
    ...mapMutations({
      setArticle: 'SET_ARTICLE'
    })
  },
  created () {
    this._getMemories()
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
  .active
    color: #fff
  @media screen and (min-width: 40em)
    display: block !important
</style>
