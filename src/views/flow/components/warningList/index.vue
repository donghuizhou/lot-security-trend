<template>
  <div>

    <!-- 标题 -->
    <div class="g-block-title">
      <span class="g-title">安全事件的告警列表</span>
    </div>

    <!-- 图表 -->
    <div class="g-chart list-wrap">
      <el-table
        :data="tableData"
        style="width: 100%;height: 100%">
        <el-table-column prop="rank" label="排名" width="60" align="center"></el-table-column>
        <el-table-column label="状态" width="80" align="center">
          <template>
            <i class="icon-status"></i>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="设备名称" align="center"></el-table-column>
        <el-table-column label="当前水质" align="center">
          <template slot-scope="scope">
            <div>
              <i class="icon-quality"></i>
              <span>{{scope.row.quality}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="达标情况" align="center">
          <template slot-scope="scope">
            <span
              :style="{color: scope.row.standard === '达标' ? '#fff' : 'red'}"
              >{{scope.row.standard}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      tableData: [
        {
          rank: '1',
          status: true,
          name: '设备1',
          quality: 'I类',
          standard: '达标'
        },
        {
          rank: '2',
          status: true,
          name: '设备2',
          quality: 'I类',
          standard: '达标'
        },
        {
          rank: '3',
          status: true,
          name: '设备3',
          quality: 'I类',
          standard: '达标'
        },
        {
          rank: '4',
          status: true,
          name: '设备4',
          quality: 'II类',
          standard: '达标'
        },
        {
          rank: '5',
          status: true,
          name: '设备5',
          quality: 'III类',
          standard: '不达标'
        }
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
.list-wrap {
  height: 100%;
  overflow: hidden;
  margin: 6px 0 0 0;
}

.icon-status {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url("../../../../assets/images/equipment-status.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.icon-quality {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #41F4FF;
  margin: 0 5px 0 0;
}
</style>
