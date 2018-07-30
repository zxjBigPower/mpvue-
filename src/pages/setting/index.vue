<template>
    <div class="con">
      <ul>
        <li>
          <view class="weui-cells weui-cells_after-title" @tap="customBcg">
            <view class="weui-cell">
                <view class="weui-cell__bd">修改背景</view>
                <view class="weui-cell__ft"></view>
            </view>
          </view>
        </li> 
        <li>
          <view class="weui-cells weui-cells_after-title" @tap="setPlain">
            <view class="weui-cell">
                <view class="weui-cell__bd">检查本机是否支持NFC</view>
                <view class="weui-cell__ft"></view>
            </view>
          </view>
        </li>
          <view class="section section_gap">
            <text class="section__title">设置屏幕亮度</text>
            <view class="body-view">
                <slider @changing="sliderChange1" :value="lightVal" show-value/>
            </view>
          </view>
        <li>
          <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell">
                <view class="weui-cell__bd">保持高亮</view>
                <view class="weui-cell__f">
                  <view class="body-view">
                      <switch @change="switch2Change"/>
                  </view>
                </view>
            </view>
          </view>
        </li>
      </ul>
        
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      lightVal: ""
    };
  },
  methods: {
    switch2Change: function(e) {
     // console.log("switch2 发生 change 事件，携带值为", e.mp.detail.value);
      if( e.mp.detail.value){
         wx.setScreenBrightness({
        value: 1
      });
      }else{
         wx.setScreenBrightness({
        value: this.lightVal/100
      });
      }
    },
    sliderChange1(e) {
      // console.log(e.mp.detail.value);
      wx.setScreenBrightness({
        value: e.mp.detail.value / 100
      });
    },
    //检查是否支持NFC
    setPlain() {
      wx.showLoading({
        title: "加载中"
      });
      var flag;
      setTimeout(() => {
        wx.getHCEState({
          success: res => {
            console.log(res + "44444");
            flag = true;
          },
          fail: err => {
            console.log(err);
            flag = false;
          },
          complete: () => {
            if (flag) {
              wx.showToast({
                title: "恭喜您，您的机型支持NFC功能！",
                icon: "success",
                duration: 2000
              });
            } else {
              wx.showToast({
                title: "抱歉，您的机型不支持NFC功能！",
                icon: "none",
                duration: 2000
              });
            }
          }
        });
      }, 1500);
    },
    //切换背景
    customBcg() {
      let that = this;
      wx.chooseImage({
        success: function(res) {
          that.removeBcg(() => {
            wx.saveFile({
              tempFilePath: res.tempFilePaths[0],
              success: function(res) {
                wx.navigateBack({});
              }
            });
          });
        },
        fail: function(res) {
          let errMsg = res.errMsg;
          // 如果是取消操作，不提示
          if (errMsg.indexOf("cancel") === -1) {
            wx.showToast({
              title: "发生错误，请稍后再试",
              icon: "none"
            });
          }
        }
      });
    },
    removeBcg(callback) {
      wx.getSavedFileList({
        success: function(res) {
          let fileList = res.fileList;
          let len = fileList.length;
          if (len > 0) {
            for (let i = 0; i < len; i++)
              (function(path) {
                wx.removeSavedFile({
                  filePath: path,
                  complete: function(res) {
                    if (i === len - 1) {
                      callback && callback();
                    }
                  }
                });
              })(fileList[i].filePath);
          } else {
            callback && callback();
          }
        },
        fail: function() {
          wx.showToast({
            title: "出错了，请稍后再试",
            icon: "none"
          });
        }
      });
    }
  },

  mounted() {
    wx.getScreenBrightness({
      success: res => {
        console.log(res);
        this.lightVal = res.value * 100;
      }
    });
  }
};
</script>

<style scoped>
.con {
  padding: 15rpx;
}
.weui-cell {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.weui-cell__bd {
  flex: 1;
}
.weui-cell__ft {
  padding-right: 13px;
  position: relative;
}
.weui-cell__ft:after {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #c8c8cd;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 2px;
}
.con ul li {
  height: 120rpx;
  line-height: 100rpx;
  border-bottom: 1px solid #eee;
}
.section {
  padding: 20rpx 30rpx;
  border-bottom: 1px solid #eee;
}
</style>
