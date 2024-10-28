"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_Sidebar_js"],{

/***/ "./src/components/ConfirmationModal.js":
/*!*********************************************!*\
  !*** ./src/components/ConfirmationModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/ConfirmationModal.css */ "./src/style/ConfirmationModal.css");


const ConfirmationModal = _ref => {
  let {
    isOpen,
    message,
    onConfirm,
    onCancel,
    title = "Confirmation",
    confirmText = "Yes",
    cancelText = "No"
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "confirmation-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onConfirm,
    className: "confirm-button"
  }, confirmText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onCancel,
    className: "cancel-button"
  }, cancelText))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _style_Sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/Sidebar.css */ "./src/style/Sidebar.css");
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmationModal */ "./src/components/ConfirmationModal.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");






const Sidebar = () => {
  const {
    logout
  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const handleLogoutClick = () => {
    setModalOpen(true);
  };
  const confirmLogout = () => {
    logout();
    navigate('/');
    alert("Successfully logged out!");
  };
  const cancelLogout = () => {
    setModalOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidebar-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Admin Menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "sidebar-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/dashboard",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTachometerAlt, {
    className: "sidebar-icon"
  }), " Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/reports",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFileAlt, {
    className: "sidebar-icon"
  }), " Reports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/adopt-animal",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaHeart, {
    className: "sidebar-icon"
  }), " Adoptions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/animals",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPaw, {
    className: "sidebar-icon"
  }), " Animals")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/events",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCalendarAlt, {
    className: "sidebar-icon"
  }), " Events")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/rescuers",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUsers, {
    className: "sidebar-icon"
  }), " Rescuers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/maps",
    className: "sidebar-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaMap, {
    className: "sidebar-icon"
  }), " Map"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sidebar-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogoutClick,
    className: "sidebar-link logout-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaSignOutAlt, {
    className: "sidebar-icon"
  }), " Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: isModalOpen,
    message: "Are you sure you want to log out?",
    onConfirm: confirmLogout,
    onCancel: cancelLogout
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/ConfirmationModal.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/ConfirmationModal.css ***!
  \*******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.confirmation-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: black;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 400px;
    
}
.modal-content p {
    font-size:large;
    color: black;
}
.modal-buttons {
    display: flex;
    justify-content: space-between;
}

.confirm-button {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.cancel-button {
    background-color: #ddd;
    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.confirm-button:hover {
    background-color: #ff0000;
}

.cancel-button:hover {
    background-color: #ccc;
}
`, "",{"version":3,"sources":["webpack://./src/style/ConfirmationModal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,uCAAuC;IACvC,YAAY;;AAEhB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":[".confirmation-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-content {\n    background: black;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    width: 400px;\n    \n}\n.modal-content p {\n    font-size:large;\n    color: black;\n}\n.modal-buttons {\n    display: flex;\n    justify-content: space-between;\n}\n\n.confirm-button {\n    background-color: #ff4444;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.cancel-button {\n    background-color: #ddd;\n    color: black;\n    border: none;\n    padding: 10px 15px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.confirm-button:hover {\n    background-color: #ff0000;\n}\n\n.cancel-button:hover {\n    background-color: #ccc;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/Sidebar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/Sidebar.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Sidebar container */
.sidebar {
  width: 350px; /* Increased width */
  background-color: #8A7EBE; /* Purple background */
  color: white;
  height: 100vh;
  padding-top: 20px;
  padding-left: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Sidebar header styling */
.sidebar-header {
  margin-bottom: 30px;
}

.sidebar-header h2 {
    font-family: 'Arial', sans-serif; /* Fallback to Arial and sans-serif */
    font-weight: 700;
    text-indent: 30px; /* Adjust the value as needed */
    padding-right: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 40px; /* Increased header font size */
    color: white;
}

/* Sidebar list styling */
.sidebar-list {
  list-style: none;
  font-family: 'Arial', sans-serif; /* Fallback to Arial and sans-serif */
  font-weight: 700;
  text-indent: 30px; /* Adjust the value as needed */
  padding: 0;
  margin: 0;
}

.sidebar .sidebar-list li {
  margin-bottom: 30px; /* Space between items */
}


/* Sidebar link styling */
.sidebar-link {
  font-family: 'Poppins', sans-serif;
  font-size: 50px; /* Increased font size */
  text-decoration: none;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.sidebar .sidebar-link {
  font-family: 'Poppins', sans-serif;
  font-size: 23px; /* Increased font size */
  text-decoration: none;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

/* Sidebar icons styling */
.sidebar-icon {
  font-size: 30px; 
  margin-right: 10px;
}

.sidebar-link:hover {
  background-color: rgba(255, 255, 255, 0.1); 
  transform: scale(1.05); 
}

/* Sidebar footer (logout link) */
.sidebar-footer {
  margin-bottom: 30px;
  margin-top: auto;
}

.sidebar-footer .sidebar-link {
  font-size: 20px; /* Increased footer link font size */
}

/* Active menu item styling */
.sidebar-link.active {
  background-color: rgba(255, 255, 255, 0.1); /* Active link color */
}
`, "",{"version":3,"sources":["webpack://./src/style/Sidebar.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,YAAY,EAAE,oBAAoB;EAClC,yBAAyB,EAAE,sBAAsB;EACjD,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,2BAA2B;AAC3B;EACE,mBAAmB;AACrB;;AAEA;IACI,gCAAgC,EAAE,qCAAqC;IACvE,gBAAgB;IAChB,iBAAiB,EAAE,+BAA+B;IAClD,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe,EAAE,+BAA+B;IAChD,YAAY;AAChB;;AAEA,yBAAyB;AACzB;EACE,gBAAgB;EAChB,gCAAgC,EAAE,qCAAqC;EACvE,gBAAgB;EAChB,iBAAiB,EAAE,+BAA+B;EAClD,UAAU;EACV,SAAS;AACX;;AAEA;EACE,mBAAmB,EAAE,wBAAwB;AAC/C;;;AAGA,yBAAyB;AACzB;EACE,kCAAkC;EAClC,eAAe,EAAE,wBAAwB;EACzC,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sCAAsC;AACxC;AACA;EACE,kCAAkC;EAClC,eAAe,EAAE,wBAAwB;EACzC,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,0BAA0B;AAC1B;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,sBAAsB;AACxB;;AAEA,iCAAiC;AACjC;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe,EAAE,oCAAoC;AACvD;;AAEA,6BAA6B;AAC7B;EACE,0CAA0C,EAAE,sBAAsB;AACpE","sourcesContent":["/* Sidebar container */\n.sidebar {\n  width: 350px; /* Increased width */\n  background-color: #8A7EBE; /* Purple background */\n  color: white;\n  height: 100vh;\n  padding-top: 20px;\n  padding-left: 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n/* Sidebar header styling */\n.sidebar-header {\n  margin-bottom: 30px;\n}\n\n.sidebar-header h2 {\n    font-family: 'Arial', sans-serif; /* Fallback to Arial and sans-serif */\n    font-weight: 700;\n    text-indent: 30px; /* Adjust the value as needed */\n    padding-right: 20px;\n    margin-bottom: 20px;\n    font-weight: bold;\n    font-size: 40px; /* Increased header font size */\n    color: white;\n}\n\n/* Sidebar list styling */\n.sidebar-list {\n  list-style: none;\n  font-family: 'Arial', sans-serif; /* Fallback to Arial and sans-serif */\n  font-weight: 700;\n  text-indent: 30px; /* Adjust the value as needed */\n  padding: 0;\n  margin: 0;\n}\n\n.sidebar .sidebar-list li {\n  margin-bottom: 30px; /* Space between items */\n}\n\n\n/* Sidebar link styling */\n.sidebar-link {\n  font-family: 'Poppins', sans-serif;\n  font-size: 50px; /* Increased font size */\n  text-decoration: none;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n}\n.sidebar .sidebar-link {\n  font-family: 'Poppins', sans-serif;\n  font-size: 23px; /* Increased font size */\n  text-decoration: none;\n  color: white;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n}\n\n/* Sidebar icons styling */\n.sidebar-icon {\n  font-size: 30px; \n  margin-right: 10px;\n}\n\n.sidebar-link:hover {\n  background-color: rgba(255, 255, 255, 0.1); \n  transform: scale(1.05); \n}\n\n/* Sidebar footer (logout link) */\n.sidebar-footer {\n  margin-bottom: 30px;\n  margin-top: auto;\n}\n\n.sidebar-footer .sidebar-link {\n  font-size: 20px; /* Increased footer link font size */\n}\n\n/* Active menu item styling */\n.sidebar-link.active {\n  background-color: rgba(255, 255, 255, 0.1); /* Active link color */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/ConfirmationModal.css":
/*!*****************************************!*\
  !*** ./src/style/ConfirmationModal.css ***!
  \*****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ConfirmationModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/ConfirmationModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ConfirmationModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/Sidebar.css":
/*!*******************************!*\
  !*** ./src/style/Sidebar.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/Sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfU2lkZWJhcl9qcy40MWMwMDUzYzU5Yzg4OWQ3MmI2OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFFeEMsTUFBTUMsaUJBQWlCLEdBQUdDLElBQUEsSUFBOEc7RUFBQSxJQUE3RztJQUFFQyxNQUFNO0lBQUVDLE9BQU87SUFBRUMsU0FBUztJQUFFQyxRQUFRO0lBQUVDLEtBQUssR0FBRyxjQUFjO0lBQUVDLFdBQVcsR0FBRyxLQUFLO0lBQUVDLFVBQVUsR0FBRztFQUFLLENBQUMsR0FBQVAsSUFBQTtFQUMvSCxJQUFJLENBQUNDLE1BQU0sRUFBRSxPQUFPLElBQUk7RUFFeEIsb0JBQ0lILDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFvQixnQkFDL0JYLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFlLGdCQUMxQlgsMERBQUEsYUFBS08sS0FBVSxDQUFDLGVBQ2hCUCwwREFBQSxZQUFJSSxPQUFXLENBQUMsZUFDaEJKLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFlLGdCQUMxQlgsMERBQUE7SUFBUVksT0FBTyxFQUFFUCxTQUFVO0lBQUNNLFNBQVMsRUFBQztFQUFnQixHQUFFSCxXQUFvQixDQUFDLGVBQzdFUiwwREFBQTtJQUFRWSxPQUFPLEVBQUVOLFFBQVM7SUFBQ0ssU0FBUyxFQUFDO0VBQWUsR0FBRUYsVUFBbUIsQ0FDeEUsQ0FDSixDQUNKLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUTtBQUNhO0FBQzRFO0FBRW5HO0FBQ3NCO0FBQ0g7QUFFakQsTUFBTXlCLE9BQU8sR0FBR0EsQ0FBQSxLQUFNO0VBQ3BCLE1BQU07SUFBRUM7RUFBTyxDQUFDLEdBQUdGLDZEQUFPLENBQUMsQ0FBQztFQUM1QixNQUFNLENBQUNHLFdBQVcsRUFBRUMsWUFBWSxDQUFDLEdBQUdoQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUNuRCxNQUFNaUIsUUFB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Mkc7QUFDM0csTUFBa0g7QUFDbEg7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrR0FBTzs7OztBQUk0RDtBQUNwRixPQUFPLGlFQUFlLGtHQUFPLElBQUksa0dBQU8sVUFBVSxrR0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXdHO0FBQ3hHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJa0Q7QUFDMUUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLHdGQUFPLFVBQVUsd0ZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9Db25maXJtYXRpb25Nb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL1NpZGViYXIuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9Db25maXJtYXRpb25Nb2RhbC5jc3M/MDgxMyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvU2lkZWJhci5jc3M/MTYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZS9Db25maXJtYXRpb25Nb2RhbC5jc3MnOyBcblxuY29uc3QgQ29uZmlybWF0aW9uTW9kYWwgPSAoeyBpc09wZW4sIG1lc3NhZ2UsIG9uQ29uZmlybSwgb25DYW5jZWwsIHRpdGxlID0gXCJDb25maXJtYXRpb25cIiwgY29uZmlybVRleHQgPSBcIlllc1wiLCBjYW5jZWxUZXh0ID0gXCJOb1wiIH0pID0+IHtcbiAgICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7IFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtYXRpb24tbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Db25maXJtfSBjbGFzc05hbWU9XCJjb25maXJtLWJ1dHRvblwiPntjb25maXJtVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gY2xhc3NOYW1lPVwiY2FuY2VsLWJ1dHRvblwiPntjYW5jZWxUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtYXRpb25Nb2RhbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7IFxuaW1wb3J0IHsgRmFUYWNob21ldGVyQWx0LCBGYUZpbGVBbHQsIEZhSGVhcnQsIEZhUGF3LCBGYUNvZ3MsIEZhQ2FsZW5kYXJBbHQsIEZhVXNlcnMsIEZhU2lnbk91dEFsdCwgRmFNYXAgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7IFxuXG5pbXBvcnQgJy4uL3N0eWxlL1NpZGViYXIuY3NzJztcbmltcG9ydCBDb25maXJtYXRpb25Nb2RhbCBmcm9tICcuL0NvbmZpcm1hdGlvbk1vZGFsJzsgXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7IFxuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ291dCB9ID0gdXNlQXV0aCgpOyBcbiAgY29uc3QgW2lzTW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0Q2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxPcGVuKHRydWUpOyBcbiAgfTtcblxuICBjb25zdCBjb25maXJtTG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvZ291dCgpOyBcbiAgICBuYXZpZ2F0ZSgnLycpOyBcbiAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0IVwiKTsgXG4gIH07XG5cbiAgY29uc3QgY2FuY2VsTG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICAgICAgPGgyPkFkbWluIE1lbnU8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1saXN0XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayB0bz1cIi9kYXNoYm9hcmRcIiBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtcIj5cbiAgICAgICAgICAgIDxGYVRhY2hvbWV0ZXJBbHQgY2xhc3NOYW1lPVwic2lkZWJhci1pY29uXCIgLz4gRGFzaGJvYXJkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCIvcmVwb3J0c1wiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlxuICAgICAgICAgICAgPEZhRmlsZUFsdCBjbGFzc05hbWU9XCJzaWRlYmFyLWljb25cIiAvPiBSZXBvcnRzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCIvYWRvcHQtYW5pbWFsXCIgY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCI+XG4gICAgICAgICAgICA8RmFIZWFydCBjbGFzc05hbWU9XCJzaWRlYmFyLWljb25cIiAvPiBBZG9wdGlvbnNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayB0bz1cIi9hbmltYWxzXCIgY2xhc3NOYW1lPVwic2lkZWJhci1saW5rXCI+XG4gICAgICAgICAgICA8RmFQYXcgY2xhc3NOYW1lPVwic2lkZWJhci1pY29uXCIgLz4gQW5pbWFsc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2V2ZW50c1wiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPlxuICAgICAgICAgICAgPEZhQ2FsZW5kYXJBbHQgY2xhc3NOYW1lPVwic2lkZWJhci1pY29uXCIgLz4gRXZlbnRzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCIvcmVzY3VlcnNcIiBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmtcIj5cbiAgICAgICAgICAgIDxGYVVzZXJzIGNsYXNzTmFtZT1cInNpZGViYXItaWNvblwiIC8+IFJlc2N1ZXJzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgdG89XCIvbWFwc1wiIGNsYXNzTmFtZT1cInNpZGViYXItbGlua1wiPiBcbiAgICAgICAgICAgIDxGYU1hcCBjbGFzc05hbWU9XCJzaWRlYmFyLWljb25cIiAvPiBNYXBcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dENsaWNrfSBjbGFzc05hbWU9XCJzaWRlYmFyLWxpbmsgbG9nb3V0LWJ1dHRvblwiPlxuICAgICAgICAgIDxGYVNpZ25PdXRBbHQgY2xhc3NOYW1lPVwic2lkZWJhci1pY29uXCIgLz4gTG9nb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgXG4gICAgICA8Q29uZmlybWF0aW9uTW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cbiAgICAgICAgbWVzc2FnZT1cIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2cgb3V0P1wiXG4gICAgICAgIG9uQ29uZmlybT17Y29uZmlybUxvZ291dH1cbiAgICAgICAgb25DYW5jZWw9e2NhbmNlbExvZ291dH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb25maXJtYXRpb24tbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgXG59XG4ubW9kYWwtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6bGFyZ2U7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLm1vZGFsLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29uZmlybS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0NDQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbmZpcm0tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL0NvbmZpcm1hdGlvbk1vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29uZmlybWF0aW9uLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIFxcbn1cXG4ubW9kYWwtY29udGVudCBwIHtcXG4gICAgZm9udC1zaXplOmxhcmdlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi5tb2RhbC1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29uZmlybS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NDQ0O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG59XFxuXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNpZGViYXIgY29udGFpbmVyICovXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAzNTBweDsgLyogSW5jcmVhc2VkIHdpZHRoICovXG4gIGJhY2tncm91bmQtY29sb3I6ICM4QTdFQkU7IC8qIFB1cnBsZSBiYWNrZ3JvdW5kICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLyogU2lkZWJhciBoZWFkZXIgc3R5bGluZyAqL1xuLnNpZGViYXItaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnNpZGViYXItaGVhZGVyIGgyIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjsgLyogRmFsbGJhY2sgdG8gQXJpYWwgYW5kIHNhbnMtc2VyaWYgKi9cbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtaW5kZW50OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7IC8qIEluY3JlYXNlZCBoZWFkZXIgZm9udCBzaXplICovXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTaWRlYmFyIGxpc3Qgc3R5bGluZyAqL1xuLnNpZGViYXItbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWluZGVudDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhciAuc2lkZWJhci1saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgLyogU3BhY2UgYmV0d2VlbiBpdGVtcyAqL1xufVxuXG5cbi8qIFNpZGViYXIgbGluayBzdHlsaW5nICovXG4uc2lkZWJhci1saW5rIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA1MHB4OyAvKiBJbmNyZWFzZWQgZm9udCBzaXplICovXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWxpbmsge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIzcHg7IC8qIEluY3JlYXNlZCBmb250IHNpemUgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4vKiBTaWRlYmFyIGljb25zIHN0eWxpbmcgKi9cbi5zaWRlYmFyLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7IFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zaWRlYmFyLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBcbn1cblxuLyogU2lkZWJhciBmb290ZXIgKGxvZ291dCBsaW5rKSAqL1xuLnNpZGViYXItZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLnNpZGViYXItZm9vdGVyIC5zaWRlYmFyLWxpbmsge1xuICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCBmb290ZXIgbGluayBmb250IHNpemUgKi9cbn1cblxuLyogQWN0aXZlIG1lbnUgaXRlbSBzdHlsaW5nICovXG4uc2lkZWJhci1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgLyogQWN0aXZlIGxpbmsgY29sb3IgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL1NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLFlBQVksRUFBRSxvQkFBb0I7RUFDbEMseUJBQXlCLEVBQUUsc0JBQXNCO0VBQ2pELFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxnQ0FBZ0MsRUFBRSxxQ0FBcUM7SUFDdkUsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFFLCtCQUErQjtJQUNsRCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlLEVBQUUsK0JBQStCO0lBQ2hELFlBQVk7QUFDaEI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQyxFQUFFLHFDQUFxQztFQUN2RSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUUsK0JBQStCO0VBQ2xELFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSx3QkFBd0I7QUFDL0M7OztBQUdBLHlCQUF5QjtBQUN6QjtFQUNFLGtDQUFrQztFQUNsQyxlQUFlLEVBQUUsd0JBQXdCO0VBQ3pDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWUsRUFBRSx3QkFBd0I7RUFDekMscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsc0JBQXNCO0FBQ3hCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlLEVBQUUsb0NBQW9DO0FBQ3ZEOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLDBDQUEwQyxFQUFFLHNCQUFzQjtBQUNwRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaWRlYmFyIGNvbnRhaW5lciAqL1xcbi5zaWRlYmFyIHtcXG4gIHdpZHRoOiAzNTBweDsgLyogSW5jcmVhc2VkIHdpZHRoICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEE3RUJFOyAvKiBQdXJwbGUgYmFja2dyb3VuZCAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4vKiBTaWRlYmFyIGhlYWRlciBzdHlsaW5nICovXFxuLnNpZGViYXItaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlciBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWluZGVudDogMzBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDsgLyogSW5jcmVhc2VkIGhlYWRlciBmb250IHNpemUgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBTaWRlYmFyIGxpc3Qgc3R5bGluZyAqL1xcbi5zaWRlYmFyLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtaW5kZW50OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNpZGViYXIgLnNpZGViYXItbGlzdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGl0ZW1zICovXFxufVxcblxcblxcbi8qIFNpZGViYXIgbGluayBzdHlsaW5nICovXFxuLnNpZGViYXItbGluayB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4OyAvKiBJbmNyZWFzZWQgZm9udCBzaXplICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5zaWRlYmFyIC5zaWRlYmFyLWxpbmsge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjNweDsgLyogSW5jcmVhc2VkIGZvbnQgc2l6ZSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBTaWRlYmFyIGljb25zIHN0eWxpbmcgKi9cXG4uc2lkZWJhci1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMzBweDsgXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IFxcbn1cXG5cXG4vKiBTaWRlYmFyIGZvb3RlciAobG9nb3V0IGxpbmspICovXFxuLnNpZGViYXItZm9vdGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhci1mb290ZXIgLnNpZGViYXItbGluayB7XFxuICBmb250LXNpemU6IDIwcHg7IC8qIEluY3JlYXNlZCBmb290ZXIgbGluayBmb250IHNpemUgKi9cXG59XFxuXFxuLyogQWN0aXZlIG1lbnUgaXRlbSBzdHlsaW5nICovXFxuLnNpZGViYXItbGluay5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAvKiBBY3RpdmUgbGluayBjb2xvciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NvbmZpcm1hdGlvbk1vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ29uZmlybWF0aW9uTW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiX3JlZiIsImlzT3BlbiIsIm1lc3NhZ2UiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsInRpdGxlIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIkZhVGFjaG9tZXRlckFsdCIsIkZhRmlsZUFsdCIsIkZhSGVhcnQiLCJGYVBhdyIsIkZhQ29ncyIsIkZhQ2FsZW5kYXJBbHQiLCJGYVVzZXJzIiwiRmFTaWduT3V0QWx0IiwiRmFNYXAiLCJ1c2VBdXRoIiwiU2lkZWJhciIsImxvZ291dCIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwibmF2aWdhdGUiLCJoYW5kbGVMb2dvdXRDbGljayIsImNvbmZpcm1Mb2dvdXQiLCJhbGVydCIsImNhbmNlbExvZ291dCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==