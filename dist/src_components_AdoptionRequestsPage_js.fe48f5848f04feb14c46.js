"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_AdoptionRequestsPage_js"],{

/***/ "./src/components/AdoptionRequestsPage.js":
/*!************************************************!*\
  !*** ./src/components/AdoptionRequestsPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _style_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/AdoptionRequestsPage.css */ "./src/style/AdoptionRequestsPage.css");



const AdoptionRequestsPage = () => {
  const [adoptionRequests, setAdoptionRequests] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const fetchAdoptionRequests = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/admin/adoption-requests`;
      const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(url);
      setAdoptionRequests(response.data.adoptionRequests);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching adoption requests');
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAdoptionRequests();
  }, []);
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading adoption requests...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adoption-requests-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Adoption Requests"), adoptionRequests.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No adoption requests available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "adoption-requests-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Reporter Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Animal Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Message"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, adoptionRequests.map(request => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: request.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.reporter_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.phone_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, request.message))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdoptionRequestsPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/AdoptionRequestsPage.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/AdoptionRequestsPage.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.adoption-requests-container {
    padding: 20px;
}

.adoption-requests-table {
    width: 100%;
    border-collapse: collapse;

}

.adoption-requests-table th, .adoption-requests-table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.adoption-requests-table th {
    background-color: #d0b190; 
    text-align: left;
}
`, "",{"version":3,"sources":["webpack://./src/style/AdoptionRequestsPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,yBAAyB;;AAE7B;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;AACpB","sourcesContent":[".adoption-requests-container {\n    padding: 20px;\n}\n\n.adoption-requests-table {\n    width: 100%;\n    border-collapse: collapse;\n\n}\n\n.adoption-requests-table th, .adoption-requests-table td {\n    border: 1px solid #ddd;\n    padding: 8px;\n}\n\n.adoption-requests-table th {\n    background-color: #d0b190; \n    text-align: left;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/AdoptionRequestsPage.css":
/*!********************************************!*\
  !*** ./src/style/AdoptionRequestsPage.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./AdoptionRequestsPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/AdoptionRequestsPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AdoptionRequestsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfQWRvcHRpb25SZXF1ZXN0c1BhZ2VfanMuZmU0OGY1ODQ4ZjA0ZmViMTRjNDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDaUI7QUFFM0MsTUFBTUksb0JBQW9CLEdBQUdBLENBQUEsS0FBTTtFQUMvQixNQUFNLENBQUNDLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM1RCxNQUFNLENBQUNLLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ08sS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFFdEMsTUFBTVMscUJBQXFCLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0lBQ3RDLElBQUk7TUFDQSxNQUFNQyxHQUFHLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGtCQUFrQiw4QkFBOEI7TUFDM0UsTUFBTUMsUUFBUSxHQUFHLE1BQU1iLDZDQUFLLENBQUNjLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDO01BQ3JDTixtQkFBbUIsQ0FBQ1UsUUFBUSxDQUFDRSxJQUFJLENBQUNiLGdCQUFnQixDQUFDO0lBQ3ZELENBQUMsQ0FBQyxPQUFPYyxHQUFHLEVBQUU7TUFDVkMsT0FBTyxDQUFDWCxLQUFLLENBQUMsY0FBYyxFQUFFVSxHQUFHLENBQUM7TUFDbENULFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQztJQUNoRCxDQUFDLFNBQVM7TUFDTkYsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNyQjtFQUNKLENBQUM7RUFFRFAsZ0RBQVMsQ0FBQyxNQUFNO0lBQ1pVLHFCQUFxQixDQUFDLENBQUM7RUFDM0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQUlKLE9BQU8sRUFBRTtJQUNULG9CQUFPUCwwREFBQSxZQUFHLDhCQUErQixDQUFDO0VBQzlDO0VBRUEsSUFBSVMsS0FBSyxFQUFFO0lBQ1Asb0JBQU9ULDBEQUFBLFlBQUlTLEtBQVMsQ0FBQztFQUN6QjtFQUVBLG9CQUNJVCwwREFBQTtJQUFLc0IsU0FBUyxFQUFDO0VBQTZCLGdCQUN4Q3RCLDBEQUFBLGFBQUksbUJBQXFCLENBQUMsRUFDekJLLGdCQUFnQixDQUFDa0IsTUFBTSxLQUFLLENBQUMsZ0JBQzFCdkIsMERBQUEsWUFBRyxpQ0FBa0MsQ0FBQyxnQkFFdENBLDBEQUFBO0lBQU9zQixTQUFTLEVBQUM7RUFBeUIsZ0JBQ3RDdEIsMERBQUEsNkJBQ0lBLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLGVBQWlCLENBQUMsZUFDdEJBLDBEQUFBLGFBQUksYUFBZSxDQUFDLGVBQ3BCQSwwREFBQSxhQUFJLGNBQWdCLENBQUMsZUFDckJBLDBEQUFBLGFBQUksU0FBVyxDQUFDLGVBQ2hCQSwwREFBQSxhQUFJLFFBQVUsQ0FBQyxlQUNmQSwwREFBQSxhQUFJLFNBQVcsQ0FDZixDQUNELENBQUMsZUFDUkEsMERBQUEsZ0JBQ0tLLGdCQUFnQixDQUFDbUIsR0FBRyxDQUFFQyxPQUFPLGlCQUMxQnpCLDBEQUFBO0lBQUkwQixHQUFHLEVBQUVELE9BQU8sQ0FBQ0U7RUFBRyxnQkFDaEIzQiwwREFBQSxhQUFLeUIsT0FBTyxDQUFDRyxhQUFrQixDQUFDLGVBQ2hDNUIsMERBQUEsYUFBS3lCLE9BQU8sQ0FBQ0ksSUFBUyxDQUFDLGVBQ3ZCN0IsMERBQUEsYUFBS3lCLE9BQU8sQ0FBQ0ssWUFBaUIsQ0FBQyxlQUMvQjlCLDBEQUFBLGFBQUt5QixPQUFPLENBQUNNLE9BQVksQ0FBQyxlQUMxQi9CLDBEQUFBLGFBQUt5QixPQUFPLENBQUNPLE1BQVcsQ0FBQyxlQUN6QmhDLDBEQUFBLGFBQUt5QixPQUFPLENBQUNRLE9BQVksQ0FDekIsQ0FDUCxDQUNFLENBQ0osQ0FFVixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlN0Isb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRW5DO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxR0FBcUcsVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSx3REFBd0Qsb0JBQW9CLEdBQUcsOEJBQThCLGtCQUFrQixnQ0FBZ0MsS0FBSyw4REFBOEQsNkJBQTZCLG1CQUFtQixHQUFHLGlDQUFpQyxpQ0FBaUMsdUJBQXVCLEdBQUcscUJBQXFCO0FBQ3ZtQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUg7QUFDckg7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxR0FBTzs7OztBQUkrRDtBQUN2RixPQUFPLGlFQUFlLHFHQUFPLElBQUkscUdBQU8sVUFBVSxxR0FBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0Fkb3B0aW9uUmVxdWVzdHNQYWdlLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9BZG9wdGlvblJlcXVlc3RzUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0Fkb3B0aW9uUmVxdWVzdHNQYWdlLmNzcz8yNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi4vc3R5bGUvQWRvcHRpb25SZXF1ZXN0c1BhZ2UuY3NzJzsgICAgIFxuXG5jb25zdCBBZG9wdGlvblJlcXVlc3RzUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbYWRvcHRpb25SZXF1ZXN0cywgc2V0QWRvcHRpb25SZXF1ZXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBmZXRjaEFkb3B0aW9uUmVxdWVzdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hZG9wdGlvbi1yZXF1ZXN0c2A7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgICAgICAgICAgc2V0QWRvcHRpb25SZXF1ZXN0cyhyZXNwb25zZS5kYXRhLmFkb3B0aW9uUmVxdWVzdHMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOicsIGVycik7XG4gICAgICAgICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgYWRvcHRpb24gcmVxdWVzdHMnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQWRvcHRpb25SZXF1ZXN0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nIGFkb3B0aW9uIHJlcXVlc3RzLi4uPC9wPjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRvcHRpb24tcmVxdWVzdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+QWRvcHRpb24gUmVxdWVzdHM8L2gxPlxuICAgICAgICAgICAge2Fkb3B0aW9uUmVxdWVzdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxwPk5vIGFkb3B0aW9uIHJlcXVlc3RzIGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhZG9wdGlvbi1yZXF1ZXN0cy10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlcG9ydGVyIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbmltYWwgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBob25lIE51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NZXNzYWdlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthZG9wdGlvblJlcXVlc3RzLm1hcCgocmVxdWVzdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3JlcXVlc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3JlcXVlc3QucmVwb3J0ZXJfbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3JlcXVlc3QubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3JlcXVlc3QucGhvbmVfbnVtYmVyfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVxdWVzdC5hZGRyZXNzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cmVxdWVzdC5zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntyZXF1ZXN0Lm1lc3NhZ2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG9wdGlvblJlcXVlc3RzUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWRvcHRpb24tcmVxdWVzdHMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYWRvcHRpb24tcmVxdWVzdHMtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbn1cblxuLmFkb3B0aW9uLXJlcXVlc3RzLXRhYmxlIHRoLCAuYWRvcHRpb24tcmVxdWVzdHMtdGFibGUgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4uYWRvcHRpb24tcmVxdWVzdHMtdGFibGUgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGIxOTA7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9BZG9wdGlvblJlcXVlc3RzUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFkb3B0aW9uLXJlcXVlc3RzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5hZG9wdGlvbi1yZXF1ZXN0cy10YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcbn1cXG5cXG4uYWRvcHRpb24tcmVxdWVzdHMtdGFibGUgdGgsIC5hZG9wdGlvbi1yZXF1ZXN0cy10YWJsZSB0ZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmFkb3B0aW9uLXJlcXVlc3RzLXRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjE5MDsgXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRvcHRpb25SZXF1ZXN0c1BhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BZG9wdGlvblJlcXVlc3RzUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQWRvcHRpb25SZXF1ZXN0c1BhZ2UiLCJhZG9wdGlvblJlcXVlc3RzIiwic2V0QWRvcHRpb25SZXF1ZXN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQWRvcHRpb25SZXF1ZXN0cyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsInJlcXVlc3QiLCJrZXkiLCJpZCIsInJlcG9ydGVyX25hbWUiLCJuYW1lIiwicGhvbmVfbnVtYmVyIiwiYWRkcmVzcyIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9