<template>
  <div class="flow-container">

    <!-- 左侧 -->
    <section class="left-container">
      <!-- 事件数量 -->
      <section class="item-container event-counts">
        <event-counts
          ref="eventCountRef"
          class="g-block-style"></event-counts>
      </section>

      <!-- 受影响设备 -->
      <section class="item-container effect-equipment">
        <effected-equipment class="g-block-style"></effected-equipment>
      </section>

      <!-- xx来源 -->
      <section class="item-container x-source">
        <x-source
          ref="xSourceRef"
          class="g-block-style"></x-source>
      </section>
    </section>

    <!-- 右侧 -->
    <section class="right-container">
      <!-- 地图 -->
      <section class="item-container map">
        <map-component
          ref="mapRef"></map-component>
      </section>

      <!-- xx连接、安全事件的告警列表 -->
      <section class="right-bottom-container">
        <!-- xx连接 -->
        <section class="item-container x-link">
          <x-link class="g-block-style"></x-link>
        </section>

        <!-- 安全事件的告警列表 -->
        <section class="item-container warning-list">
          <warning-list class="g-block-style"></warning-list>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import EventCounts from './components/eventCounts'
import EffectedEquipment from './components/effectedEquipment'
import XSource from './components/xSource'
import MapComponent from './components/mapComponent'
import XLink from './components/xLink'
import WarningList from './components/warningList'

export default {
  components: {
    EventCounts,
    EffectedEquipment,
    XSource,
    MapComponent,
    XLink,
    WarningList
  },
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {
    const _this = this;

    window.onresize = function () {
      _this.$refs.eventCountRef.resize()
      _this.$refs.xSourceRef.resize()
      _this.$refs.mapRef.resize()
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.flow-container{
  display: flex;
  height: 100%;
  padding: 13px 15px 10px 15px;

  .left-container {
    flex: 3;

    .event-counts {
      height: 35%;
    }
    .effect-equipment {
      height: 30%;
    }
    .x-source {
      height: 35%;
    }
  }
  .right-container {
    flex: 7;
    padding: 0 0 0 15px;

    .map {
      height: 68%;
    }
    .right-bottom-container {
      height: 32%;
      display: flex;
    }
    .x-link {
      flex: 1;
      height: 100%;
      padding-right: 8px;
    }
    .warning-list {
      flex: 1;
      height: 100%;
      padding-left: 8px;
    }
  }

  .item-container {
    padding: 0 0 15px 0;
  }
}
</style>
