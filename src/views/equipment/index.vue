<template>
    <div class="wrapper">
      <map-component class="map-container"></map-component>
    </div>
</template>

<script>
import MapComponent from './components/mapComponent'

export default {
  components: {
    MapComponent
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
  mounted () {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.wrapper{}
.map-container {
  margin: 0 0 0 20px;
  width: 800px;
  height: 500px;
}
</style>
