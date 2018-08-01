global.webpackJsonp([4],{

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(76);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '关于我们'
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_955dc6be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(80);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(77)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-955dc6be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_955dc6be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\about\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-955dc6be", Component.options)
  } else {
    hotAPI.reload("data-v-955dc6be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 77:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_libs_untils_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_libs_untils_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_libs_untils_js__);

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


var topText = ["活泼", "时尚", "典雅", "甜美", "自然", "浪漫", "文雅", "摩登"];
var allSpaceTime = 50; //线程执行间隔时间
var animateinterval = "";
var rangArr = [{
  endText: "HHM",
  texts: topText,
  beginTime: 500,
  spacetime: 10,
  stime: 500
}, {
  endText: "清爽干练",
  texts: topText,
  beginTime: 1000,
  spacetime: 10,
  stime: 1000
}, {
  endText: "简约利落",
  texts: topText,
  beginTime: 1200,
  spacetime: 10,
  stime: 1000
}, {
  endText: "完美",
  texts: topText,
  beginTime: 1400,
  spacetime: 10,
  stime: 1000
}, {
  endText: "可爱",
  texts: topText,
  beginTime: 1800,
  spacetime: 10,
  stime: 1000
}, {
  endText: "中性风",
  texts: topText,
  beginTime: 2000,
  spacetime: 10,
  stime: 1000
}, {
  endText: "时尚先生",
  texts: topText,
  beginTime: 2200,
  spacetime: 10,
  stime: 1000
}, {
  endText: "简约利落",
  texts: topText,
  beginTime: 2400,
  spacetime: 10,
  stime: 1000
}];
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      github: "https://github.com/myvin",
      email: "851399101@qq.com",
      qq: "851399101",
      swiperHeight: "auto",
      bannerImgList: ["http://bpic.588ku.com/element_origin_min_pic/18/06/10/bfe427583d63bd521becf65d43bac6f4.jpg", "http://bpic.588ku.com/element_origin_min_pic/18/06/10/19b540199a4fee3721dc863cb6564705.jpg"],
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
    previewImages: function previewImages(e) {
      var index = e.currentTarget.dataset.index || 0;
      var urls = this.data.bannerImgList;
      wx.previewImage({
        current: urls[index],
        urls: urls,
        success: function success(res) {},
        fail: function fail(res) {
          console.error("previewImage fail: ", res);
        }
      });
    },
    initSwiper: function initSwiper() {
      var that = this;
      var systeminfo = getApp().globalData.systeminfo;
      if (__WEBPACK_IMPORTED_MODULE_1__static_libs_untils_js___default.a.isEmptyObject(systeminfo)) {
        wx.getSystemInfo({
          success: function success(res) {
            that.setSwiperHeight(res);
          }
        });
      } else {
        that.setSwiperHeight(systeminfo);
      }
    },
    setSwiperHeight: function setSwiperHeight(res) {
      this.swiperHeight = (res.windowWidth || res.screenWidth) / 375 * 200 + "px";
    },
    copy: function copy(e) {
      var dataset = (e.target || {}).dataset || {};
      var title = dataset.title || "";
      var content = dataset.content || "";
      wx.setClipboardData({
        data: content,
        success: function success() {
          wx.showToast({
            title: "\u5DF2\u590D\u5236" + title,
            duration: 2000
          });
        }
      });
    },
    showEgg: function showEgg() {
      console.log(111);
      this.randDomText();
      this.openflag = true;
    },
    closeEgg: function closeEgg() {
      this.openflag = false;
    },

    randDomText: function randDomText() {
      //endText最终显示文字，texts闪烁文字，time延迟时间,spacetime闪烁频率,stime闪烁周期
      var that = this;
      for (var i = 0; i < rangArr.length; i++) {
        var rang = rangArr[i];
        rang["runTime"] = 0; //累计运行时间
        rang["isRun"] = false; //是否已经开始在执行了
        rang["isStop"] = false; //是否已经执行完毕了
      }

      animateinterval = setInterval(function () {
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
            } else if (rangXX["runTime"] >= rangXX["stime"] + rangXX["beginTime"]) {
              //如果当前队列的已经执行完毕，则显示最后一次的数据
              rangXX["isStop"] = true;
              if (rangXX["lastWord"] != rangXX["endText"]) {
                rangXX["lastWord"] = rangXX["endText"];
                showData["text" + (i + 1)] = rangXX["endText"]; //显示最后的词
              }
              continue;
            }
            var index = Math.floor((rangXX["runTime"] - rangXX["beginTime"]) / rangXX["spacetime"]) % rangXX["texts"].length;
            var showWord = rangXX["texts"][index];
            if (rangXX["lastWord"] != showWord) {
              rangXX["lastWord"] = showWord;
              showData["text" + (i + 1)] = showWord;
            }
          } else {
            continue;
          }
        }

        if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(showData) != "{}") {
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
  mounted: function mounted() {
    this.initSwiper();
  }
});

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

let formatDate = (nDate, date) => {
  if (isNaN(nDate.getTime())) {
    // 不是时间格式
    return '--'
  }
  let o = {
    'M+': nDate.getMonth() + 1,
    'd+': nDate.getDate(),
    'h+': nDate.getHours(),
    'm+': nDate.getMinutes(),
    's+': nDate.getSeconds(),
    // 季度
    'q+': Math.floor((nDate.getMonth() + 3) / 3),
    'S': nDate.getMilliseconds()
  }
  if (/(y+)/.test(date)) {
    date = date.replace(RegExp.$1, (nDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(date)) {
      date = date.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return date
}

let isEmptyObject = (obj) => {
  for (let i in obj) {
    return false
  }
  return true
}

let themeSetting = () => {
  let bcgColor = '#40a7e7'
  let hour = new Date().getHours()
  if (hour >= 6 && hour <= 17) {
    bcgColor = '#40a7e7'
  } else {
    bcgColor = '#384148'
  }
  wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: bcgColor,
  })
  return bcgColor
}

// 比较版本号：left > right 1, left < right -1, left == right 0
// 用途：旧版本不执行写入、删除 日历操作
let cmpVersion = (left, right) => {
  if (typeof left + typeof right !== 'stringstring') {
    return false
  }
  let a = left.split('.')
  let b = right.split('.')
  let i = 0
  let len = Math.max(a.length, b.length)
  for (; i < len; i++) {
    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
      return 1
    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
      return -1
    }
  }
  return 0
}

module.exports = {
  formatDate,
  isEmptyObject,
  themeSetting,
  cmpVersion,
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "con",
    attrs: {
      "eventid": '1'
    },
    on: {
      "longpress": _vm.showEgg,
      "touchend": _vm.closeEgg
    }
  }, [_c('div', {
    staticClass: "bg",
    class: {
      'open': _vm.openflag
    }
  }, [_c('view', {
    staticClass: "detailTopTextCon"
  }, [_c('label', {
    staticClass: "detailTopText detailTopText1 detailTopAnimate1"
  }, [_vm._v(_vm._s(_vm.text1))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText2 detailTopAnimate2"
  }, [_vm._v(_vm._s(_vm.text2))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText3 detailTopAnimate3"
  }, [_vm._v(_vm._s(_vm.text3))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText4 detailTopAnimate4"
  }, [_vm._v(_vm._s(_vm.text4))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText5 detailTopAnimate5"
  }, [_vm._v(_vm._s(_vm.text5))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText6 detailTopAnimate6"
  }, [_vm._v(_vm._s(_vm.text6))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText7 detailTopAnimate7"
  }, [_vm._v(_vm._s(_vm.text7))]), _vm._v(" "), _c('label', {
    staticClass: "detailTopText detailTopText8 detailTopAnimate8"
  }, [_vm._v(_vm._s(_vm.text8))])], 1)]), _vm._v(" "), _c('view', {
    staticClass: "about"
  }, [_c('swiper', {
    style: ({
      height: _vm.swiperHeight
    }),
    attrs: {
      "indicator-color": "#666666",
      "indicator-active-color": "#40a7e7",
      "indicator-dots": "true",
      "autoplay": "true",
      "circular": "true",
      "interval": "5000",
      "duration": "300",
      "previous-margin": "0px",
      "next-margin": "0px"
    }
  }, _vm._l((_vm.bannerImgList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('view', {
      staticClass: "info",
      attrs: {
        "data-index": index,
        "eventid": '0-' + index
      },
      on: {
        "tap": _vm.previewImages
      }
    }, [_c('img', {
      attrs: {
        "src": item
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "name"
    }, [_vm._v("还没起名字的一款天气预报")])])])], 1)
  })), _vm._v(" "), _c('view', {
    staticClass: "feedback item"
  }, [_c('view', {
    staticClass: "title"
  }, [_vm._v("建议 & 意见反馈")]), _vm._v(" "), _c('view', {
    staticClass: "i",
    attrs: {
      "catchtap": "copy",
      "data-title": "GitHub",
      "data-content": _vm.github
    }
  }, [_vm._v("\n        对不起，您的意见我一定会听，但肯定不会改，哈哈哈~~~\n    ")]), _vm._v(" "), _c('view', {
    staticClass: "i"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/wechat.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("微信快速联系")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("联系我们")])], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "thanks item"
  }, [_c('view', {
    staticClass: "title"
  }, [_vm._v("鸣谢")]), _vm._v(" "), _c('view', {
    staticClass: "i"
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("地理编码：百度地图开放平台")])]), _vm._v(" "), _c('view', {
    staticClass: "i"
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("天气数据来源：百度地图开放平台")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "attention item"
  }, [_c('view', {
    staticClass: "title"
  }, [_vm._v("注意事项")]), _vm._v(" "), _c('view', {
    staticClass: "i"
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("还没起名字的一款天气预报小程序（复刻版）的数据均存储在本地，没有账号体系，没有数据同步功能，若清空微信相关数据可能会造成数据（首页缓存数据、首页悬浮球位置信息、设置）丢失（看个天气而已，何必纠结）。")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "attention item"
  }, [_c('view', {
    staticClass: "title"
  }, [_vm._v("author")]), _vm._v(" "), _c('view', {
    staticClass: "i"
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("power by zxjBigPower")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-955dc6be", esExports)
  }
}

/***/ })

},[75]);
//# sourceMappingURL=main.js.map