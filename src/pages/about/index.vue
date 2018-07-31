<template>
    <div class="con" @longtap="showEgg" @touchend="closeEgg">
        <div class="bg" :class="{'open':openflag}">
            <span>H H M</span>
        </div>
        <view class='about'>
  <swiper indicator-color='#666666' indicator-active-color='#40a7e7' indicator-dots="true" autoplay="true" circular="true" interval="5000" duration="300" previous-margin="0px" next-margin="0px" :style={height:swiperHeight}>
    <block v-for="(item,index) in bannerImgList" :key="index">
      <swiper-item>
        <view class='info' :data-index='index' @tap='previewImages'>
          <img :src='item'/>
          <view class='name'>还没起名字的一款天气预报</view>
        </view>
      </swiper-item>
    </block>
  </swiper>
  <view class='feedback item'>
    <view class='title'>建议 & 意见反馈</view>
    <view class='i' catchtap='copy' data-title='GitHub' :data-content='github'>
        对不起，您的意见我一定会听，但肯定不会改，哈哈哈~~~
    </view>
    <view class='i'>
      <img src='/static/img/wechat.png'/>
      <view class='text'>微信快速联系</view>
      <button open-type="contact" class='btn'>联系我们</button>
    </view>
  </view>
  <view class='thanks item'>
    <view class='title'>鸣谢</view>
    <view class='i'>
      <!-- <image src='/static/img/location_grey.png'></image> -->
      <view class='text'>地理编码：百度地图开放平台</view>
    </view>
    <view class='i'>
      <!-- <image src='/static/img/weather.png'></image> -->
      <view class='text'>天气数据来源：百度地图开放平台</view>
    </view>
  </view>
  <view class='attention item'>
    <view class='title'>注意事项</view>
    <view class='i'>
      <!-- <image src='/img/location_grey.png'></image> -->
      <view class='text'>还没起名字的一款天气预报小程序（复刻版）的数据均存储在本地，没有账号体系，没有数据同步功能，若清空微信相关数据可能会造成数据（首页缓存数据、首页悬浮球位置信息、设置）丢失（看个天气而已，何必纠结）。</view>
    </view>
  </view>
</view>
    </div>
</template>

<script>
import utils from "./../../../static/libs/untils.js"
export default {
  data() {
    return {
      github: "https://github.com/myvin",
      email: "851399101@qq.com",
      qq: "851399101",
      swiperHeight: "auto",
      bannerImgList: [
        "https://raw.githubusercontent.com/myvin/miniprogram/master/quietweather/images/logo.png",
        "https://mp.weixin.qq.com/wxopen/qrcode?action=show&type=2&fakeid=3847024013&token=1309614539"
      ],
      openflag:false
    };
  },
  methods: {
    previewImages(e) {
      let index = e.currentTarget.dataset.index || 0;
      let urls = this.data.bannerImgList;
      wx.previewImage({
        current: urls[index],
        urls,
        success: function(res) {},
        fail: function(res) {
          console.error("previewImage fail: ", res);
        }
      });
    },
    initSwiper() {
      let that = this;
      let systeminfo = getApp().globalData.systeminfo;
      if (utils.isEmptyObject(systeminfo)) {
        wx.getSystemInfo({
          success: function(res) {
            that.setSwiperHeight(res);
          }
        });
      } else {
        that.setSwiperHeight(systeminfo);
      }
    },
    setSwiperHeight(res) {
      this.swiperHeight=`${(res.windowWidth || res.screenWidth) / 375 * 200}px`
    },
    copy(e) {
      let dataset = (e.target || {}).dataset || {};
      let title = dataset.title || "";
      let content = dataset.content || "";
      wx.setClipboardData({
        data: content,
        success() {
          wx.showToast({
            title: `已复制${title}`,
            duration: 2000
          });
        }
      });
    },
    showEgg(){
        console.log(111)
        this.openflag=true
    },
    closeEgg(){
        this.openflag=false;
    }
  },
  mounted(){
      this.initSwiper()
  }
};
</script>

<style scoped>
.bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .3s;
    color: #fefefe;
}
.bg.open{
    background-color: rgba(255,255,255,.9);
    z-index: 100;
    opacity: 1;
}
.bg.open span{
    transform:scale(0.5,6);
display:inline-block;
height:100rpx;
width:100%;
position:absolute;
top:10%;
margin:-50rpx 0 0;
font-size:200rpx;
font-weight:100;
text-align:center;

}
.about {
  font-size: 30rpx;
  color: #666;
  padding: 0 40rpx 40rpx;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
  color: #333;
  padding: 60rpx 40rpx;
}
.info image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  margin-bottom: 30rpx;
}
.item {
  line-height: 2.2em;
}
.item .title {
  font-size: 32rpx;
  color: #40a7e7;
  margin: 26rpx 0;
}
.item .i {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: 10rpx;
}
.attention .i {
  margin-left: 0;
}
.i image {
  width: 32rpx;
  height: 32rpx;
  margin-right: 10rpx;
}
.feedback .text {
  position: relative;
  z-index: 1;
}
.feedback .btn {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 1;
  opacity: 0;
}
</style>
