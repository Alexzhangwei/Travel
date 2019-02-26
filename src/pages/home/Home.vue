<template>
	<div>
		<!-- 2.使用局部组件HomeHeader -->
		<home-header></home-header>
		</div>
</template>

<script>
	//引入局部组件资源
	import HomeHeader from './components/Header'
export default {
		name:'Home',
		//1.引入局部组件，注册到Home组件中
		components:{
			HomeHeader
		}
	}
</script>

<style>

</style>
