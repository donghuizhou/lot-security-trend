<template>
  <div class="layout-container">
    <!-- 顶部标题 -->
    <page-title class="page-title-container"></page-title>

    <!-- 页面内容 -->
    <div class="main-container">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import PageTitle from './components/pageTitle'

export default {
  components: {
    PageTitle
  },
  props: {},
  data () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../styles/variables.less";

.layout-container {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: url("../../assets/images/home-bg.png") no-repeat;
	background-size: 100% 100%;
	background-position: center center;
  overflow: hidden;

  .page-title-container {
    width: 100%;
		height: @page-title-height;
  }
	.main-container {
		height: calc(100% - @page-title-height);
	}
}

.slide-fade-leave-active, .slide-fade-enter-active {
  transition: all 0.4s;
}
.slide-fade-enter {
  opacity: 0;
}
.slide-fade-leave-to {
  opacity: 0;
}
</style>
