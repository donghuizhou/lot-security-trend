<template>
  <div class="page-title-container">
    <!-- 返回按钮 -->
    <section class="back-wrap">
      <i
        class="back-icon"
        v-show="$route.name !== 'home'"
        @click="handleBack"></i>
    </section>

    <!-- 页面标题 -->
    <section class="page-title-bg">
      <span class="page-title"></span>
    </section>

    <!-- 用户信息 -->
    <section class="user-info">
      <!-- 用户名 -->
      <div class="admin-wrap">
        <i class="user-icon"></i>
        <span class="user-name">{{userName}}</span>
      </div>

      <!-- 退出操作 -->
      <div class="out-wrap">
        <span class="out">退出</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      userName: 'admin'
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleBack () {
      this.$router.push({
        name: 'home'
      })
    }
  },
  created () {
  },
  mounted () {}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
.page-title-container{
    display: flex;
    align-items: center;

    .back-wrap {
      width: 200px;
      height: 100%;
      padding: 0 0 0 15px;

      .back-icon {
        display: inline-block;
        width: 30px;
        height: 100%;
        background: url("../../../../assets/images/back.png") no-repeat;
        background-size: 30px 30px;
        background-position: center 10px;
        cursor: pointer;
      }
    }

    .page-title-bg {
      flex: 1;
      height: 100%;
      background: url("../../../../assets/images/page-title-bg.png") no-repeat;
      background-size: 100% 100%;
      background-position: center center;

      .page-title {
        width: 335px;
        height: 101px;
        display: block;
        margin: 0 auto;
        background: url("../../../../assets/images/page-title.png") no-repeat;
        background-size: 100% 100%;
        background-position: -15px -22px;

      }
    }

    .user-info {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: right;

      .admin-wrap {
        display: flex;
        align-items: center;

        .user-icon {
          width: 45px;
          height: 45px;
          background: url("../../../../assets/images/avatar.png") no-repeat;
          background-size: 100% 100%;
          background-position: center center;
        }
        .user-name {
          color: #B1D9ED;
        }
      }
      .out-wrap {
        padding: 0 20px;
        .out {
          color: #B1D9ED;
          cursor: pointer;
        }
      }
    }
}
</style>
