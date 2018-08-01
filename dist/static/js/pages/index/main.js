global.webpackJsonp([2],{

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(89);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_992de0b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(93);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-992de0b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_992de0b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-992de0b4", Component.options)
  } else {
    hotAPI.reload("data-v-992de0b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_libs_bmap_wx_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_libs_bmap_wx_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_libs_bmap_wx_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
    openNar: function openNar() {
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
    gotosetting: function gotosetting() {
      wx.navigateTo({
        url: "/pages/setting/main"
      });
    },
    gotoabout: function gotoabout() {
      wx.navigateTo({
        url: "/pages/about/main"
      });
    },
    gotosystem: function gotosystem() {
      wx.navigateTo({
        url: "/pages/system/main"
      });
    },

    //pm转换
    calcPM: function calcPM(value) {
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
    geocoder: function geocoder(address) {
      var that = this;
      wx.request({
        url: "https://api.map.baidu.com/geocoder/v2/?address=" + address + "&output=json&ak=" + this.globalData.ak,
        success: function success(res) {
          var data = res.data || {};
          if (!data.status) {
            var location = (data.result || {}).location || {};
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
        fail: function fail(res) {
          wx.showToast({
            title: res.errMsg || "网络不给力，请稍后再试",
            icon: "none"
          });
        }
      });
    },

    //执行函数
    init: function init(params) {
      console.log(params.location);
      var that = this;
      var BMap = new __WEBPACK_IMPORTED_MODULE_0__static_libs_bmap_wx_js___default.a.BMapWX({
        ak: this.globalData.ak
      });
      BMap.weather({
        location: params.location,
        fail: that.fail,
        success: that.success
      });
    },

    //失败
    fail: function fail(res) {
      wx.stopPullDownRefresh();
      var errMsg = res.errMsg || "";
      // 拒绝授权地理位置权限
      if (errMsg.indexOf("deny") !== -1 || errMsg.indexOf("denied") !== -1) {
        wx.showToast({
          title: "需要开启地理位置权限",
          icon: "none",
          duration: 3000,
          success: function success(res) {
            var timer = setTimeout(function () {
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
    success: function success(res) {
      wx.stopPullDownRefresh();
      console.log(res);
      var results = res.originalData.results[0] || {};
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
      wx.setStorage({
        key: "cityDatas",
        data: res
      });
    },

    //城市查询
    confirm: function confirm(e) {
      console.log(e.target.value);
      if (e.target.value) {
        this.geocoder(e.target.value);
      } else {
        //获取当前位置
        wx.getLocation({
          success: function success(res) {
            console.log(res);
            that.init({ location: res.longitude + "," + res.latitude });
          }
        });
      }
    },

    //目录栏滑动事件
    startTouch: function startTouch(e) {
      //console.log(e,e.pageX,e.pageY);
    },
    moveTouch: function moveTouch(e) {
      //console.log(e);
      this.navTop = e.clientY - 20 + "px";
      this.navLeft = e.clientX - 20 + "px";
      //console.log(this.navTop,this.navLeft);
    },
    endTouch: function endTouch(e) {
      //console.log(e);
      //this.navTop=e.pageX+"px";
      //this.navLeft=e.pageY+"px";
    },

    bindgetuserinfo: function bindgetuserinfo(e) {
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
  created: function created() {
    var that = this;
    //this.geocoder("深圳");
    //获取用户信息
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting["scope.userInfo"]) {
          // wx.getUserInfo({
          //   lang: "zh_CN",
          //   withCredentials: true,
          //   success: function(res) {
          //     //console.log(res.userInfo);
          //     wx.setStorage({ key: "userInfo", data: res.userInfo });
          //     //用户已经授权过
          //   }
          // });
        } else {
          console.log("用户还未授权过");
        }
      }
    });
    //获取当前位置
    wx.getLocation({
      success: function success(res) {
        console.log(res);
        that.init({ location: res.longitude + "," + res.latitude });
      }
    });
    //获取系统信息
    wx.getSystemInfo({
      success: function success(res) {
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
  onShow: function onShow() {
    // `this` 指向 vm 实例
    //console.log('a is: ' + this.a, '小程序触发的 onshow');
    //获取保存图片列表
    var that = this;
    wx.getSavedFileList({
      success: function success(res) {
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
      success: function success(res) {
        console.log(res);
        if (res.data) {
          that.fsize = res.data;
        }
      }
    });
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

/**
 * @file 微信小程序JSAPI
 * @author 崔健 cuijian03@baidu.com 2017.01.10
 */

/**
 * 百度地图微信小程序API类
 *
 * @class
 */
class BMapWX {

    /**
     * 百度地图微信小程序API类
     *
     * @constructor
     */
    constructor(param) {
        this.ak = param["ak"];
    }

    /**
     * 使用微信接口进行定位
     *
     * @param {string} type 坐标类型
     * @param {Function} success 成功执行
     * @param {Function} fail 失败执行
     * @param {Function} complete 完成后执行
     */
    getWXLocation(type, success, fail, complete) {
        type = type || 'gcj02',
        success = success || function () {};
        fail = fail || function () {};
        complete = complete || function () {};
        wx.getLocation({
            type: type,
            success: success,
            fail: fail,
            complete:complete
        });
    }

    /**
     * POI周边检索
     *
     * @param {Object} param 检索配置
     * 参数对象结构可以参考
     * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
     */
    search(param) {
        var that = this;
        param = param || {};
        let searchparam = {
            query: param["query"] || '生活服务$美食&酒店',
            scope: param["scope"] || 1,
            filter: param["filter"] || '',
            coord_type: param["coord_type"] || 2,
            page_size: param["page_size"] || 10,
            page_num: param["page_num"] || 0,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            radius: param["radius"] || 2000,
            ret_coordtype: 'gcj02ll'
        };
        let otherparam = {
            iconPath: param["iconPath"],
            iconTapPath: param["iconTapPath"],
            width: param["width"],
            height: param["height"],
            alpha: param["alpha"] || 1,
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
        };
        let type = 'gcj02';
        let locationsuccess = function (result) {
            searchparam["location"] = result["latitude"] + ',' + result["longitude"];
            wx.request({
                url: 'https://api.map.baidu.com/place/v2/search',
                data: searchparam,
                header: {
                    "content-type": "application/json"
                },
                method: 'GET',
                success(data) {
                    let res = data["data"];
                    if (res["status"] === 0) {
                        let poiArr = res["results"];
                        // outputRes 包含两个对象，
                        // originalData为百度接口返回的原始数据
                        // wxMarkerData为小程序规范的marker格式
                        let outputRes = {};
                        outputRes["originalData"] = res;
                        outputRes["wxMarkerData"] = [];
                        for (let i = 0; i < poiArr.length; i++) {
                            outputRes["wxMarkerData"][i] = {
                                id: i,
                                latitude: poiArr[i]["location"]["lat"],
                                longitude: poiArr[i]["location"]["lng"],
                                title: poiArr[i]["name"],
                                iconPath: otherparam["iconPath"],
                                iconTapPath: otherparam["iconTapPath"],
                                address: poiArr[i]["address"],
                                telephone: poiArr[i]["telephone"],
                                alpha: otherparam["alpha"],
                                width: otherparam["width"],
                                height: otherparam["height"]
                            } 
                        }
                        otherparam.success(outputRes);
                    } else {
                        otherparam.fail({
                            errMsg: res["message"],
                            statusCode: res["status"]
                        });
                    }
                },
                fail(data) {
                    otherparam.fail(data);
                }
            });
        }
        let locationfail = function (result) {
            otherparam.fail(result);
        };
        let locationcomplete = function (result) {
        };
        if (!param["location"]) {
            that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
        } else {
            let longitude = param.location.split(',')[1];
            let latitude = param.location.split(',')[0];
            let errMsg = 'input location';
            let res = {
                errMsg: errMsg,
                latitude: latitude,
                longitude: longitude
            };
            locationsuccess(res);
        }
    }

    /**
     * sug模糊检索
     *
     * @param {Object} param 检索配置
     * 参数对象结构可以参考
     * http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
     */
    suggestion(param) {
        var that = this;
        param = param || {};
        let suggestionparam = {
            query: param["query"] || '',
            region: param["region"] || '全国',
            city_limit: param["city_limit"] || false,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            ret_coordtype: 'gcj02ll'
        };
        let otherparam = {
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
        };
        wx.request({
            url: 'https://api.map.baidu.com/place/v2/suggestion',
            data: suggestionparam,
            header: {
                "content-type": "application/json"
            },
            method: 'GET',
            success(data) {
                let res = data["data"];
                if (res["status"] === 0) {
                    otherparam.success(res);
                } else {
                    otherparam.fail({
                        errMsg: res["message"],
                        statusCode: res["status"]
                    });
                }
            },
            fail(data) {
                otherparam.fail(data);
            }
        });
    }

    /**
     * rgc检索（坐标->地点描述）
     *
     * @param {Object} param 检索配置
     * 参数对象结构可以参考
     * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding
     */
    regeocoding(param) {
        var that = this;
        param = param || {};
        let regeocodingparam = {
            coordtype: param["coordtype"] || 'gcj02ll',
            pois: param["pois"] || 0,
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || '',
            ret_coordtype: 'gcj02ll'
        };
        let otherparam = {
            iconPath: param["iconPath"],
            iconTapPath: param["iconTapPath"],
            width: param["width"],
            height: param["height"],
            alpha: param["alpha"] || 1,
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
        };
        let type = 'gcj02';
        let locationsuccess = function (result) {
            regeocodingparam["location"] = result["latitude"] + ',' + result["longitude"];
            wx.request({
                url: 'https://api.map.baidu.com/geocoder/v2/',
                data: regeocodingparam,
                header: {
                    "content-type": "application/json"
                },
                method: 'GET',
                success(data) {
                    let res = data["data"];
                    if (res["status"] === 0) {
                        let poiObj = res["result"];
                        // outputRes 包含两个对象，
                        // originalData为百度接口返回的原始数据
                        // wxMarkerData为小程序规范的marker格式
                        let outputRes = {};
                        outputRes["originalData"] = res;
                        outputRes["wxMarkerData"] = [];    
                        outputRes["wxMarkerData"][0] = {
                            id: 0,
                            latitude: result["latitude"],
                            longitude: result["longitude"],
                            address: poiObj["formatted_address"],
                            iconPath: otherparam["iconPath"],
                            iconTapPath: otherparam["iconTapPath"],
                            desc: poiObj["sematic_description"],
                            business: poiObj["business"],
                            alpha: otherparam["alpha"],
                            width: otherparam["width"],
                            height: otherparam["height"]
                        }
                        otherparam.success(outputRes);
                    } else {
                        otherparam.fail({
                            errMsg: res["message"],
                            statusCode: res["status"]
                        });
                    }
                },
                fail(data) {
                    otherparam.fail(data);
                }
            });
        };
        let locationfail = function (result) {
            otherparam.fail(result);
        }
        let locationcomplete = function (result) {
        };
        if (!param["location"]) {
            that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
        } else {
            let longitude = param.location.split(',')[1];
            let latitude = param.location.split(',')[0];
            let errMsg = 'input location';
            let res = {
                errMsg: errMsg,
                latitude: latitude,
                longitude: longitude
            };
            locationsuccess(res);
        }
    }

    /**
     * 天气检索
     *
     * @param {Object} param 检索配置
     */
    weather(param) {
        var that = this;
        param = param || {};
        let weatherparam = {
            coord_type: param["coord_type"] || 'gcj02',
            output: param["output"] || 'json',
            ak: that.ak,
            sn: param["sn"] || '',
            timestamp: param["timestamp"] || ''
        };
        let otherparam = {
            success: param["success"] || function () {},
            fail: param["fail"] || function () {}
        };
        let type = 'gcj02';
        let locationsuccess = function (result) {
            weatherparam["location"] = result["longitude"] + ',' + result["latitude"];
            wx.request({
                url: 'https://api.map.baidu.com/telematics/v3/weather',
                data: weatherparam,
                header: {
                    "content-type": "application/json"
                },
                method: 'GET',
                success(data) {
                    let res = data["data"];
                    if (res["error"] === 0 && res["status"] === 'success') {
                        let weatherArr = res["results"];
                        // outputRes 包含两个对象，
                        // originalData为百度接口返回的原始数据
                        // wxMarkerData为小程序规范的marker格式
                        let outputRes = {};
                        outputRes["originalData"] = res;
                        outputRes["currentWeather"] = [];    
                        outputRes["currentWeather"][0] = {
                            currentCity: weatherArr[0]["currentCity"],
                            pm25: weatherArr[0]["pm25"],
                            date: weatherArr[0]["weather_data"][0]["date"],
                            temperature: weatherArr[0]["weather_data"][0]["temperature"],
                            weatherDesc: weatherArr[0]["weather_data"][0]["weather"],
                            wind: weatherArr[0]["weather_data"][0]["wind"]
                        };
                        otherparam.success(outputRes);
                    } else {
                        otherparam.fail({
                            errMsg: res["message"],
                            statusCode: res["status"]
                        });
                    }
                },
                fail(data) {
                    otherparam.fail(data);
                }
            });
        }
        let locationfail = function (result) {
            otherparam.fail(result);
        }
        let locationcomplete = function (result) {
        }
        if (!param["location"]) {
            that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
        } else {
            let longitude = param.location.split(',')[0];
            let latitude = param.location.split(',')[1];
            let errMsg = 'input location';
            let res = {
                errMsg: errMsg,
                latitude: latitude,
                longitude: longitude
            };
            locationsuccess(res);
        }
    }
}

module.exports.BMapWX = BMapWX;

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('img', {
    staticClass: "bgImg",
    attrs: {
      "src": _vm.bgPath,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "con"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('image', {
    staticClass: "image",
    attrs: {
      "src": "/static/img/search.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.city),
      expression: "city"
    }],
    staticClass: "input",
    style: ({
      fontSize: _vm.fsize + 'rpx'
    }),
    attrs: {
      "confirm-type": "search",
      "placeholder-style": "color:#fff",
      "type": "text",
      "placeholder": "请输入要查询的城市",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.city)
    },
    on: {
      "confirm": function($event) {
        _vm.confirm($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.city = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weather"
  }, [_c('div', {
    staticClass: "w1"
  }, [_c('span', {
    style: ({
      fontSize: _vm.fsize + 'rpx'
    })
  }, [_vm._v(_vm._s(_vm.data.current.currentCity))]), _c('span', {
    style: ({
      fontSize: _vm.fsize - 5 + 'rpx'
    })
  }, [_vm._v(_vm._s(_vm.data.current.date))])]), _vm._v(" "), _c('div', {
    staticClass: "w2"
  }, [_c('div', [_vm._v(_vm._s(_vm.data.current.currentW)), _c('span', [_vm._v("℃")])]), _vm._v(" "), _c('div', {
    style: ({
      fontSize: _vm.fsize + 'rpx'
    })
  }, [_vm._v(_vm._s(_vm.data.current.weatherDesc))]), _vm._v(" "), _c('div', {
    style: ({
      fontSize: _vm.fsize - 5 + 'rpx',
      lineHeight: _vm.fsize + 20 + 'rpx'
    })
  }, [_vm._v(_vm._s(_vm.data.current.pmdes.desc) + " " + _vm._s(_vm.data.current.pmdes.val))])]), _vm._v(" "), _c('div', {
    staticClass: "w3"
  }, [_c('ul', _vm._l((_vm.data.weather_data), function(item, index) {
    return _c('li', {
      key: index
    }, [(index == 0) ? _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v("今天")]) : _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v(_vm._s(item.date))]), _vm._v(" "), _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v(_vm._s(item.temperature))]), _vm._v(" "), _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v(_vm._s(item.weather))]), _vm._v(" "), _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v(_vm._s(item.wind))])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "w4"
  }, [_c('ul', _vm._l((_vm.data.index), function(item, index) {
    return _c('li', {
      key: index
    }, [(item.title == '紫外线强度') ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": "/static/img/sun.png",
        "alt": "紫外线"
      }
    }) : _vm._e(), _vm._v(" "), (item.title == '运动') ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": "/static/img/running.png",
        "alt": "运动"
      }
    }) : _vm._e(), _vm._v(" "), (item.title == '感冒') ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": "/static/img/pill.png",
        "alt": "感冒"
      }
    }) : _vm._e(), _vm._v(" "), (item.title == '洗车') ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": "/static/img/carwashing.png",
        "alt": "洗车"
      }
    }) : _vm._e(), _vm._v(" "), (item.title == '穿衣') ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": "/static/img/clothing.png",
        "alt": "穿衣"
      }
    }) : _vm._e(), _vm._v(" "), _c('h3', {
      style: ({
        fontSize: _vm.fsize + 'rpx'
      })
    }, [_vm._v(_vm._s(item.tipt) + " " + _vm._s(item.zs))]), _vm._v(" "), _c('p', {
      style: ({
        fontSize: _vm.fsize - 5 + 'rpx',
        lineHeight: _vm.fsize + 10 + 'rpx'
      })
    }, [_vm._v(_vm._s(item.des))])], 1)
  }))], 1)]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '5'
    },
    on: {
      "getuserinfo": _vm.bindgetuserinfo
    }
  }, [_c('div', {
    staticClass: "navBar",
    style: ({
      top: _vm.navTop,
      left: _vm.navLeft
    }),
    attrs: {
      "eventid": '4'
    },
    on: {
      "tap": _vm.openNar,
      "touchstart": _vm.startTouch,
      "touchmove": function($event) {
        $event.stopPropagation();
        _vm.moveTouch($event)
      },
      "touchend": _vm.endTouch
    }
  }, [_c('img', {
    staticClass: "coin positionA",
    class: {
      showIcon: _vm.showIcon
    },
    style: ({
      left: 0 + 'px',
      top: _vm.menuCoinTop * 1.42 + 'px'
    }),
    attrs: {
      "src": "/static/img/setting.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "tap": _vm.gotosetting
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "coin positionA",
    class: {
      showIcon: _vm.showIcon
    },
    style: ({
      left: _vm.menuCoinLeft + 'px',
      top: _vm.menuCoinTop + 'px'
    }),
    attrs: {
      "src": "/static/img/more.png",
      "alt": "",
      "eventid": '2'
    },
    on: {
      "tap": _vm.gotoabout
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "coin positionA",
    class: {
      showIcon: _vm.showIcon
    },
    style: ({
      left: _vm.menuCoinLeft * 1.42 + 'px',
      top: 0 + 'px'
    }),
    attrs: {
      "src": "/static/img/info.png",
      "alt": "",
      "eventid": '3'
    },
    on: {
      "tap": _vm.gotosystem
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "coin positionR",
    attrs: {
      "src": "/static/img/menu.png",
      "alt": ""
    }
  })])])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-992de0b4", esExports)
  }
}

/***/ })

},[88]);
//# sourceMappingURL=main.js.map