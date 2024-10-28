"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_LoginPage_js"],{

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

/***/ "./src/components/LoginPage.js":
/*!*************************************!*\
  !*** ./src/components/LoginPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _style_LoginPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/LoginPage.css */ "./src/style/LoginPage.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Icon/Icon.js");
/* harmony import */ var _assets_images_bantay_hayop_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/bantay_hayop_logo.png */ "./src/assets/images/bantay_hayop_logo.png");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ "./src/context/AuthContext.js");
/* harmony import */ var _LazyImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyImages */ "./src/components/LazyImages.js");









const LoginPage = () => {
  const {
    login
  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [passwordVisible, setPasswordVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [forgotPasswordMode, setForgotPasswordMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [resetMessage, setResetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [resetSuccess, setResetSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  // Login form submission
  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/login`, {
        email,
        password
      });
      const {
        token,
        authId,
        userData
      } = response.data;
      login(userData, token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : 'Failed to log in');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Forgot password form submission
  const handleForgotPassword = async e => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/password-reset-request-admin`, {
        email
      });
      setResetMessage('Password reset link has been sent to your email.');
      setResetSuccess(true);
      setError(''); // Clear any error
    } catch (error) {
      console.error('Forgot password error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : 'Failed to send password reset link');
    } finally {
      setLoading(false);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Body-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LazyImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: _assets_images_bantay_hayop_logo_png__WEBPACK_IMPORTED_MODULE_3__,
    alt: "Logo",
    className: "logo",
    width: 150,
    height: 50
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "login-title"
  }, forgotPasswordMode ? 'Forgot Password' : 'Log In'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "login-title"
  }, "Welcome Back \uD83D\uDC4B"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error-message"
  }, error), resetMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "success-message"
  }, resetMessage), forgotPasswordMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleForgotPassword,
    className: "login-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "input-label",
    htmlFor: "email"
  }, "Enter your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "email",
    type: "email",
    placeholder: "Enter email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: "input-field",
    required: true,
    disabled: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "login-button",
    disabled: loading || resetSuccess
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-spinner fa-spin"
  }) : resetSuccess ? 'Email Sent!' : 'Send Reset Link'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "forgot-password",
    onClick: () => setForgotPasswordMode(false)
  }, "Back to Login")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleLogin,
    className: "login-form"
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
    required: true,
    disabled: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "input-label",
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "password-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "password",
    type: passwordVisible ? 'text' : 'password',
    placeholder: "Enter password",
    value: password,
    onChange: e => setPassword(e.target.value),
    className: "input-field",
    required: true,
    disabled: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "button",
    onClick: () => setPasswordVisible(!passwordVisible),
    className: "password-toggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: `fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "login-button",
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-spinner fa-spin"
  }) : 'Log In'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "forgot-password",
    onClick: () => setForgotPasswordMode(true)
  }, "Forgot Password?"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/LoginPage.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/LoginPage.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/bantay_hayop_logo.png */ "./src/assets/images/bantay_hayop_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Box-Sizing */
* {
  box-sizing: border-box; /* Apply this globally */
}

/* Body Styles */
body {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-size: cover; /* Ensures the image covers the area */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed; /* Keeps the background fixed */
  background-position: left; /* Centers the background image */
  height: 100vh; /* Sets the height to 100% of the viewport height */
  margin: 0; /* Removes default margin */
}

/* Main Container Styles */
.Body-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}

/* Login Container Styles */
.login-container {
  background-color: #ffffff; /* White background */
  padding: 50px; /* Increased padding for more space */
  max-width: 1000px; 
  width: 100%; 
  border-radius: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin: 150px auto 100px; 
}

/* Image Styles */
.login-container img {
  display: block; /* Ensure the image is a block element */
  margin: 0 auto; /* Center the image */
  width: 250px; /* Set width */
  height: auto; /* Maintain aspect ratio */
}

/* Title Styles */
.login-title {
  text-align: center; /* Center titles */
  color: #8a7ebe; /* Custom color */
  font-family: 'Poppins', sans-serif; /* Font family */
}

.login-title h2,
.login-title h3 {
  margin-bottom: 0; /* Remove bottom margin */
}

.login-title h2 {
  font-weight: bold; /* Bold text */
  font-size: px; /* Title size */
}

.login-title h3 {
  font-weight: bold; /* Bold text */
  font-size: 45px; /* Title size */
}

/* Error Message Styles */
.error-message {
  color: red; /* Error message color */
  text-align: center; /* Center text */
}

/* Input Label Styles */
.input-label {
  font-family: 'Poppins', sans-serif; /* Font family */
  font-weight: 600; /* Semi-bold text */
  font-size: 16px; /* Font size */
  color: #8a7ebe; /* Custom color */
  margin-bottom: 8px; /* Space below the label */
}

/* Input Field Styles */
.input-field {
  width: 100%; /* Full width */
  padding: 16px; /* Increase padding inside input */
  border-radius: 15px; /* Rounded corners */
  border: 1px solid #ddd; /* Light gray border */
  margin-bottom: 16px; /* Space below input */
  font-size: 18px; /* Increase font size for better visibility */
  min-height: 50px; /* Set minimum height for the input field */
}

/* Password Container Styles */
.password-container {
  position: relative; /* Allow absolute positioning of button */
}

/* Password Toggle Button Styles */
.password-toggle {
  position: absolute; /* Position it absolutely */
  right: 15px; /* Adjust space from the right for better positioning */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust to center */
  background: none; /* No background */
  border: none; /* No border */
  color: #8a7ebe; /* Custom color */
  cursor: pointer; /* Pointer cursor on hover */
}

/* Login Button Styles */
.login-button {
  width: 100%; /* Full width */
  padding: 16px; /* Padding */
  background-color: #8a7ebe; /* Custom background color */
  border: none; /* No border */
  border-radius: 10px; /* Rounded corners */
  color: #ffffff; /* White text */
  font-size: 18px; /* Font size */
  cursor: pointer; /* Pointer cursor */
  transition: background-color 0.3s ease; /* Smooth transition */
}

/* Login Button Hover Effect */
.login-button:hover {
  background-color: #7a6eab; /* Darker shade on hover */
}

/* Forgot Password Styles */
.forgot-password {
  display: inline-block; /* Make it inline-block to allow styling */
  color: #8a7ebe; /* Custom color */
  font-size: 18px; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  text-decoration: none; /* Remove underline */
}

/* Register Link Styles */
.register-link {
  text-align: center; /* Center text */
  color: #888; /* Light gray color */
}

.register-link a {
  color: #8a7ebe; /* Custom link color */
  text-decoration: none; /* No underline */
}

.register-link a:hover {
  text-decoration: underline; /* Underline on hover */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .login-container {
    margin: 20px; /* Smaller margins for mobile */
    padding: 15px; /* Less padding on smaller screens */
  }

  .login-title h2 {
    font-size: 40px; 
  }

  .login-title h3 {
    font-size: 30px; 
  }

  .input-field {
    font-size: 16px; 
  }

  .login-button {
    padding: 14px; 
    font-size: 16px; 
  }
}
`, "",{"version":3,"sources":["webpack://./src/style/LoginPage.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,sBAAsB,EAAE,wBAAwB;AAClD;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,uBAAuB,EAAE,wBAAwB;EACjD,mBAAmB,EAAE,sBAAsB;EAC3C,sBAAsB,EAAE,sCAAsC;EAC9D,yDAA+D;EAC/D,4BAA4B,EAAE,+BAA+B;EAC7D,yBAAyB,EAAE,iCAAiC;EAC5D,aAAa,EAAE,mDAAmD;EAClE,SAAS,EAAE,2BAA2B;AACxC;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,uBAAuB,EAAE,wBAAwB;EACjD,mBAAmB,EAAE,sBAAsB;EAC3C,aAAa,EAAE,yBAAyB;AAC1C;;AAEA,2BAA2B;AAC3B;EACE,yBAAyB,EAAE,qBAAqB;EAChD,aAAa,EAAE,qCAAqC;EACpD,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA,iBAAiB;AACjB;EACE,cAAc,EAAE,wCAAwC;EACxD,cAAc,EAAE,qBAAqB;EACrC,YAAY,EAAE,cAAc;EAC5B,YAAY,EAAE,0BAA0B;AAC1C;;AAEA,iBAAiB;AACjB;EACE,kBAAkB,EAAE,kBAAkB;EACtC,cAAc,EAAE,iBAAiB;EACjC,kCAAkC,EAAE,gBAAgB;AACtD;;AAEA;;EAEE,gBAAgB,EAAE,yBAAyB;AAC7C;;AAEA;EACE,iBAAiB,EAAE,cAAc;EACjC,aAAa,EAAE,eAAe;AAChC;;AAEA;EACE,iBAAiB,EAAE,cAAc;EACjC,eAAe,EAAE,eAAe;AAClC;;AAEA,yBAAyB;AACzB;EACE,UAAU,EAAE,wBAAwB;EACpC,kBAAkB,EAAE,gBAAgB;AACtC;;AAEA,uBAAuB;AACvB;EACE,kCAAkC,EAAE,gBAAgB;EACpD,gBAAgB,EAAE,mBAAmB;EACrC,eAAe,EAAE,cAAc;EAC/B,cAAc,EAAE,iBAAiB;EACjC,kBAAkB,EAAE,0BAA0B;AAChD;;AAEA,uBAAuB;AACvB;EACE,WAAW,EAAE,eAAe;EAC5B,aAAa,EAAE,kCAAkC;EACjD,mBAAmB,EAAE,oBAAoB;EACzC,sBAAsB,EAAE,sBAAsB;EAC9C,mBAAmB,EAAE,sBAAsB;EAC3C,eAAe,EAAE,6CAA6C;EAC9D,gBAAgB,EAAE,2CAA2C;AAC/D;;AAEA,8BAA8B;AAC9B;EACE,kBAAkB,EAAE,yCAAyC;AAC/D;;AAEA,kCAAkC;AAClC;EACE,kBAAkB,EAAE,2BAA2B;EAC/C,WAAW,EAAE,uDAAuD;EACpE,QAAQ,EAAE,sBAAsB;EAChC,2BAA2B,EAAE,qBAAqB;EAClD,gBAAgB,EAAE,kBAAkB;EACpC,YAAY,EAAE,cAAc;EAC5B,cAAc,EAAE,iBAAiB;EACjC,eAAe,EAAE,4BAA4B;AAC/C;;AAEA,wBAAwB;AACxB;EACE,WAAW,EAAE,eAAe;EAC5B,aAAa,EAAE,YAAY;EAC3B,yBAAyB,EAAE,4BAA4B;EACvD,YAAY,EAAE,cAAc;EAC5B,mBAAmB,EAAE,oBAAoB;EACzC,cAAc,EAAE,eAAe;EAC/B,eAAe,EAAE,cAAc;EAC/B,eAAe,EAAE,mBAAmB;EACpC,sCAAsC,EAAE,sBAAsB;AAChE;;AAEA,8BAA8B;AAC9B;EACE,yBAAyB,EAAE,0BAA0B;AACvD;;AAEA,2BAA2B;AAC3B;EACE,qBAAqB,EAAE,0CAA0C;EACjE,cAAc,EAAE,iBAAiB;EACjC,eAAe,EAAE,cAAc;EAC/B,eAAe,EAAE,4BAA4B;EAC7C,qBAAqB,EAAE,qBAAqB;AAC9C;;AAEA,yBAAyB;AACzB;EACE,kBAAkB,EAAE,gBAAgB;EACpC,WAAW,EAAE,qBAAqB;AACpC;;AAEA;EACE,cAAc,EAAE,sBAAsB;EACtC,qBAAqB,EAAE,iBAAiB;AAC1C;;AAEA;EACE,0BAA0B,EAAE,uBAAuB;AACrD;;AAEA,sBAAsB;AACtB;EACE;IACE,YAAY,EAAE,+BAA+B;IAC7C,aAAa,EAAE,oCAAoC;EACrD;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;EACjB;AACF","sourcesContent":["/* Global Box-Sizing */\n* {\n  box-sizing: border-box; /* Apply this globally */\n}\n\n/* Body Styles */\nbody {\n  display: flex;\n  justify-content: center; /* Center horizontally */\n  align-items: center; /* Center vertically */\n  background-size: cover; /* Ensures the image covers the area */\n  background-image: url('../assets/images/bantay_hayop_logo.png');\n  background-attachment: fixed; /* Keeps the background fixed */\n  background-position: left; /* Centers the background image */\n  height: 100vh; /* Sets the height to 100% of the viewport height */\n  margin: 0; /* Removes default margin */\n}\n\n/* Main Container Styles */\n.Body-container {\n  display: flex;\n  justify-content: center; /* Center horizontally */\n  align-items: center; /* Center vertically */\n  height: 100vh; /* Full viewport height */\n}\n\n/* Login Container Styles */\n.login-container {\n  background-color: #ffffff; /* White background */\n  padding: 50px; /* Increased padding for more space */\n  max-width: 1000px; \n  width: 100%; \n  border-radius: 20px; \n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n  margin: 150px auto 100px; \n}\n\n/* Image Styles */\n.login-container img {\n  display: block; /* Ensure the image is a block element */\n  margin: 0 auto; /* Center the image */\n  width: 250px; /* Set width */\n  height: auto; /* Maintain aspect ratio */\n}\n\n/* Title Styles */\n.login-title {\n  text-align: center; /* Center titles */\n  color: #8a7ebe; /* Custom color */\n  font-family: 'Poppins', sans-serif; /* Font family */\n}\n\n.login-title h2,\n.login-title h3 {\n  margin-bottom: 0; /* Remove bottom margin */\n}\n\n.login-title h2 {\n  font-weight: bold; /* Bold text */\n  font-size: px; /* Title size */\n}\n\n.login-title h3 {\n  font-weight: bold; /* Bold text */\n  font-size: 45px; /* Title size */\n}\n\n/* Error Message Styles */\n.error-message {\n  color: red; /* Error message color */\n  text-align: center; /* Center text */\n}\n\n/* Input Label Styles */\n.input-label {\n  font-family: 'Poppins', sans-serif; /* Font family */\n  font-weight: 600; /* Semi-bold text */\n  font-size: 16px; /* Font size */\n  color: #8a7ebe; /* Custom color */\n  margin-bottom: 8px; /* Space below the label */\n}\n\n/* Input Field Styles */\n.input-field {\n  width: 100%; /* Full width */\n  padding: 16px; /* Increase padding inside input */\n  border-radius: 15px; /* Rounded corners */\n  border: 1px solid #ddd; /* Light gray border */\n  margin-bottom: 16px; /* Space below input */\n  font-size: 18px; /* Increase font size for better visibility */\n  min-height: 50px; /* Set minimum height for the input field */\n}\n\n/* Password Container Styles */\n.password-container {\n  position: relative; /* Allow absolute positioning of button */\n}\n\n/* Password Toggle Button Styles */\n.password-toggle {\n  position: absolute; /* Position it absolutely */\n  right: 15px; /* Adjust space from the right for better positioning */\n  top: 50%; /* Center vertically */\n  transform: translateY(-50%); /* Adjust to center */\n  background: none; /* No background */\n  border: none; /* No border */\n  color: #8a7ebe; /* Custom color */\n  cursor: pointer; /* Pointer cursor on hover */\n}\n\n/* Login Button Styles */\n.login-button {\n  width: 100%; /* Full width */\n  padding: 16px; /* Padding */\n  background-color: #8a7ebe; /* Custom background color */\n  border: none; /* No border */\n  border-radius: 10px; /* Rounded corners */\n  color: #ffffff; /* White text */\n  font-size: 18px; /* Font size */\n  cursor: pointer; /* Pointer cursor */\n  transition: background-color 0.3s ease; /* Smooth transition */\n}\n\n/* Login Button Hover Effect */\n.login-button:hover {\n  background-color: #7a6eab; /* Darker shade on hover */\n}\n\n/* Forgot Password Styles */\n.forgot-password {\n  display: inline-block; /* Make it inline-block to allow styling */\n  color: #8a7ebe; /* Custom color */\n  font-size: 18px; /* Font size */\n  cursor: pointer; /* Pointer cursor on hover */\n  text-decoration: none; /* Remove underline */\n}\n\n/* Register Link Styles */\n.register-link {\n  text-align: center; /* Center text */\n  color: #888; /* Light gray color */\n}\n\n.register-link a {\n  color: #8a7ebe; /* Custom link color */\n  text-decoration: none; /* No underline */\n}\n\n.register-link a:hover {\n  text-decoration: underline; /* Underline on hover */\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n  .login-container {\n    margin: 20px; /* Smaller margins for mobile */\n    padding: 15px; /* Less padding on smaller screens */\n  }\n\n  .login-title h2 {\n    font-size: 40px; \n  }\n\n  .login-title h3 {\n    font-size: 30px; \n  }\n\n  .input-field {\n    font-size: 16px; \n  }\n\n  .login-button {\n    padding: 14px; \n    font-size: 16px; \n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style/LoginPage.css":
/*!*********************************!*\
  !*** ./src/style/LoginPage.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_LoginPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./LoginPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/LoginPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_LoginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_LoginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_LoginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_LoginPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/bantay_hayop_logo.png":
/*!*************************************************!*\
  !*** ./src/assets/images/bantay_hayop_logo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "888924f54098612cc445.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfTG9naW5QYWdlX2pzLjk4Y2I4MjJkZTkxNjcyM2JkODY4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMyRDtBQUMzQjtBQUVoQyxNQUFNSSxTQUFTLEdBQUdDLElBQUEsSUFBa0I7RUFBQSxJQUFqQjtJQUFFQyxHQUFHO0lBQUVDO0VBQUksQ0FBQyxHQUFBRixJQUFBO0VBQzdCLE1BQU0sQ0FBQ0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR04sK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakQsTUFBTU8sTUFBTSxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUUzQkQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsTUFBTVUsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUN0Q0MsT0FBTyxJQUFLO01BQ1hBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFFQyxLQUFLLElBQUs7UUFDekIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7VUFDeEJQLFlBQVksQ0FBQyxJQUFJLENBQUM7VUFDbEJFLFFBQVEsQ0FBQ00sU0FBUyxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FBQztRQUNsQztNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsRUFDRDtNQUFFQyxTQUFTLEVBQUU7SUFBSSxDQUNuQixDQUFDO0lBRUQsSUFBSVQsTUFBTSxDQUFDVSxPQUFPLEVBQUU7TUFDbEJULFFBQVEsQ0FBQ1UsT0FBTyxDQUFDWCxNQUFNLENBQUNVLE9BQU8sQ0FBQztJQUNsQztJQUVBLE9BQU8sTUFBTTtNQUNYLElBQUlWLE1BQU0sQ0FBQ1UsT0FBTyxFQUFFVCxRQUFRLENBQUNNLFNBQVMsQ0FBQ1AsTUFBTSxDQUFDVSxPQUFPLENBQUM7SUFDeEQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRXBCLDBEQUFBO0lBQ0V1QixHQUFHLEVBQUViLE1BQU87SUFDWkosR0FBRyxFQUFFRSxTQUFTLEdBQUdGLEdBQUcsR0FBRyxFQUFH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bl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9MYXp5SW1hZ2VzLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luUGFnZS5qcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvTGF6eUltYWdlcy5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0xvZ2luUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0xhenlJbWFnZXMuY3NzP2FjOWQiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0xvZ2luUGFnZS5jc3M/MjdhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMYXp5SW1hZ2UuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9zdHlsZS9MYXp5SW1hZ2VzLmNzcydcclxuXHJcbmNvbnN0IExhenlJbWFnZSA9ICh7IHNyYywgYWx0IH0pID0+IHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB7IHRocmVzaG9sZDogMC4xIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGltZ1JlZi5jdXJyZW50KSB7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaW1nUmVmLmN1cnJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChpbWdSZWYuY3VycmVudCkgb2JzZXJ2ZXIudW5vYnNlcnZlKGltZ1JlZi5jdXJyZW50KTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICByZWY9e2ltZ1JlZn1cclxuICAgICAgc3JjPXtpc1Zpc2libGUgPyBzcmMgOiBcIlwifVxyXG4gICAgICBkYXRhLXNyYz17c3JjfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICBzdHlsZT17eyBvcGFjaXR5OiBpc1Zpc2libGUgPyAxIDogMC41LCB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC41c1wiIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuLi9zdHlsZS9Mb2dpblBhZ2UuY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmFudGF5X2hheW9wX2xvZ28ucG5nJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0JztcbmltcG9ydCBMYXp5SW1hZ2UgZnJvbSAnLi9MYXp5SW1hZ2VzJztcblxuY29uc3QgTG9naW5QYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkVmlzaWJsZSwgc2V0UGFzc3dvcmRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmb3Jnb3RQYXNzd29yZE1vZGUsIHNldEZvcmdvdFBhc3N3b3JkTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXNldE1lc3NhZ2UsIHNldFJlc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgXG4gIGNvbnN0IFtyZXNldFN1Y2Nlc3MsIHNldFJlc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7IFxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgLy8gTG9naW4gZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTsgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9sb2dpbmAsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgICAgY29uc3QgeyB0b2tlbiwgYXV0aElkLCB1c2VyRGF0YSB9ID0gcmVzcG9uc2UuZGF0YTsgXG4gICAgICBsb2dpbih1c2VyRGF0YSwgdG9rZW4pO1xuICAgICAgbmF2aWdhdGUoJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdGYWlsZWQgdG8gbG9nIGluJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTdG9wIGxvYWRpbmdcbiAgICB9XG4gIH07XG5cbiAgLy8gRm9yZ290IHBhc3N3b3JkIGZvcm0gc3VibWlzc2lvblxuICBjb25zdCBoYW5kbGVGb3Jnb3RQYXNzd29yZCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFN0YXJ0IGxvYWRpbmdcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL3Bhc3N3b3JkLXJlc2V0LXJlcXVlc3QtYWRtaW5gLCB7IGVtYWlsIH0pO1xuICAgICAgc2V0UmVzZXRNZXNzYWdlKCdQYXNzd29yZCByZXNldCBsaW5rIGhhcyBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC4nKTtcbiAgICAgIHNldFJlc2V0U3VjY2Vzcyh0cnVlKTsgXG4gICAgICBzZXRFcnJvcignJyk7IC8vIENsZWFyIGFueSBlcnJvclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGb3Jnb3QgcGFzc3dvcmQgZXJyb3I6JywgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCBwYXNzd29yZCByZXNldCBsaW5rJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyBcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkJvZHktY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICA8TGF6eUltYWdlIHNyYz17bG9nb30gYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiB3aWR0aD17MTUwfSBoZWlnaHQ9ezUwfSAvPiB7LyogU2V0IGRpbWVuc2lvbnMgKi99XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpbi10aXRsZVwiPntmb3Jnb3RQYXNzd29yZE1vZGUgPyAnRm9yZ290IFBhc3N3b3JkJyA6ICdMb2cgSW4nfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJsb2dpbi10aXRsZVwiPldlbGNvbWUgQmFjayDwn5GLPC9oMz5cblxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L3A+fVxuICAgICAgICB7cmVzZXRNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPntyZXNldE1lc3NhZ2V9PC9wPn1cblxuICAgICAgICB7Zm9yZ290UGFzc3dvcmRNb2RlID8gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3Jnb3RQYXNzd29yZH0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCIgaHRtbEZvcj1cImVtYWlsXCI+RW50ZXIgeW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1idXR0b25cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZyB8fCByZXNldFN1Y2Nlc3N9IFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBcbiAgICAgICAgICAgICAgKSA6IHJlc2V0U3VjY2VzcyA/IChcbiAgICAgICAgICAgICAgICAnRW1haWwgU2VudCEnXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgJ1NlbmQgUmVzZXQgTGluaydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9yZ290LXBhc3N3b3JkXCIgb25DbGljaz17KCkgPT4gc2V0Rm9yZ290UGFzc3dvcmRNb2RlKGZhbHNlKX0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gTG9naW5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIiBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPXtwYXNzd29yZFZpc2libGUgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ30gXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFzc3dvcmRWaXNpYmxlKCFwYXNzd29yZFZpc2libGUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhc3N3b3JkLXRvZ2dsZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXMgJHtwYXNzd29yZFZpc2libGUgPyAnZmEtZXllLXNsYXNoJyA6ICdmYS1leWUnfWB9IC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9IFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IDogJ0xvZyBJbid9IFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGb3Jnb3RQYXNzd29yZE1vZGUodHJ1ZSl9PlxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxhenktaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAubGF6eS1pbWFnZS5sb2FkZWQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvTGF6eUltYWdlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsVUFBVTtFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sYXp5LWltYWdlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sYXp5LWltYWdlLmxvYWRlZCB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFudGF5X2hheW9wX2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgQm94LVNpemluZyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IHRoaXMgZ2xvYmFsbHkgKi9cbn1cblxuLyogQm9keSBTdHlsZXMgKi9cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAvKiBLZWVwcyB0aGUgYmFja2dyb3VuZCBmaXhlZCAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXG4gIGhlaWdodDogMTAwdmg7IC8qIFNldHMgdGhlIGhlaWdodCB0byAxMDAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cbiAgbWFyZ2luOiAwOyAvKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2luICovXG59XG5cbi8qIE1haW4gQ29udGFpbmVyIFN0eWxlcyAqL1xuLkJvZHktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cbn1cblxuLyogTG9naW4gQ29udGFpbmVyIFN0eWxlcyAqL1xuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cbiAgcGFkZGluZzogNTBweDsgLyogSW5jcmVhc2VkIHBhZGRpbmcgZm9yIG1vcmUgc3BhY2UgKi9cbiAgbWF4LXdpZHRoOiAxMDAwcHg7IFxuICB3aWR0aDogMTAwJTsgXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBcbiAgbWFyZ2luOiAxNTBweCBhdXRvIDEwMHB4OyBcbn1cblxuLyogSW1hZ2UgU3R5bGVzICovXG4ubG9naW4tY29udGFpbmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUgdGhlIGltYWdlIGlzIGEgYmxvY2sgZWxlbWVudCAqL1xuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICB3aWR0aDogMjUwcHg7IC8qIFNldCB3aWR0aCAqL1xuICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xufVxuXG4vKiBUaXRsZSBTdHlsZXMgKi9cbi5sb2dpbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRpdGxlcyAqL1xuICBjb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGNvbG9yICovXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IC8qIEZvbnQgZmFtaWx5ICovXG59XG5cbi5sb2dpbi10aXRsZSBoMixcbi5sb2dpbi10aXRsZSBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIFJlbW92ZSBib3R0b20gbWFyZ2luICovXG59XG5cbi5sb2dpbi10aXRsZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBCb2xkIHRleHQgKi9cbiAgZm9udC1zaXplOiBweDsgLyogVGl0bGUgc2l6ZSAqL1xufVxuXG4ubG9naW4tdGl0bGUgaDMge1xuICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCB0ZXh0ICovXG4gIGZvbnQtc2l6ZTogNDVweDsgLyogVGl0bGUgc2l6ZSAqL1xufVxuXG4vKiBFcnJvciBNZXNzYWdlIFN0eWxlcyAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkOyAvKiBFcnJvciBtZXNzYWdlIGNvbG9yICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgKi9cbn1cblxuLyogSW5wdXQgTGFiZWwgU3R5bGVzICovXG4uaW5wdXQtbGFiZWwge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyAvKiBGb250IGZhbWlseSAqL1xuICBmb250LXdlaWdodDogNjAwOyAvKiBTZW1pLWJvbGQgdGV4dCAqL1xuICBmb250LXNpemU6IDE2cHg7IC8qIEZvbnQgc2l6ZSAqL1xuICBjb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGNvbG9yICovXG4gIG1hcmdpbi1ib3R0b206IDhweDsgLyogU3BhY2UgYmVsb3cgdGhlIGxhYmVsICovXG59XG5cbi8qIElucHV0IEZpZWxkIFN0eWxlcyAqL1xuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgcGFkZGluZzogMTZweDsgLyogSW5jcmVhc2UgcGFkZGluZyBpbnNpZGUgaW5wdXQgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIExpZ2h0IGdyYXkgYm9yZGVyICovXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIFNwYWNlIGJlbG93IGlucHV0ICovXG4gIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2UgZm9udCBzaXplIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuICBtaW4taGVpZ2h0OiA1MHB4OyAvKiBTZXQgbWluaW11bSBoZWlnaHQgZm9yIHRoZSBpbnB1dCBmaWVsZCAqL1xufVxuXG4vKiBQYXNzd29yZCBDb250YWluZXIgU3R5bGVzICovXG4ucGFzc3dvcmQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBbGxvdyBhYnNvbHV0ZSBwb3NpdGlvbmluZyBvZiBidXR0b24gKi9cbn1cblxuLyogUGFzc3dvcmQgVG9nZ2xlIEJ1dHRvbiBTdHlsZXMgKi9cbi5wYXNzd29yZC10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIGl0IGFic29sdXRlbHkgKi9cbiAgcmlnaHQ6IDE1cHg7IC8qIEFkanVzdCBzcGFjZSBmcm9tIHRoZSByaWdodCBmb3IgYmV0dGVyIHBvc2l0aW9uaW5nICovXG4gIHRvcDogNTAlOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC8qIEFkanVzdCB0byBjZW50ZXIgKi9cbiAgYmFja2dyb3VuZDogbm9uZTsgLyogTm8gYmFja2dyb3VuZCAqL1xuICBib3JkZXI6IG5vbmU7IC8qIE5vIGJvcmRlciAqL1xuICBjb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGNvbG9yICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbn1cblxuLyogTG9naW4gQnV0dG9uIFN0eWxlcyAqL1xuLmxvZ2luLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIHBhZGRpbmc6IDE2cHg7IC8qIFBhZGRpbmcgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGJhY2tncm91bmQgY29sb3IgKi9cbiAgYm9yZGVyOiBub25lOyAvKiBObyBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSB0ZXh0ICovXG4gIGZvbnQtc2l6ZTogMThweDsgLyogRm9udCBzaXplICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3IgKi9cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXG59XG5cbi8qIExvZ2luIEJ1dHRvbiBIb3ZlciBFZmZlY3QgKi9cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E2ZWFiOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cbn1cblxuLyogRm9yZ290IFBhc3N3b3JkIFN0eWxlcyAqL1xuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogTWFrZSBpdCBpbmxpbmUtYmxvY2sgdG8gYWxsb3cgc3R5bGluZyAqL1xuICBjb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGNvbG9yICovXG4gIGZvbnQtc2l6ZTogMThweDsgLyogRm9udCBzaXplICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lICovXG59XG5cbi8qIFJlZ2lzdGVyIExpbmsgU3R5bGVzICovXG4ucmVnaXN0ZXItbGluayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgKi9cbiAgY29sb3I6ICM4ODg7IC8qIExpZ2h0IGdyYXkgY29sb3IgKi9cbn1cblxuLnJlZ2lzdGVyLWxpbmsgYSB7XG4gIGNvbG9yOiAjOGE3ZWJlOyAvKiBDdXN0b20gbGluayBjb2xvciAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIE5vIHVuZGVybGluZSAqL1xufVxuXG4ucmVnaXN0ZXItbGluayBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIFVuZGVybGluZSBvbiBob3ZlciAqL1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDsgLyogU21hbGxlciBtYXJnaW5zIGZvciBtb2JpbGUgKi9cbiAgICBwYWRkaW5nOiAxNXB4OyAvKiBMZXNzIHBhZGRpbmcgb24gc21hbGxlciBzY3JlZW5zICovXG4gIH1cblxuICAubG9naW4tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogNDBweDsgXG4gIH1cblxuICAubG9naW4tdGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgXG4gIH1cblxuICAuaW5wdXQtZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gIH1cblxuICAubG9naW4tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxNHB4OyBcbiAgICBmb250LXNpemU6IDE2cHg7IFxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9Mb2dpblBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLHNCQUFzQixFQUFFLHdCQUF3QjtBQUNsRDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUUsd0JBQXdCO0VBQ2pELG1CQUFtQixFQUFFLHNCQUFzQjtFQUMzQyxzQkFBc0IsRUFBRSxzQ0FBc0M7RUFDOUQseURBQStEO0VBQy9ELDRCQUE0QixFQUFFLCtCQUErQjtFQUM3RCx5QkFBeUIsRUFBRSxpQ0FBaUM7RUFDNUQsYUFBYSxFQUFFLG1EQUFtRDtFQUNsRSxTQUFTLEVBQUUsMkJBQTJCO0FBQ3hDOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBRSx3QkFBd0I7RUFDakQsbUJBQW1CLEVBQUUsc0JBQXNCO0VBQzNDLGFBQWEsRUFBRSx5QkFBeUI7QUFDMUM7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UseUJBQXlCLEVBQUUscUJBQXFCO0VBQ2hELGFBQWEsRUFBRSxxQ0FBcUM7RUFDcEQsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHdCQUF3QjtBQUMxQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxjQUFjLEVBQUUsd0NBQXdDO0VBQ3hELGNBQWMsRUFBRSxxQkFBcUI7RUFDckMsWUFBWSxFQUFFLGNBQWM7RUFDNUIsWUFBWSxFQUFFLDBCQUEwQjtBQUMxQzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0IsRUFBRSxrQkFBa0I7RUFDdEMsY0FBYyxFQUFFLGlCQUFpQjtFQUNqQyxrQ0FBa0MsRUFBRSxnQkFBZ0I7QUFDdEQ7O0FBRUE7O0VBRUUsZ0JBQWdCLEVBQUUseUJBQXlCO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsY0FBYztFQUNqQyxhQUFhLEVBQUUsZUFBZTtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLGNBQWM7RUFDakMsZUFBZSxFQUFFLGVBQWU7QUFDbEM7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsVUFBVSxFQUFFLHdCQUF3QjtFQUNwQyxrQkFBa0IsRUFBRSxnQkFBZ0I7QUFDdEM7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usa0NBQWtDLEVBQUUsZ0JBQWdCO0VBQ3BELGdCQUFnQixFQUFFLG1CQUFtQjtFQUNyQyxlQUFlLEVBQUUsY0FBYztFQUMvQixjQUFjLEVBQUUsaUJBQWlCO0VBQ2pDLGtCQUFrQixFQUFFLDBCQUEwQjtBQUNoRDs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxXQUFXLEVBQUUsZUFBZTtFQUM1QixhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELG1CQUFtQixFQUFFLG9CQUFvQjtFQUN6QyxzQkFBc0IsRUFBRSxzQkFBc0I7RUFDOUMsbUJBQW1CLEVBQUUsc0JBQXNCO0VBQzNDLGVBQWUsRUFBRSw2Q0FBNkM7RUFDOUQsZ0JBQWdCLEVBQUUsMkNBQTJDO0FBQy9EOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGtCQUFrQixFQUFFLHlDQUF5QztBQUMvRDs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDL0MsV0FBVyxFQUFFLHVEQUF1RDtFQUNwRSxRQUFRLEVBQUUsc0JBQXNCO0VBQ2hDLDJCQUEyQixFQUFFLHFCQUFxQjtFQUNsRCxnQkFBZ0IsRUFBRSxrQkFBa0I7RUFDcEMsWUFBWSxFQUFFLGNBQWM7RUFDNUIsY0FBYyxFQUFFLGlCQUFpQjtFQUNqQyxlQUFlLEVBQUUsNEJBQTRCO0FBQy9DOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGFBQWEsRUFBRSxZQUFZO0VBQzNCLHlCQUF5QixFQUFFLDRCQUE0QjtFQUN2RCxZQUFZLEVBQUUsY0FBYztFQUM1QixtQkFBbUIsRUFBRSxvQkFBb0I7RUFDekMsY0FBYyxFQUFFLGVBQWU7RUFDL0IsZUFBZSxFQUFFLGNBQWM7RUFDL0IsZUFBZSxFQUFFLG1CQUFtQjtFQUNwQyxzQ0FBc0MsRUFBRSxzQkFBc0I7QUFDaEU7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UseUJBQXlCLEVBQUUsMEJBQTBCO0FBQ3ZEOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHFCQUFxQixFQUFFLDBDQUEwQztFQUNqRSxjQUFjLEVBQUUsaUJBQWlCO0VBQ2pDLGVBQWUsRUFBRSxjQUFjO0VBQy9CLGVBQWUsRUFBRSw0QkFBNEI7RUFDN0MscUJBQXFCLEVBQUUscUJBQXFCO0FBQzlDOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtFQUNwQyxXQUFXLEVBQUUscUJBQXFCO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxxQkFBcUIsRUFBRSxpQkFBaUI7QUFDMUM7O0FBRUE7RUFDRSwwQkFBMEIsRUFBRSx1QkFBdUI7QUFDckQ7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxZQUFZLEVBQUUsK0JBQStCO0lBQzdDLGFBQWEsRUFBRSxvQ0FBb0M7RUFDckQ7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBCb3gtU2l6aW5nICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBBcHBseSB0aGlzIGdsb2JhbGx5ICovXFxufVxcblxcbi8qIEJvZHkgU3R5bGVzICovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9iYW50YXlfaGF5b3BfbG9nby5wbmcnKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IC8qIEtlZXBzIHRoZSBiYWNrZ3JvdW5kIGZpeGVkICovXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxuICBoZWlnaHQ6IDEwMHZoOyAvKiBTZXRzIHRoZSBoZWlnaHQgdG8gMTAwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXFxuICBtYXJnaW46IDA7IC8qIFJlbW92ZXMgZGVmYXVsdCBtYXJnaW4gKi9cXG59XFxuXFxuLyogTWFpbiBDb250YWluZXIgU3R5bGVzICovXFxuLkJvZHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cXG4gIGhlaWdodDogMTAwdmg7IC8qIEZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxufVxcblxcbi8qIExvZ2luIENvbnRhaW5lciBTdHlsZXMgKi9cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgKi9cXG4gIHBhZGRpbmc6IDUwcHg7IC8qIEluY3JlYXNlZCBwYWRkaW5nIGZvciBtb3JlIHNwYWNlICovXFxuICBtYXgtd2lkdGg6IDEwMDBweDsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IFxcbiAgbWFyZ2luOiAxNTBweCBhdXRvIDEwMHB4OyBcXG59XFxuXFxuLyogSW1hZ2UgU3R5bGVzICovXFxuLmxvZ2luLWNvbnRhaW5lciBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSB0aGUgaW1hZ2UgaXMgYSBibG9jayBlbGVtZW50ICovXFxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xcbiAgd2lkdGg6IDI1MHB4OyAvKiBTZXQgd2lkdGggKi9cXG4gIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXFxufVxcblxcbi8qIFRpdGxlIFN0eWxlcyAqL1xcbi5sb2dpbi10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aXRsZXMgKi9cXG4gIGNvbG9yOiAjOGE3ZWJlOyAvKiBDdXN0b20gY29sb3IgKi9cXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IC8qIEZvbnQgZmFtaWx5ICovXFxufVxcblxcbi5sb2dpbi10aXRsZSBoMixcXG4ubG9naW4tdGl0bGUgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogUmVtb3ZlIGJvdHRvbSBtYXJnaW4gKi9cXG59XFxuXFxuLmxvZ2luLXRpdGxlIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBCb2xkIHRleHQgKi9cXG4gIGZvbnQtc2l6ZTogcHg7IC8qIFRpdGxlIHNpemUgKi9cXG59XFxuXFxuLmxvZ2luLXRpdGxlIGgzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBCb2xkIHRleHQgKi9cXG4gIGZvbnQtc2l6ZTogNDVweDsgLyogVGl0bGUgc2l6ZSAqL1xcbn1cXG5cXG4vKiBFcnJvciBNZXNzYWdlIFN0eWxlcyAqL1xcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiByZWQ7IC8qIEVycm9yIG1lc3NhZ2UgY29sb3IgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgKi9cXG59XFxuXFxuLyogSW5wdXQgTGFiZWwgU3R5bGVzICovXFxuLmlucHV0LWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7IC8qIEZvbnQgZmFtaWx5ICovXFxuICBmb250LXdlaWdodDogNjAwOyAvKiBTZW1pLWJvbGQgdGV4dCAqL1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBGb250IHNpemUgKi9cXG4gIGNvbG9yOiAjOGE3ZWJlOyAvKiBDdXN0b20gY29sb3IgKi9cXG4gIG1hcmdpbi1ib3R0b206IDhweDsgLyogU3BhY2UgYmVsb3cgdGhlIGxhYmVsICovXFxufVxcblxcbi8qIElucHV0IEZpZWxkIFN0eWxlcyAqL1xcbi5pbnB1dC1maWVsZCB7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgcGFkZGluZzogMTZweDsgLyogSW5jcmVhc2UgcGFkZGluZyBpbnNpZGUgaW5wdXQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7IC8qIFNwYWNlIGJlbG93IGlucHV0ICovXFxuICBmb250LXNpemU6IDE4cHg7IC8qIEluY3JlYXNlIGZvbnQgc2l6ZSBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXG4gIG1pbi1oZWlnaHQ6IDUwcHg7IC8qIFNldCBtaW5pbXVtIGhlaWdodCBmb3IgdGhlIGlucHV0IGZpZWxkICovXFxufVxcblxcbi8qIFBhc3N3b3JkIENvbnRhaW5lciBTdHlsZXMgKi9cXG4ucGFzc3dvcmQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWxsb3cgYWJzb2x1dGUgcG9zaXRpb25pbmcgb2YgYnV0dG9uICovXFxufVxcblxcbi8qIFBhc3N3b3JkIFRvZ2dsZSBCdXR0b24gU3R5bGVzICovXFxuLnBhc3N3b3JkLXRvZ2dsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFBvc2l0aW9uIGl0IGFic29sdXRlbHkgKi9cXG4gIHJpZ2h0OiAxNXB4OyAvKiBBZGp1c3Qgc3BhY2UgZnJvbSB0aGUgcmlnaHQgZm9yIGJldHRlciBwb3NpdGlvbmluZyAqL1xcbiAgdG9wOiA1MCU7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IC8qIEFkanVzdCB0byBjZW50ZXIgKi9cXG4gIGJhY2tncm91bmQ6IG5vbmU7IC8qIE5vIGJhY2tncm91bmQgKi9cXG4gIGJvcmRlcjogbm9uZTsgLyogTm8gYm9yZGVyICovXFxuICBjb2xvcjogIzhhN2ViZTsgLyogQ3VzdG9tIGNvbG9yICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXFxufVxcblxcbi8qIExvZ2luIEJ1dHRvbiBTdHlsZXMgKi9cXG4ubG9naW4tYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBwYWRkaW5nOiAxNnB4OyAvKiBQYWRkaW5nICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE3ZWJlOyAvKiBDdXN0b20gYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgYm9yZGVyOiBub25lOyAvKiBObyBib3JkZXIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIHRleHQgKi9cXG4gIGZvbnQtc2l6ZTogMThweDsgLyogRm9udCBzaXplICovXFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgY3Vyc29yICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cXG59XFxuXFxuLyogTG9naW4gQnV0dG9uIEhvdmVyIEVmZmVjdCAqL1xcbi5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhNmVhYjsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXFxufVxcblxcbi8qIEZvcmdvdCBQYXNzd29yZCBTdHlsZXMgKi9cXG4uZm9yZ290LXBhc3N3b3JkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogTWFrZSBpdCBpbmxpbmUtYmxvY2sgdG8gYWxsb3cgc3R5bGluZyAqL1xcbiAgY29sb3I6ICM4YTdlYmU7IC8qIEN1c3RvbSBjb2xvciAqL1xcbiAgZm9udC1zaXplOiAxOHB4OyAvKiBGb250IHNpemUgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIHVuZGVybGluZSAqL1xcbn1cXG5cXG4vKiBSZWdpc3RlciBMaW5rIFN0eWxlcyAqL1xcbi5yZWdpc3Rlci1saW5rIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRleHQgKi9cXG4gIGNvbG9yOiAjODg4OyAvKiBMaWdodCBncmF5IGNvbG9yICovXFxufVxcblxcbi5yZWdpc3Rlci1saW5rIGEge1xcbiAgY29sb3I6ICM4YTdlYmU7IC8qIEN1c3RvbSBsaW5rIGNvbG9yICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIE5vIHVuZGVybGluZSAqL1xcbn1cXG5cXG4ucmVnaXN0ZXItbGluayBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiBVbmRlcmxpbmUgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5sb2dpbi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDIwcHg7IC8qIFNtYWxsZXIgbWFyZ2lucyBmb3IgbW9iaWxlICovXFxuICAgIHBhZGRpbmc6IDE1cHg7IC8qIExlc3MgcGFkZGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gIH1cXG5cXG4gIC5sb2dpbi10aXRsZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDsgXFxuICB9XFxuXFxuICAubG9naW4tdGl0bGUgaDMge1xcbiAgICBmb250LXNpemU6IDMwcHg7IFxcbiAgfVxcblxcbiAgLmlucHV0LWZpZWxkIHtcXG4gICAgZm9udC1zaXplOiAxNnB4OyBcXG4gIH1cXG5cXG4gIC5sb2dpbi1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAxNHB4OyBcXG4gICAgZm9udC1zaXplOiAxNnB4OyBcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MYXp5SW1hZ2VzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGF6eUltYWdlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5QYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5QYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTGF6eUltYWdlIiwiX3JlZiIsInNyYyIsImFsdCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImltZ1JlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJ0YXJnZXQiLCJ0aHJlc2hvbGQiLCJjdXJyZW50Iiwib2JzZXJ2ZSIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJsb2FkaW5nIiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJJY29uIiwibG9nbyIsInVzZUF1dGgiLCJMb2dpblBhZ2UiLCJsb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRWaXNpYmxlIiwic2V0UGFzc3dvcmRWaXNpYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZvcmdvdFBhc3N3b3JkTW9kZSIsInNldEZvcmdvdFBhc3N3b3JkTW9kZSIsInJlc2V0TWVzc2FnZSIsInNldFJlc2V0TWVzc2FnZSIsInNldExvYWRpbmciLCJyZXNldFN1Y2Nlc3MiLCJzZXRSZXNldFN1Y2Nlc3MiLCJuYXZpZ2F0ZSIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9CQVNFX1VSTCIsInRva2VuIiwiYXV0aElkIiwidXNlckRhdGEiLCJkYXRhIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZCIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25TdWJtaXQiLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9