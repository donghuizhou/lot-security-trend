<template>
  <div>

    <!-- 标题 -->
    <div class='g-block-title'>
      <span class='g-title'>事件数量</span>
    </div>

    <!-- 图表 -->
    <div class='g-chart'>
      <div ref='chartRef' style='width: 100%; height: 100%;'></div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      chartInstance: null,
      xAxisData: [100, 200, 300, 400, 500, 600, 700],
      chartData: [
        {
          name: '站点1',
          data: [500, 200, 300, 400, 150, 250, 300],
          color: '#18EB31'
        },
        {
          name: '站点2',
          data: [550, 450, 250, 350, 300, 200, 280],
          color: '#735AFA'
        },
        {
          name: '站点3',
          data: [300, 400, 350, 450, 500, 400, 300],
          color: '#FF0505'
        },
        {
          name: '站点4',
          data: [200, 500, 450, 350, 300, 400, 500],
          color: '#F6FF05'
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 初始化图表
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.chartRef)

      this.setData2Chart()
    },
    // 给图表赋值
    setData2Chart () {
      const _this = this
      const seriesData = []

      this.chartData.forEach((item, index) => {
        const tmp = {
          name: item.name,
          type: 'line',
          smooth: true,
          lineStyle: {
            color: item.color,
            opacity: 0.7
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.2,
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: item.color
              },
              {
                offset: 1,
                color: '#0D1F46'
              }
            ])
          },
          data: item.data
        }

        seriesData.push(tmp)
      })

      this.chartInstance.clear();
      this.$nextTick(() => {
        this.chartInstance.resize();
      })
      this.chartInstance.setOption({
        legend: {
          right: 0,
          icon: 'circle',
          itemWidth: 10,
          selectedMode: true,
          textStyle: {
            color: '#B3D3E5'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0F4287'
            }
          },
          axisLabel: { // 坐标轴刻度标签
            color: '#B3D3E5'
          },
          data: _this.xAxisData
        },
        yAxis: {
          type: 'value',
          name: '',
          splitNumber: 5,
          nameTextStyle: {
            color: '#fff'
          },
          axisLine: { // 坐标轴轴线
            show: false
          },
          axisTick: { // 坐标轴刻度
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#082959'
            }
          },
          axisLabel: { // 坐标轴刻度标签
            color: '#B3D3E5'
          }
        },
        grid: {
          containLabel: true,
          top: 30,
          right: 15,
          bottom: 2,
          left: 5
        },
        series: seriesData
      });
    },
    // 重置图表
    resize () {
      this.chartInstance.resize()
    }
  },
  created () {},
  mounted () {
    const _this = this;
    this.initChart()
  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>
