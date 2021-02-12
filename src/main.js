import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 格式化日期
import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'
 
Vue.use(VueMoment)
// 事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
