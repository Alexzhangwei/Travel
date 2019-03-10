import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import mutations  from './mutations'



Vue.use(Vuex)







// 下面这个相当关键了，所有模块，记住是所有，注册才能使用

// 流程：组件调用actions--->actions调用mutations--->mutations去改变我们的数据
export default new Vuex.Store({
	//state存放公用数据
	state,

	//暂时用不到actions    组件可以直接调用mutations   
	//action里面存放异步方法
// 	actions:{
// 		//借助第一个参数ctx拿到commit,然后把changCity传给mutations
// 		changeCity(ctx,city){
// 		ctx.commit('changeCity',city)
// 		}
// 	},
//存放同步的一些对数据的改变
	 mutations,
	 //getters类似computed计算属性
// 	 getters:{
// 		 doubleCity(state){
// 			 return state.city+''+state.city
// 		 }
// 	 }
})
