<template>
    <div class="con" @longpress="showEgg" @touchend="closeEgg">
        <div class="bg " :class="{' open':openflag}">
            <div class="li masked">{{userInfo.nickName}}, <br/> 请变成 <br/> 更好的{{userInfo.gender==1?"男孩":"女孩"}}！●ω●</div>
            <!--  -->
        </div>
        <!-- 系统信息 -->
         <!-- <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>  -->
         <ul>
             <li class="center"><img class="userPhoto" :src="userInfo.avatarUrl" alt=""></li>
             <li class="center username">用户名：{{userInfo.nickName}}</li>
             <li class="center where">地区：{{userInfo.country}}-{{userInfo.province}}-{{userInfo.city}}</li>
             <li class="center gender">性别：{{userInfo.gender==1?"男":"女"}}</li>
             <li class="system">
                <div>
                     <p>手机品牌</p>
                     <span>{{systemInfo.brand}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>手机型号</p>
                     <span>
                         {{systemInfo.model}}
                     </span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>设备像素比</p>
                     <span>{{systemInfo.pixelRatio}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>屏幕宽度</p>
                     <span>{{systemInfo.screenWidth}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>屏幕高度</p>
                     <span>{{systemInfo.screenHeight}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>可使用窗口宽度</p>
                     <span>{{systemInfo.windowWidth}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                    <p>可使用窗口高度</p>
                    <span>{{systemInfo.windowHeight}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>状态栏高度</p>
                     <span>{{systemInfo.statusBarHeight}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                     <p>微信设置语言</p>
                     <span>{{systemInfo.language}}</span>
                </div>
            </li>
            <li class="system">
                <div>
                    <p>操作系统版本</p>
                    <span>{{systemInfo.system}}</span>
                </div>
            </li>
            <li class="system">
                <div>
                    <p>客户端平台</p>
                    <span>{{systemInfo.platform}}</span>
                </div>
            </li>
             <li class="system">
                <div>
                    <p>微信版本号</p>
                    <span>{{systemInfo.version}}</span>
                </div>
            </li>
            <li class="system">
                <div>
                    <p>用户字体大小设置(px)</p>
                    <span>{{systemInfo.fontSizeSetting}}</span>
                </div>
            </li>
            <li class="system">
                <div>
                    <p>客户端基础库版本</p>
                    <span>{{systemInfo.SDKVersion}}</span>
                </div>
            </li>
         </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      systemInfo: {},
       openflag:false
    };
  },
  methods: {
    // onGotUserInfo: function(e) {
    //   console.log(e);
    //   return e
    // }
    showEgg(){
        console.log(111)
        this.openflag=true
    },
    closeEgg(){
        this.openflag=false;
    }
  },
  mounted() {
    var that = this;
    // console.log(this.onGotUserInfo());
    wx.getStorage({
      key: "userInfo",
      success: function(res) {
        console.log(res.data);
        that.userInfo = res.data;
      }
    });
    wx.getStorage({
      key: "system",
      success: function(res) {
        console.log(res);
        that.systemInfo = res.data;
      }
    });
  }
};
</script>

<style scoped>
@media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution: .001dpcm) {
        .masked{
            background-image: -webkit-linear-gradient(left, #F8F8FF, #F5F5F5 25%, #DCDCDC 50%, #F5F5F5 75%,#F8F8FF);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            -webkit-background-size: 200% 100%;
            -webkit-animation: masked-animation 4s infinite linear;
        }
    }
    @-webkit-keyframes masked-animation {
        0%  { background-position: 0 0;
           }
        50%{
           
        }
        100% { background-position: -100% 0; }
    }
.bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .3s;
    color:#fefefe;
}
.bg.open{
    background-color: rgba(230, 230, 230, 0.808);
    z-index: 100;
    opacity: 1;
}
.bg.open .li{
display:inline-block;
/* height:100rpx; */
position:absolute;
top:5%;
margin:-50rpx 0 0;
font-size:130rpx;
font-weight:100;
text-align:center;


}
.con ul li.center {
  text-align: center;
}
.con ul li.username {
  color: #999;
  font-size: 30rpx;
  line-height: 40rpx;
}
.con ul li.where {
  color: seagreen;
  font-size: 34rpx;
  line-height: 40rpx;
}
.con ul li.gender {
  color: tomato;
  line-height: 40rpx;
  font-size: 24rpx;
}
.userPhoto {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  border: 1px dotted #eee;
  margin: 30rpx auto 10rpx;
}
.system {
  padding: 20rpx;
}
.system > div {
  border-bottom: 1px dashed #ededed;
  height: 80rpx;
}
.system > div p {
  color: #999;
  font-size: 30rpx;
  line-height: 0;
}
.system > div span {
  font-size: 28rpx;
  color: #cdcdcd;
  line-height: 100rpx;
}
</style>
