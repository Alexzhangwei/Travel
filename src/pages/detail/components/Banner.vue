<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" />
			<div class="banner-info">
				<div class="banner-tittle">
					{{this.sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe692;</span>
					{{this.bannerImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	import FadeAnimation from 'common/fade/FadeAnimation'
	export default {
		name: 'DetailBanner',
		props: {
			sightName: String,
			bannerImg: String,
			bannerImgs: Array
		},
		data() {
			return {
				showGallary: false
			}
		},
		methods: {
			handleBannerClick() {
				this.showGallary = true
			},
			handleGallaryClose() {
				this.showGallary = false
			}
		},
		components: {
			CommonGallary,
			FadeAnimation
		}
	}
</script>


<style lang="stylus" scoped="scoped">
	@import '~styles/minxins.styl'

	//防抖动
	.banner {
		position: relative;
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
	}

	.banner-img {
		width: 100%;
	}

	.banner-info {
		color: #fff;
		display: flex;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		line-height: 0.6rem;
	}

	.banner-title {
		flex: 1;
		font-size: 0.32rem;
		padding: 0 0.2rem;
	}

	.banner-number {
		margin-top: 0.14rem;
		padding: 0 0.4rem;
		height: 0.32rem;
		line-height: 0.32rem;
		border-radius: 0.2rem;
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
		font-size: 0.24rem;
	}

	.banner-icon {
		font-size: 0.24rem;
	}
</style>
