<template>
	<view class="classLayout pageBg">
		<custom-nav-bar></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	import {
		apiGetClassify
	} from "@/api/apis.js";
	
	import {onShareAppMessage,onShareTimeline} from '@dcloudio/uni-app'
	const classifyList = ref([])
	//专题精选
	const getClassify = async () => {
		let res = await apiGetClassify({
			pageSize: 15
		});
		classifyList.value = res.data
		console.log(res);
	}
	
	//分享给好友
	onShareAppMessage((e)=>{
		return{
			title:'咸虾米壁纸',
			path:'/pages/index/index'
		}
	})
	
	//分享到朋友圈
	onShareTimeline((e)=>{
		return{
			title:'咸虾米壁纸~~~',
			// imageUrl:'/static/images/logo2.jpg'
		}
	})
	
	getClassify();
</script>

<style lang="scss" scoped>
	.classify {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>