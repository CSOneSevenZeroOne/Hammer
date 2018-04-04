<template>
	<div class="weui-tabbar">
		<a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <span style="display: inline-block;position: relative;">
                        <img src="../images/1.png" alt="" class="weui-tabbar__icon">
                    </span>
			<p class="weui-tabbar__label">首页</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
			<img src="../images/2.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">分类</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                        <img src="../images/3.png" alt="" class="weui-tabbar__icon">
                        <span class="" style="position: absolute;top: 0;right: -6px;"></span>
                    </span>
			<p class="weui-tabbar__label">购物车</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
			<img src="../images/4.png" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label" >个人中心</p>
		</a>
	</div>
</template>
<script>
	export default {
//		computed: {
//			bool() {
//				return  this.$store.state.src
//			}
////			title() {
////				return this.$store.getters.src
////			}
//		},
//		methods: {
//			hideGallery() {
//				this.$store.state.bool = false
//			},
//		}
	}


</script>
<style>
	.weui-tabbar{
		position: fixed;
		bottom: 0;
	}
</style>
