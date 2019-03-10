<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>

			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
					v-for="item in hot" 
					:key="item.id"
					@click="handleCityClick(item.name)"
					>
					<!-- 实现 handleCityClick方法的同时，希望获得item.name这个值-->
						<div class="button">{{item.name}}</div>
					</div>

				</div>

			</div>


			<div class="area" 
			v-for="(item,key) of cities" 
			:key="key"
			:ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" 
					v-for="innerItem of item" 
					:key="innerItem.id"
					@click="handleCityClick(innerItem.name)"
					>{{innerItem.name}}</div>

				</div>
			</div>

			<!-- 双重for循环 -->
			<div class="area" v-for="(item, key) of cities" :key="item.id" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import  {mapState,mapMutations} from 'vuex'
	import Bscroll from 'better-scroll'
	export default {
		name: 'CityList',
		props: {
			hot: Array,
			cities: Object,
			letter: String
		},
		computed: {
			...mapState({
				currentCity:'city' })             //映射给computed计算属性
		},
			
		methods: {
			handleCityClick(city) {
				//不通过actions,所以不使用dispatch,直接调用mutations，所以使用commit
				// this.$store.dispatch('changeCity',city)
				// this.$store.commit('changeCity',city)
				//通过utations映射到名字叫做changeCity的方法里，可以直接调用
				this.changeCity(city)
				//页面跳转：你想跳到哪一页，你就push到那个地方
				this.$router.push('/')//跳到首页
			},
			//有一个Mutations叫做changeCity，把Mutations映射到名字叫做changeCity的方法里
			...mapMutations(['changeCity'])
			
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		//侦听器
		watch: {
			letter() {
				if (this.letter) { //如果letter不为空，就显示选择的字母的内容
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		},
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'

	.border-topbottom::before {
		border-color: #ccc;
	}

	.border-topbottom::after {
		border-color: #ccc;
	}

	.border-bottom::before {
		border-color: #ccc;
	}

	.list {
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.title {
		line-height: 0.54rem;
		background: #eee;
		padding: 0.2rem;
		color: #666;
		font-size: 0.26rem;
	}

	.button-list {
		padding: 0.1rem 0.6rem 0.1rem 0.1rem;
		overflow: hidden;
	}

	.button-wrapper {
		float: left;
		width: 33.33%;
	}

	.button {
		margin: 0.1rem;
		padding: 0.1rem 0;
		text-align: center;
		border: 0.02rem solid #ccc;
		border-radius: 0.06rem;
	}



	.item {

		line-height: 0.76rem;
		padding-left: 0.2rem;
	}
</style>
