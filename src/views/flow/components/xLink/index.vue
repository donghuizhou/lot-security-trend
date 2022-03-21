<template>
  <div>

    <!-- 标题 -->
    <div class="g-block-title">
      <span class="g-title">xx连接</span>
    </div>

    <!-- 图表 -->
    <ul class="g-chart link-wrap">
      <li
        v-for="item in linkData"
        :key="item.id"
        class="link">
        <span class="value">{{item.value}}</span>
        <span class="name">{{item.name}}</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      linkData: [
        { name: '链接1', value: 20, id: 1 },
        { name: '链接2', value: 30, id: 2 },
        { name: '链接3', value: 40, id: 3 },
        { name: '链接4', value: 50, id: 4 }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.link-wrap {
  display: flex;
  align-items: center;

  .link {
    flex: 1;
    height: 150px;
    background: url("../../../../assets/images/x-link.png") no-repeat;
    background-size: 107% 107%;
    background-position: center center;
    .value {
      display: block;
      color: #fff;
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      padding: 40px 0 5px 0;
    }
    .name {
      display: block;
      color: #7EB8FF;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>
