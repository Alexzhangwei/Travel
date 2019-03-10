<template>
	<div>
		<!-- 2.使用局部组件HomeHeader -->
		<!--利用ajax传值：2.父子间传值：  利用v-bind:属性绑定 -->
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	//引入ajax
	import axios from 'axios'
	//引入局部组件资源
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Home',
		//1.引入局部组件，注册到Home组件中
		components: {

			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		//利用ajax传值：1.
		data() {
			return {
				// city: '',
				lastCity: '',
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []
			}
		},
		computed: {
			...mapState(['city'])
		},
		//借助mounted来获取ajax
		mounted() {
			this.lastCity = this.city
			this.getHomeInfo()
		},
		activated() {
			//如果不等于，重新发一次请求
			if (this.lastCity !== this.city) {
				this.lastCity = this.city
				this.getHomeInfo()
			}

		},
		methods: {
			getHomeInfo() { //=${mapState}
				axios.get('http://localhost:3000/index?city=' + this.city).then(this.getHomeInfoSucc)

			},


			getHomeInfoSucc(res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		}


	}
</script>

<style>

</style>
