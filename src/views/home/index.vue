<template>
  <div class="home-container">

    <ul class="menu-wrap">
      <li
        v-for="menu in menus"
        :key="menu.name"
        class="menu-item">
        <a
            href="javascript:void(0)"
            :class="['menu-txt',
                { 'menu-selected':
                    curHoverMenu.name === menu.name ||
                    curMenu.name === menu.name
                }]"
            :style="{
                cursor: handleMenuCursor(menu)
            }"
            @click="handleMenuClick(menu)"
            @mouseover="handleMenuOver(menu)"
            @mouseleave="handleMenuLeave(menu)">{{menu.meta.title}}</a>
      </li>

    </ul>
  </div>
</template>

<script>
import { pages } from '@/router/pages'

export default {
  components: {},
  props: {},
  data () {
    return {
      menus: pages,
      curMenu: {},
      curHoverMenu: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 菜单点击事件
    handleMenuClick (menu) {
      if (!menu.children || !menu.children.length) {
        this.curMenu = menu
        this.$router.push({ name: menu.name }).catch(err => err)
      }
    },
    // 鼠标移入事件
    handleMenuOver (menu) {
      if (!menu.children || !menu.children.length) {
        this.curHoverMenu = menu
      }
    },
    // 鼠标移出事件
    handleMenuLeave (menu) {
      this.curHoverMenu = {}
    },
    // 处理菜单的cursor样式
    handleMenuCursor (menu) {
      return (!menu.children || !menu.children.length) ? 'pointer' : 'default'
    }
  },
  created () {
  },
  mounted () {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>

@width-menu: 180px;
@height-menu: 80px;
.home-container{

  .menu-wrap {
    display: flex;
    justify-content: center;
    padding: 300px 0 0 0;
  }
  .menu-item {
    margin: 0 40px;
  }
  .menu-txt {
      font-size: 30px;
      font-weight: bold;
      width: @width-menu;
      height: @height-menu;
      line-height: @height-menu;
      color: #fff;
      display: inline-block;
      background: url("../../assets/images/home-menu.png") no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      text-align: center;
      cursor: default;
  }
  .menu-selected {
      background: url("../../assets/images/home-menu-selected.png") no-repeat;
      background-size: 100% 100%;
      background-position: center center;
  }
}
</style>
