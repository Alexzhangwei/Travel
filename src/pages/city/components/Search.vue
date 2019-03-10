<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item border-bottom" 
				v-for="item of list" 
				:key="item.id" 
				@click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">
					没有找到匹配数据
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import  {mapState,mapMutations} from 'vuex'
	import Bscroll from 'better-scroll'
	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data() {
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData() {
				return !this.list.length
			}
		},
		watch: {
			keyword() {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)
							}
						})
					}
					this.list = result
				}, 100)
			}
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
			this.scroll = new Bscroll(this.$refs.search)
		}

	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'

	.search {
		height: 0.72rem;
		padding: 0 0.1rem;
		background: $bgColor;
	}

	.search-input {
		box-sizing: border-box;
		width: 100%;
		height: 0.62rem;
		line-height: 0.62rem;
		padding: 0 0.1rem;
		text-align: center;
		border-radius: 0.06rem;
		color: #666;
	}

	.search-content {
		z-index: 1;
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		bottom: 0;
		right: 0;
		background: #eee;
	}

	.search-item {
		line-height: 0.62rem;
		padding-left: 0.2rem;
		background: #fff;
		color: #666;
	}
</style>
