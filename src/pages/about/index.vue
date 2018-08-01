<template>
    <div class="con" @longpress="showEgg" @touchend="closeEgg">
        <div class="bg" :class="{'open':openflag}">
            <view class='detailTopTextCon'>
              <label class='detailTopText detailTopText1 detailTopAnimate1'>{{text1}}</label>
              <label class='detailTopText detailTopText2 detailTopAnimate2'>{{text2}}</label>
              <label class='detailTopText detailTopText3 detailTopAnimate3'>{{text3}}</label>
              <label class='detailTopText detailTopText4 detailTopAnimate4'>{{text4}}</label>
              <label class='detailTopText detailTopText5 detailTopAnimate5'>{{text5}}</label>
              <label class='detailTopText detailTopText6 detailTopAnimate6'>{{text6}}</label>
              <label class='detailTopText detailTopText7 detailTopAnimate7'>{{text7}}</label>
              <label class='detailTopText detailTopText8 detailTopAnimate8'>{{text8}}</label>
            </view>
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
  <view class='attention item'>
    <view class='title'>author</view>
    <view class='i'>
      <!-- <image src='/img/location_grey.png'></image> -->
      <view class='text'>power by zxjBigPower</view>
    </view>
  </view>
</view>
    </div>
</template>

<script>
import utils from "./../../../static/libs/untils.js";
var topText = ["活泼", "时尚", "典雅", "甜美", "自然", "浪漫", "文雅", "摩登"];
var allSpaceTime = 50; //线程执行间隔时间
var animateinterval = "";
var rangArr = [
  {
    endText: "HHM",
    texts: topText,
    beginTime: 500,
    spacetime: 10,
    stime: 500
  },
  {
    endText: "清爽干练",
    texts: topText,
    beginTime: 1000,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "简约利落",
    texts: topText,
    beginTime: 1200,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "完美",
    texts: topText,
    beginTime: 1400,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "可爱",
    texts: topText,
    beginTime: 1800,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "中性风",
    texts: topText,
    beginTime: 2000,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "时尚先生",
    texts: topText,
    beginTime: 2200,
    spacetime: 10,
    stime: 1000
  },
  {
    endText: "简约利落",
    texts: topText,
    beginTime: 2400,
    spacetime: 10,
    stime: 1000
  }
];
export default {
  data() {
    return {
      github: "https://github.com/myvin",
      email: "851399101@qq.com",
      qq: "851399101",
      swiperHeight: "auto",
      bannerImgList: [
        "http://bpic.588ku.com/element_origin_min_pic/18/06/10/bfe427583d63bd521becf65d43bac6f4.jpg",
        "http://bpic.588ku.com/element_origin_min_pic/18/06/10/19b540199a4fee3721dc863cb6564705.jpg"
      ],
      openflag: false,
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
      text7: "",
      text8: ""
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
      this.swiperHeight = `${(res.windowWidth || res.screenWidth) /
        375 *
        200}px`;
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
    showEgg() {
      console.log(111);
      this.randDomText();
      this.openflag = true;
    },
    closeEgg() {
      this.openflag = false;
    },
    randDomText: function() {
      //endText最终显示文字，texts闪烁文字，time延迟时间,spacetime闪烁频率,stime闪烁周期
      var that = this;
      for (var i = 0; i < rangArr.length; i++) {
        var rang = rangArr[i];
        rang["runTime"] = 0; //累计运行时间
        rang["isRun"] = false; //是否已经开始在执行了
        rang["isStop"] = false; //是否已经执行完毕了
      }

      animateinterval = setInterval(function() {
        var stop = true;
        var showData = {};
        for (var i = 0; i < rangArr.length; i++) {
          var rangXX = rangArr[i];
          if (!rangXX["isStop"]) {
            stop = false; //只要有一个没执行完就 就继续执行
            rangXX["runTime"] = rangXX["runTime"] + allSpaceTime; //累计执行时间开始叠加
            var changeWord = false; //是否修改词
            if (!rangXX["isRun"]) {
              //如果还没开始跑，判断下时间是否已经到开始跑的时间
              if (rangXX["runTime"] >= rangXX["beginTime"]) {
                //
                rangXX["isRun"] = true; //到开始跑时间了
              } else {
                continue;
              }
            } else if (
              rangXX["runTime"] >=
              rangXX["stime"] + rangXX["beginTime"]
            ) {
              //如果当前队列的已经执行完毕，则显示最后一次的数据
              rangXX["isStop"] = true;
              if (rangXX["lastWord"] != rangXX["endText"]) {
                rangXX["lastWord"] = rangXX["endText"];
                showData["text" + (i + 1)] = rangXX["endText"]; //显示最后的词
              }
              continue;
            }
            var index =
              Math.floor(
                (rangXX["runTime"] - rangXX["beginTime"]) / rangXX["spacetime"]
              ) % rangXX["texts"].length;
            var showWord = rangXX["texts"][index];
            if (rangXX["lastWord"] != showWord) {
              rangXX["lastWord"] = showWord;
              showData["text" + (i + 1)] = showWord;
            }
          } else {
            continue;
          }
        }

        if (JSON.stringify(showData) != "{}") {
          //console.log(showData)
          for (var k in showData) {
            that[k] = showData[k];
            console.log(that.k);
          }

          //that.setData(showData);
        }
        if (stop) {
          clearInterval(animateinterval);
        }
      }, allSpaceTime);
    }
  },
  mounted() {
    this.initSwiper();
  }
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  /* color: #fefefe; */
}
.bg.open {
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
  opacity: 1;
}
.bg.open span {
  transform: scale(0.5, 6);
  display: inline-block;
  height: 100rpx;
  width: 100%;
  position: absolute;
  top: 10%;
  margin: -50rpx 0 0;
  font-size: 200rpx;
  font-weight: 100;
  text-align: center;
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
page {
  background: none;
}
.detailTopTextCon {
  width: 680rpx;
  margin: 0 auto;
  margin-top: 370rpx;
  position: relative;
}
.detailTopText {
  color: black;
  position: absolute;
}
.detailTopText1 {
  margin-left: 271rpx;
  margin-top: 72rpx;
  font-size: 84rpx;
  color: purple;
}
.detailTopText2 {
  margin-left: 217rpx;
  font-size: 40rpx;
  color: palegreen
}
.detailTopText3 {
  margin-left: 91rpx;
  margin-top: 60rpx;
  font-size: 29rpx;
  color: orange;
}
.detailTopText4 {
  margin-left: 432rpx;
  margin-top: 16rpx;
  font-size: 57rpx;
  color: mediumturquoise
}
.detailTopText5 {
  margin-left: 126rpx;
  margin-top: 117rpx;
  font-size: 37rpx;
  color: maroon;
}
.detailTopText6 {
  margin-left: 530rpx;
  margin-top: 95rpx;
  font-size: 47rpx;
  color: lightslategray
}
.detailTopText7 {
  margin-left: 82rpx;
  margin-top: 175rpx;
  font-size: 47rpx;
  color: olivedrab;
}
.detailTopText8 {
  margin-left: 341rpx;
  margin-top: 177rpx;
  font-size: 43rpx;
  color: tan;
}
</style>
