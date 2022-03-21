<template>
  <div>

    <!-- 标题 -->
    <div class="g-block-title">
      <span class="g-title">受影响设备</span>
    </div>

    <!-- 图表 -->
    <div class="g-chart equipment-wrap">
      <!-- 设备列表 -->
      <ul class="equipment-list">
        <li
          v-for="item in equipmentList"
          :key="item.id"
          :class="[
            'list-item',
            {'item-fault': item.fault}
          ]">
          <span
            :class="[
              'list-txt',
              {'txt-fault': item.fault}
            ]">{{item.name}}</span>
        </li>
      </ul>

      <!-- 设备信息 -->
      <div class="equipment-tips">
        <div class="tips">
          <i class="icon"></i>
          <span>故障原因: </span>
          <span class="txt reason">故障原因</span>
        </div>
        <div class="tips">
          <span>主要受影响设备: </span>
          <span class="txt">xx设备</span>
        </div>
        <div class="time">2020.9.21 12:00</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      equipmentList: [
        { name: '设备', id: 1, fault: false },
        { name: '设备', id: 2, fault: false },
        { name: '设备', id: 3, fault: false },
        { name: '设备', id: 4, fault: true }
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
.equipment-wrap {
  display: flex;
  flex-direction: column;
}
.equipment-list {
  flex: 1;
  display: flex;

  .list-item {
    position: relative;
    flex: 1;
    background-image: url("../../../../assets/images/equipment.png");
    background-repeat: no-repeat;
    background-size: 160px 160px;
    background-position: center -10px,;

    .list-txt {
      display: block;
      width: 100%;
      height: 80px;
      position: absolute;
      left: 0;
      top: 100px;
      text-align: center;
      padding: 10px 0 0 0;
      background-image: url("../../../../assets/images/equipment-base.png");
      background-repeat: no-repeat;
      background-size: 160px 80px;
      background-position: center center;
    }
  }

  .item-fault {
    background-image: url("../../../../assets/images/effected-equipment.png");

    .txt-fault {
      background-image: url("../../../../assets/images/effected-equipment-base.png");
    }
  }
}

.equipment-tips {
  height: 36px;
  display: flex;
  align-items: center;
  color: #7EB8FF;
  padding: 0 15px;

  .tips {
    flex: 1;
    display: flex;
    align-items: center ;

    .icon {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #F7B61C;
      border-radius: 100%;
      margin: 0 10px 0 0;
    }
    .txt {
      flex: 1;
      margin: 0 15px 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: nowrap;
    }
    .reason {
      color: #F7B61C;
    }
  }
  .time {
    width: 120px;
    text-align: right;
  }
}
</style>
