<template>
  <div class="container">
    <div class="bg"><img :src="bgPath" mode='widthFix' alt="" class="bgImg"></div>
    <div class="con">
      <div class="header">
      <div class="search">
        <image src="/static/img/search.png" alt="" class="image"/> 
        <input class="input" 
        confirm-type="search" 
         placeholder-style="color:#fff"
          v-model="city" type="text" 
          placeholder="请输入要查询的城市"
          :style="{fontSize:fsize+'rpx'}"
          @confirm="confirm($event)">
      </div>
      <div class="weather">
          <div class="w1">
            <span  :style="{fontSize:fsize+'rpx'}">{{data.current.currentCity}}</span><span :style="{fontSize:fsize-5+'rpx'}">{{data.current.date}}</span>
          </div>
          <div class="w2">
            <div>{{data.current.currentW}}<span>℃</span></div>
            <div :style="{fontSize:fsize+'rpx'}">{{data.current.weatherDesc}}</div>
            <div :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+20+'rpx'}">{{data.current.pmdes.desc}} {{data.current.pmdes.val}}</div>
          </div>
          <div class="w3">
            <ul>
              <li v-for="(item,index) in data.weather_data" :key="index">
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}" v-if="index==0">今天</p>
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}" v-else>{{item.date}}</p>
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}">{{item.temperature}}</p>
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}">{{item.weather}}</p>
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}">{{item.wind}}</p>
                <!--图片太丑 <img :src="item.dayPictureUrl" alt="" class="dayPicture"> -->
                <!-- <img :src="item.nightPictureUrl" alt="" class="nightPicture"> -->
              </li>
            </ul>
          </div>
          <div class="w4">
            <ul>
              <li v-for="(item,index) in data.index" :key="index">
                <img class="img" v-if="item.title=='紫外线强度'" src="/static/img/sun.png" alt="紫外线">
                <img class="img" v-if="item.title=='运动'" src="/static/img/running.png" alt="运动">
                <img class="img" v-if="item.title=='感冒'" src="/static/img/pill.png" alt="感冒">
                <img class="img" v-if="item.title=='洗车'" src="/static/img/carwashing.png" alt="洗车">
                <img class="img" v-if="item.title=='穿衣'" src="/static/img/clothing.png" alt="穿衣">
                <h3 :style="{fontSize:fsize+'rpx'}">{{item.tipt}} {{item.zs}}</h3>
                <p :style="{fontSize:fsize-5+'rpx',lineHeight:fsize+10+'rpx'}">{{item.des}}</p>
              </li>
            </ul>
          </div>
          <view class='carDesc carDesc1'>
            <button class='share' id="shareBtn" :style="{fontSize:fsize+'rpx'}" open-type="share" hover-class="other-button-hover">
              分享给好友
            </button>
          </view>
      </div>
      <!-- 导航菜单 -->
      <button  @getuserinfo='bindgetuserinfo' open-type="getUserInfo" lang= "zh_CN">
        <div class="navBar" @tap="openNar" @touchstart="startTouch" @touchmove.stop="moveTouch" @touchend="endTouch" :style="{top:navTop,left:navLeft}">
          <img src="/static/img/setting.png"
          class="coin positionA transition1" 
          :class="{showIcon:showIcon}"
          @tap='gotosetting'
          :style="{left:0+'px',top:menuCoinTop*1.42+'px'}" alt="">
          <img src="/static/img/more.png" 
          class="coin positionA transition2" 
          :class="{showIcon:showIcon}"
          @tap='gotoabout'
          :style="{left:menuCoinLeft+'px',top:menuCoinTop+'px'}" alt="">
          <img src="/static/img/info.png"
          :class="{showIcon:showIcon}"
          class="coin positionA transition3" 
          @tap='gotosystem'
          :style="{left:menuCoinLeft*1.42+'px',top:0+'px'}" alt="">
          <img src="/static/img/menu.png" class="coin positionR" alt="">
        </div>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
var app = getApp();
import bmap from "./../../../static/libs/bmap-wx.js";
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      city: "",
      globalData: {
        ak: "7K0VNcXqjGmrZzp34xlToE98uC1Md0KI"
      },
      data: {
        current: {
          pmdes: {}
        },
        weather_data: {},
        index: []
      },
      lnglat: "",
      navTop: "50px",
      navLeft: "60px",
      menuCoinTop: 0,
      menuCoinLeft: 0,
      showIcon: false,
      pageX: 0,
      pageY: 0,
      bgPath: "",
      fsize: 30
    };
  },
  methods: {
    //打开togglebar
    openNar() {
      this.showIcon = !this.showIcon;
      if (this.showIcon) {
        var gettop = this.navTop.substring(0, this.navTop.length - 2) - 0;
        var getleft = this.navLeft.substring(0, this.navLeft.length - 2) - 0;
        //console.log(this.pageX, getleft, this.pageY, gettop, this.showIcon);
        if (this.pageX - getleft < 100) {
          this.menuCoinLeft = 0 - 50;
        } else {
          this.menuCoinLeft = 50;
        }
        if (getleft < 100) {
          this.menuCoinLeft = 50;
        }
        if (this.pageY - gettop < 100) {
          this.menuCoinTop = 0 - 50;
        } else {
          this.menuCoinTop = 50;
        }
        if (gettop < 100) {
          this.menuCoinTop = 50;
        }
      } else {
        this.menuCoinTop = 0;
        this.menuCoinLeft = 0;
      }
      //console.log(this.menuCoinTop, this.menuCoinLeft);
    },
    //打开页面
    gotosetting() {
      wx.navigateTo({
        url: "/pages/setting/main"
      });
    },
    gotoabout() {
      wx.navigateTo({
        url: "/pages/about/main"
      });
    },
    gotosystem() {
      wx.navigateTo({
        url: "/pages/system/main"
      });
    },
    //pm转换
    calcPM(value) {
      if (value > 0 && value <= 50) {
        return {
          val: value,
          desc: "优",
          detail: ""
        };
      } else if (value > 50 && value <= 100) {
        return {
          val: value,
          desc: "良",
          detail: ""
        };
      } else if (value > 100 && value <= 150) {
        return {
          val: value,
          desc: "轻度污染",
          detail: "对敏感人群不健康"
        };
      } else if (value > 150 && value <= 200) {
        return {
          val: value,
          desc: "中度污染",
          detail: "不健康"
        };
      } else if (value > 200 && value <= 300) {
        return {
          val: value,
          desc: "重度污染",
          detail: "非常不健康"
        };
      } else if (value > 300 && value <= 500) {
        return {
          val: value,
          desc: "严重污染",
          detail: "有毒物"
        };
      } else if (value > 500) {
        return {
          val: value,
          desc: "爆表",
          detail: "能出来的都是条汉子"
        };
      }
    },
    // 地理位置编码
    geocoder(address) {
      let that = this;
      wx.request({
        url: `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${
          this.globalData.ak
        }`,
        success(res) {
          let data = res.data || {};
          if (!data.status) {
            let location = (data.result || {}).location || {};
            // location = {lng, lat}
            that.lnglat = res.data.result.location;
            that.init({ location: that.lnglat.lng + "," + that.lnglat.lat });
            //console.log(res.data.result.location);
          } else {
            wx.showToast({
              title: data.msg || "网络不给力，请稍后再试",
              icon: "none"
            });
          }
        },
        fail(res) {
          wx.showToast({
            title: res.errMsg || "网络不给力，请稍后再试",
            icon: "none"
          });
        }
      });
    },
    //执行函数
    init(params) {
      console.log(params.location);
      let that = this;
      let BMap = new bmap.BMapWX({
        ak: this.globalData.ak
      });
      BMap.weather({
        location: params.location,
        fail: that.fail,
        success: that.success
      });
    },
    //失败
    fail(res) {
      wx.stopPullDownRefresh();
      let errMsg = res.errMsg || "";
      // 拒绝授权地理位置权限
      if (errMsg.indexOf("deny") !== -1 || errMsg.indexOf("denied") !== -1) {
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
        wx.showToast({
          title: "需要开启地理位置权限",
          icon: "none",
          duration: 3000,
          success(res) {
            let timer = setTimeout(() => {
              clearTimeout(timer);
              wx.openSetting({});
            }, 3000);
          }
        });
      } else {
        wx.showToast({
          title: "网络不给力，请稍后再试",
          icon: "none"
        });
      }
    },
    success(res) {
      wx.stopPullDownRefresh();
      console.log(res);
      let results = res.originalData.results[0] || {};
      // 存下来源数据
      this.data = res;
      this.data.current = res.currentWeather[0];
      this.data.current.currentW = this.data.current.date.substring(14, 16);
      this.data.current.date = this.data.current.date.substring(0, 10);
      this.data.current.pmdes = this.calcPM(this.data.current.pm25);
      this.data.weather_data = results.weather_data;
      this.data.index = results.index;
      console.log(this.data.current.pmdes);
      console.log(results);
      wx.hideNavigationBarLoading(); //完成停止加载
      wx.stopPullDownRefresh(); //停止下拉刷新
      wx.setStorage({
        key: "cityDatas",
        data: res
      });
    },
    //城市查询
    confirm(e) {
      console.log(e.target.value);
      if (e.target.value) {
        this.geocoder(e.target.value);
      } else {
        //获取当前位置
        wx.getLocation({
          success: function(res) {
            console.log(res);
            that.init({ location: `${res.longitude},${res.latitude}` });
          }
        });
      }
    },
    //目录栏滑动事件
    startTouch(e) {
      //console.log(e,e.pageX,e.pageY);
    },
    moveTouch(e) {
      //console.log(e);
      this.navTop = e.clientY - 20 + "px";
      this.navLeft = e.clientX - 20 + "px";
      //console.log(this.navTop,this.navLeft);
    },
    endTouch(e) {
      //console.log(e);
      //this.navTop=e.pageX+"px";
      //this.navLeft=e.pageY+"px";
    },
    bindgetuserinfo: function(e) {
      var that = this;
      console.log(e);
      if (e.mp.detail.userInfo) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(e.mp.detail.userInfo);
        wx.setStorage({ key: "userInfo", data: e.mp.detail.userInfo });
      } else {
        wx.showToast({
          title: "为了您更好的体验,请先同意授权",
          icon: "none",
          duration: 2000
        });
      }
    }
  },
  //分享功能
  onShareAppMessage: function(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops);
      //console.log(ops.target);
    }
    return {
      title: "还没起名字的一款天气预报",
      path: "pages/index/main",
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
        //console.log("pages/index/main")
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  },
  created() {
    var that = this;
    //this.geocoder("深圳");
    //获取用户信息
    wx.getSetting({
      success: function(res) {
        if (res.authSetting["scope.userInfo"]) {
        } else {
          console.log("用户还未授权过");
        }
      }
    });
    //获取当前位置
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.init({ location: `${res.longitude},${res.latitude}` });
      }
    });
    //获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        wx.setStorage({
          key: "system",
          data: res
        });
        console.log(res);
        that.navTop = res.windowHeight - 70 + "px";
        that.navLeft = res.windowWidth - 70 + "px";
        that.pageX = res.windowWidth;
        that.pageY = res.windowHeight;
      }
    });
  },
  onShow() {
    // `this` 指向 vm 实例
    //console.log('a is: ' + this.a, '小程序触发的 onshow');
    //获取保存图片列表
    var that = this;
    wx.getSavedFileList({
      success: res => {
        console.log(res);
        if (res.fileList.length) {
          that.bgPath = res.fileList[res.fileList.length - 1].filePath;
        } else {
          that.bgPath = "";
        }
      }
    });
    wx.getStorage({
      key: "fontSize",
      success: function(res) {
        console.log(res);
        if (res.data) {
          that.fsize = res.data;
        }
      }
    });
  },
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading(); //在标题栏中显示加载
    var that = this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.init({ location: `${res.longitude},${res.latitude}` });
      }
    });
    //模拟加载
    // setTimeout(function() {
    //   // complete
    //   wx.hideNavigationBarLoading(); //完成停止加载
    //   wx.stopPullDownRefresh(); //停止下拉刷新
    // }, 500);
  }
};
</script>

<style scoped>
.con {
  position: relative;
  z-index: 20;
  font-family: "PingHei", "Helvetica Neue", "Helvetica", "Arial", "Verdana",
    "sans-serif";
}
.search {
  position: relative;
  width: 600rpx;
  margin: 30rpx auto 0;
  border-bottom: 1rpx solid #fff;
}
.search .input {
  padding-left: 50rpx;
  color: #fff;
  width: 100%;
  font-size: 30rpx;
}
.container .bg {
  background-color: #40a7e7;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.image {
  position: absolute;
  top: 10rpx;
  left: 0;
  width: 30rpx;
  height: 30rpx;
}
.dayPicture,
.nightPicture {
  width: 50rpx;
  height: 50rpx;
}
.weather {
  color: #fff;
}
.weather .w1 {
  display: flex;
  justify-content: flex-end;
  margin-top: 20rpx;
}
.weather .w1 span {
  margin-right: 30rpx;
}
.weather .w1 span:first-child {
  font-size: 30rpx;
}
.weather .w1 span:last-child {
  font-size: 20rpx;
  margin-top: 10rpx;
}
.weather .w2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.weather .w2 div:first-child {
  font: 300 normal 120rpx "PingHei", "Helvetica Neue", "Helvetica", "Arial",
    "Verdana", "sans-serif";
}
.weather .w2 div:first-child span {
  font-size: 26rpx;
}
.weather .w2 div:nth-of-type(2) {
  font: 300 normal 30rpx/50rpx "PingHei", "Helvetica Neue", "Helvetica", "Arial",
    "Verdana", "sans-serif";
}
.weather .w2 div:last-child {
  font: 300 normal 25rpx/36rpx "PingHei", "Helvetica Neue", "Helvetica", "Arial",
    "Verdana", "sans-serif";
  display: inline-block;
  padding: 0 15rpx;
  margin-top: 5rpx;
  border-radius: 18rpx;
  background-color: rgba(255, 255, 255, 0.6);
}
.weather .w3 {
  padding-top: 20rpx;
}
.weather .w3 ul {
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
}
.weather .w3 ul li {
  flex: 1;
  padding: 30rpx;
  font-size: 25rpx;
  text-align: center;
}
.weather .w3 ul li p {
  margin-bottom: 10rpx;
}
.weather .w3 ul li p:nth-of-type(n + 2) {
  line-height: 30rpx;
  /* height: 60rpx; */
}
.weather .w4 ul li {
  padding: 20rpx;
}
.weather .w4 ul li .img {
  width: 80rpx;
  height: 80rpx;
  float: left;
  margin-top: 15rpx;
  margin-left: 10rpx;
}
.weather .w4 ul li h3 {
  font-size: 30rpx;
}
.weather .w4 ul li p {
  padding-top: 15rpx;
  font-size: 22rpx;
  line-height: 28rpx;
  /* height: 56rpx; */
  overflow: hidden;
}
.weather .w4 ul li h3,
.weather .w4 ul li p {
  margin-left: 120rpx;
}
.navBar {
  position: fixed;
  width: 80rpx;
  height: 80rpx;
  z-index: 99999;
}
.coin {
  width: 80rpx;
  height: 80rpx;
}
.positionA {
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.transition1 {
  transition: all 0.25s ease-in-out;
}
.transition2 {
  transition: all 0.25s 0.1s ease-in-out;
}
.transition3 {
  transition: all 0.25s 0.2s ease-in-out;
}
.positionR {
  position: relative;
}
.showIcon {
  opacity: 1;
}
.bgImg {
  width: 100%;
}
.share {
  background: transparent;
  position: static;
  animation: changes 3s ease-in-out infinite;
  margin-top: -2rpx;
  height: 80rpx;
}
.carDesc {
  height: 78rpx;
  overflow: hidden;
}
@keyframes changes {
  0% {
    color: yellow;
    transform: scale(1, 1);
  }
  50% {
    color: yellowgreen;
    transform: scale(1.2, 1.2);
  }
  100% {
    color: yellow;
    transform: scale(1, 1);
  }
}
</style>