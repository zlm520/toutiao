import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './style/index.less'
// 引入vant 组件库
import Vant from 'vant';
// 引入vant css样式
import 'vant/lib/index.css';


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  style,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
