<template>
    <div class='map-container'>
      <div
        ref='mapRef'
        style='width: 100%; height: 100%;'
        :class='[
          "map",
          {
            "china-disappear": curAction === "china_disappear",
            "city-appear": curAction === "city_appear",
            "city-disappear": curAction === "city_disappear",
            "china-appear": curAction === "china_appear"
          }
        ]'></div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      mapInstance: null,
      curAction: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 初始化
    init () {
      this.mapInstance = this.$echarts.init(this.$refs.mapRef)

      // 监听地图事件
      this.mapEvent();

      this.setData2Chart('中国')
    },
    // 给地图赋值
    setData2Chart (jsonName) {
      const _this = this

      this.$axios.get(`/china/${jsonName}.json`).then(res => {
        this.$echarts.registerMap(
          jsonName === '中国' ? 'china' : 'city',
          { geoJSON: res.data }
        );

        this.mapInstance.clear()
        this.mapInstance.setOption({
          tooltip: {
            show: true,
            formatter: '{b}',
            padding: [2, 5]
          },
          geo: {
            map: jsonName === '中国' ? 'china' : 'city',
            aspectScale: 0.9,
            zoom: 1.1,
            silent: false,
            zLevel: 1,
            emphasis: {
              disabled: false,
              label: {
                show: false
              }
            },
            select: {
              disabled: false,
              label: {
                show: false
              }
            }
          },
          series: [
            {
              name: jsonName === '中国' ? 'china' : 'city',
              type: 'map',
              map: jsonName === '中国' ? 'china' : 'city',
              aspectScale: 0.9,
              zoom: 1.1,
              emphasis: {
                disabled: false,
                label: {
                  show: false
                }
              },
              select: {
                disabled: false,
                label: {
                  show: false
                }
              },
              silent: false,
              itemStyle: {
                areaColor: new this.$echarts.graphic.RadialGradient(
                  0.5, 0.5, 0.8,
                  [
                    {
                      offset: 0,
                      color: '#3E97DA'
                    },
                    {
                      offset: 1,
                      color: '#68D6FB'
                    }
                  ]
                ),
                borderWidth: 0,
                shadowColor: '#1893DA',
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 5
              },
              zLevel: -1
            }
          ]
        })

        this.$nextTick(() => {
          // 控制地图显示动画
          this.mapAnimation(jsonName === '中国' ? 'china' : 'city')
        })
      })
    },
    // 监听地图事件
    mapEvent () {
      const _this = this
      this.mapInstance.on('click', function (params) {
        // 如果当前地图是中国地图，那就切换城市地图
        if (params.seriesName === 'china') {
          _this.curAction = 'china_disappear'
          _this.setData2Chart(params.name)

        // 如果当前地图是城市地图，那就切换中国地图
        } else if (params.seriesName === 'city') {
          _this.curAction = 'city_disappear'
          _this.setData2Chart('中国')
        }
      })
    },
    // 地图显示动画
    mapAnimation (type) {
      const _this = this

      if (type === 'city') {
        this.curAction = 'city_appear'
      } else if (type === 'china') {
        this.curAction = 'china_appear'
      }
    },
    // 重置图表
    resize () {
      this.mapInstance.resize()
    }
  },
  created () {},
  mounted () {
    this.init();
  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.map-container{
  height: 100%;
}

// 中国地图消失
.china-disappear {
  opacity: 0;
}
// 城市地图出现
.city-appear {
  animation: city-appear 0.5s forwards;
}
@keyframes city-appear {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
// 城市地图消失
.city-disappear {
  opacity: 0;
}
// 中国地图出现
.china-appear {
  animation: china-appear 0.5s forwards;
}
@keyframes china-appear {
  0% {
    transform: scale(1.3, 1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}

</style>
