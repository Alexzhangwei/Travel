import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick  from 'fastclick'
//vue使用插件的步骤：    1.采用es6中 import   from  的语法
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
// import 'babel-polyfill'

//vuex引入
import store from './store'

Vue.config.productionTip = false


fastclick.attach(document.body)
//vue使用插件的步骤： 2.使用全局方法Vue.use(插件名)
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//路由就是根据网址的不同,返回不同的内容给用户