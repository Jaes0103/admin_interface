"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_RegisterPage_js"],{

/***/ "./src/components/LazyImages.js":
/*!**************************************!*\
  !*** ./src/components/LazyImages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_LazyImages_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/LazyImages.css */ "./src/style/LazyImages.css");
// LazyImage.js


const LazyImage = _ref => {
  let {
    src,
    alt
  } = _ref;
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    ref: imgRef,
    src: isVisible ? src : "",
    "data-src": src,
    alt: alt,
    loading: "lazy",
    style: {
      opacity: isVisible ? 1 : 0.5,
      transition: "opacity 0.5s"
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyImage);

/***/ }),

/***/ "./src/components/RegisterPage.js":
/*!****************************************!*\
  !*** ./src/components/RegisterPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _style_RegisterPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/RegisterPage.css */ "./src/style/RegisterPage.css");
/* harmony import */ var _assets_images_bantay_hayop_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/bantay_hayop_logo.png */ "./src/assets/images/bantay_hayop_logo.png");
/* harmony import */ var _LazyImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LazyImages */ "./src/components/LazyImages.js");






const RegisterPage = () => {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const handleRegister = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Make POST request to register endpoint
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/register`, {
        email,
        password
      });

      // Handle success response
      if (response.status === 201) {
        setSuccess('Account created! Please verify your email.');
        // Optionally navigate to login after a few seconds
        setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
      }
    } catch (error) {
      if (error.response) {
        // Use error messages returned from the backend
        setError(error.response.data.message || 'Failed to register. Please try again.');
      } else {
        setError('Failed to register. Please try again.');
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LazyImages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _assets_images_bantay_hayop_logo_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "Logo",
    className: "logo",
    loading: "lazy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "register-title"
  }, "Register"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error-message"
  }, error), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "success-message"
  }, success), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleRegister,
    className: "register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "input-label",
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "email",
    type: "email",
    placeholder: "Enter email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "input-field",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "input-label",
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "password",
    type: "password",
    placeholder: "Enter password",
    value: password,
    onChange: e => setPassword(e.target.value),
    className: "input-field",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "input-label",
    htmlFor: "confirmPassword"
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    className: "input-field",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "register-button"
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login-link"
  }, "Already have an account? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Log In")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/LazyImages.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/LazyImages.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.lazy-image {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .lazy-image.loaded {
    opacity: 1;
  }
  `, "",{"version":3,"sources":["webpack://./src/style/LazyImages.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,6BAA6B;EAC/B;;EAEA;IACE,UAAU;EACZ","sourcesContent":[".lazy-image {\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n  }\r\n  \r\n  .lazy-image.loaded {\r\n    opacity: 1;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/RegisterPage.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/RegisterPage.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin-top: 150px;
    width: 500px;
    height: 750px;
  }
  
  .logo {
    width: 150px;
    margin-bottom: 10px;
  }
  
  .register-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
  
  .input-label {
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .input-field {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .register-button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .error-message {
    color: red;
    margin-bottom: 15px;
  }
  
  .success-message {
    color: green;
    margin-bottom: 15px;
  }
  
  .login-link {
    margin-top: 20px;
  }
  
  .login-link a {
    color: #007bff;
    text-decoration: none;
  }
  `, "",{"version":3,"sources":["webpack://./src/style/RegisterPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,qBAAqB;EACvB","sourcesContent":[".register-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 15px;\n    border-radius: 20px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    background-color: #ffffff;\n    margin-top: 150px;\n    width: 500px;\n    height: 750px;\n  }\n  \n  .logo {\n    width: 150px;\n    margin-bottom: 10px;\n  }\n  \n  .register-title {\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  \n  .register-form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 400px;\n  }\n  \n  .input-label {\n    margin-bottom: 8px;\n    font-weight: bold;\n  }\n  \n  .input-field {\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n  \n  .register-button {\n    padding: 10px;\n    background-color: #4CAF50;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  \n  .error-message {\n    color: red;\n    margin-bottom: 15px;\n  }\n  \n  .success-message {\n    color: green;\n    margin-bottom: 15px;\n  }\n  \n  .login-link {\n    margin-top: 20px;\n  }\n  \n  .login-link a {\n    color: #007bff;\n    text-decoration: none;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/LazyImages.css":
/*!**********************************!*\
  !*** ./src/style/LazyImages.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_LazyImages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./LazyImages.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/LazyImages.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_LazyImages_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_LazyImages_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_LazyImages_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_LazyImages_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/RegisterPage.css":
/*!************************************!*\
  !*** ./src/style/RegisterPage.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_RegisterPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./RegisterPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/RegisterPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_RegisterPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_RegisterPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_RegisterPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_RegisterPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/bantay_hayop_logo.png":
/*!*************************************************!*\
  !*** ./src/assets/images/bantay_hayop_logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "888924f54098612cc445.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfUmVnaXN0ZXJQYWdlX2pzLjY0OTRhN2JjZDg0YjMwYzE4Y2UxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMyRDtBQUMzQjtBQUVoQyxNQUFNSSxTQUFTLEdBQUdDLElBQUEsSUFBa0I7RUFBQSxJQUFqQjtJQUFFQyxHQUFHO0lBQUVDO0VBQUksQ0FBQyxHQUFBRixJQUFBO0VBQzdCLE1BQU0sQ0FBQ0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR04sK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakQsTUFBTU8sTUFBTSxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUUzQkQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTVUsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUN0Q0MsT0FBTyxJQUFLO01BQ1hBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFFQyxLQUFLLElBQUs7UUFDekIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDeEJQLFlBQVksQ0FBQyxJQUFJLENBQUM7VUFDbEJFLFFBQVEsQ0FBQ00sU0FBUyxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FBQztRQUNsQztNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsRUFDRDtNQUFFQyxTQUFTLEVBQUU7SUFBSSxDQUNuQixDQUFDO0lBRUQsSUFBSVQsTUFBTSxDQUFDVSxPQUFPLEVBQUU7TUFDbEJULFFBQVEsQ0FBQ1UsT0FBTyxDQUFDWCxNQUFNLENBQUNVLE9BQU8sQ0FBQztJQUNsQztJQUVBLE9BQU8sTUFBTTtNQUNYLElBQUlWLE1BQU0sQ0FBQ1UsT0FBTyxFQUFFVCxRQUFRLENBQUNNLFNBQVMsQ0FBQ1AsTUFBTSxDQUFDVSxPQUFPLENBQUM7SUFDeEQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRXBCLDBEQUFBO0lBQ0V1QixHQUFHLEVBQUViLE1BQU87SUFDWkosR0FBRyxFQUFFRSxTQUFTLEdBQUdGLEdBQUcsR0FBRyxF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K0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXFEO0FBQzdFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSwyRkFBTyxVQUFVLDJGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2RkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLDZGQUFPLElBQUksNkZBQU8sVUFBVSw2RkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0xhenlJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL2NvbXBvbmVudHMvUmVnaXN0ZXJQYWdlLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9MYXp5SW1hZ2VzLmNzcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvUmVnaXN0ZXJQYWdlLmNzcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvTGF6eUltYWdlcy5jc3M/YWM5ZCIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvUmVnaXN0ZXJQYWdlLmNzcz8yMmU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIExhenlJbWFnZS5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL0xhenlJbWFnZXMuY3NzJ1xyXG5cclxuY29uc3QgTGF6eUltYWdlID0gKHsgc3JjLCBhbHQgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGhyZXNob2xkOiAwLjEgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoaW1nUmVmLmN1cnJlbnQpIHtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpbWdSZWYuY3VycmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGltZ1JlZi5jdXJyZW50KSBvYnNlcnZlci51bm9ic2VydmUoaW1nUmVmLmN1cnJlbnQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHJlZj17aW1nUmVmfVxyXG4gICAgICBzcmM9e2lzVmlzaWJsZSA/IHNyYyA6IFwiXCJ9XHJcbiAgICAgIGRhdGEtc3JjPXtzcmN9XHJcbiAgICAgIGFsdD17YWx0fVxyXG4gICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGlzVmlzaWJsZSA/IDEgOiAwLjUsIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjVzXCIgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhenlJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4uL3N0eWxlL1JlZ2lzdGVyUGFnZS5jc3MnOyBcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmFudGF5X2hheW9wX2xvZ28ucG5nJztcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSAnLi9MYXp5SW1hZ2VzJztcblxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgICBzZXRTdWNjZXNzKCcnKTtcblxuICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICBzZXRFcnJvcignUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIFBPU1QgcmVxdWVzdCB0byByZWdpc3RlciBlbmRwb2ludFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL3JlZ2lzdGVyYCwge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3MgcmVzcG9uc2VcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICBzZXRTdWNjZXNzKCdBY2NvdW50IGNyZWF0ZWQhIFBsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbC4nKTtcbiAgICAgICAgLy8gT3B0aW9uYWxseSBuYXZpZ2F0ZSB0byBsb2dpbiBhZnRlciBhIGZldyBzZWNvbmRzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbmF2aWdhdGUoJy9sb2dpbicpLCAzMDAwKTsgLy8gUmVkaXJlY3QgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvLyBVc2UgZXJyb3IgbWVzc2FnZXMgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byByZWdpc3Rlci4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gcmVnaXN0ZXIuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci1jb250YWluZXJcIj5cbiAgICAgIDxMYXp5SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPVwibG9nb1wiIGxvYWRpbmc9XCJsYXp5XCIgIC8+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwicmVnaXN0ZXItdGl0bGVcIj5SZWdpc3RlcjwvaDI+XG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3A+fVxuICAgICAge3N1Y2Nlc3MgJiYgPHAgY2xhc3NOYW1lPVwic3VjY2Vzcy1tZXNzYWdlXCI+e3N1Y2Nlc3N9PC9wPn1cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0gY2xhc3NOYW1lPVwicmVnaXN0ZXItZm9ybVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIiBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbFwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCIgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtjb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25maXJtUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyLWJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsb2dpbi1saW5rXCI+XG4gICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiL1wiPkxvZyBJbjwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubGF6eS1pbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYXp5LWltYWdlLmxvYWRlZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9MYXp5SW1hZ2VzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0VBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxhenktaW1hZ2Uge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxhenktaW1hZ2UubG9hZGVkIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA3NTBweDtcbiAgfVxuICBcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAucmVnaXN0ZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAucmVnaXN0ZXItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dC1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuaW5wdXQtZmllbGQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBcbiAgLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1saW5rIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAubG9naW4tbGluayBhIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvUmVnaXN0ZXJQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJlZ2lzdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDc1MHB4O1xcbiAgfVxcbiAgXFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnJlZ2lzdGVyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAucmVnaXN0ZXItZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgfVxcbiAgXFxuICAuaW5wdXQtbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgXFxuICAuaW5wdXQtZmllbGQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB9XFxuICBcXG4gIC5yZWdpc3Rlci1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5lcnJvci1tZXNzYWdlIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIFxcbiAgLnN1Y2Nlc3MtbWVzc2FnZSB7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG4gIFxcbiAgLmxvZ2luLWxpbmsge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAubG9naW4tbGluayBhIHtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGF6eUltYWdlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xhenlJbWFnZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlZ2lzdGVyUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlZ2lzdGVyUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxhenlJbWFnZSIsIl9yZWYiLCJzcmMiLCJhbHQiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpbWdSZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwidGFyZ2V0IiwidGhyZXNob2xkIiwiY3VycmVudCIsIm9ic2VydmUiLCJjcmVhdGVFbGVtZW50IiwicmVmIiwibG9hZGluZyIsInN0eWxlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ1c2VOYXZpZ2F0ZSIsImF4aW9zIiwibG9nbyIsIlJlZ2lzdGVyUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibmF2aWdhdGUiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZGF0YSIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9