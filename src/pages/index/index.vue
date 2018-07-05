<template>
  <div class="container">
    <div class="bg"></div>
    <div class="con">
      <div class="header">
      <div class="search">
        <image src="/static/img/search.png" alt="" class="image"/> 
        <input class="input" placeholder-style="color:#fff" v-model="city" type="text" placeholder="请输入要查询的城市">
      </div>
      <div class="weather">
          <div class="w1">
            <span>{{data.current.currentCity}}</span><span></span>
          </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
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
      data:{
        current:{}
      },
      lnglat:""
    };
  },

  methods: {
     // 地理位置编码
  geocoder (address) {
    let that = this;
    wx.request({
      url: `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}`,
      success (res) {
        let data = res.data || {}
        if (!data.status) {
          let location = (data.result || {}).location || {}
          // location = {lng, lat}
          that.lnglat=res.data.result.location;

          that.init({location:that.lnglat.lng+","+that.lnglat.lat})
          //console.log(res.data.result.location);
        } else {
          wx.showToast({
            title: data.msg || '网络不给力，请稍后再试',
            icon: 'none',
          })
        }
      },
      fail (res) {
        wx.showToast({
          title: res.errMsg || '网络不给力，请稍后再试',
          icon: 'none',
        })
      }
    })
  },
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
    fail(res) {
      wx.stopPullDownRefresh();
      let errMsg = res.errMsg || "";
      // 拒绝授权地理位置权限
      if (errMsg.indexOf("deny") !== -1 || errMsg.indexOf("denied") !== -1) {
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
    success(data) {
      wx.stopPullDownRefresh();
      let now = new Date();
      // 存下来源数据
      console.log(data)
      this.data=data
      this.data.current=data.currentWeather[0];
      data.updateTime = now.getTime();
      let results = data.originalData.results[0] || {};
      //data.pm = this.calcPM(results["pm25"]);
      // 当天实时温度
      // data.temperature = `${results.weather_data[0].date.match(/\d+/g)[2]}`;
      wx.setStorage({
        key: "cityDatas",
        data: data
      });
      // this.setData({
      //   cityDatas: data
      // });
    }
  },

  created() {
    var that=this;
    //this.geocoder("深圳");
    //获取用户信息
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过')
              }
            })
          }else{
            console.log('用户还未授权过')
          }
        }
      })
      //获取当前位置
      wx.getLocation({
        success:function(res){
          console.log(res);
          that.init({location:`${res.longitude},${res.latitude}`})
        }
      })
  }
};
</script>

<style scoped>
.con {
  position: relative;
  z-index: 20;
}
.search {
  position: relative;
  width: 600rpx;
  margin: 0 auto;

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
</style>
