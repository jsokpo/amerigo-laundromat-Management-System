"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["DataProduct"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fields: [{
        key: "name",
        label: "Item Name"
      }, {
        key: "unit_type",
        label: "Unit Type"
      }, {
        key: "laundry_type",
        label: "Laundry Type"
      }, {
        key: "price",
        label: "Price"
      }, {
        key: "user_id",
        label: "Admin"
      }, {
        key: "actions",
        label: "Actions"
      }],
      search: ""
    };
  },
  created: function created() {
    console.log("component data product");
    this.getProducts();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)("product", {
    products: function products(state) {
      return state.products;
    },
    totalRows: function totalRows(state) {
      return state.totalRows;
    },
    perPage: function perPage(state) {
      return state.perPage;
    },
    meta: function meta(state) {
      return state.meta;
    }
  })), {}, {
    page: {
      get: function get() {
        return this.$store.state.product.page;
      },
      set: function set(val) {
        this.$store.commit("product/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getProducts();
    },
    search: function search() {
      this.getProducts(this.search);
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("product", ["getProducts", "removeProduct"])), {}, {
    deleteProduct: function deleteProduct(id) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "this action will delete permanently",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "confirm"
      }).then(function (result) {
        if (result.value) {
          _this.removeProduct(id).then(function () {
            _this.$swal({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Item has been successfully deleted",
              timer: 2000,
              timerProgressBar: true,
              showConfirmbutton: false
            });
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/views/products/Data.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/products/Data.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.vue?vue&type=template&id=3fd74ca6& */ "./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6&");
/* harmony import */ var _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Data.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/Data.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/Data.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/products/Data.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Data.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_template_id_3fd74ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Data.vue?vue&type=template&id=3fd74ca6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/Data.vue?vue&type=template&id=3fd74ca6& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "card-header" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary btn-sm btn-flat",
              attrs: { to: { name: "ProductAdd" } },
            },
            [_vm._v("Add Outlet")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "search",
                id: "search",
                placeholder: "Search",
              },
              domProps: { value: _vm.search },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("b-table", {
            attrs: {
              striped: "",
              hover: "",
              bordered: "",
              responsive: "",
              items: _vm.products.data,
              fields: _vm.fields,
              "show-empty": "",
            },
            scopedSlots: _vm._u([
              {
                key: "cell(laundry_type)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n          " +
                        _vm._s(data.item.laundry_type.name) +
                        "\n        "
                    ),
                  ]
                },
              },
              {
                key: "cell(user_id)",
                fn: function (data) {
                  return [_vm._v(_vm._s(data.item.user.name) + " ")]
                },
              },
              {
                key: "cell(actions)",
                fn: function (data) {
                  return [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-warning btn-sm",
                        attrs: {
                          to: {
                            name: "ProductEdit",
                            params: { id: data.item.id },
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function ($event) {
                            return _vm.deleteProduct(data.item.id)
                          },
                        },
                      },
                      [_vm._v("\n            Delete\n          ")]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-2" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _vm.products.data
                ? _c("p", [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.meta.from) +
                        " - " +
                        _vm._s(_vm.meta.to) +
                        " from " +
                        _vm._s(_vm.meta.total) +
                        " data\n          "
                    ),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "float-right" },
                [
                  _vm.products.data && _vm.products.data.length > 0
                    ? _c("b-pagination", {
                        attrs: {
                          "total-rows": _vm.totalRows,
                          "per-page": _vm.perPage,
                          "aria-controls": "products",
                        },
                        model: {
                          value: _vm.page,
                          callback: function ($$v) {
                            _vm.page = $$v
                          },
                          expression: "page",
                        },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);