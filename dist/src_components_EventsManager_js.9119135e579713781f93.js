"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_EventsManager_js"],{

/***/ "./src/components/EventsManager.js":
/*!*****************************************!*\
  !*** ./src/components/EventsManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_EventsManager_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/EventsManager.css */ "./src/style/EventsManager.css");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");



const EventManager = () => {
  const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isFormVisible, setFormVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventDetails, setEventDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    event_name: '',
    event_date: '',
    imgFile: null,
    vidFile: null,
    password: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [passwordStrength, setPasswordStrength] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/admin/events`);
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched Events:', data);
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;
    if (files) {
      setEventDetails({
        ...eventDetails,
        [name]: files[0]
      });
    } else {
      setEventDetails({
        ...eventDetails,
        [name]: value
      });
      if (name === 'password') {
        evaluatePasswordStrength(value);
      }
    }
  };
  const evaluatePasswordStrength = password => {
    let strength = '';
    if (password.length < 6) {
      strength = 'Too short';
    } else if (password.length < 10) {
      strength = 'Weak';
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      strength = 'Strong';
    } else {
      strength = 'Medium';
    }
    setPasswordStrength(strength);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event_name', eventDetails.event_name);
    formData.append('event_date', eventDetails.event_date);
    if (eventDetails.imgFile) {
      formData.append('imgFile', eventDetails.imgFile);
    }
    if (eventDetails.vidFile) {
      formData.append('vidFile', eventDetails.vidFile);
    }
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/admin/create-events`, {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create event: ${response.status} ${errorText}`);
      }
      setSuccessMessage('Event created successfully!');
      fetchEvents();
      setEventDetails({
        event_name: '',
        event_date: '',
        imgFile: null,
        vidFile: null,
        password: ''
      });
      setFormVisible(false);
    } catch (error) {
      console.error('Error during event submission:', error);
      setError('Error creating event. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
    if (isFormVisible) {
      setEventDetails({
        event_name: '',
        event_date: '',
        imgFile: null,
        vidFile: null,
        password: ''
      });
      setPasswordStrength('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "events-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Upcoming Events"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading events..."), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "error-message"
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "success-message"
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, events.map(event => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: event.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, event.event_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Date: ", new Date(event.event_date).toLocaleDateString()), console.log('Event:', event), event.imgurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: event.imgurl,
    alt: event.event_name,
    style: {
      width: '100px'
    },
    onError: () => console.error(`Failed to load image from URL: ${event.imgurl}`)
  }), event.vidurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    width: "100",
    controls: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: event.vidurl,
    type: "video/mp4"
  }), "Your browser does not support the video tag.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleFormVisibility
  }, isFormVisible ? 'Hide Event Form' : 'Create New Event'), isFormVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Create New Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Event Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "event_name",
    value: eventDetails.event_name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Event Date:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "event_date",
    value: eventDetails.event_date,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "password",
    value: eventDetails.password,
    onChange: handleChange
  }), eventDetails.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Password Strength: ", passwordStrength)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Image:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    name: "imgFile",
    accept: "image/*",
    onChange: handleChange
  }), eventDetails.imgFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: URL.createObjectURL(eventDetails.imgFile),
    alt: "Preview",
    style: {
      width: '100px',
      marginTop: '10px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Video:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    name: "vidFile",
    accept: "video/*",
    onChange: handleChange
  }), eventDetails.vidFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    width: "100",
    controls: true,
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    src: URL.createObjectURL(eventDetails.vidFile),
    type: eventDetails.vidFile.type
  }), "Your browser does not support the video tag.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: loading
  }, loading ? 'Creating...' : 'Create Event'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: toggleFormVisibility
  }, "Cancel"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventManager);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/EventsManager.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/EventsManager.css ***!
  \***************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General styles remain unchanged */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: visible;
}

body {
    font-family: 'Montserrat', Arial, sans-serif; 
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    color: #333;
}

h2 {
    text-align: center;
    margin-top: 20px;
    font-size: 3.0em;
    font-weight: 700;
    color: #444;
}

.container {
    display: flex; /* Change to flex to align sidebar and content */
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px; /* Adjust padding to balance layout */
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}
/* Events list styles */
.events-list {
    flex-grow: 1; /* Allow this section to take remaining space */
    margin-left: 20px; /* Space between sidebar and events list */
}

.events-list ul {
    list-style-type: none;
    padding: 0;
}

.events-list ul li {
    padding: 20px;
    border-bottom: 1px solid #ccc; /* Optional: keep or remove */
    font-size: 1.25em;
}

.events-list ul li:last-child {
    border-bottom: none; /* No border for the last item */
}

.container img,
.container video {
    border-radius: 4px;
    width: 200px;
}

button {
    background-color: #6351a2;
    color: white;
    padding: 15px 20px;
    margin: 15px 0;
    font-size: 1.25em;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}
`, "",{"version":3,"sources":["webpack://./src/style/EventsManager.css"],"names":[],"mappings":"AAAA,oCAAoC;;AAGpC;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,4CAA4C;IAC5C,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,aAAa,EAAE,gDAAgD;IAC/D,iBAAiB;IACjB,cAAc;IACd,aAAa,EAAE,qCAAqC;IACpD,uBAAuB;IACvB,yCAAyC;IACzC,eAAe;AACnB;AACA,uBAAuB;AACvB;IACI,YAAY,EAAE,+CAA+C;IAC7D,iBAAiB,EAAE,0CAA0C;AACjE;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,6BAA6B,EAAE,6BAA6B;IAC5D,iBAAiB;AACrB;;AAEA;IACI,mBAAmB,EAAE,gCAAgC;AACzD;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB","sourcesContent":["/* General styles remain unchanged */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    overflow-x: visible;\n}\n\nbody {\n    font-family: 'Montserrat', Arial, sans-serif; \n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 18px;\n    color: #333;\n}\n\nh2 {\n    text-align: center;\n    margin-top: 20px;\n    font-size: 3.0em;\n    font-weight: 700;\n    color: #444;\n}\n\n.container {\n    display: flex; /* Change to flex to align sidebar and content */\n    max-width: 1500px;\n    margin: 0 auto;\n    padding: 20px; /* Adjust padding to balance layout */\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n}\n/* Events list styles */\n.events-list {\n    flex-grow: 1; /* Allow this section to take remaining space */\n    margin-left: 20px; /* Space between sidebar and events list */\n}\n\n.events-list ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.events-list ul li {\n    padding: 20px;\n    border-bottom: 1px solid #ccc; /* Optional: keep or remove */\n    font-size: 1.25em;\n}\n\n.events-list ul li:last-child {\n    border-bottom: none; /* No border for the last item */\n}\n\n.container img,\n.container video {\n    border-radius: 4px;\n    width: 200px;\n}\n\nbutton {\n    background-color: #6351a2;\n    color: white;\n    padding: 15px 20px;\n    margin: 15px 0;\n    font-size: 1.25em;\n    font-weight: 700;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #0056b3;\n}\n\nbutton:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/EventsManager.css":
/*!*************************************!*\
  !*** ./src/style/EventsManager.css ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EventsManager_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./EventsManager.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/EventsManager.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EventsManager_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EventsManager_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EventsManager_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EventsManager_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfRXZlbnRzTWFuYWdlcl9qcy45MTE5MTM1ZTU3OTcxMzc4MWY5My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ0o7QUFFaEMsTUFBTUksWUFBWSxHQUFHQSxDQUFBLEtBQU07RUFDdkIsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN4QyxNQUFNLENBQUNNLGFBQWEsRUFBRUMsY0FBYyxDQUFDLEdBQUdQLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQ3ZELE1BQU0sQ0FBQ1EsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR1QsK0NBQVEsQ0FBQztJQUM3Q1UsVUFBVSxFQUFFLEVBQUU7SUFDZEMsVUFBVSxFQUFFLEVBQUU7SUFDZEMsT0FBTyxFQUFFLElBQUk7SUFDYkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQyxDQUFDO0VBQ0YsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHaEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDN0MsTUFBTSxDQUFDaUIsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2xCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sQ0FBQ21CLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR3BCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3hELE1BQU0sQ0FBQ3FCLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHdEIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFFNURDLGdEQUFTLENBQUMsTUFBTTtJQUNac0IsV0FBVyxDQUFDLENBQUM7RUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE1BQU1BLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVk7SUFDNUJQLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEIsSUFBSTtNQUNBLE1BQU1RLFFBQVEsR0FBRyxNQUFN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Qy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQThHO0FBQzlHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEZBQU87Ozs7QUFJd0Q7QUFDaEYsT0FBTyxpRUFBZSw4RkFBTyxJQUFJLDhGQUFPLFVBQVUsOEZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9FdmVudHNNYW5hZ2VyLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9FdmVudHNNYW5hZ2VyLmNzcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvRXZlbnRzTWFuYWdlci5jc3M/MzdiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGUvRXZlbnRzTWFuYWdlci5jc3MnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcblxuY29uc3QgRXZlbnRNYW5hZ2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzRm9ybVZpc2libGUsIHNldEZvcm1WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXZlbnREZXRhaWxzLCBzZXRFdmVudERldGFpbHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBldmVudF9uYW1lOiAnJyxcbiAgICAgICAgZXZlbnRfZGF0ZTogJycsXG4gICAgICAgIGltZ0ZpbGU6IG51bGwsXG4gICAgICAgIHZpZEZpbGU6IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiAnJywgXG4gICAgfSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpOyBcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTsgXG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IFxuICAgIGNvbnN0IFtwYXNzd29yZFN0cmVuZ3RoLCBzZXRQYXNzd29yZFN0cmVuZ3RoXSA9IHVzZVN0YXRlKCcnKTsgXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEV2ZW50cygpOyBcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBmZXRjaEV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2V2ZW50c2ApO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGV2ZW50czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgRXZlbnRzOicsIGRhdGEpO1xuICAgICAgICAgICAgc2V0RXZlbnRzKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZXZlbnRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyBldmVudHMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZmlsZXMpIHtcbiAgICAgICAgICAgIHNldEV2ZW50RGV0YWlscyh7IC4uLmV2ZW50RGV0YWlscywgW25hbWVdOiBmaWxlc1swXSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEV2ZW50RGV0YWlscyh7IC4uLmV2ZW50RGV0YWlscywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgZXZhbHVhdGVQYXNzd29yZFN0cmVuZ3RoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBldmFsdWF0ZVBhc3N3b3JkU3RyZW5ndGggPSAocGFzc3dvcmQpID0+IHtcbiAgICAgICAgbGV0IHN0cmVuZ3RoID0gJyc7XG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgICAgICBzdHJlbmd0aCA9ICdUb28gc2hvcnQnO1xuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICBzdHJlbmd0aCA9ICdXZWFrJztcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5tYXRjaCgvW0EtWl0vKSAmJiBwYXNzd29yZC5tYXRjaCgvWzAtOV0vKSkge1xuICAgICAgICAgICAgc3RyZW5ndGggPSAnU3Ryb25nJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmVuZ3RoID0gJ01lZGl1bSc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UGFzc3dvcmRTdHJlbmd0aChzdHJlbmd0aCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2V2ZW50X25hbWUnLCBldmVudERldGFpbHMuZXZlbnRfbmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZXZlbnRfZGF0ZScsIGV2ZW50RGV0YWlscy5ldmVudF9kYXRlKTtcbiAgICAgICAgaWYgKGV2ZW50RGV0YWlscy5pbWdGaWxlKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltZ0ZpbGUnLCBldmVudERldGFpbHMuaW1nRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGV0YWlscy52aWRGaWxlKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZEZpbGUnLCBldmVudERldGFpbHMudmlkRmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRFcnJvcignJyk7IFxuICAgICAgICBzZXRTdWNjZXNzTWVzc2FnZSgnJyk7IFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2NyZWF0ZS1ldmVudHNgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgZXZlbnQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke2Vycm9yVGV4dH1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0U3VjY2Vzc01lc3NhZ2UoJ0V2ZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScpOyBcbiAgICAgICAgICAgIGZldGNoRXZlbnRzKCk7IFxuICAgICAgICAgICAgc2V0RXZlbnREZXRhaWxzKHsgZXZlbnRfbmFtZTogJycsIGV2ZW50X2RhdGU6ICcnLCBpbWdGaWxlOiBudWxsLCB2aWRGaWxlOiBudWxsLCBwYXNzd29yZDogJycgfSk7IFxuICAgICAgICAgICAgc2V0Rm9ybVZpc2libGUoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGV2ZW50IHN1Ym1pc3Npb246JywgZXJyb3IpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV2ZW50LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIHNldEZvcm1WaXNpYmxlKCFpc0Zvcm1WaXNpYmxlKTtcbiAgICAgICAgaWYgKGlzRm9ybVZpc2libGUpIHtcbiAgICAgICAgICAgIHNldEV2ZW50RGV0YWlscyh7IGV2ZW50X25hbWU6ICcnLCBldmVudF9kYXRlOiAnJywgaW1nRmlsZTogbnVsbCwgdmlkRmlsZTogbnVsbCwgcGFzc3dvcmQ6ICcnIH0pOyBcbiAgICAgICAgICAgIHNldFBhc3N3b3JkU3RyZW5ndGgoJycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoMj5VcGNvbWluZyBFdmVudHM8L2gyPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmcgZXZlbnRzLi4uPC9wPn0gXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9wPn0gXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3NNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cInN1Y2Nlc3MtbWVzc2FnZVwiPntzdWNjZXNzTWVzc2FnZX08L3A+fSBcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZXZlbnQuZXZlbnRfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhdGU6IHtuZXcgRGF0ZShldmVudC5ldmVudF9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdFdmVudDonLCBldmVudCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC5pbWd1cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtldmVudC5pbWd1cmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtldmVudC5ldmVudF9uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KCkgPT4gY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxvYWQgaW1hZ2UgZnJvbSBVUkw6ICR7ZXZlbnQuaW1ndXJsfWApfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudC52aWR1cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gd2lkdGg9XCIxMDBcIiBjb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtldmVudC52aWR1cmx9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZvcm1WaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICAgICAge2lzRm9ybVZpc2libGUgPyAnSGlkZSBFdmVudCBGb3JtJyA6ICdDcmVhdGUgTmV3IEV2ZW50J31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7aXNGb3JtVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DcmVhdGUgTmV3IEV2ZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FdmVudCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudERldGFpbHMuZXZlbnRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FdmVudCBEYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudERldGFpbHMuZXZlbnRfZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtldmVudERldGFpbHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudERldGFpbHMucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhc3N3b3JkIFN0cmVuZ3RoOiB7cGFzc3dvcmRTdHJlbmd0aH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbWFnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWdGaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnREZXRhaWxzLmltZ0ZpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50RGV0YWlscy5pbWdGaWxlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VmlkZW86PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlkRmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwidmlkZW8vKlwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50RGV0YWlscy52aWRGaWxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50RGV0YWlscy52aWRGaWxlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtldmVudERldGFpbHMudmlkRmlsZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2xvYWRpbmd9Pntsb2FkaW5nID8gJ0NyZWF0aW5nLi4uJyA6ICdDcmVhdGUgRXZlbnQnfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVGb3JtVmlzaWJpbGl0eX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIHN0eWxlcyByZW1haW4gdW5jaGFuZ2VkICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93LXg6IHZpc2libGU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEFyaWFsLCBzYW5zLXNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzLjBlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNDQ0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBDaGFuZ2UgdG8gZmxleCB0byBhbGlnbiBzaWRlYmFyIGFuZCBjb250ZW50ICovXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweDsgLyogQWRqdXN0IHBhZGRpbmcgdG8gYmFsYW5jZSBsYXlvdXQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4vKiBFdmVudHMgbGlzdCBzdHlsZXMgKi9cbi5ldmVudHMtbGlzdCB7XG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvdyB0aGlzIHNlY3Rpb24gdG8gdGFrZSByZW1haW5pbmcgc3BhY2UgKi9cbiAgICBtYXJnaW4tbGVmdDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBzaWRlYmFyIGFuZCBldmVudHMgbGlzdCAqL1xufVxuXG4uZXZlbnRzLWxpc3QgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZXZlbnRzLWxpc3QgdWwgbGkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7IC8qIE9wdGlvbmFsOiBrZWVwIG9yIHJlbW92ZSAqL1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uZXZlbnRzLWxpc3QgdWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogTm8gYm9yZGVyIGZvciB0aGUgbGFzdCBpdGVtICovXG59XG5cbi5jb250YWluZXIgaW1nLFxuLmNvbnRhaW5lciB2aWRlbyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1MWEyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL0V2ZW50c01hbmFnZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9DQUFvQzs7QUFHcEM7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1Qyx5QkFBeUI7SUFDekIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhLEVBQUUsZ0RBQWdEO0lBQy9ELGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYSxFQUFFLHFDQUFxQztJQUNwRCx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7QUFDQSx1QkFBdUI7QUFDdkI7SUFDSSxZQUFZLEVBQUUsK0NBQStDO0lBQzdELGlCQUFpQixFQUFFLDBDQUEwQztBQUNqRTs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCLEVBQUUsNkJBQTZCO0lBQzVELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQixFQUFFLGdDQUFnQztBQUN6RDs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBzdHlsZXMgcmVtYWluIHVuY2hhbmdlZCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgQXJpYWwsIHNhbnMtc2VyaWY7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMuMGVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzQ0NDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIENoYW5nZSB0byBmbGV4IHRvIGFsaWduIHNpZGViYXIgYW5kIGNvbnRlbnQgKi9cXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4OyAvKiBBZGp1c3QgcGFkZGluZyB0byBiYWxhbmNlIGxheW91dCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLyogRXZlbnRzIGxpc3Qgc3R5bGVzICovXFxuLmV2ZW50cy1saXN0IHtcXG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvdyB0aGlzIHNlY3Rpb24gdG8gdGFrZSByZW1haW5pbmcgc3BhY2UgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIFNwYWNlIGJldHdlZW4gc2lkZWJhciBhbmQgZXZlbnRzIGxpc3QgKi9cXG59XFxuXFxuLmV2ZW50cy1saXN0IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZXZlbnRzLWxpc3QgdWwgbGkge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgLyogT3B0aW9uYWw6IGtlZXAgb3IgcmVtb3ZlICovXFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4uZXZlbnRzLWxpc3QgdWwgbGk6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIE5vIGJvcmRlciBmb3IgdGhlIGxhc3QgaXRlbSAqL1xcbn1cXG5cXG4uY29udGFpbmVyIGltZyxcXG4uY29udGFpbmVyIHZpZGVvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzUxYTI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgICBtYXJnaW46IDE1cHggMDtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRXZlbnRzTWFuYWdlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0V2ZW50c01hbmFnZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyIiwiRXZlbnRNYW5hZ2VyIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiaXNGb3JtVmlzaWJsZSIsInNldEZvcm1WaXNpYmxlIiwiZXZlbnREZXRhaWxzIiwic2V0RXZlbnREZXRhaWxzIiwiZXZlbnRfbmFtZSIsImV2ZW50X2RhdGUiLCJpbWdGaWxlIiwidmlkRmlsZSIsInBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsInBhc3N3b3JkU3RyZW5ndGgiLCJzZXRQYXNzd29yZFN0cmVuZ3RoIiwiZmV0Y2hFdmVudHMiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9CQVNFX1VSTCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiZmlsZXMiLCJ0YXJnZXQiLCJldmFsdWF0ZVBhc3N3b3JkU3RyZW5ndGgiLCJzdHJlbmd0aCIsImxlbmd0aCIsIm1hdGNoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsImVycm9yVGV4dCIsInRleHQiLCJ0b2dnbGVGb3JtVmlzaWJpbGl0eSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJldmVudCIsImtleSIsImlkIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImltZ3VybCIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJvbkVycm9yIiwidmlkdXJsIiwiY29udHJvbHMiLCJ0eXBlIiwib25DbGljayIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImFjY2VwdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1hcmdpblRvcCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==