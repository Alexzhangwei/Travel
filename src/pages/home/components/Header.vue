<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<!-- 希望通过点击北京这里，可以进入city列表 -->
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
       </router-link>
	</div>
</template>

<script>
	import  {mapState} from 'vuex'
	export default {
		name: 'HomeHeader',
		//利用props接收父组件home的city值
		// props:['city'],
	computed: {
		...mapState(['city']),//映射给computed计算属性
		// ...mapGetters(['doubleCity'])
	},
		
	}
</script>
<!-- 注意空格：同一级别必须空格一致 设计师给的是2倍图  问题咋知道设计师给的是2倍图：
1rem=HTML font-size:50px     86px/2=43px  ==>0.86rem
-->
<style lang="stylus" scoped="scoped">
	//2. @import '../../../assets/styles/varibles.styl'  可以优化为以下部分：
	//3.styles多次出现，可以进行优化   bulid.js/webpack.base.conf.js里面可以通过'styles':resolve('src/assets/styles')修改
	@import '~styles/varibles.styl'
	.header 
		display:flex 
		line-height:$headerHeight 
		background-color:$bgColor 
		color:#fff
		.header-left 
			width:.64rem 
			float:left
			.back-icon
				 text-align:center
				 font-size:.4rem
			
		.header-input 
			flex:1 
			line-height:.64rem 
			height:.64rem
			margin-top:.12rem
			margin-left:.2rem
			padding-left:.2rem
			background: #fff 
			border-radius:.1rem
			color:#ccc 
		.header-right 
			min-width:1.04rem 
			padding: 0   0.1rem;
			float:right
			text-align:center
			color:#fff
			.arrow-icon
				margin-left:-.04rem
				font-size:.24rem
</style>
