import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick  from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
//路由就是根据网址的不同,返回不同的内容给用户