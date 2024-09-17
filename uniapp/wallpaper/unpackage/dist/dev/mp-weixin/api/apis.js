"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({
    url: "/homeBanner"
  });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
}
function apiGetDayRandom() {
  return utils_request.request({
    url: "/randomWall"
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: "/classify",
    data
  });
}
function apiGetClassList(data = {}) {
  return utils_request.request({
    url: "/wallList",
    data
  });
}
function apiGetSetUpScore(data = {}) {
  return utils_request.request({
    url: "/setupScore",
    data
  });
}
function apiWriteDownLoad(data = {}) {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
}
function apiDetailWall(data = {}) {
  return utils_request.request({
    url: "/detailWall",
    data
  });
}
function apiUserInfo(data = {}) {
  return utils_request.request({
    url: "/userInfo",
    data
  });
}
function apiGetHistory(data = {}) {
  return utils_request.request({
    url: "/userWallList",
    data
  });
}
function apiNoticeDetail(data = {}) {
  return utils_request.request({
    url: "/wallNewsDetail",
    data
  });
}
function apiSearchData(data = {}) {
  return utils_request.request({
    url: "/searchWall",
    data
  });
}
exports.apiDetailWall = apiDetailWall;
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetHistory = apiGetHistory;
exports.apiGetNotice = apiGetNotice;
exports.apiGetSetUpScore = apiGetSetUpScore;
exports.apiNoticeDetail = apiNoticeDetail;
exports.apiSearchData = apiSearchData;
exports.apiUserInfo = apiUserInfo;
exports.apiWriteDownLoad = apiWriteDownLoad;
