<template>
	<div class="icons">
		<!-- 绑定了一个变量：swiperOption -->
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) in  pages" :key="index">
				<!-- 判断到底有多少个页面 -->
				<!-- item in iconList数据更改为item in page-->
				<div class="icon" v-for="item in page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" />
					</div>

					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>

	</div>
</template>

<script>
	export default {
		name: 'HomeIcons',
		props:{
			list:Array
		},
		data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
		//通过计算属性来实现第二页的内容
		computed: {
			pages() {
				const pages = []
				this.list.forEach((item, index) => {
					const page = Math.floor(index / 8) //一个页面最多放8个，多余的自动分配到第二个页面
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages //计算属性必须要用return返回值
			}
		}

	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'
	@import '~styles/minxins.styl'

	.icons>>>.swiper-container {
		width: 100%;
		/* overflow:hidden */
		//因为.swiper-container自带了 overflow:hidden
		height: 0;
		padding-bottom: 50%;
		/* 外层icons宽度为100%，padding-bottom往下撑的高度是宽度的50% */
	}

	.icons {
		margin-top: 0.1rem;
	}

	.icon {
		position: relative;
		overflow: hidden;
		float: left;
		width: 25%;
		height: 0;
		padding-bottom: 25%;
	}

	.icon-img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: .44rem;
		border-sizing: border-box;
		padding: 0.1rem;
		/* 5px的间距 */
	}

	.icon-img-content {
		display: block;
		margin: 0 auto;
		/* 实现居中 */
		height: 100%;
	}

	// p标签
	.icon-desc {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: .44rem;
		line-height: .44rem;
		color: $darkTextColor;
		text-align: center;
		ellipsis(); //防止字段过长,用省略号代替
	}
</style>
