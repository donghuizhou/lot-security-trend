<template>
  <div>

    <!-- 标题 -->
    <div class="g-block-title">
      <span class="g-title">xx来源</span>
    </div>

    <!-- 图表 -->
    <div class="g-chart">
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
      chartData: [
        { value: 100, name: 'IV', color: '#2C78DD' },
        { value: 200, name: 'V类', color: '#DC2F2F' },
        { value: 250, name: '劣V类', color: '#E36200' },
        { value: 300, name: 'I-II类', color: '#E4A012' },
        { value: 150, name: 'III类', color: '#47D8B1' }
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
      const seriesData = [];

      this.chartData.forEach((item, index) => {
        const tmp = {
          value: item.value,
          name: item.name,
          itemStyle: {
            shadowColor: '#2AC7E9',
            shadowBlur: 10,
            color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 2, [
              {
                offset: 0,
                color: item.color
              },
              {
                offset: 1,
                color: '#fff'
              }
            ])
          }
        }

        seriesData.push(tmp);
      })

      this.chartInstance.clear();
      this.$nextTick(() => {
        this.chartInstance.resize();
      })
      this.chartInstance.setOption({
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          right: 30,
          top: 'center',
          icon: 'circle',
          itemWidth: 10,
          textStyle: {
            color: '#B3D3E5'
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['25%', '70%'],
            center: ['40%', '50%'],
            data: seriesData,
            label: {
              show: true,
              formatter: [
                '{percent|{d}%}',
                '{name|{b}}'
              ].join('\n'),
              rich: {
                percent: {
                  color: '#fff',
                  fontSize: 14
                },
                name: {
                  color: '#7EB8FF',
                  padding: [3, 0, 0, 0],
                  fontSize: 12
                }
              }
            }
          }
        ]
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
<style lang="less" rel="stylesheet/less" scoped>
</style>
