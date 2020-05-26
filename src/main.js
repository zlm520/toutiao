import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './style/index'

Vue.config.productionTip = false

new Vue({
  style,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
