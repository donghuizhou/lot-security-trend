<template>
    <div class='map-container'>
      <div ref='mapRef' style='width: 100%; height: 100%;' class='map'></div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      mapInstance: null,
      lineData: [
        {
          name: '航线1',
          lng_start: -100.432069,
          lat_start: 43.224081,
          lng_end: 116.398899,
          lat_end: 39.759994
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 初始化
    init () {
      this.mapInstance = this.$echarts.init(this.$refs.mapRef)

      this.setData2Chart()
    },
    // 给地图赋值
    setData2Chart () {
      const _this = this

      this.$axios.get('/Seven Continents.json').then(res => {
        this.$echarts.registerMap('world', { geoJSON: res.data });

        this.mapInstance.setOption({
          geo: {
            map: 'world',
            aspectScale: 0.9,
            zoom: 1.1,
            silent: true,
            zLevel: 1
          },
          series: [
            {
              name: 'world',
              type: 'map',
              map: 'world',
              aspectScale: 0.9,
              zoom: 1.1,
              silent: true,
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
            },
            {
              type: 'lines',
              coordinateSystem: 'geo',
              lineStyle: {
                width: 2,
                color: '#70FAFF',
                shadowBlur: 5,
                shadowColor: '#3BB9FF',
                curveness: 0.2
              },
              effect: {
                show: true,
                period: 3,
                trailLength: 0,
                symbol: 'circle',
                symbolSize: [15, 15]
              },
              data: [
                // 示例line
                {
                  coords: [
                    [-100.432069, 43.224081],
                    [116.398899, 39.759994]
                  ]
                }
              ],
              zLevel: 2
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                color: '#58A5DF',
                number: 3,
                period: 4,
                brushType: 'stroke',
                scale: 3
              },
              symbolSize: 8,
              itemStyle: {
                color: new this.$echarts.graphic.RadialGradient(
                  0.5, 0.5, 0.8,
                  [
                    {
                      offset: 0,
                      color: '#54A2DE'
                    },
                    {
                      offset: 1,
                      color: '#fff'
                    }
                  ]
                )
              },
              data: [
                // 示例effectScatter
                [-100.432069, 43.224081],
                [116.398899, 39.759994]
              ]
            }
          ]
        });
      })
    },
    // 获取飞线数据
    getAirlines () {
      return this.lineData.map(function (line) {
        return [[line.lng_start, line.lat_start], [line.lng_end, line.lat_end]];
      });
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
.map {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('../../../../assets/images/map-bg.png') no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }
}
</style>
