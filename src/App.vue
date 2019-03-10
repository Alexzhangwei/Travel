<template>
  <div id="app">
		<!-- 显示的是当前路由地址所对应的内容 -->
		 <!-- 5.绑定路由 -->
	<!-- 	<router-link to="/"></router-link>
		<router-link to="/city"></router-link> -->
		<!-- 6.渲染路由-->
	<!-- 	<router-view></router-view> -->
		
		<keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
