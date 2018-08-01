global.webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(105);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '设置'
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_0a37f538_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a37f538"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_0a37f538_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\setting\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a37f538", Component.options)
  } else {
    hotAPI.reload("data-v-0a37f538", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      lightVal: "",
      fontSize: "30"
    };
  },

  methods: {
    switch2Change: function switch2Change(e) {
      // console.log("switch2 发生 change 事件，携带值为", e.mp.detail.value);
      if (e.mp.detail.value) {
        wx.setScreenBrightness({
          value: 1
        });
      } else {
        wx.setScreenBrightness({
          value: this.lightVal / 100
        });
      }
    },
    sliderChange1: function sliderChange1(e) {
      // console.log(e.mp.detail.value);
      wx.setScreenBrightness({
        value: e.mp.detail.value / 100
      });
    },

    //字体设置
    sliderChange2: function sliderChange2(e) {
      wx.setStorage({
        key: "fontSize",
        data: e.mp.detail.value
      });
      this.fontSize = e.mp.detail.value + "";
      //console.log(this.fontSize);
    },

    //检查是否支持NFC
    setPlain: function setPlain() {
      wx.showLoading({
        title: "加载中"
      });
      var flag;
      setTimeout(function () {
        wx.getHCEState({
          success: function success(res) {
            console.log(res + "44444");
            flag = true;
          },
          fail: function fail(err) {
            console.log(err);
            flag = false;
          },
          complete: function complete() {
            if (flag) {
              wx.showToast({
                title: "恭喜您，您的机型支持NFC功能！",
                icon: "none",
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
    customBcg: function customBcg() {
      var that = this;
      wx.chooseImage({
        success: function success(res) {
          that.removeBcg(function () {
            wx.saveFile({
              tempFilePath: res.tempFilePaths[0],
              success: function success(res) {
                wx.navigateBack({});
              }
            });
          });
        },
        fail: function fail(res) {
          var errMsg = res.errMsg;
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
    removeBcg: function removeBcg(callback) {
      wx.getSavedFileList({
        success: function success(res) {
          var fileList = res.fileList;
          var len = fileList.length;
          if (len > 0) {
            var _loop = function _loop(i) {
              (function (path) {
                wx.removeSavedFile({
                  filePath: path,
                  complete: function complete(res) {
                    if (i === len - 1) {
                      callback && callback();
                    }
                  }
                });
              })(fileList[i].filePath);
            };

            for (var i = 0; i < len; i++) {
              _loop(i);
            }
          } else {
            callback && callback();
          }
        },
        fail: function fail() {
          wx.showToast({
            title: "出错了，请稍后再试",
            icon: "none"
          });
        }
      });
    },

    //清除缓存
    clearStroage: function clearStroage() {
      wx.clearStorage();
      wx.getSavedFileList({
        success: function success(res) {
          if (res.fileList.length > 0) {
            wx.removeSavedFile({
              filePath: res.fileList[0].filePath,
              complete: function complete(res) {
                console.log(res);
              }
            });
          }
        }
      });
      wx.showToast({
        title: "清除缓存成功！",
        icon: "success",
        duration: 2000
      });
    }
  },

  mounted: function mounted() {
    var _this = this;

    wx.getScreenBrightness({
      success: function success(res) {
        console.log(res);
        _this.lightVal = res.value * 100;
      }
    });
  }
});

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "con"
  }, [_c('ul', [_c('li', [_c('view', {
    staticClass: "weui-cells weui-cells_after-title",
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.customBcg
    }
  }, [_c('view', {
    staticClass: "weui-cell"
  }, [_c('view', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("修改背景")]), _vm._v(" "), _c('view', {
    staticClass: "weui-cell__ft"
  })])])]), _vm._v(" "), _c('li', [_c('view', {
    staticClass: "weui-cells weui-cells_after-title",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.setPlain
    }
  }, [_c('view', {
    staticClass: "weui-cell"
  }, [_c('view', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("检查本机是否支持NFC")]), _vm._v(" "), _c('view', {
    staticClass: "weui-cell__ft"
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "section section_gap"
  }, [_c('text', {
    staticClass: "section__title"
  }, [_vm._v("设置屏幕亮度")]), _vm._v(" "), _c('view', {
    staticClass: "body-view"
  }, [_c('slider', {
    attrs: {
      "value": _vm.lightVal,
      "show-value": "",
      "eventid": '2'
    },
    on: {
      "changing": _vm.sliderChange1
    }
  })])]), _vm._v(" "), _c('li', [_c('view', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('view', {
    staticClass: "weui-cell"
  }, [_c('view', {
    staticClass: "weui-cell__bd"
  }, [_vm._v("保持高亮")]), _vm._v(" "), _c('view', {
    staticClass: "weui-cell__f"
  }, [_c('view', {
    staticClass: "body-view"
  }, [_c('switch', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "change": _vm.switch2Change
    }
  })])])])])]), _vm._v(" "), _c('view', {
    staticClass: "section section_gap"
  }, [_c('text', {
    staticClass: "section__title"
  }, [_vm._v("设置字体大小")]), _vm._v(" "), _c('view', {
    staticClass: "body-view"
  }, [_c('slider', {
    attrs: {
      "value": _vm.fontSize,
      "min": "20",
      "max": "50",
      "show-value": "",
      "eventid": '4'
    },
    on: {
      "changing": _vm.sliderChange2
    }
  })]), _vm._v(" "), _c('p', {
    style: ({
      fontSize: _vm.fontSize + 'rpx'
    })
  }, [_vm._v("字体大小")])], 1), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "clearstroage",
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.clearStroage
    }
  }, [_vm._v("清除缓存")])])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0a37f538", esExports)
  }
}

/***/ })

},[104]);
//# sourceMappingURL=main.js.map