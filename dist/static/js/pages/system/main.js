global.webpackJsonp([5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '查看系统信息'
  }
});

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_cfa9d91e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(113);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cfa9d91e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_cfa9d91e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\system\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfa9d91e", Component.options)
  } else {
    hotAPI.reload("data-v-cfa9d91e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
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
      userInfo: {},
      systemInfo: {},
      openflag: false
    };
  },

  methods: {
    // onGotUserInfo: function(e) {
    //   console.log(e);
    //   return e
    // }
    showEgg: function showEgg() {
      console.log(111);
      this.openflag = true;
    },
    closeEgg: function closeEgg() {
      this.openflag = false;
    }
  },
  mounted: function mounted() {
    var that = this;
    // console.log(this.onGotUserInfo());
    wx.getStorage({
      key: "userInfo",
      success: function success(res) {
        console.log(res.data);
        that.userInfo = res.data;
      }
    });
    wx.getStorage({
      key: "system",
      success: function success(res) {
        console.log(res);
        that.systemInfo = res.data;
      }
    });
  }
});

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "con",
    attrs: {
      "eventid": '0'
    },
    on: {
      "longpress": _vm.showEgg,
      "touchend": _vm.closeEgg
    }
  }, [_c('div', {
    staticClass: "bg ",
    class: {
      ' open': _vm.openflag
    }
  }, [_c('div', {
    staticClass: "li masked"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName) + ", "), _c('br'), _vm._v(" 请变成 "), _c('br'), _vm._v(" 更好的" + _vm._s(_vm.userInfo.gender == 1 ? "男孩" : "女孩") + "！●ω●")], 1)]), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "center"
  }, [_c('img', {
    staticClass: "userPhoto",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "center username"
  }, [_vm._v("用户名：" + _vm._s(_vm.userInfo.nickName))]), _vm._v(" "), _c('li', {
    staticClass: "center where"
  }, [_vm._v("地区：" + _vm._s(_vm.userInfo.country) + "-" + _vm._s(_vm.userInfo.province) + "-" + _vm._s(_vm.userInfo.city))]), _vm._v(" "), _c('li', {
    staticClass: "center gender"
  }, [_vm._v("性别：" + _vm._s(_vm.userInfo.gender == 1 ? "男" : "女"))]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("手机品牌")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.brand))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("手机型号")]), _vm._v(" "), _c('span', [_vm._v("\n                     " + _vm._s(_vm.systemInfo.model) + "\n                 ")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("设备像素比")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.pixelRatio))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("屏幕宽度")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.screenWidth))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("屏幕高度")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.screenHeight))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("可使用窗口宽度")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.windowWidth))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("可使用窗口高度")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.windowHeight))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("状态栏高度")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.statusBarHeight))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("微信设置语言")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.language))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("操作系统版本")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.system))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("客户端平台")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.platform))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("微信版本号")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.version))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("用户字体大小设置(px)")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.fontSizeSetting))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "system"
  }, [_c('div', [_c('p', [_vm._v("客户端基础库版本")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.systemInfo.SDKVersion))])], 1)])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cfa9d91e", esExports)
  }
}

/***/ })

},[109]);
//# sourceMappingURL=main.js.map