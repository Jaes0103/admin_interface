"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_ReportsPage_js"],{

/***/ "./src/components/ReportsPage.js":
/*!***************************************!*\
  !*** ./src/components/ReportsPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _style_ReportsPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/ReportsPage.css */ "./src/style/ReportsPage.css");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");





const ReportsPage = () => {
  const [reports, setReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [rescuedAnimals, setRescuedAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isRecent, setIsRecent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);

  // Pagination state
  const [currentPageReports, setCurrentPageReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [itemsPerPageReports, setItemsPerPageReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [currentPageRescued, setCurrentPageRescued] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [itemsPerPageRescued, setItemsPerPageRescued] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);

  // Fetch report details
  const fetchReportDetails = async () => {
    try {
      const reportUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/reportsdetails`;
      const reportResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(reportUrl);
      setReports(reportResponse.data.reports);
      const rescuedUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/rescuedanimalsdetails`;
      const rescuedResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(rescuedUrl);
      setRescuedAnimals(rescuedResponse.data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching report or rescued animal details');
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchReportDetails();
  }, []);
  const toggleReportOrder = () => {
    setIsRecent(!isRecent);
  };
  const sortedReports = reports.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return isRecent ? dateB - dateA : dateA - dateB;
  });

  // Pagination calculations
  const totalPagesReports = Math.ceil(reports.length / itemsPerPageReports);
  const totalPagesRescued = Math.ceil(rescuedAnimals.length / itemsPerPageRescued);
  const currentReports = sortedReports.slice((currentPageReports - 1) * itemsPerPageReports, currentPageReports * itemsPerPageReports);
  const currentRescuedAnimals = rescuedAnimals.slice((currentPageRescued - 1) * itemsPerPageRescued, currentPageRescued * itemsPerPageRescued);
  const handleNextReports = () => {
    if (currentPageReports < totalPagesReports) {
      setCurrentPageReports(prev => prev + 1);
    }
  };
  const handlePreviousReports = () => {
    if (currentPageReports > 1) {
      setCurrentPageReports(prev => prev - 1);
    }
  };
  const handleNextRescued = () => {
    if (currentPageRescued < totalPagesRescued) {
      setCurrentPageRescued(prev => prev + 1);
    }
  };
  const handlePreviousRescued = () => {
    if (currentPageRescued > 1) {
      setCurrentPageRescued(prev => prev - 1);
    }
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading reports and rescued animals...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "report-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Report Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "report-details-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Reporter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Animal Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cruelty Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Date Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleReportOrder,
    className: "toggle-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSort, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Accident Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Image"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, currentReports.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: "9"
  }, "No reports available.")) : currentReports.map(report => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: report.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.reporter_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.animal_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.animal_details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.cruelty_details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(report.created_at).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(report.accident_date).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.image_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: report.image_url,
    alt: "Report",
    className: "report-image"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePreviousReports,
    disabled: currentPageReports === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Page ", currentPageReports, " of ", totalPagesReports), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNextReports,
    disabled: currentPageReports === totalPagesReports
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronRight, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Rescued Animals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "rescued-animals-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Report ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rescuer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Animal Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Number of Animals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Accident Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rescue Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Animal Condition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Phone Number"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, currentRescuedAnimals.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: "9"
  }, "No rescued animals available.")) : currentRescuedAnimals.map(rescued => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: rescued.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.image_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: rescued.image_url,
    alt: "Rescued Animal",
    className: "report-image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.rescued_report_id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.full_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.animal_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.number_of_animals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(rescued.accident_date).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(rescued.rescue_date).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.animal_condition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rescued.phone_number))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePreviousRescued,
    disabled: currentPageRescued === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Page ", currentPageRescued, " of ", totalPagesRescued), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNextRescued,
    disabled: currentPageRescued === totalPagesRescued
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronRight, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportsPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/ReportsPage.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/ReportsPage.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* General Page Styles */
.report-details-container {
  padding: 20px; /* Padding around the container */
  background-color: #f9f9f9; /* Light background for the page */
  min-height: 100vh; /* Ensure the container takes full height */
  margin-left: 350px;
}

/* Table Styles */
.report-details-table {
  width: 100%; /* Full width for the table */
  border-collapse: collapse; /* Remove gaps between cells */
  margin-top: 20px; /* Space above the table */
}

/* Header and Cell Styles */
.report-details-table th,
.report-details-table td {
  border: 1px solid #ddd; /* Light gray border for cells */
  padding: 18px; /* Space inside cells */
  text-align: left; /* Left-align text */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}

/* Header Styles */
.report-details-table th {
  background-color: #f2f2f2; /* Light gray for header */
  color: #333; /* Darker text for headers */
}

/* Alternating Row Colors */
.report-details-table tr:nth-child(even) {
  background-color: #f9f9f9; /* Light gray for even rows */
}

/* Hover Effect */
.report-details-table tr:hover {
  background-color: #ddd; /* Darker gray on hover */
}

/* Image Styles */
.report-image {
  width: 50px; /* Fixed width for images */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Rounded corners for images */
}

/* Controls Styles */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between controls */
  margin-bottom: 15px; /* Space below controls */
}

.controls label {
  margin-right: 10px; /* Space after the label */
}

.search-input {
  padding: 5px; /* Padding inside the input */
  border: 1px solid #ccc; /* Light gray border */
  border-radius: 5px; /* Rounded corners for input */
  width: 200px; /* Fixed width for the search input */
}

/* Pagination Styles */
.pagination-container {
  margin-top: 20px; /* Space above pagination */
  display: flex;
  justify-content: center; /* Center pagination controls */
}

.pagination {
  display: flex;
  align-items: center; /* Center items vertically */
}

.prev-next-button {
  border: none; /* Remove default border */
  background: none; /* Remove background */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 16px; /* Font size for buttons */
  color: #007bff; /* Primary color */
  margin: 0 10px; /* Space between buttons */
}

.prev-next-button:disabled {
  color: #ccc; /* Gray color for disabled buttons */
  cursor: not-allowed; /* Not-allowed cursor */
}

.page-button {
  border: none; /* Remove default border */
  background-color: #007bff; /* Primary color */
  color: white; /* Text color */
  padding: 8px 12px; /* Space inside buttons */
  margin: 0 5px; /* Space between page buttons */
  cursor: pointer; /* Pointer cursor on hover */
  border-radius: 5px; /* Rounded corners */
}

.page-button.active {
  background-color: #0056b3; /* Darker shade for active button */
}

.page-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
`, "",{"version":3,"sources":["webpack://./src/style/ReportsPage.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;EACE,aAAa,EAAE,iCAAiC;EAChD,yBAAyB,EAAE,kCAAkC;EAC7D,iBAAiB,EAAE,2CAA2C;EAC9D,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,WAAW,EAAE,6BAA6B;EAC1C,yBAAyB,EAAE,8BAA8B;EACzD,gBAAgB,EAAE,0BAA0B;AAC9C;;AAEA,2BAA2B;AAC3B;;EAEE,sBAAsB,EAAE,gCAAgC;EACxD,aAAa,EAAE,uBAAuB;EACtC,gBAAgB,EAAE,oBAAoB;EACtC,yCAAyC;EACzC,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,yBAAyB,EAAE,0BAA0B;EACrD,WAAW,EAAE,4BAA4B;AAC3C;;AAEA,2BAA2B;AAC3B;EACE,yBAAyB,EAAE,6BAA6B;AAC1D;;AAEA,iBAAiB;AACjB;EACE,sBAAsB,EAAE,yBAAyB;AACnD;;AAEA,iBAAiB;AACjB;EACE,WAAW,EAAE,2BAA2B;EACxC,YAAY,EAAE,0BAA0B;EACxC,kBAAkB,EAAE,+BAA+B;AACrD;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAE,2BAA2B;EAC3D,mBAAmB,EAAE,yBAAyB;AAChD;;AAEA;EACE,kBAAkB,EAAE,0BAA0B;AAChD;;AAEA;EACE,YAAY,EAAE,6BAA6B;EAC3C,sBAAsB,EAAE,sBAAsB;EAC9C,kBAAkB,EAAE,8BAA8B;EAClD,YAAY,EAAE,qCAAqC;AACrD;;AAEA,sBAAsB;AACtB;EACE,gBAAgB,EAAE,2BAA2B;EAC7C,aAAa;EACb,uBAAuB,EAAE,+BAA+B;AAC1D;;AAEA;EACE,aAAa;EACb,mBAAmB,EAAE,4BAA4B;AACnD;;AAEA;EACE,YAAY,EAAE,0BAA0B;EACxC,gBAAgB,EAAE,sBAAsB;EACxC,eAAe,EAAE,4BAA4B;EAC7C,eAAe,EAAE,0BAA0B;EAC3C,cAAc,EAAE,kBAAkB;EAClC,cAAc,EAAE,0BAA0B;AAC5C;;AAEA;EACE,WAAW,EAAE,oCAAoC;EACjD,mBAAmB,EAAE,uBAAuB;AAC9C;;AAEA;EACE,YAAY,EAAE,0BAA0B;EACxC,yBAAyB,EAAE,kBAAkB;EAC7C,YAAY,EAAE,eAAe;EAC7B,iBAAiB,EAAE,yBAAyB;EAC5C,aAAa,EAAE,+BAA+B;EAC9C,eAAe,EAAE,4BAA4B;EAC7C,kBAAkB,EAAE,oBAAoB;AAC1C;;AAEA;EACE,yBAAyB,EAAE,mCAAmC;AAChE;;AAEA;EACE,yBAAyB,EAAE,0BAA0B;AACvD","sourcesContent":["/* General Page Styles */\n.report-details-container {\n  padding: 20px; /* Padding around the container */\n  background-color: #f9f9f9; /* Light background for the page */\n  min-height: 100vh; /* Ensure the container takes full height */\n  margin-left: 350px;\n}\n\n/* Table Styles */\n.report-details-table {\n  width: 100%; /* Full width for the table */\n  border-collapse: collapse; /* Remove gaps between cells */\n  margin-top: 20px; /* Space above the table */\n}\n\n/* Header and Cell Styles */\n.report-details-table th,\n.report-details-table td {\n  border: 1px solid #ddd; /* Light gray border for cells */\n  padding: 18px; /* Space inside cells */\n  text-align: left; /* Left-align text */\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n\n/* Header Styles */\n.report-details-table th {\n  background-color: #f2f2f2; /* Light gray for header */\n  color: #333; /* Darker text for headers */\n}\n\n/* Alternating Row Colors */\n.report-details-table tr:nth-child(even) {\n  background-color: #f9f9f9; /* Light gray for even rows */\n}\n\n/* Hover Effect */\n.report-details-table tr:hover {\n  background-color: #ddd; /* Darker gray on hover */\n}\n\n/* Image Styles */\n.report-image {\n  width: 50px; /* Fixed width for images */\n  height: auto; /* Maintain aspect ratio */\n  border-radius: 5px; /* Rounded corners for images */\n}\n\n/* Controls Styles */\n.controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* Space between controls */\n  margin-bottom: 15px; /* Space below controls */\n}\n\n.controls label {\n  margin-right: 10px; /* Space after the label */\n}\n\n.search-input {\n  padding: 5px; /* Padding inside the input */\n  border: 1px solid #ccc; /* Light gray border */\n  border-radius: 5px; /* Rounded corners for input */\n  width: 200px; /* Fixed width for the search input */\n}\n\n/* Pagination Styles */\n.pagination-container {\n  margin-top: 20px; /* Space above pagination */\n  display: flex;\n  justify-content: center; /* Center pagination controls */\n}\n\n.pagination {\n  display: flex;\n  align-items: center; /* Center items vertically */\n}\n\n.prev-next-button {\n  border: none; /* Remove default border */\n  background: none; /* Remove background */\n  cursor: pointer; /* Pointer cursor on hover */\n  font-size: 16px; /* Font size for buttons */\n  color: #007bff; /* Primary color */\n  margin: 0 10px; /* Space between buttons */\n}\n\n.prev-next-button:disabled {\n  color: #ccc; /* Gray color for disabled buttons */\n  cursor: not-allowed; /* Not-allowed cursor */\n}\n\n.page-button {\n  border: none; /* Remove default border */\n  background-color: #007bff; /* Primary color */\n  color: white; /* Text color */\n  padding: 8px 12px; /* Space inside buttons */\n  margin: 0 5px; /* Space between page buttons */\n  cursor: pointer; /* Pointer cursor on hover */\n  border-radius: 5px; /* Rounded corners */\n}\n\n.page-button.active {\n  background-color: #0056b3; /* Darker shade for active button */\n}\n\n.page-button:hover {\n  background-color: #0056b3; /* Darker shade on hover */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/ReportsPage.css":
/*!***********************************!*\
  !*** ./src/style/ReportsPage.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ReportsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ReportsPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/ReportsPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ReportsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ReportsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ReportsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ReportsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfUmVwb3J0c1BhZ2VfanMuZjIxZDZiODhiMmI4ZmIxMGM1OTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUM2QztBQUNyQztBQUNGO0FBRWhDLE1BQU1RLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0VBQ3hCLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDMUMsTUFBTSxDQUFDUyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdWLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3hELE1BQU0sQ0FBQ1csT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR1osK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUMsTUFBTSxDQUFDYSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHZCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN0QyxNQUFNLENBQUNlLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoQiwrQ0FBUSxDQUFDLElBQUksQ0FBQzs7RUFFOUM7RUFDQSxNQUFNLENBQUNpQixrQkFBa0IsRUFBRUMscUJBQXFCLENBQUMsR0FBR2xCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0VBQy9ELE1BQU0sQ0FBQ21CLG1CQUFtQixFQUFFQyxzQkFBc0IsQ0FBQyxHQUFHcEIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFFbEUsTUFBTSxDQUFDcUIsa0JBQWtCLEVBQUVDLHFCQUFxQixDQUFDLEdBQUd0QiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztFQUMvRCxNQUFNLENBQUN1QixtQkFBbUIsRUFBRUMsc0JBQXNCLENBQUMsR0FBR3hCLCtDQUFRLENBQUMsRUFBRSxDQUFDOztFQUVsRTtFQUNBLE1BQU15QixrQkFBa0IsR0FBRyxNQUFBQSxDQUFBLEtBQVk7SUFDckMsSUFBSTtNQUNGLE1BQU1DLFNBQVMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtC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d0JBQXdCLHlCQUF5QiwrQkFBK0IsdUNBQXVDLHdCQUF3QiwrQkFBK0IsOEJBQThCLHFCQUFxQjtBQUNwa0o7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSHZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9SZXBvcnRzUGFnZS5qcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvUmVwb3J0c1BhZ2UuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9SZXBvcnRzUGFnZS5jc3M/Mjc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBGYVNvcnQsIEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnOyBcbmltcG9ydCAnLi4vc3R5bGUvUmVwb3J0c1BhZ2UuY3NzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7XG5cbmNvbnN0IFJlcG9ydHNQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcmVwb3J0cywgc2V0UmVwb3J0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXNjdWVkQW5pbWFscywgc2V0UmVzY3VlZEFuaW1hbHNdID0gdXNlU3RhdGUoW10pOyBcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNSZWNlbnQsIHNldElzUmVjZW50XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIFBhZ2luYXRpb24gc3RhdGVcbiAgY29uc3QgW2N1cnJlbnRQYWdlUmVwb3J0cywgc2V0Q3VycmVudFBhZ2VSZXBvcnRzXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXRlbXNQZXJQYWdlUmVwb3J0cywgc2V0SXRlbXNQZXJQYWdlUmVwb3J0c10gPSB1c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgW2N1cnJlbnRQYWdlUmVzY3VlZCwgc2V0Q3VycmVudFBhZ2VSZXNjdWVkXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbaXRlbXNQZXJQYWdlUmVzY3VlZCwgc2V0SXRlbXNQZXJQYWdlUmVzY3VlZF0gPSB1c2VTdGF0ZSgxMCk7XG5cbiAgLy8gRmV0Y2ggcmVwb3J0IGRldGFpbHNcbiAgY29uc3QgZmV0Y2hSZXBvcnREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXBvcnRVcmwgPSBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9yZXBvcnRzZGV0YWlsc2A7XG4gICAgICBjb25zdCByZXBvcnRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChyZXBvcnRVcmwpO1xuICAgICAgc2V0UmVwb3J0cyhyZXBvcnRSZXNwb25zZS5kYXRhLnJlcG9ydHMpO1xuXG4gICAgICBjb25zdCByZXNjdWVkVXJsID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vcmVzY3VlZGFuaW1hbHNkZXRhaWxzYDtcbiAgICAgIGNvbnN0IHJlc2N1ZWRSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChyZXNjdWVkVXJsKTtcbiAgICAgIHNldFJlc2N1ZWRBbmltYWxzKHJlc2N1ZWRSZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZldGNoIGVycm9yOicsIGVycik7XG4gICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVwb3J0IG9yIHJlc2N1ZWQgYW5pbWFsIGRldGFpbHMnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZXBvcnREZXRhaWxzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVSZXBvcnRPcmRlciA9ICgpID0+IHtcbiAgICBzZXRJc1JlY2VudCghaXNSZWNlbnQpO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRlZFJlcG9ydHMgPSByZXBvcnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBkYXRlQSA9IG5ldyBEYXRlKGEuY3JlYXRlZF9hdCk7XG4gICAgY29uc3QgZGF0ZUIgPSBuZXcgRGF0ZShiLmNyZWF0ZWRfYXQpO1xuICAgIHJldHVybiBpc1JlY2VudCA/IGRhdGVCIC0gZGF0ZUEgOiBkYXRlQSAtIGRhdGVCO1xuICB9KTtcblxuICAvLyBQYWdpbmF0aW9uIGNhbGN1bGF0aW9uc1xuICBjb25zdCB0b3RhbFBhZ2VzUmVwb3J0cyA9IE1hdGguY2VpbChyZXBvcnRzLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZVJlcG9ydHMpO1xuICBjb25zdCB0b3RhbFBhZ2VzUmVzY3VlZCA9IE1hdGguY2VpbChyZXNjdWVkQW5pbWFscy5sZW5ndGggLyBpdGVtc1BlclBhZ2VSZXNjdWVkKTtcblxuICBjb25zdCBjdXJyZW50UmVwb3J0cyA9IHNvcnRlZFJlcG9ydHMuc2xpY2UoXG4gICAgKGN1cnJlbnRQYWdlUmVwb3J0cyAtIDEpICogaXRlbXNQZXJQYWdlUmVwb3J0cyxcbiAgICBjdXJyZW50UGFnZVJlcG9ydHMgKiBpdGVtc1BlclBhZ2VSZXBvcnRzXG4gICk7XG5cbiAgY29uc3QgY3VycmVudFJlc2N1ZWRBbmltYWxzID0gcmVzY3VlZEFuaW1hbHMuc2xpY2UoXG4gICAgKGN1cnJlbnRQYWdlUmVzY3VlZCAtIDEpICogaXRlbXNQZXJQYWdlUmVzY3VlZCxcbiAgICBjdXJyZW50UGFnZVJlc2N1ZWQgKiBpdGVtc1BlclBhZ2VSZXNjdWVkXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dFJlcG9ydHMgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlUmVwb3J0cyA8IHRvdGFsUGFnZXNSZXBvcnRzKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZVJlcG9ydHMoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXNSZXBvcnRzID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZVJlcG9ydHMgPiAxKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZVJlcG9ydHMoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dFJlc2N1ZWQgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlUmVzY3VlZCA8IHRvdGFsUGFnZXNSZXNjdWVkKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZVJlc2N1ZWQoKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXNSZXNjdWVkID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZVJlc2N1ZWQgPiAxKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZVJlc2N1ZWQoKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZyByZXBvcnRzIGFuZCByZXNjdWVkIGFuaW1hbHMuLi48L3A+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcG9ydC1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDxoMT5SZXBvcnQgRGV0YWlsczwvaDE+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVwb3J0LWRldGFpbHMtdGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICA8dGg+UmVwb3J0ZXI8L3RoPlxuICAgICAgICAgICAgPHRoPkFuaW1hbCBUeXBlPC90aD5cbiAgICAgICAgICAgIDx0aD5EZXRhaWxzPC90aD5cbiAgICAgICAgICAgIDx0aD5DcnVlbHR5IERldGFpbHM8L3RoPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8c3Bhbj5EYXRlIENyZWF0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUmVwb3J0T3JkZXJ9IGNsYXNzTmFtZT1cInRvZ2dsZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8RmFTb3J0IC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aD5BY2NpZGVudCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2N1cnJlbnRSZXBvcnRzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI5XCI+Tm8gcmVwb3J0cyBhdmFpbGFibGUuPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGN1cnJlbnRSZXBvcnRzLm1hcCgocmVwb3J0KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e3JlcG9ydC5pZH0+XG4gICAgICAgICAgICAgICAgPHRkPntyZXBvcnQuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3JlcG9ydC5yZXBvcnRlcl9uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyZXBvcnQuYW5pbWFsX3R5cGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3JlcG9ydC5hbmltYWxfZGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cmVwb3J0LmNydWVsdHlfZGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bmV3IERhdGUocmVwb3J0LmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntuZXcgRGF0ZShyZXBvcnQuYWNjaWRlbnRfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3JlcG9ydC5zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICB7cmVwb3J0LmltYWdlX3VybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXBvcnQuaW1hZ2VfdXJsfSBhbHQ9XCJSZXBvcnRcIiBjbGFzc05hbWU9XCJyZXBvcnQtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgICAgey8qIFJlcG9ydHMgUGFnaW5hdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUmVwb3J0c30gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlUmVwb3J0cyA9PT0gMX0+XG4gICAgICAgICAgPEZhQ2hldnJvbkxlZnQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFBhZ2Uge2N1cnJlbnRQYWdlUmVwb3J0c30gb2Yge3RvdGFsUGFnZXNSZXBvcnRzfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dFJlcG9ydHN9IGRpc2FibGVkPXtjdXJyZW50UGFnZVJlcG9ydHMgPT09IHRvdGFsUGFnZXNSZXBvcnRzfT5cbiAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgxPlJlc2N1ZWQgQW5pbWFsczwvaDE+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwicmVzY3VlZC1hbmltYWxzLXRhYmxlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SW1hZ2U8L3RoPlxuICAgICAgICAgICAgPHRoPlJlcG9ydCBJRDwvdGg+XG4gICAgICAgICAgICA8dGg+UmVzY3VlcjwvdGg+XG4gICAgICAgICAgICA8dGg+QW5pbWFsIFR5cGU8L3RoPlxuICAgICAgICAgICAgPHRoPk51bWJlciBvZiBBbmltYWxzPC90aD5cbiAgICAgICAgICAgIDx0aD5BY2NpZGVudCBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0aD5SZXNjdWUgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGg+QW5pbWFsIENvbmRpdGlvbjwvdGg+XG4gICAgICAgICAgICA8dGg+UGhvbmUgTnVtYmVyPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2N1cnJlbnRSZXNjdWVkQW5pbWFscy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiOVwiPk5vIHJlc2N1ZWQgYW5pbWFscyBhdmFpbGFibGUuPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIGN1cnJlbnRSZXNjdWVkQW5pbWFscy5tYXAoKHJlc2N1ZWQpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17cmVzY3VlZC5pZH0+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge3Jlc2N1ZWQuaW1hZ2VfdXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Jlc2N1ZWQuaW1hZ2VfdXJsfSBhbHQ9XCJSZXNjdWVkIEFuaW1hbFwiIGNsYXNzTmFtZT1cInJlcG9ydC1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyZXNjdWVkLnJlc2N1ZWRfcmVwb3J0X2lkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntyZXNjdWVkLmZ1bGxfbmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cmVzY3VlZC5hbmltYWxfdHlwZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cmVzY3VlZC5udW1iZXJfb2ZfYW5pbWFsc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bmV3IERhdGUocmVzY3VlZC5hY2NpZGVudF9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bmV3IERhdGUocmVzY3VlZC5yZXNjdWVfZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Jlc2N1ZWQuYW5pbWFsX2NvbmRpdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57cmVzY3VlZC5waG9uZV9udW1iZXJ9PC90ZD4gXG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgICB7LyogUmVzY3VlZCBBbmltYWxzIFBhZ2luYXRpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1Jlc2N1ZWR9IGRpc2FibGVkPXtjdXJyZW50UGFnZVJlc2N1ZWQgPT09IDF9PlxuICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBQYWdlIHtjdXJyZW50UGFnZVJlc2N1ZWR9IG9mIHt0b3RhbFBhZ2VzUmVzY3VlZH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRSZXNjdWVkfSBkaXNhYmxlZD17Y3VycmVudFBhZ2VSZXNjdWVkID09PSB0b3RhbFBhZ2VzUmVzY3VlZH0+XG4gICAgICAgICAgPEZhQ2hldnJvblJpZ2h0IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRzUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIFBhZ2UgU3R5bGVzICovXG4ucmVwb3J0LWRldGFpbHMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDsgLyogUGFkZGluZyBhcm91bmQgdGhlIGNvbnRhaW5lciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBMaWdodCBiYWNrZ3JvdW5kIGZvciB0aGUgcGFnZSAqL1xuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBjb250YWluZXIgdGFrZXMgZnVsbCBoZWlnaHQgKi9cbiAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xufVxuXG4vKiBUYWJsZSBTdHlsZXMgKi9cbi5yZXBvcnQtZGV0YWlscy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciB0aGUgdGFibGUgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogUmVtb3ZlIGdhcHMgYmV0d2VlbiBjZWxscyAqL1xuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBTcGFjZSBhYm92ZSB0aGUgdGFibGUgKi9cbn1cblxuLyogSGVhZGVyIGFuZCBDZWxsIFN0eWxlcyAqL1xuLnJlcG9ydC1kZXRhaWxzLXRhYmxlIHRoLFxuLnJlcG9ydC1kZXRhaWxzLXRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgZ3JheSBib3JkZXIgZm9yIGNlbGxzICovXG4gIHBhZGRpbmc6IDE4cHg7IC8qIFNwYWNlIGluc2lkZSBjZWxscyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBMZWZ0LWFsaWduIHRleHQgKi9cbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLyogSGVhZGVyIFN0eWxlcyAqL1xuLnJlcG9ydC1kZXRhaWxzLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgLyogTGlnaHQgZ3JheSBmb3IgaGVhZGVyICovXG4gIGNvbG9yOiAjMzMzOyAvKiBEYXJrZXIgdGV4dCBmb3IgaGVhZGVycyAqL1xufVxuXG4vKiBBbHRlcm5hdGluZyBSb3cgQ29sb3JzICovXG4ucmVwb3J0LWRldGFpbHMtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogTGlnaHQgZ3JheSBmb3IgZXZlbiByb3dzICovXG59XG5cbi8qIEhvdmVyIEVmZmVjdCAqL1xuLnJlcG9ydC1kZXRhaWxzLXRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgLyogRGFya2VyIGdyYXkgb24gaG92ZXIgKi9cbn1cblxuLyogSW1hZ2UgU3R5bGVzICovXG4ucmVwb3J0LWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7IC8qIEZpeGVkIHdpZHRoIGZvciBpbWFnZXMgKi9cbiAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGltYWdlcyAqL1xufVxuXG4vKiBDb250cm9scyBTdHlsZXMgKi9cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3BhY2UgYmV0d2VlbiBjb250cm9scyAqL1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyAvKiBTcGFjZSBiZWxvdyBjb250cm9scyAqL1xufVxuXG4uY29udHJvbHMgbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGFmdGVyIHRoZSBsYWJlbCAqL1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogNXB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgaW5wdXQgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGlucHV0ICovXG4gIHdpZHRoOiAyMDBweDsgLyogRml4ZWQgd2lkdGggZm9yIHRoZSBzZWFyY2ggaW5wdXQgKi9cbn1cblxuLyogUGFnaW5hdGlvbiBTdHlsZXMgKi9cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7IC8qIFNwYWNlIGFib3ZlIHBhZ2luYXRpb24gKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBwYWdpbmF0aW9uIGNvbnRyb2xzICovXG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIHZlcnRpY2FsbHkgKi9cbn1cblxuLnByZXYtbmV4dC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xuICBiYWNrZ3JvdW5kOiBub25lOyAvKiBSZW1vdmUgYmFja2dyb3VuZCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogRm9udCBzaXplIGZvciBidXR0b25zICovXG4gIGNvbG9yOiAjMDA3YmZmOyAvKiBQcmltYXJ5IGNvbG9yICovXG4gIG1hcmdpbjogMCAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGJ1dHRvbnMgKi9cbn1cblxuLnByZXYtbmV4dC1idXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogI2NjYzsgLyogR3JheSBjb2xvciBmb3IgZGlzYWJsZWQgYnV0dG9ucyAqL1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBOb3QtYWxsb3dlZCBjdXJzb3IgKi9cbn1cblxuLnBhZ2UtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgZGVmYXVsdCBib3JkZXIgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLyogUHJpbWFyeSBjb2xvciAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgKi9cbiAgcGFkZGluZzogOHB4IDEycHg7IC8qIFNwYWNlIGluc2lkZSBidXR0b25zICovXG4gIG1hcmdpbjogMCA1cHg7IC8qIFNwYWNlIGJldHdlZW4gcGFnZSBidXR0b25zICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbn1cblxuLnBhZ2UtYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIERhcmtlciBzaGFkZSBmb3IgYWN0aXZlIGJ1dHRvbiAqL1xufVxuXG4ucGFnZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL1JlcG9ydHNQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhLEVBQUUsaUNBQWlDO0VBQ2hELHlCQUF5QixFQUFFLGtDQUFrQztFQUM3RCxpQkFBaUIsRUFBRSwyQ0FBMkM7RUFDOUQsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVcsRUFBRSw2QkFBNkI7RUFDMUMseUJBQXlCLEVBQUUsOEJBQThCO0VBQ3pELGdCQUFnQixFQUFFLDBCQUEwQjtBQUM5Qzs7QUFFQSwyQkFBMkI7QUFDM0I7O0VBRUUsc0JBQXNCLEVBQUUsZ0NBQWdDO0VBQ3hELGFBQWEsRUFBRSx1QkFBdUI7RUFDdEMsZ0JBQWdCLEVBQUUsb0JBQW9CO0VBQ3RDLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QixFQUFFLDBCQUEwQjtFQUNyRCxXQUFXLEVBQUUsNEJBQTRCO0FBQzNDOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHlCQUF5QixFQUFFLDZCQUE2QjtBQUMxRDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxzQkFBc0IsRUFBRSx5QkFBeUI7QUFDbkQ7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVyxFQUFFLDJCQUEyQjtFQUN4QyxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLGtCQUFrQixFQUFFLCtCQUErQjtBQUNyRDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFFLDJCQUEyQjtFQUMzRCxtQkFBbUIsRUFBRSx5QkFBeUI7QUFDaEQ7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSwwQkFBMEI7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZLEVBQUUsNkJBQTZCO0VBQzNDLHNCQUFzQixFQUFFLHNCQUFzQjtFQUM5QyxrQkFBa0IsRUFBRSw4QkFBOEI7RUFDbEQsWUFBWSxFQUFFLHFDQUFxQztBQUNyRDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxnQkFBZ0IsRUFBRSwyQkFBMkI7RUFDN0MsYUFBYTtFQUNiLHVCQUF1QixFQUFFLCtCQUErQjtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBRSw0QkFBNEI7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLGdCQUFnQixFQUFFLHNCQUFzQjtFQUN4QyxlQUFlLEVBQUUsNEJBQTRCO0VBQzdDLGVBQWUsRUFBRSwwQkFBMEI7RUFDM0MsY0FBYyxFQUFFLGtCQUFrQjtFQUNsQyxjQUFjLEVBQUUsMEJBQTBCO0FBQzVDOztBQUVBO0VBQ0UsV0FBVyxFQUFFLG9DQUFvQztFQUNqRCxtQkFBbUIsRUFBRSx1QkFBdUI7QUFDOUM7O0FBRUE7RUFDRSxZQUFZLEVBQUUsMEJBQTBCO0VBQ3hDLHlCQUF5QixFQUFFLGtCQUFrQjtFQUM3QyxZQUFZLEVBQUUsZUFBZTtFQUM3QixpQkFBaUIsRUFBRSx5QkFBeUI7RUFDNUMsYUFBYSxFQUFFLCtCQUErQjtFQUM5QyxlQUFlLEVBQUUsNEJBQTRCO0VBQzdDLGtCQUFrQixFQUFFLG9CQUFvQjtBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLG1DQUFtQztBQUNoRTs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLDBCQUEwQjtBQUN2RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFBhZ2UgU3R5bGVzICovXFxuLnJlcG9ydC1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4OyAvKiBQYWRkaW5nIGFyb3VuZCB0aGUgY29udGFpbmVyICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBMaWdodCBiYWNrZ3JvdW5kIGZvciB0aGUgcGFnZSAqL1xcbiAgbWluLWhlaWdodDogMTAwdmg7IC8qIEVuc3VyZSB0aGUgY29udGFpbmVyIHRha2VzIGZ1bGwgaGVpZ2h0ICovXFxuICBtYXJnaW4tbGVmdDogMzUwcHg7XFxufVxcblxcbi8qIFRhYmxlIFN0eWxlcyAqL1xcbi5yZXBvcnQtZGV0YWlscy10YWJsZSB7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgdGhlIHRhYmxlICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIGNlbGxzICovXFxuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBTcGFjZSBhYm92ZSB0aGUgdGFibGUgKi9cXG59XFxuXFxuLyogSGVhZGVyIGFuZCBDZWxsIFN0eWxlcyAqL1xcbi5yZXBvcnQtZGV0YWlscy10YWJsZSB0aCxcXG4ucmVwb3J0LWRldGFpbHMtdGFibGUgdGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgZ3JheSBib3JkZXIgZm9yIGNlbGxzICovXFxuICBwYWRkaW5nOiAxOHB4OyAvKiBTcGFjZSBpbnNpZGUgY2VsbHMgKi9cXG4gIHRleHQtYWxpZ246IGxlZnQ7IC8qIExlZnQtYWxpZ24gdGV4dCAqL1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG4ucmVwb3J0LWRldGFpbHMtdGFibGUgdGgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgLyogTGlnaHQgZ3JheSBmb3IgaGVhZGVyICovXFxuICBjb2xvcjogIzMzMzsgLyogRGFya2VyIHRleHQgZm9yIGhlYWRlcnMgKi9cXG59XFxuXFxuLyogQWx0ZXJuYXRpbmcgUm93IENvbG9ycyAqL1xcbi5yZXBvcnQtZGV0YWlscy10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogTGlnaHQgZ3JheSBmb3IgZXZlbiByb3dzICovXFxufVxcblxcbi8qIEhvdmVyIEVmZmVjdCAqL1xcbi5yZXBvcnQtZGV0YWlscy10YWJsZSB0cjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiBEYXJrZXIgZ3JheSBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBJbWFnZSBTdHlsZXMgKi9cXG4ucmVwb3J0LWltYWdlIHtcXG4gIHdpZHRoOiA1MHB4OyAvKiBGaXhlZCB3aWR0aCBmb3IgaW1hZ2VzICovXFxuICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGltYWdlcyAqL1xcbn1cXG5cXG4vKiBDb250cm9scyBTdHlsZXMgKi9cXG4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIGJldHdlZW4gY29udHJvbHMgKi9cXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIFNwYWNlIGJlbG93IGNvbnRyb2xzICovXFxufVxcblxcbi5jb250cm9scyBsYWJlbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGFmdGVyIHRoZSBsYWJlbCAqL1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGlucHV0ICovXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBMaWdodCBncmF5IGJvcmRlciAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGlucHV0ICovXFxuICB3aWR0aDogMjAwcHg7IC8qIEZpeGVkIHdpZHRoIGZvciB0aGUgc2VhcmNoIGlucHV0ICovXFxufVxcblxcbi8qIFBhZ2luYXRpb24gU3R5bGVzICovXFxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IC8qIFNwYWNlIGFib3ZlIHBhZ2luYXRpb24gKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHBhZ2luYXRpb24gY29udHJvbHMgKi9cXG59XFxuXFxuLnBhZ2luYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxufVxcblxcbi5wcmV2LW5leHQtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYm9yZGVyICovXFxuICBiYWNrZ3JvdW5kOiBub25lOyAvKiBSZW1vdmUgYmFja2dyb3VuZCAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyIGN1cnNvciBvbiBob3ZlciAqL1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBGb250IHNpemUgZm9yIGJ1dHRvbnMgKi9cXG4gIGNvbG9yOiAjMDA3YmZmOyAvKiBQcmltYXJ5IGNvbG9yICovXFxuICBtYXJnaW46IDAgMTBweDsgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovXFxufVxcblxcbi5wcmV2LW5leHQtYnV0dG9uOmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjY2NjOyAvKiBHcmF5IGNvbG9yIGZvciBkaXNhYmxlZCBidXR0b25zICovXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBOb3QtYWxsb3dlZCBjdXJzb3IgKi9cXG59XFxuXFxuLnBhZ2UtYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYm9yZGVyICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBQcmltYXJ5IGNvbG9yICovXFxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgKi9cXG4gIHBhZGRpbmc6IDhweCAxMnB4OyAvKiBTcGFjZSBpbnNpZGUgYnV0dG9ucyAqL1xcbiAgbWFyZ2luOiAwIDVweDsgLyogU3BhY2UgYmV0d2VlbiBwYWdlIGJ1dHRvbnMgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxufVxcblxcbi5wYWdlLWJ1dHRvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIGZvciBhY3RpdmUgYnV0dG9uICovXFxufVxcblxcbi5wYWdlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb24gaG92ZXIgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9SZXBvcnRzUGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlcG9ydHNQYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJGYVNvcnQiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJTaWRlYmFyIiwiUmVwb3J0c1BhZ2UiLCJyZXBvcnRzIiwic2V0UmVwb3J0cyIsInJlc2N1ZWRBbmltYWxzIiwic2V0UmVzY3VlZEFuaW1hbHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJpc1JlY2VudCIsInNldElzUmVjZW50IiwiY3VycmVudFBhZ2VSZXBvcnRzIiwic2V0Q3VycmVudFBhZ2VSZXBvcnRzIiwiaXRlbXNQZXJQYWdlUmVwb3J0cyIsInNldEl0ZW1zUGVyUGFnZVJlcG9ydHMiLCJjdXJyZW50UGFnZVJlc2N1ZWQiLCJzZXRDdXJyZW50UGFnZVJlc2N1ZWQiLCJpdGVtc1BlclBhZ2VSZXNjdWVkIiwic2V0SXRlbXNQZXJQYWdlUmVzY3VlZCIsImZldGNoUmVwb3J0RGV0YWlscyIsInJlcG9ydFVybCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJyZXBvcnRSZXNwb25zZSIsImdldCIsImRhdGEiLCJyZXNjdWVkVXJsIiwicmVzY3VlZFJlc3BvbnNlIiwiZXJyIiwiY29uc29sZSIsInRvZ2dsZVJlcG9ydE9yZGVyIiwic29ydGVkUmVwb3J0cyIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJkYXRlQiIsInRvdGFsUGFnZXNSZXBvcnRzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJ0b3RhbFBhZ2VzUmVzY3VlZCIsImN1cnJlbnRSZXBvcnRzIiwic2xpY2UiLCJjdXJyZW50UmVzY3VlZEFuaW1hbHMiLCJoYW5kbGVOZXh0UmVwb3J0cyIsInByZXYiLCJoYW5kbGVQcmV2aW91c1JlcG9ydHMiLCJoYW5kbGVOZXh0UmVzY3VlZCIsImhhbmRsZVByZXZpb3VzUmVzY3VlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY29sU3BhbiIsIm1hcCIsInJlcG9ydCIsImtleSIsImlkIiwicmVwb3J0ZXJfbmFtZSIsImFuaW1hbF90eXBlIiwiYW5pbWFsX2RldGFpbHMiLCJjcnVlbHR5X2RldGFpbHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhY2NpZGVudF9kYXRlIiwic3RhdHVzIiwiaW1hZ2VfdXJsIiwic3JjIiwiYWx0IiwiZGlzYWJsZWQiLCJyZXNjdWVkIiwicmVzY3VlZF9yZXBvcnRfaWQiLCJmdWxsX25hbWUiLCJudW1iZXJfb2ZfYW5pbWFscyIsInJlc2N1ZV9kYXRlIiwiYW5pbWFsX2NvbmRpdGlvbiIsInBob25lX251bWJlciJdLCJzb3VyY2VSb290IjoiIn0=