<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!classList.length">
			<uni-load-more status="loading"></uni-load-more>
		</view>

		<view class="content">
			<navigator :url="'/pages/preview/preview?id=' + item._id" class="item" v-for="item in classList"
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>

		<view class="loadingLayout" v-if="classList.length||noData">
			<uni-load-more :status="noData?'noMore': 'loading'"></uni-load-more>
		</view>
		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		apiGetClassList,apiGetHistory
	} from "@/api/apis.js"

	import {
		onLoad,
		onUnload,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline
	} from "@dcloudio/uni-app"

	import {
		gotoHome
	} from '../../utils/common';
	const classList = ref([])
	const noData = ref(false)
	//定义data参数
	const queryParams = {
		pageNum: 1,
		pageSize: 12
	}
	let pageName;
	onLoad((e) => {
		// console.log(e)
		let {
			id = null, name = null, type = null
		} = e;
		if (type) queryParams.type = type
		if (id) queryParams.classid = id
		pageName = name
		uni.setNavigationBarTitle({
			title: name
		})
		getClassList();
	})
	//获取分类列表数据
	const getClassList = async () => {
		let res;
		if(queryParams.classid)	res = await apiGetClassList(queryParams);
		else if(queryParams.type) res = await apiGetHistory(queryParams);
		
		classList.value = [...classList.value, ...res.data]
		if (queryParams.pageSize > res.data.length) noData.value = true
		uni.setStorageSync("storageClassList", classList.value)
		// console.log(classList.value);
	}

	onReachBottom(() => {
		if (noData.value) return;
		queryParams.pageNum++;
		getClassList();
	})


	//分享给好友
	onShareAppMessage((e) => {
		return {
			title: '咸虾米壁纸-' + pageName,
			path: '/pages/classList/classList?id=' + queryParams.classid + "&name=" + pageName
		}
	})

	//分享到朋友圈
	onShareTimeline((e) => {
		return {
			title: '咸虾米壁纸-' + pageName,
			query: "id=" + queryParams.classid + "&name=" + pageName
		}
	})

	onUnload(() => {
		uni.removeStorageSync("storageClassList")
	})
</script>

<style lang="scss" scoped>
	.classlist {
		.content {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>