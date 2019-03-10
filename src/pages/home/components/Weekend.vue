<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in list" :key="item.id">
				<!-- 左边图片 -->
				<div class="item-img-wrapper">
					<img class="item-img" :src='item.imgUrl' />
				</div>
				<!-- 右边信息 -->
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		props:{
			list:Array
		}	
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/minxins.styl'

	.title {
		line-height: 0.8rem;
		/* margin-top: 0.2rem; */
		background: #eee;
		txet-indent: 0.2rem;
	}

	
     .item-img-wrapper{
		height:0;
		overflow: hidden; 
		/*图片宽高比例自适应: 图片原先宽/图片原先高=214/640 */
		padding-bottom:37.09% ;/* 方法1：图片宽高比例自适应：配合overflow:hidden,宽高比例=图片的宽高比例 750  200  600 200*/
	 }
	.item-img {
		width:100%;
	}

	.item-info {
		
		padding: 0.1rem;
	
	}

	.item-title {
		line-height: 0.54rem;
		font-size: 0.32rem;
		ellipsis(); //防止字段过长,用省略号代替
	}

	.item-desc {
		line-height: 0.4rem;
		color: #ccc;
		ellipsis(); //防止字段过长,用省略号代替
	}


</style>
