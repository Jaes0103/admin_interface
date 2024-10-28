"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_MapViewPage_js"],{

/***/ "./src/components/MapViewPage.js":
/*!***************************************!*\
  !*** ./src/components/MapViewPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/TileLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Marker.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Popup.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_MapPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/MapPage.css */ "./src/style/MapPage.css");
/* harmony import */ var _mui_icons_material_Pets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Pets */ "./node_modules/@mui/icons-material/esm/Pets.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");









// Use environment variable for base URL
const baseURL = process.env.REACT_APP_BASE_URL;
const customMarkerIcon = leaflet__WEBPACK_IMPORTED_MODULE_2___default().divIcon({
  className: 'custom-marker',
  html: (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "custom-marker-circle",
    style: {
      backgroundColor: '#8a7ebe',
      borderRadius: '50%',
      padding: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Pets__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: 'white',
      fontSize: '20px'
    }
  }))),
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});
const MapView = () => {
  const [reports, setReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${baseURL}/api/admin/reports`); // Use baseURL here
        if (!response.ok) {
          throw new Error('Failed to fetch reports');
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error loading reports:', error);
        setError(error.message);
      }
    };
    fetchReports();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "map-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidebar-component"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "header"
  }, "Animal Cruelty Geotagged Reports"), " ", error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "error"
  }, error), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "map-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Reports List"), reports.map((report, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: "report-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, report.animal_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, report.animal_details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: report.image_url,
    alt: "Animal Report",
    style: {
      width: '80px',
      height: '80px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Reported on: ", new Date(report.accident_date).toLocaleDateString()))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {
    center: [7.1907, 125.4553],
    zoom: 13,
    style: {
      height: '100%',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.TileLayer, {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
  }), reports.map((report, index) => {
    const lat = parseFloat(report.latitude);
    const lng = parseFloat(report.longitude);
    if (!isNaN(lat) && !isNaN(lng)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.Marker, {
        key: index,
        position: [lat, lng],
        icon: customMarkerIcon
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_10__.Popup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, report.animal_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), report.animal_details, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: report.image_url,
        alt: "Animal Report",
        style: {
          width: '100px',
          height: '100px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Reported on: ", new Date(report.accident_date).toLocaleDateString()));
    }
    return null;
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapView);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/MapPage.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/MapPage.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* src/style/MapPage.css */

/* Full height for the Leaflet container */
html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%; /* Ensure full height */
}

/* Container for the map and sidebar */
.map-container {
    position: relative; /* Needed for absolute positioning of the sidebar */
    height: 100vh; /* Full height for the map container */
    width: 100vw; /* Full width for the map container */
}
.sidebar-component{
    position: absolute; /* Position it absolutely to float over the map */
    top: 20px; /* Spacing from the top */
    left: 20px; /* Spacing from the left */
    padding: 10px; /* Padding for the sidebar */
    border-radius: 5px; /* Rounded corners for the sidebar */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */
    max-height: 80vh; /* Maximum height for the sidebar */
    overflow-y: auto; /* Scroll if content overflows */
    z-index: 1000; /* Ensure it's on top of the map */
}
/* Sidebar styling */
.map-sidebar {
    position: absolute; /* Position it absolutely to float over the map */
    top: 20px; /* Spacing from the top */
    right: 20px; /* Spacing from the left */
    width: 500px; /* Fixed width for the sidebar */
    background: rgba(255, 255, 255, 0.9); /* Background color with transparency */
    padding: 10px; /* Padding for the sidebar */
    border-radius: 5px; /* Rounded corners for the sidebar */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */
    max-height: 80vh; /* Maximum height for the sidebar */
    overflow-y: auto; /* Scroll if content overflows */
    z-index: 1000; /* Ensure it's on top of the map */
}

/* Full height for the Leaflet map */
.leaflet-container {
    height: 100%; /* Ensure the map takes the full height of the container */
}

/* Custom marker circle styling */
.custom-marker-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px; /* Width of the circle */
    height: 30px; /* Height of the circle */
    border-radius: 50%; /* Make it circular */
    background-color: #8a7ebe; /* Background color */
}

/* Error message styling */
.error {
    color: red; /* Change color for visibility */
    margin-bottom: 10px; /* Space below error */
}

/* Header styling */
.header {
    position: absolute; /* Position the header absolutely */
    top: 10px; /* Spacing from the top */
    left: 600px; /* Spacing from the left */
    z-index: 1000; /* Ensure it is above other elements */
    background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for visibility */
    padding: 10px; /* Padding for better appearance */
    border-radius: 5px; /* Rounded corners for the header */
}
`, "",{"version":3,"sources":["webpack://./src/style/MapPage.css"],"names":[],"mappings":"AAAA,0BAA0B;;AAE1B,0CAA0C;AAC1C;IACI,SAAS;IACT,UAAU;IACV,YAAY,EAAE,uBAAuB;AACzC;;AAEA,sCAAsC;AACtC;IACI,kBAAkB,EAAE,mDAAmD;IACvE,aAAa,EAAE,sCAAsC;IACrD,YAAY,EAAE,qCAAqC;AACvD;AACA;IACI,kBAAkB,EAAE,iDAAiD;IACrE,SAAS,EAAE,yBAAyB;IACpC,UAAU,EAAE,0BAA0B;IACtC,aAAa,EAAE,4BAA4B;IAC3C,kBAAkB,EAAE,oCAAoC;IACxD,wCAAwC,EAAE,oBAAoB;IAC9D,gBAAgB,EAAE,mCAAmC;IACrD,gBAAgB,EAAE,gCAAgC;IAClD,aAAa,EAAE,kCAAkC;AACrD;AACA,oBAAoB;AACpB;IACI,kBAAkB,EAAE,iDAAiD;IACrE,SAAS,EAAE,yBAAyB;IACpC,WAAW,EAAE,0BAA0B;IACvC,YAAY,EAAE,gCAAgC;IAC9C,oCAAoC,EAAE,uCAAuC;IAC7E,aAAa,EAAE,4BAA4B;IAC3C,kBAAkB,EAAE,oCAAoC;IACxD,wCAAwC,EAAE,oBAAoB;IAC9D,gBAAgB,EAAE,mCAAmC;IACrD,gBAAgB,EAAE,gCAAgC;IAClD,aAAa,EAAE,kCAAkC;AACrD;;AAEA,oCAAoC;AACpC;IACI,YAAY,EAAE,0DAA0D;AAC5E;;AAEA,iCAAiC;AACjC;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW,EAAE,wBAAwB;IACrC,YAAY,EAAE,yBAAyB;IACvC,kBAAkB,EAAE,qBAAqB;IACzC,yBAAyB,EAAE,qBAAqB;AACpD;;AAEA,0BAA0B;AAC1B;IACI,UAAU,EAAE,gCAAgC;IAC5C,mBAAmB,EAAE,sBAAsB;AAC/C;;AAEA,mBAAmB;AACnB;IACI,kBAAkB,EAAE,mCAAmC;IACvD,SAAS,EAAE,yBAAyB;IACpC,WAAW,EAAE,0BAA0B;IACvC,aAAa,EAAE,sCAAsC;IACrD,oCAAoC,EAAE,mDAAmD;IACzF,aAAa,EAAE,kCAAkC;IACjD,kBAAkB,EAAE,mCAAmC;AAC3D","sourcesContent":["/* src/style/MapPage.css */\n\n/* Full height for the Leaflet container */\nhtml, body, #root {\n    margin: 0;\n    padding: 0;\n    height: 100%; /* Ensure full height */\n}\n\n/* Container for the map and sidebar */\n.map-container {\n    position: relative; /* Needed for absolute positioning of the sidebar */\n    height: 100vh; /* Full height for the map container */\n    width: 100vw; /* Full width for the map container */\n}\n.sidebar-component{\n    position: absolute; /* Position it absolutely to float over the map */\n    top: 20px; /* Spacing from the top */\n    left: 20px; /* Spacing from the left */\n    padding: 10px; /* Padding for the sidebar */\n    border-radius: 5px; /* Rounded corners for the sidebar */\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */\n    max-height: 80vh; /* Maximum height for the sidebar */\n    overflow-y: auto; /* Scroll if content overflows */\n    z-index: 1000; /* Ensure it's on top of the map */\n}\n/* Sidebar styling */\n.map-sidebar {\n    position: absolute; /* Position it absolutely to float over the map */\n    top: 20px; /* Spacing from the top */\n    right: 20px; /* Spacing from the left */\n    width: 500px; /* Fixed width for the sidebar */\n    background: rgba(255, 255, 255, 0.9); /* Background color with transparency */\n    padding: 10px; /* Padding for the sidebar */\n    border-radius: 5px; /* Rounded corners for the sidebar */\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* Optional shadow */\n    max-height: 80vh; /* Maximum height for the sidebar */\n    overflow-y: auto; /* Scroll if content overflows */\n    z-index: 1000; /* Ensure it's on top of the map */\n}\n\n/* Full height for the Leaflet map */\n.leaflet-container {\n    height: 100%; /* Ensure the map takes the full height of the container */\n}\n\n/* Custom marker circle styling */\n.custom-marker-circle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px; /* Width of the circle */\n    height: 30px; /* Height of the circle */\n    border-radius: 50%; /* Make it circular */\n    background-color: #8a7ebe; /* Background color */\n}\n\n/* Error message styling */\n.error {\n    color: red; /* Change color for visibility */\n    margin-bottom: 10px; /* Space below error */\n}\n\n/* Header styling */\n.header {\n    position: absolute; /* Position the header absolutely */\n    top: 10px; /* Spacing from the top */\n    left: 600px; /* Spacing from the left */\n    z-index: 1000; /* Ensure it is above other elements */\n    background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for visibility */\n    padding: 10px; /* Padding for better appearance */\n    border-radius: 5px; /* Rounded corners for the header */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/MapPage.css":
/*!*******************************!*\
  !*** ./src/style/MapPage.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MapPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./MapPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/MapPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MapPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MapPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MapPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MapPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfTWFwVmlld1BhZ2VfanMuM2VmMWFiMDg5MDlmZjM3ZWQ0NWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDb0I7QUFDckM7QUFDVjtBQUNNO0FBQ2tCO0FBQ0U7QUFDbEI7O0FBRWhDO0FBQ0EsTUFBTVcsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO0FBRTlDLE1BQU1DLGdCQUFnQixHQUFHUixzREFBUyxDQUFDO0VBQy9CVSxTQUFTLEVBQUUsZUFBZTtFQUMxQkMsSUFBSSxFQUFFVCxnRUFBYyxjQUNoQlQsMERBQUE7SUFBS2lCLFNBQVMsRUFBQyxzQkFBc0I7SUFBQ0csS0FBSyxFQUFFO01BQUVDLGVBQWUsRUFBRSxTQUFTO01BQUVDLFlBQVksRUFBRSxLQUFLO01BQUVDLE9BQU8sRUFBRTtJQUFNO0VBQUUsZ0JBQzdHdkIsMERBQUEsQ0FBQ1EsZ0VBQVE7SUFBQ1ksS0FBSyxFQUFFO01BQUVJLEtBQUssRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUN2RCxDQUNULENBQUM7RUFDREMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNsQkMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUNwQkMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN4QixDQUFDLENBQUM7QUFFRixNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBTTtFQUNsQixNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc3QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUMxQyxNQUFNLENBQUM4QixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHL0IsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFFeENELGdEQUFTLENBQUMsTUFBTTtJQUNaLE1BQU1pQyxZQUFZLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01B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QyxnREFBZ0QsdURBQXVELHFGQUFxRiw2Q0FBNkMsNERBQTRELHNEQUFzRCxzQ0FBc0MsdUNBQXVDLDBCQUEwQixtRUFBbUUsNkNBQTZDLCtDQUErQyw2RUFBNkUsNkRBQTZELHVEQUF1RCxxRkFBcUYsNkNBQTZDLDREQUE0RCxzREFBc0Qsc0NBQXNDLCtEQUErRCxvQkFBb0IsOERBQThELCtEQUErRCxvQkFBb0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsNkNBQTZDLG9EQUFvRCx1REFBdUQseUJBQXlCLHlDQUF5QyxrQkFBa0IsNERBQTRELDBCQUEwQixtQ0FBbUMsMEJBQTBCLHFEQUFxRCw2Q0FBNkMsZ0RBQWdELG1GQUFtRix5RUFBeUUsNkRBQTZELHVDQUF1QyxxQkFBcUI7QUFDcDlIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0V2QyxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUsd0ZBQU8sSUFBSSx3RkFBTyxVQUFVLHdGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWFwVmlld1BhZ2UuanMiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL01hcFBhZ2UuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9NYXBQYWdlLmNzcz9kODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIE1hcmtlciwgUG9wdXAgfSBmcm9tICdyZWFjdC1sZWFmbGV0JztcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICcuLi9zdHlsZS9NYXBQYWdlLmNzcyc7XG5pbXBvcnQgUGV0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXRzJzsgXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInOyBcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XG5cbi8vIFVzZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBmb3IgYmFzZSBVUkxcbmNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkw7XG5cbmNvbnN0IGN1c3RvbU1hcmtlckljb24gPSBMLmRpdkljb24oe1xuICAgIGNsYXNzTmFtZTogJ2N1c3RvbS1tYXJrZXInLCBcbiAgICBodG1sOiByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbWFya2VyLWNpcmNsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM4YTdlYmUnLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBwYWRkaW5nOiAnNXB4JyB9fT5cbiAgICAgICAgICAgIDxQZXRzSWNvbiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcyMHB4JyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApLFxuICAgIGljb25TaXplOiBbMzAsIDMwXSwgXG4gICAgaWNvbkFuY2hvcjogWzE1LCAzMF0sIFxuICAgIHBvcHVwQW5jaG9yOiBbMCwgLTMwXSxcbn0pO1xuXG5jb25zdCBNYXBWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyZXBvcnRzLCBzZXRSZXBvcnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpOyBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUmVwb3J0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9hcGkvYWRtaW4vcmVwb3J0c2ApOyAvLyBVc2UgYmFzZVVSTCBoZXJlXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCByZXBvcnRzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0UmVwb3J0cyhkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyByZXBvcnRzOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hSZXBvcnRzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXItY29tcG9uZW50Jz5cbiAgICAgICAgICAgIDxTaWRlYmFyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlclwiPkFuaW1hbCBDcnVlbHR5IEdlb3RhZ2dlZCBSZXBvcnRzPC9oMj4gey8qIFVzZSBoZWFkZXIgY2xhc3MgZm9yIHN0eWxpbmcgKi99XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcn08L2Rpdj59IHsvKiBEaXNwbGF5IGVycm9yIG1lc3NhZ2UgaWYgZXhpc3RzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxoMz5SZXBvcnRzIExpc3Q8L2gzPlxuICAgICAgICAgICAgICAgIHtyZXBvcnRzLm1hcCgocmVwb3J0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlcG9ydC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1jb250YWluZXJcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3JlcG9ydC5hbmltYWxfdHlwZX08L2I+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlcG9ydC5hbmltYWxfZGV0YWlsc308L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcG9ydC5pbWFnZV91cmx9IGFsdD1cIkFuaW1hbCBSZXBvcnRcIiBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICc4MHB4JyB9fSAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlcG9ydGVkIG9uOiB7bmV3IERhdGUocmVwb3J0LmFjY2lkZW50X2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1hcENvbnRhaW5lciBjZW50ZXI9e1s3LjE5MDcsIDEyNS40NTUzXX0gem9vbT17MTN9IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIDxUaWxlTGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7cmVwb3J0cy5tYXAoKHJlcG9ydCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gcGFyc2VGbG9hdChyZXBvcnQubGF0aXR1ZGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsbmcgPSBwYXJzZUZsb2F0KHJlcG9ydC5sb25naXR1ZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4obGF0KSAmJiAhaXNOYU4obG5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFya2VyIGtleT17aW5kZXh9IHBvc2l0aW9uPXtbbGF0LCBsbmddfSBpY29uPXtjdXN0b21NYXJrZXJJY29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3JlcG9ydC5hbmltYWxfdHlwZX08L2I+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVwb3J0LmFuaW1hbF9kZXRhaWxzfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcG9ydC5pbWFnZV91cmx9IGFsdD1cIkFuaW1hbCBSZXBvcnRcIiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnIH19IC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvcnRlZCBvbjoge25ldyBEYXRlKHJlcG9ydC5hY2NpZGVudF9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L01hcENvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFZpZXc7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlL01hcFBhZ2UuY3NzICovXG5cbi8qIEZ1bGwgaGVpZ2h0IGZvciB0aGUgTGVhZmxldCBjb250YWluZXIgKi9cbmh0bWwsIGJvZHksICNyb290IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZSBmdWxsIGhlaWdodCAqL1xufVxuXG4vKiBDb250YWluZXIgZm9yIHRoZSBtYXAgYW5kIHNpZGViYXIgKi9cbi5tYXAtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIE5lZWRlZCBmb3IgYWJzb2x1dGUgcG9zaXRpb25pbmcgb2YgdGhlIHNpZGViYXIgKi9cbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCBmb3IgdGhlIG1hcCBjb250YWluZXIgKi9cbiAgICB3aWR0aDogMTAwdnc7IC8qIEZ1bGwgd2lkdGggZm9yIHRoZSBtYXAgY29udGFpbmVyICovXG59XG4uc2lkZWJhci1jb21wb25lbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbiBpdCBhYnNvbHV0ZWx5IHRvIGZsb2F0IG92ZXIgdGhlIG1hcCAqL1xuICAgIHRvcDogMjBweDsgLyogU3BhY2luZyBmcm9tIHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAyMHB4OyAvKiBTcGFjaW5nIGZyb20gdGhlIGxlZnQgKi9cbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciB0aGUgc2lkZWJhciAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgc2lkZWJhciAqL1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIE9wdGlvbmFsIHNoYWRvdyAqL1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7IC8qIE1heGltdW0gaGVpZ2h0IGZvciB0aGUgc2lkZWJhciAqL1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbCBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCdzIG9uIHRvcCBvZiB0aGUgbWFwICovXG59XG4vKiBTaWRlYmFyIHN0eWxpbmcgKi9cbi5tYXAtc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbiBpdCBhYnNvbHV0ZWx5IHRvIGZsb2F0IG92ZXIgdGhlIG1hcCAqL1xuICAgIHRvcDogMjBweDsgLyogU3BhY2luZyBmcm9tIHRoZSB0b3AgKi9cbiAgICByaWdodDogMjBweDsgLyogU3BhY2luZyBmcm9tIHRoZSBsZWZ0ICovXG4gICAgd2lkdGg6IDUwMHB4OyAvKiBGaXhlZCB3aWR0aCBmb3IgdGhlIHNpZGViYXIgKi9cbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7IC8qIEJhY2tncm91bmQgY29sb3Igd2l0aCB0cmFuc3BhcmVuY3kgKi9cbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciB0aGUgc2lkZWJhciAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgc2lkZWJhciAqL1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIE9wdGlvbmFsIHNoYWRvdyAqL1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7IC8qIE1heGltdW0gaGVpZ2h0IGZvciB0aGUgc2lkZWJhciAqL1xuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbCBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCdzIG9uIHRvcCBvZiB0aGUgbWFwICovXG59XG5cbi8qIEZ1bGwgaGVpZ2h0IGZvciB0aGUgTGVhZmxldCBtYXAgKi9cbi5sZWFmbGV0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBFbnN1cmUgdGhlIG1hcCB0YWtlcyB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciAqL1xufVxuXG4vKiBDdXN0b20gbWFya2VyIGNpcmNsZSBzdHlsaW5nICovXG4uY3VzdG9tLW1hcmtlci1jaXJjbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzBweDsgLyogV2lkdGggb2YgdGhlIGNpcmNsZSAqL1xuICAgIGhlaWdodDogMzBweDsgLyogSGVpZ2h0IG9mIHRoZSBjaXJjbGUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIE1ha2UgaXQgY2lyY3VsYXIgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE3ZWJlOyAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXG59XG5cbi8qIEVycm9yIG1lc3NhZ2Ugc3R5bGluZyAqL1xuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkOyAvKiBDaGFuZ2UgY29sb3IgZm9yIHZpc2liaWxpdHkgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBTcGFjZSBiZWxvdyBlcnJvciAqL1xufVxuXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xuLmhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvKiBQb3NpdGlvbiB0aGUgaGVhZGVyIGFic29sdXRlbHkgKi9cbiAgICB0b3A6IDEwcHg7IC8qIFNwYWNpbmcgZnJvbSB0aGUgdG9wICovXG4gICAgbGVmdDogNjAwcHg7IC8qIFNwYWNpbmcgZnJvbSB0aGUgbGVmdCAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBpcyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgLyogU2xpZ2h0bHkgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCBmb3IgdmlzaWJpbGl0eSAqL1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgZm9yIGJldHRlciBhcHBlYXJhbmNlICovXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBoZWFkZXIgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL01hcFBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjs7QUFFMUIsMENBQTBDO0FBQzFDO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZLEVBQUUsdUJBQXVCO0FBQ3pDOztBQUVBLHNDQUFzQztBQUN0QztJQUNJLGtCQUFrQixFQUFFLG1EQUFtRDtJQUN2RSxhQUFhLEVBQUUsc0NBQXNDO0lBQ3JELFlBQVksRUFBRSxxQ0FBcUM7QUFDdkQ7QUFDQTtJQUNJLGtCQUFrQixFQUFFLGlEQUFpRDtJQUNyRSxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDLFVBQVUsRUFBRSwwQkFBMEI7SUFDdEMsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyxrQkFBa0IsRUFBRSxvQ0FBb0M7SUFDeEQsd0NBQXdDLEVBQUUsb0JBQW9CO0lBQzlELGdCQUFnQixFQUFFLG1DQUFtQztJQUNyRCxnQkFBZ0IsRUFBRSxnQ0FBZ0M7SUFDbEQsYUFBYSxFQUFFLGtDQUFrQztBQUNyRDtBQUNBLG9CQUFvQjtBQUNwQjtJQUNJLGtCQUFrQixFQUFFLGlEQUFpRDtJQUNyRSxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsWUFBWSxFQUFFLGdDQUFnQztJQUM5QyxvQ0FBb0MsRUFBRSx1Q0FBdUM7SUFDN0UsYUFBYSxFQUFFLDRCQUE0QjtJQUMzQyxrQkFBa0IsRUFBRSxvQ0FBb0M7SUFDeEQsd0NBQXdDLEVBQUUsb0JBQW9CO0lBQzlELGdCQUFnQixFQUFFLG1DQUFtQztJQUNyRCxnQkFBZ0IsRUFBRSxnQ0FBZ0M7SUFDbEQsYUFBYSxFQUFFLGtDQUFrQztBQUNyRDs7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxZQUFZLEVBQUUsMERBQTBEO0FBQzVFOztBQUVBLGlDQUFpQztBQUNqQztJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxrQkFBa0IsRUFBRSxxQkFBcUI7SUFDekMseUJBQXlCLEVBQUUscUJBQXFCO0FBQ3BEOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFVBQVUsRUFBRSxnQ0FBZ0M7SUFDNUMsbUJBQW1CLEVBQUUsc0JBQXNCO0FBQy9DOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGtCQUFrQixFQUFFLG1DQUFtQztJQUN2RCxTQUFTLEVBQUUseUJBQXlCO0lBQ3BDLFdBQVcsRUFBRSwwQkFBMEI7SUFDdkMsYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxvQ0FBb0MsRUFBRSxtREFBbUQ7SUFDekYsYUFBYSxFQUFFLGtDQUFrQztJQUNqRCxrQkFBa0IsRUFBRSxtQ0FBbUM7QUFDM0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3JjL3N0eWxlL01hcFBhZ2UuY3NzICovXFxuXFxuLyogRnVsbCBoZWlnaHQgZm9yIHRoZSBMZWFmbGV0IGNvbnRhaW5lciAqL1xcbmh0bWwsIGJvZHksICNyb290IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZSBmdWxsIGhlaWdodCAqL1xcbn1cXG5cXG4vKiBDb250YWluZXIgZm9yIHRoZSBtYXAgYW5kIHNpZGViYXIgKi9cXG4ubWFwLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogTmVlZGVkIGZvciBhYnNvbHV0ZSBwb3NpdGlvbmluZyBvZiB0aGUgc2lkZWJhciAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCBmb3IgdGhlIG1hcCBjb250YWluZXIgKi9cXG4gICAgd2lkdGg6IDEwMHZ3OyAvKiBGdWxsIHdpZHRoIGZvciB0aGUgbWFwIGNvbnRhaW5lciAqL1xcbn1cXG4uc2lkZWJhci1jb21wb25lbnR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb24gaXQgYWJzb2x1dGVseSB0byBmbG9hdCBvdmVyIHRoZSBtYXAgKi9cXG4gICAgdG9wOiAyMHB4OyAvKiBTcGFjaW5nIGZyb20gdGhlIHRvcCAqL1xcbiAgICBsZWZ0OiAyMHB4OyAvKiBTcGFjaW5nIGZyb20gdGhlIGxlZnQgKi9cXG4gICAgcGFkZGluZzogMTBweDsgLyogUGFkZGluZyBmb3IgdGhlIHNpZGViYXIgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzaWRlYmFyICovXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIE9wdGlvbmFsIHNoYWRvdyAqL1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoOyAvKiBNYXhpbXVtIGhlaWdodCBmb3IgdGhlIHNpZGViYXIgKi9cXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsIGlmIGNvbnRlbnQgb3ZlcmZsb3dzICovXFxuICAgIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCdzIG9uIHRvcCBvZiB0aGUgbWFwICovXFxufVxcbi8qIFNpZGViYXIgc3R5bGluZyAqL1xcbi5tYXAtc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb24gaXQgYWJzb2x1dGVseSB0byBmbG9hdCBvdmVyIHRoZSBtYXAgKi9cXG4gICAgdG9wOiAyMHB4OyAvKiBTcGFjaW5nIGZyb20gdGhlIHRvcCAqL1xcbiAgICByaWdodDogMjBweDsgLyogU3BhY2luZyBmcm9tIHRoZSBsZWZ0ICovXFxuICAgIHdpZHRoOiA1MDBweDsgLyogRml4ZWQgd2lkdGggZm9yIHRoZSBzaWRlYmFyICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTsgLyogQmFja2dyb3VuZCBjb2xvciB3aXRoIHRyYW5zcGFyZW5jeSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciB0aGUgc2lkZWJhciAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNpZGViYXIgKi9cXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogT3B0aW9uYWwgc2hhZG93ICovXFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7IC8qIE1heGltdW0gaGVpZ2h0IGZvciB0aGUgc2lkZWJhciAqL1xcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGwgaWYgY29udGVudCBvdmVyZmxvd3MgKi9cXG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIGl0J3Mgb24gdG9wIG9mIHRoZSBtYXAgKi9cXG59XFxuXFxuLyogRnVsbCBoZWlnaHQgZm9yIHRoZSBMZWFmbGV0IG1hcCAqL1xcbi5sZWFmbGV0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIHRoZSBtYXAgdGFrZXMgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgKi9cXG59XFxuXFxuLyogQ3VzdG9tIG1hcmtlciBjaXJjbGUgc3R5bGluZyAqL1xcbi5jdXN0b20tbWFya2VyLWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzBweDsgLyogV2lkdGggb2YgdGhlIGNpcmNsZSAqL1xcbiAgICBoZWlnaHQ6IDMwcHg7IC8qIEhlaWdodCBvZiB0aGUgY2lyY2xlICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogTWFrZSBpdCBjaXJjdWxhciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE3ZWJlOyAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXFxufVxcblxcbi8qIEVycm9yIG1lc3NhZ2Ugc3R5bGluZyAqL1xcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7IC8qIENoYW5nZSBjb2xvciBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBTcGFjZSBiZWxvdyBlcnJvciAqL1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcbi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIHRoZSBoZWFkZXIgYWJzb2x1dGVseSAqL1xcbiAgICB0b3A6IDEwcHg7IC8qIFNwYWNpbmcgZnJvbSB0aGUgdG9wICovXFxuICAgIGxlZnQ6IDYwMHB4OyAvKiBTcGFjaW5nIGZyb20gdGhlIGxlZnQgKi9cXG4gICAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIGl0IGlzIGFib3ZlIG90aGVyIGVsZW1lbnRzICovXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgLyogU2xpZ2h0bHkgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGZvciBiZXR0ZXIgYXBwZWFyYW5jZSAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIGhlYWRlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01hcFBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYXBQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJMIiwiUGV0c0ljb24iLCJyZW5kZXJUb1N0cmluZyIsIlNpZGViYXIiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9CQVNFX1VSTCIsImN1c3RvbU1hcmtlckljb24iLCJkaXZJY29uIiwiY2xhc3NOYW1lIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJNYXBWaWV3IiwicmVwb3J0cyIsInNldFJlcG9ydHMiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hSZXBvcnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJtZXNzYWdlIiwibWFwIiwicmVwb3J0IiwiaW5kZXgiLCJrZXkiLCJhbmltYWxfdHlwZSIsImFuaW1hbF9kZXRhaWxzIiwic3JjIiwiaW1hZ2VfdXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJEYXRlIiwiYWNjaWRlbnRfZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNlbnRlciIsInpvb20iLCJ1cmwiLCJhdHRyaWJ1dGlvbiIsImxhdCIsInBhcnNlRmxvYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImlzTmFOIiwicG9zaXRpb24iLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==