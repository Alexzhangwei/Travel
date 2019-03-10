<template>
	<div class="wrapper">
		<!-- 绑定了一个变量：swiperOption -->
		<swiper :options="swiperOption" v-if="showSwiper">
			<!-- v-for循环输出轮播图片 -->
			<swiper-slide v-for="item in list" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>


			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			
		</swiper>
	</div>

</template>

<script>
	export default {
		name: 'HomeSwiper',
		props:{
			list:Array
		},
		// 定义被绑定了的变量：swiperOption
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					 loop: true,
					 autopaly:false
				}
				
			}
		},
		computed:{
			showSwiper(){
				return this.list.length
			}
		}
		
	}
</script>

<style lang="stylus" scoped="scoped">
	.wrapper>>>.swiper-pagination-bullet-active {
		background: #fff !important;
	}

	.wrapper {

		// height:31.25vw//方法二，但存在兼容问题
		width: 100%;
		height: 0;
		overflow: hidden;
		/*图片宽高比例自适应: 图片原先宽/图片原先高=200/750 */
		padding-bottom: 31.25%;
		/* 方法1：图片宽高比例自适应：配合overflow:hidden,宽高比例=图片的宽高比例 750  200  600 200*/
		background: #eee;
	}

	.swiper-img {
		width: 100%;
	}
</style>
