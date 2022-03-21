import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Table,
  TableColumn
} from 'element-ui'
import axios from 'axios'

import 'normalize.css/normalize.css'
import './styles/index.less'

import * as echarts from 'echarts'
import 'echarts-gl'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
