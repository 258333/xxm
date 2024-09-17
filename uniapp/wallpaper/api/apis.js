import {
	request
} from "@/utils/request.js"

export function apiGetBanner() {
	return request({
		url: "/homeBanner",
	})
}

export function apiGetNotice(data = {}) {
	return request({
		url: "/wallNewsList",
		data,
	})
}

export function apiGetDayRandom() {
	return request({
		url: "/randomWall"
	})
}

export function apiGetClassify(data = {}) {
	return request({
		url: "/classify",
		data
	})
}

export function apiGetClassList(data = {}) {
	return request({
		url: "/wallList",
		data
	})
}

export function apiGetSetUpScore(data = {}) {
	return request({
		url: "/setupScore",
		data
	})
}

export function apiWriteDownLoad(data = {}) {
	return request({
		url: "/downloadWall",
		data
	})
}

export function apiDetailWall(data = {}) {
	return request({
		url: "/detailWall",
		data
	})
} 
//获取用户信息
export function apiUserInfo(data = {}) {
	return request({
		url: "/userInfo",
		data
	})
} 
//获取历史列表
export function apiGetHistory(data = {}) {
	return request({
		url: "/userWallList",
		data
	})
} 

//获取详情列表
export function apiNoticeDetail(data = {}) {
	return request({
		url: "/wallNewsDetail",
		data
	})
} 

//搜索接口
export function apiSearchData(data = {}) {
	return request({
		url: "/searchWall",
		data
	})
} 