"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_DashboardPage_js"],{

/***/ "./src/components/DashboardPage.js":
/*!*****************************************!*\
  !*** ./src/components/DashboardPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _style_DashboardPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/DashboardPage.css */ "./src/style/DashboardPage.css");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");









chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend, chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3__["default"]);
const DashboardPage = () => {
  const [reports, setReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [adoptableAnimals, setAdoptableAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [totalReports, setTotalReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  // Pagination states
  const [currentPageReports, setCurrentPageReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [currentPageAnimals, setCurrentPageAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const itemsPerPage = 5;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchDashboardData = async () => {
      try {
        const url = `${process.env.REACT_APP_BASE_URL}/api/admin/dashboard`;
        const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url);
        if (response.data && response.data.reports && response.data.adoptableAnimals) {
          setReports(response.data.reports);
          setAdoptableAnimals(response.data.adoptableAnimals);
          const reportCounts = getCountsByMonth(response.data.reports, 'created_at');
          const rescuedCounts = getCountsByMonth(response.data.rescuedAnimals, 'rescued_date');
          setChartData(generateChartData(reportCounts, rescuedCounts));
          setTotalReports(response.data.reports.length);
        } else {
          setError('Invalid response structure');
        }
      } catch (err) {
        console.error('Fetch error:', err.response ? err.response.data : err);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);
  const getCountsByMonth = (data, dateKey) => {
    const counts = new Array(12).fill(0);
    data.forEach(item => {
      const date = new Date(item[dateKey]);
      const month = date.getMonth();
      counts[month]++;
    });
    return counts;
  };
  const generateChartData = (reportCounts, rescuedCounts) => {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Reports',
        data: reportCounts,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true
      }, {
        label: 'Rescued Animals',
        data: rescuedCounts,
        borderColor: 'rgba(138, 126, 190, 1)',
        backgroundColor: 'rgba(138, 126, 190, 0.4)',
        fill: true
      }]
    };
  };
  const generateDoughnutData = () => {
    return {
      labels: ['Reported Animals', 'Remaining Capacity'],
      datasets: [{
        data: [totalReports, 1000 - totalReports],
        backgroundColor: ['rgba(138, 126, 190, 1)', 'rgba(200, 200, 200, 0.5)'],
        borderColor: ['rgba(138, 126, 190, 1)', 'rgba(200, 200, 200, 0.5)'],
        borderWidth: 1
      }]
    };
  };
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      datalabels: {
        display: true,
        color: 'rgba(138, 126, 190, 1)',
        formatter: (value, context) => {
          if (context.dataIndex === 0) {
            return `${totalReports}`;
          }
          return '';
        },
        font: {
          weight: 'bold',
          size: '30',
          color: 'rgba(138, 126, 190, 1)'
        },
        anchor: 'center',
        align: 'center'
      }
    },
    cutout: '75%',
    rotation: 240,
    circumference: 240
  };

  // Pagination logic for reports
  const indexOfLastReport = currentPageReports * itemsPerPage;
  const indexOfFirstReport = indexOfLastReport - itemsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);
  const totalPagesReports = Math.ceil(reports.length / itemsPerPage);
  const handleNextReports = () => {
    if (currentPageReports < totalPagesReports) {
      setCurrentPageReports(currentPageReports + 1);
    }
  };
  const handlePreviousReports = () => {
    if (currentPageReports > 1) {
      setCurrentPageReports(currentPageReports - 1);
    }
  };

  // Pagination logic for adoptable animals
  const indexOfLastAnimal = currentPageAnimals * itemsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - itemsPerPage;
  const currentAnimals = adoptableAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);
  const totalPagesAnimals = Math.ceil(adoptableAnimals.length / itemsPerPage);
  const handleNextAnimals = () => {
    if (currentPageAnimals < totalPagesAnimals) {
      setCurrentPageAnimals(currentPageAnimals + 1);
    }
  };
  const handlePreviousAnimals = () => {
    if (currentPageAnimals > 1) {
      setCurrentPageAnimals(currentPageAnimals - 1);
    }
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading data...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dashboard-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Admin Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "dashboard-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Reports"), currentReports.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No reports available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "dashboard-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Animal Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Cruelty Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Date Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, currentReports.map(report => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: report.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.animal_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.animal_details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.cruelty_details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, new Date(report.created_at).toLocaleDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, report.status))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePreviousReports,
    disabled: currentPageReports === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronLeft
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPageReports, " of ", totalPagesReports), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNextReports,
    disabled: currentPageReports === totalPagesReports
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronRight
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "dashboard-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Adoptable Animals"), currentAnimals.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No adoptable animals available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "dashboard-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Breed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Personality"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Health Status"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, currentAnimals.map(animal => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: animal.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.breed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.personality), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.health_status))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePreviousAnimals,
    disabled: currentPageAnimals === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronLeft
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPageAnimals, " of ", totalPagesAnimals), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNextAnimals,
    disabled: currentPageAnimals === totalPagesAnimals
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronRight
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "chart-position"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "chart-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Reports vs Rescued Animals"), chartData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__.Line, {
    data: chartData
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No data available for the chart.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "doughnut-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Total Reported Animals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "doughnut-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__.Doughnut, {
    data: generateDoughnutData(),
    options: doughnutOptions
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/DashboardPage.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/DashboardPage.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Dashboard container: main flex layout */
body {
  margin: 0;
  font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */
  padding: 0;
  height: 100vh; /* Make body full height */
  background-color: #e7e7e7; /* Your desired background color */
}

.dashboard-container {
  display: flex;
  min-height: 50vh;
  margin-left: 450px;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: #8A7EBE; /* Purple background */
  color: white; /* White text */
  height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
}
  .sidebar h1 {
    font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */
    font-weight: 700;
    font-size: 60px;
    margin-bottom: 20px;
  }

.sidebar h2 {
  font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
}

.sidebar ul li a:hover {
  background-color: #7468A3; /* Hover effect */
}

/* Main content next to the sidebar */
.main-content {
  margin-left: 0px; /* Space for sidebar */
  padding: 10px;
  flex-grow: 1;
  background-color: transparent; /* Make sure main content is transparent to show body background */
  padding-top: 60px; /* Add extra padding to push content down */
  padding-left: 0%;
  text-indent: 30px; /* Adjust the value as needed */
}

/* Section styling */
.dashboard-section {
  background-color: white; 
  border-radius: 10px; 
  padding: 20px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  margin-bottom: 20px; 
  margin-left: -20px; 
  width: 80%;
}

.dashboard-section h2{
  color: #181111;
}



.main-content h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 44px;
  margin-bottom: 20px;
  color:#000000;
}
/* Table container to allow scrolling if needed */

.dashboard-table-container {
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  max-width: 100%; /* Set to max width of the parent */
}
.dashboard-table {
  width: 100%; /* Keep it 100% of the container */
  min-width: 800px; /* Set a minimum width to ensure consistency */
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
}
.dashboard-table th, .dashboard-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
}
.dashboard-table th {
  background-color: #f2f2f2; 
  color: #333;
  font-weight: bold;
}
.dashboard-table th:nth-child(1),
.dashboard-table td:nth-child(1) {
  width: 150px; 
}
.dashboard-table th:nth-child(2),
.dashboard-table td:nth-child(2) {
  width: 250px;
}


.dashboard-table th:nth-child(3),
.dashboard-table td:nth-child(3) {
  width: 350px; 
}
.dashboard-table tr:nth-child(even) {
  background-color: #f9f9f9; /* Zebra striping for even rows */
}

.dashboard-table tr:hover {
  background-color: #f1f1f1; 
}

.table-actions {
  display: flex;
  gap: 10px;
}

.table-action-btn {
  background-color: #6F64A9; 
  color: white;
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.table-action-btn:hover {
  background-color: #8A7EBE;
}

.table-action-btn.edit {
  background-color: #4CAF50; /* Green for edit */
}

.table-action-btn.delete {
  background-color: #F44336; /* Red for delete */
}
.chart-section
{
  width: 500px;
  margin-top: 150px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  font-size: small;
  font-family:  Arial, sans-serif; /* Fallback to Arial and sans-serif */
}
.chart-section h2{
  color:#181111;
}
.doughnut-section h2{
  color: #181111;
  margin-right:20px ;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

}
.doughnut-container{
  align-items: center;
  padding-left: 10px;
  width: 500px;
  margin-top: 20px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-left: 10px;
}
.pagination {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.pagination button {
  border: none;
  background-color: rgba(138, 126, 190, 1); /* Dark purple for button */
  color: white; /* Text color */
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.pagination button:hover:not(:disabled) {
  background-color: rgba(138, 126, 190, 0.8); /* Lighter purple on hover */
}

.pagination button:disabled {
  background-color: #ccc; /* Gray color when disabled */
  color: #666; /* Darker gray text when disabled */
  cursor: not-allowed;
}

.pagination span {
  margin: 0 10px;
  color: rgba(138, 126, 190, 1); /* Color to match buttons */
  font-weight: bold; /* Bold for better visibility */
}
`, "",{"version":3,"sources":["webpack://./src/style/DashboardPage.css"],"names":[],"mappings":"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","sourcesContent":["/* Dashboard container: main flex layout */\nbody {\n  margin: 0;\n  font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */\n  padding: 0;\n  height: 100vh; /* Make body full height */\n  background-color: #e7e7e7; /* Your desired background color */\n}\n\n.dashboard-container {\n  display: flex;\n  min-height: 50vh;\n  margin-left: 450px;\n}\n\n/* Sidebar */\n.sidebar {\n  width: 220px;\n  background-color: #8A7EBE; /* Purple background */\n  color: white; /* White text */\n  height: 100vh;\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n  .sidebar h1 {\n    font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */\n    font-weight: 700;\n    font-size: 60px;\n    margin-bottom: 20px;\n  }\n\n.sidebar h2 {\n  font-family: 'Century Gothic', Arial, sans-serif; /* Fallback to Arial and sans-serif */\n  font-weight: 700;\n  font-size: 60px;\n  margin-bottom: 20px;\n}\n\n.sidebar ul {\n  list-style-type: none;\n  padding: 0;\n}\n\n.sidebar ul li {\n  margin: 15px 0;\n}\n\n.sidebar ul li a {\n  text-decoration: none;\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  font-size: 15px;\n  display: block;\n  padding: 10px 15px;\n  border-radius: 8px;\n}\n\n.sidebar ul li a:hover {\n  background-color: #7468A3; /* Hover effect */\n}\n\n/* Main content next to the sidebar */\n.main-content {\n  margin-left: 0px; /* Space for sidebar */\n  padding: 10px;\n  flex-grow: 1;\n  background-color: transparent; /* Make sure main content is transparent to show body background */\n  padding-top: 60px; /* Add extra padding to push content down */\n  padding-left: 0%;\n  text-indent: 30px; /* Adjust the value as needed */\n}\n\n/* Section styling */\n.dashboard-section {\n  background-color: white; \n  border-radius: 10px; \n  padding: 20px; \n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); \n  margin-bottom: 20px; \n  margin-left: -20px; \n  width: 80%;\n}\n\n.dashboard-section h2{\n  color: #181111;\n}\n\n\n\n.main-content h1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  font-size: 44px;\n  margin-bottom: 20px;\n  color:#000000;\n}\n/* Table container to allow scrolling if needed */\n\n.dashboard-table-container {\n  overflow-x: auto; /* Allow horizontal scrolling if needed */\n  max-width: 100%; /* Set to max width of the parent */\n}\n.dashboard-table {\n  width: 100%; /* Keep it 100% of the container */\n  min-width: 800px; /* Set a minimum width to ensure consistency */\n  border-collapse: collapse;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.dashboard-table th, .dashboard-table td {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n}\n.dashboard-table th {\n  background-color: #f2f2f2; \n  color: #333;\n  font-weight: bold;\n}\n.dashboard-table th:nth-child(1),\n.dashboard-table td:nth-child(1) {\n  width: 150px; \n}\n.dashboard-table th:nth-child(2),\n.dashboard-table td:nth-child(2) {\n  width: 250px;\n}\n\n\n.dashboard-table th:nth-child(3),\n.dashboard-table td:nth-child(3) {\n  width: 350px; \n}\n.dashboard-table tr:nth-child(even) {\n  background-color: #f9f9f9; /* Zebra striping for even rows */\n}\n\n.dashboard-table tr:hover {\n  background-color: #f1f1f1; \n}\n\n.table-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.table-action-btn {\n  background-color: #6F64A9; \n  color: white;\n  padding: 8px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.table-action-btn:hover {\n  background-color: #8A7EBE;\n}\n\n.table-action-btn.edit {\n  background-color: #4CAF50; /* Green for edit */\n}\n\n.table-action-btn.delete {\n  background-color: #F44336; /* Red for delete */\n}\n.chart-section\n{\n  width: 500px;\n  margin-top: 150px;\n  padding: 30px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-right: 10px;\n  font-size: small;\n  font-family:  Arial, sans-serif; /* Fallback to Arial and sans-serif */\n}\n.chart-section h2{\n  color:#181111;\n}\n.doughnut-section h2{\n  color: #181111;\n  margin-right:20px ;\n  font-size: 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n\n}\n.doughnut-container{\n  align-items: center;\n  padding-left: 10px;\n  width: 500px;\n  margin-top: 20px;\n  padding: 30px;\n  background-color: #ffffff;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  margin-left: 10px;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.pagination button {\n  border: none;\n  background-color: rgba(138, 126, 190, 1); /* Dark purple for button */\n  color: white; /* Text color */\n  padding: 5px 10px;\n  margin: 0 5px;\n  cursor: pointer;\n  border-radius: 5px; /* Rounded corners */\n  transition: background-color 0.3s; /* Smooth transition for hover effect */\n}\n\n.pagination button:hover:not(:disabled) {\n  background-color: rgba(138, 126, 190, 0.8); /* Lighter purple on hover */\n}\n\n.pagination button:disabled {\n  background-color: #ccc; /* Gray color when disabled */\n  color: #666; /* Darker gray text when disabled */\n  cursor: not-allowed;\n}\n\n.pagination span {\n  margin: 0 10px;\n  color: rgba(138, 126, 190, 1); /* Color to match buttons */\n  font-weight: bold; /* Bold for better visibility */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/DashboardPage.css":
/*!*************************************!*\
  !*** ./src/style/DashboardPage.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DashboardPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./DashboardPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/DashboardPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DashboardPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DashboardPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DashboardPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DashboardPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfRGFzaGJvYXJkUGFnZV9qcy42MTI5NjBjOGYxNzdhM2E1ZGI1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUNVO0FBQ0o7QUFDaUI7QUFDc0Y7QUFDL0U7QUFDUztBQUNpQjtBQUVsRlEsMkNBQU8sQ0FBQ2EsUUFBUSxDQUFDWixtREFBYSxFQUFFQyxpREFBVyxFQUFFQyxrREFBWSxFQUFFQyxpREFBVyxFQUFFQyxnREFBVSxFQUFFQywyQ0FBSyxFQUFFQyw2Q0FBTyxFQUFFQyw0Q0FBTSxFQUFFQyxpRUFBZSxDQUFDO0FBRTVILE1BQU1LLGFBQWEsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR3RCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFDLE1BQU0sQ0FBQ3VCLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHeEIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDNUQsTUFBTSxDQUFDeUIsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRzFCLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hELE1BQU0sQ0FBQzJCLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUc1QiwrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUM1QyxNQUFNLENBQUM2QixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHOUIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDdEMsTUFBTSxDQUFDK0IsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR2hDLCtDQUFRLENBQUMsQ0FBQyxDQUFDOztFQUVuRDtFQUNBLE1BQU0sQ0FBQ2lDLGtCQUFrQixFQUFFQyxxQkFBcUIsQ0FBQyxHQUFHbEMsK0NBQVEsQ0FBQyxDQUFDLENBQUM7RUFDL0QsTUFBTSxDQUFDbUMsa0JBQWtCLEVBQUVDLHFCQUFxQixDQUFDLEdBQUdwQywrQ0FBUSxDQUFDLENBQUMsQ0FBQztFQUMvRCxNQUFNcUMsWUFBWSxHQUFHLENBQUM7RUFFdEJ0QyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNdUMsa0JBQWtCLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO01BQ3JDLElBQUk7UUFDRixNQUFNQyxHQUFHLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGtCQUFrQixzQkFBc0I7UUFDbkUsTUFBTUMsUUFBUSxHQUFHLE1BQU0xQyw2Q0FBSyxDQUFDMkMsR0FBRyxDQUFDTCxHQUFHLENBQUM7UUFFckMsSUFBSUksUUFBUSxDQUFDRSxJQUFJLElBQUlGLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDeEIsT0FBTyxJQUFJc0IsUUFBUSxDQUFDRSxJQUFJLENBQUN0QixnQkFBZ0IsRUFBRTtVQUM1RUQsVUFBVSxDQUFDcUIsUUFBUSxDQUFDRSxJQUFJLENBQUN4QixPQUFPLENBQUM7VUFDakNHLG1CQUFtQixDQUFDbUIsUUFBUSxDQUFDRSxJQUFJLENBQUN0QixnQkFBZ0IsQ0FBQztVQUNuRCxNQUFNdUIsWUFBWSxHQUFHQyxnQkFBZ0IsQ0FBQ0osUUFBUSxDQUFDRSxJQUFJLENBQUN4QixPQUFPLEVBQUUsWUFBWSxDQUFDO1VBQzFFLE1BQU0yQixhQUFhLEdBQUdELGdCQUFnQixDQUFDSixRQUFRLENBQUNFLElBQUksQ0FBQ0ksY0FBYyxFQUFFLGNBQWMsQ0FBQztVQUNwRnZCLFlBQVksQ0FBQ3dCLGlCQUFpQixDQUFDSixZQUFZLEVBQUVFLGFBQWEsQ0FBQyxDQUFDO1VBQzVEaEIsZUFBZSxDQUFDVyxRQUFRLENBQUNFLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQzhCLE1BQU0sQ0FBQztRQUMvQyxDQUFDLE1BQU07VUFDTHJCLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQztRQUN4QztNQUNGLENBQUMsQ0FBQyxPQUFPc0IsR0FBRyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUV1QixHQUFHLENBQUNULFFBQVEsR0FBR1MsR0FBRyxDQUFDVCxRQUFRLENBQUNFLElBQUksR0FBR08sR0FBRyxDQUFDO1FBQ3JFdEIsUUFBUSxDQUFDLHFCQUFxQixDQUFDO01BQ2pDLENBQUMsU0FBUztRQUNSRixVQUFVLENBQUMsS0FBSyxDQUFDO01BQ25CO0lBQ0YsQ0FBQztJQUVEVSxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3RCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNUyxnQkFBZ0IsR0FBR0EsQ0FBQ0YsSUFBSSxFQUFFUyxPQUFPLEtBQUs7SUFDMUMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQ1osSUFBSSxDQUFDYSxPQUFPLENBQUNDLElBQUksSUFBSTtNQUNuQixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDRixJQUFJLENBQUNMLE9BQU8sQ0FBQyxDQUFDO01BQ3BDLE1BQU1RLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQztNQUM3QlIsTUFBTSxDQUFDTyxLQUFLLENBQUMsRUFBRTtJQUNqQixDQUFDLENBQUM7SUFDRixPQUFPUCxNQUFNO0VBQ2YsQ0FBQztFQUVELE1BQU1MLGlCQUFpQixHQUFHQSxDQUFDSixZQUFZLEVBQUVFLGFBQWEsS0FBSztJQUN6RCxPQUFPO01BQ0xnQixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztNQUM1RkMsUUFBUSxFQUFFLENBQ1I7UUFDRUMsS0FBSyxFQUFFLFNBQVM7UUFDaEJyQixJQUFJLEVBQUVDLFlBQVk7UUFDbEJxQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDQyxlQUFlLEVBQUUseUJBQXlCO1FBQzFDWCxJQUFJLEVBQUU7TUFDUixDQUFDLEVBQ0Q7UUFDRVMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QnJCLElBQUksRUFBRUcsYUFBYTtRQUNuQm1CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckNDLGVBQWUsRUFBRSwwQkFBMEI7UUFDM0NYLElBQUksRUFBRTtNQUNSLENBQUM7SUFFTCxDQUFDO0VBQ0gsQ0FBQztFQUVELE1BQU1ZLG9CQUFvQixHQUFHQSxDQUFBLEtBQU07SUFDakMsT0FBTztNQUNMTCxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztNQUNsREMsUUFBUSxFQUFFLENBQ1I7UUFDRXBCLElBQUksRUFBRSxDQUFDZCxZQUFZLEVBQUUsSUFBSSxHQUFHQSxZQUFZLENBQUM7UUFDekNxQyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQztRQUN2RUQsV0FBVyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsMEJBQTBCLENBQUM7UUFDbkVHLFdBQVcsRUFBRTtNQUNmLENBQUM7SUFFTCxDQUFDO0VBQ0gsQ0FBQztFQUVELE1BQU1DLGVBQWUsR0FBRztJQUN0QkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLG1CQUFtQixFQUFFLEtBQUs7SUFDMUJDLE9BQU8sRUFBRTtNQUNQQyxNQUFNLEVBQUU7UUFDTkMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFO01BQ1gsQ0FBQztNQUNEQyxVQUFVLEVBQUU7UUFDVkgsT0FBTyxFQUFFLElBQUk7UUFDYkksS0FBSyxFQUFFLHdCQUF3QjtRQUMvQkMsU0FBUyxFQUFFQSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sS0FBSztVQUM3QixJQUFJQSxPQUFPLENBQUNDLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxHQUFHckQsWUFBWSxFQUFFO1VBQzFCO1VBQ0EsT0FBTyxFQUFFO1FBQ1gsQ0FBQztRQUNEc0QsSUFBSSxFQUFFO1VBQ0pDLE1BQU0sRUFBRSxNQUFNO1VBQ2RDLElBQUksRUFBRSxJQUFJO1VBQ1ZQLEtBQUssRUFBRTtRQUNULENBQUM7UUFDRFEsTUFBTSxFQUFFLFFBQVE7UUFDaEJDLEtBQUssRUFBRTtNQUNUO0lBQ0YsQ0FBQztJQUNEQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxRQUFRLEVBQUUsR0FBRztJQUNiQyxhQUFhLEVBQUU7RUFDakIsQ0FBQzs7RUFFRDtFQUNBLE1BQU1DLGlCQUFpQixHQUFHNUQsa0JBQWtCLEdBQUdJLFlBQVk7RUFDM0QsTUFBTXlELGtCQUFrQixHQUFHRCxpQkFBaUIsR0FBR3hELFlBQVk7RUFDM0QsTUFBTTBELGNBQWMsR0FBRzFFLE9BQU8sQ0FBQzJFLEtBQUssQ0FBQ0Ysa0JBQWtCLEVBQUVELGlCQUFpQixDQUFDO0VBQzNFLE1BQU1JLGlCQUFpQixHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQzlFLE9BQU8sQ0FBQzhCLE1BQU0sR0FBR2QsWUFBWSxDQUFDO0VBRWxFLE1BQU0rRCxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNO0lBQzlCLElBQUluRSxrQkFBa0IsR0FBR2dFLGlCQUFpQixFQUFFO01BQzFDL0QscUJBQXFCLENBQUNELGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUMvQztFQUNGLENBQUM7RUFFRCxNQUFNb0UscUJBQXFCLEdBQUdBLENBQUEsS0FBTTtJQUNsQyxJQUFJcEUsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO01BQzFCQyxxQkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0lBQy9DO0VBQ0YsQ0FBQzs7RUFFRDtFQUNBLE1BQU1xRSxpQkFBaUIsR0FBR25FLGtCQUFrQixHQUFHRSxZQUFZO0VBQzNELE1BQU1rRSxrQkFBa0IsR0FBR0QsaUJBQWlCLEdBQUdqRSxZQUFZO0VBQzNELE1BQU1tRSxjQUFjLEdBQUdqRixnQkFBZ0IsQ0FBQ3lFLEtBQUssQ0FBQ08sa0JBQWtCLEVBQUVELGlCQUFpQixDQUFDO0VBQ3BGLE1BQU1HLGlCQUFpQixHQUFHUCxJQUFJLENBQUNDLElBQUksQ0FBQzVFLGdCQUFnQixDQUFDNEIsTUFBTSxHQUFHZCxZQUFZLENBQUM7RUFFM0UsTUFBTXFFLGlCQUFpQixHQUFHQSxDQUFBLEtBQU07SUFDOUIsSUFBSXZFLGtCQUFrQixHQUFHc0UsaUJBQWlCLEVBQUU7TUFDMUNyRSxxQkFBcUIsQ0FBQ0Qsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0lBQy9DO0VBQ0YsQ0FBQztFQUVELE1BQU13RSxxQkFBcUIsR0FBR0EsQ0FBQSxLQUFNO0lBQ2xDLElBQUl4RSxrQkFBa0IsR0FBRyxDQUFDLEVBQUU7TUFDMUJDLHFCQUFxQixDQUFDRCxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDL0M7RUFDRixDQUFDO0VBRUQsSUFBSVIsT0FBTyxFQUFFO0lBQ1gsb0JBQU83QiwwREFBQSxZQUFHLGlCQUFrQixDQUFDO0VBQy9CO0VBRUEsSUFBSStCLEtBQUssRUFBRTtJQUNULG9CQUFPL0IsMERBQUEsWUFBSStCLEtBQVMsQ0FBQztFQUN2QjtFQUVBLG9CQUNFL0IsMERBQUE7SUFBSytHLFNBQVMsRUFBQztFQUFxQixnQkFDbEMvRywwREFBQSxDQUFDSSxnREFBTyxNQUFFLENBQUMsZUFDWEosMERBQUE7SUFBSytHLFNBQVMsRUFBQztFQUFjLGdCQUMzQi9HLDBEQUFBLGFBQUksaUJBQW1CLENBQUMsZUFFeEJBLDBEQUFBO0lBQVMrRyxTQUFTLEVBQUM7RUFBbUIsZ0JBQ3BDL0csMERBQUEsYUFBSSxTQUFXLENBQUMsRUFDZmlHLGNBQWMsQ0FBQzVDLE1BQU0sS0FBSyxDQUFDLGdCQUMxQnJELDBEQUFBLFlBQUcsdUJBQXdCLENBQUMsZ0JBRTVCQSwwREFBQTtJQUFPK0csU0FBUyxFQUFDO0VBQWlCLGdCQUNoQy9HLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxJQUFNLENBQUMsZUFDWEEsMERBQUEsYUFBSSxhQUFlLENBQUMsZUFDcEJBLDBEQUFBLGFBQUksU0FBVyxDQUFDLGVBQ2hCQSwwREFBQSxhQUFJLGlCQUFtQixDQUFDLGVBQ3hCQSwwREFBQSxhQUFJLGNBQWdCLENBQUMsZUFDckJBLDBEQUFBLGFBQUksUUFBVSxDQUNaLENBQ0MsQ0FBQyxlQUNSQSwwREFBQSxnQkFDR2lHLGNBQWMsQ0FBQ2UsR0FBRyxDQUFFQyxNQUFNLGlCQUN6QmpILDBEQUFBO0lBQUlrSCxHQUFHLEVBQUVELE1BQU0sQ0FBQ0U7RUFBRyxnQkFDakJuSCwwREFBQSxhQUFLaUgsTUFBTSxDQUFDRSxFQUFPLENBQUMsZUFDcEJuSCwwREFBQSxhQUFLaUgsTUFBTSxDQUFDRyxXQUFnQixDQUFDLGVBQzdCcEgsMERBQUEsYUFBS2lILE1BQU0sQ0FBQ0ksY0FBbUIsQ0FBQyxlQUNoQ3JILDBEQUFBLGFBQUtpSCxNQUFNLENBQUNLLGVBQW9CLENBQUMsZUFDakN0SCwwREFBQSxhQUFLLElBQUkrRCxJQUFJLENBQUNrRCxNQUFNLENBQUNNLFVBQVUsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFNLENBQUMsZUFDM0R4SCwwREFBQSxhQUFLaUgsTUFBTSxDQUFDUSxNQUFXLENBQ3JCLENBQ0wsQ0FDSSxDQUNGLENBQ1IsZUFDRHpILDBEQUFBO0lBQUsrRyxTQUFTLEVBQUM7RUFBWSxnQkFDekIvRywwREFBQTtJQUFRMEgsT0FBTyxFQUFFbkIscUJBQXNCO0lBQUNvQixRQUFRLEVBQUV4RixrQkFBa0IsS0FBSztFQUFFLGdCQUN6RW5DLDBEQUFBLENBQUNrQiwyRUFBZTtJQUFDMEcsSUFBSSxFQUFFekcsNEVBQWFBO0VBQUMsQ0FBRSxDQUNqQyxDQUFDLGVBQ1RuQiwwREFBQSxlQUFPbUMsa0JBQWtCLEVBQUMsTUFBSSxFQUFDZ0UsaUJBQXdCLENBQUMsZUFDeERuRywwREFBQTtJQUFRMEgsT0FBTyxFQUFFcEIsaUJBQWtCO0lBQUNxQixRQUFRLEVBQUV4RixrQkFBa0IsS0FBS2dFO0VBQWtCLGdCQUNyRm5HLDBEQUFBLENBQUNrQiwyRUFBZTtJQUFDMEcsSUFBSSxFQUFFeEcsNkVBQWNBO0VBQUMsQ0FBRSxDQUNsQyxDQUNMLENBQ0UsQ0FBQyxlQUVWcEIsMERBQUE7SUFBUytHLFNBQVMsRUFBQztFQUFtQixnQkFDcEMvRywwREFBQSxhQUFJLG1CQUFxQixDQUFDLEVBQ3pCMEcsY0FBYyxDQUFDckQsTUFBTSxLQUFLLENBQUMsZ0JBQzFCckQsMERBQUEsWUFBRyxpQ0FBa0MsQ0FBQyxnQkFFdENBLDBEQUFBO0lBQU8rRyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDL0csMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLElBQU0sQ0FBQyxlQUNYQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLEtBQU8sQ0FBQyxlQUNaQSwwREFBQSxhQUFJLGFBQWUsQ0FBQyxlQUNwQkEsMERBQUEsYUFBSSxlQUFpQixDQUNuQixDQUNDLENBQUMsZUFDUkEsMERBQUEsZ0JBQ0cwRyxjQUFjLENBQUNNLEdBQUcsQ0FBRWEsTUFBTSxpQkFDekI3SCwwREFBQTtJQUFJa0gsR0FBRyxFQUFFVyxNQUFNLENBQUNWO0VBQUcsZ0JBQ2pCbkgsMERBQUEsYUFBSzZILE1BQU0sQ0FBQ1YsRUFBTyxDQUFDLGVBQ3BCbkgsMERBQUEsYUFBSzZILE1BQU0sQ0FBQ0MsSUFBUyxDQUFDLGVBQ3RCOUgsMERBQUEsYUFBSzZILE1BQU0sQ0FBQ0UsSUFBUyxDQUFDLGVBQ3RCL0gsMERBQUEsYUFBSzZILE1BQU0sQ0FBQ0csS0FBVSxDQUFDLGVBQ3ZCaEksMERBQUEsYUFBSzZILE1BQU0sQ0FBQ0ksR0FBUSxDQUFDLGVBQ3JCakksMERBQUEsYUFBSzZILE1BQU0sQ0FBQ0ssV0FBZ0IsQ0FBQyxlQUM3QmxJLDBEQUFBLGFBQUs2SCxNQUFNLENBQUNNLGFBQWtCLENBQzVCLENBQ0wsQ0FDSSxDQUNGLENBQ1IsZUFDRG5JLDBEQUFBO0lBQUsrRyxTQUFTLEVBQUM7RUFBWSxnQkFDekIvRywwREFBQTtJQUFRMEgsT0FBTyxFQUFFYixxQkFBc0I7SUFBQ2MsUUFBUSxFQUFFdEYsa0JBQWtCLEtBQUs7RUFBRSxnQkFDekVyQywwREFBQSxDQUFDa0IsMkVBQWU7SUFBQzBHLElBQUksRUFBRXpHLDRFQUFhQTtFQUFDLENBQUUsQ0FDakMsQ0FBQyxlQUNUbkIsMERBQUEsZUFBT3FDLGtCQUFrQixFQUFDLE1BQUksRUFBQ3NFLGlCQUF3QixDQUFDLGVBQ3hEM0csMERBQUE7SUFBUTBILE9BQU8sRUFBRWQsaUJBQWtCO0lBQUNlLFFBQVEsRUFBRXRGLGtCQUFrQixLQUFLc0U7RUFBa0IsZ0JBQ3JGM0csMERBQUEsQ0FBQ2tCLDJFQUFlO0lBQUMwRyxJQUFJLEVBQUV4Ryw2RUFBY0E7RUFBQyxDQUFFLENBQ2xDLENBQ0wsQ0FDRSxDQUNOLENBQUMsZUFFTnBCLDBEQUFBO0lBQUsrRyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzdCL0csMERBQUE7SUFBUytHLFNBQVMsRUFBQztFQUFlLGdCQUNoQy9HLDBEQUFBLGFBQUksNEJBQThCLENBQUMsRUFDbEMyQixTQUFTLGdCQUNSM0IsMERBQUEsQ0FBQ0ssaURBQUk7SUFBQzBDLElBQUksRUFBRXBCO0VBQVUsQ0FBRSxDQUFDLGdCQUV6QjNCLDBEQUFBLFlBQUcsa0NBQW1DLENBRWpDLENBQUMsZUFFVkEsMERBQUE7SUFBUytHLFNBQVMsRUFBQztFQUFrQixnQkFDbkMvRywwREFBQSxhQUFJLHdCQUEwQixDQUFDLGVBQy9CQSwwREFBQTtJQUFLK0csU0FBUyxFQUFDO0VBQW9CLGdCQUNqQy9HLDBEQUFBLENBQUNNLHFEQUFRO0lBQ1B5QyxJQUFJLEVBQUV3QixvQkFBb0IsQ0FBQyxDQUFFO0lBQzdCNkQsT0FBTyxFQUFFM0Q7RUFBZ0IsQ0FDMUIsQ0FDRSxDQUNFLENBQ04sQ0FDRixDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlbkQsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFM1QjtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0EsT0FBTyxxR0FBcUcsTUFBTSxVQUFVLHdCQUF3QixXQUFXLHNCQUFzQix5QkFBeUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsd0JBQXdCLHFCQUFxQixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLHdCQUF3QixhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssd0JBQXdCLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLHdCQUF3QixPQUFPLFlBQVksTUFBTSx3QkFBd0IsV0FBVyxVQUFVLHdCQUF3Qix5QkFBeUIsYUFBYSx5QkFBeUIsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssYUFBYSxNQUFNLHdCQUF3Qix1QkFBdUIsTUFBTSxLQUFLLHNCQUFzQix5QkFBeUIsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSx3QkFBd0IscUJBQXFCLGFBQWEsV0FBVyxVQUFVLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssd0JBQXdCLHVCQUF1QixhQUFhLE9BQU8sS0FBSyxVQUFVLHdCQUF3Qix5QkFBeUIsNkVBQTZFLGNBQWMsc0RBQXNELHFEQUFxRCxtQkFBbUIsMERBQTBELHNDQUFzQywwQkFBMEIsa0JBQWtCLHFCQUFxQix1QkFBdUIsR0FBRyw2QkFBNkIsaUJBQWlCLCtCQUErQix5Q0FBeUMsa0NBQWtDLGtCQUFrQixvQkFBb0IsV0FBVyxZQUFZLEdBQUcsaUJBQWlCLHdEQUF3RCw2REFBNkQsc0JBQXNCLDBCQUEwQixLQUFLLGlCQUFpQixzREFBc0QsMkRBQTJELG9CQUFvQix3QkFBd0IsR0FBRyxpQkFBaUIsMEJBQTBCLGVBQWUsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsc0JBQXNCLDBCQUEwQixpQkFBaUIsdUNBQXVDLG9CQUFvQixtQkFBbUIsdUJBQXVCLHVCQUF1QixHQUFHLDRCQUE0QiwrQkFBK0IscUJBQXFCLDJEQUEyRCxzQkFBc0IseUNBQXlDLGlCQUFpQixtQ0FBbUMsMEZBQTBGLGlFQUFpRSx1QkFBdUIsbUNBQW1DLCtDQUErQyw2QkFBNkIseUJBQXlCLG1CQUFtQiwrQ0FBK0MseUJBQXlCLHdCQUF3QixlQUFlLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLDBCQUEwQiw4Q0FBOEMsc0JBQXNCLG9CQUFvQix3QkFBd0Isa0JBQWtCLEdBQUcsb0ZBQW9GLHNCQUFzQiwrREFBK0QsdUNBQXVDLG9CQUFvQixpQkFBaUIseURBQXlELDZFQUE2RSw4Q0FBOEMsR0FBRyw0Q0FBNEMsa0JBQWtCLHFCQUFxQixrQ0FBa0MsOENBQThDLG9CQUFvQixHQUFHLHVCQUF1QiwrQkFBK0IsZ0JBQWdCLHNCQUFzQixHQUFHLHVFQUF1RSxrQkFBa0IsR0FBRyx1RUFBdUUsaUJBQWlCLEdBQUcsMkVBQTJFLGtCQUFrQixHQUFHLHVDQUF1QywrQkFBK0IscUNBQXFDLCtCQUErQiwrQkFBK0IsR0FBRyxvQkFBb0Isa0JBQWtCLGNBQWMsR0FBRyx1QkFBdUIsK0JBQStCLGlCQUFpQixpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsMkNBQTJDLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLDRCQUE0QiwrQkFBK0IsdUJBQXVCLDhCQUE4QiwrQkFBK0IsdUJBQXVCLG1CQUFtQixpQkFBaUIsc0JBQXNCLGtCQUFrQiw4QkFBOEIsdUJBQXVCLDJCQUEyQiw4Q0FBOEMsdUJBQXVCLHFCQUFxQixxQ0FBcUMseUNBQXlDLG9CQUFvQixrQkFBa0IsR0FBRyx1QkFBdUIsbUJBQW1CLHVCQUF1QixvQkFBb0IsOENBQThDLHNCQUFzQixLQUFLLHNCQUFzQix3QkFBd0IsdUJBQXVCLGlCQUFpQixxQkFBcUIsa0JBQWtCLDhCQUE4Qix1QkFBdUIsMkJBQTJCLDhDQUE4QyxzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsd0JBQXdCLGlCQUFpQiw4Q0FBOEMsOENBQThDLHNDQUFzQyxrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0REFBNEQsMkNBQTJDLDZDQUE2QyxnREFBZ0QsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsK0NBQStDLDREQUE0RCxHQUFHLHNCQUFzQixtQkFBbUIsbUNBQW1DLG1EQUFtRCxtQ0FBbUMscUJBQXFCO0FBQzF3UDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BQdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBOEc7QUFDOUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4RkFBTzs7OztBQUl3RDtBQUNoRixPQUFPLGlFQUFlLDhGQUFPLElBQUksOEZBQU8sVUFBVSw4RkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0Rhc2hib2FyZFBhZ2UuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9EYXNoYm9hcmRQYWdlLmNzcz9lZTMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi4vc3R5bGUvRGFzaGJvYXJkUGFnZS5jc3MnOyBcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhcic7IFxuaW1wb3J0IHsgTGluZSwgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsIEFyY0VsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnREYXRhTGFiZWxzIGZyb20gJ2NoYXJ0anMtcGx1Z2luLWRhdGFsYWJlbHMnOyBcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIFBvaW50RWxlbWVudCwgTGluZUVsZW1lbnQsIEFyY0VsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIENoYXJ0RGF0YUxhYmVscyk7XG5cbmNvbnN0IERhc2hib2FyZFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXBvcnRzLCBzZXRSZXBvcnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Fkb3B0YWJsZUFuaW1hbHMsIHNldEFkb3B0YWJsZUFuaW1hbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RvdGFsUmVwb3J0cywgc2V0VG90YWxSZXBvcnRzXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIFBhZ2luYXRpb24gc3RhdGVzXG4gIGNvbnN0IFtjdXJyZW50UGFnZVJlcG9ydHMsIHNldEN1cnJlbnRQYWdlUmVwb3J0c10gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlQW5pbWFscywgc2V0Q3VycmVudFBhZ2VBbmltYWxzXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBpdGVtc1BlclBhZ2UgPSA1O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXNoYm9hcmREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vZGFzaGJvYXJkYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEucmVwb3J0cyAmJiByZXNwb25zZS5kYXRhLmFkb3B0YWJsZUFuaW1hbHMpIHtcbiAgICAgICAgICBzZXRSZXBvcnRzKHJlc3BvbnNlLmRhdGEucmVwb3J0cyk7XG4gICAgICAgICAgc2V0QWRvcHRhYmxlQW5pbWFscyhyZXNwb25zZS5kYXRhLmFkb3B0YWJsZUFuaW1hbHMpO1xuICAgICAgICAgIGNvbnN0IHJlcG9ydENvdW50cyA9IGdldENvdW50c0J5TW9udGgocmVzcG9uc2UuZGF0YS5yZXBvcnRzLCAnY3JlYXRlZF9hdCcpO1xuICAgICAgICAgIGNvbnN0IHJlc2N1ZWRDb3VudHMgPSBnZXRDb3VudHNCeU1vbnRoKHJlc3BvbnNlLmRhdGEucmVzY3VlZEFuaW1hbHMsICdyZXNjdWVkX2RhdGUnKTtcbiAgICAgICAgICBzZXRDaGFydERhdGEoZ2VuZXJhdGVDaGFydERhdGEocmVwb3J0Q291bnRzLCByZXNjdWVkQ291bnRzKSk7XG4gICAgICAgICAgc2V0VG90YWxSZXBvcnRzKHJlc3BvbnNlLmRhdGEucmVwb3J0cy5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIHN0cnVjdHVyZScpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2ggZXJyb3I6JywgZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLmRhdGEgOiBlcnIpO1xuICAgICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgZmV0Y2hEYXNoYm9hcmREYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRDb3VudHNCeU1vbnRoID0gKGRhdGEsIGRhdGVLZXkpID0+IHtcbiAgICBjb25zdCBjb3VudHMgPSBuZXcgQXJyYXkoMTIpLmZpbGwoMCk7XG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW1bZGF0ZUtleV0pO1xuICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7IFxuICAgICAgY291bnRzW21vbnRoXSsrO1xuICAgIH0pO1xuICAgIHJldHVybiBjb3VudHM7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVDaGFydERhdGEgPSAocmVwb3J0Q291bnRzLCByZXNjdWVkQ291bnRzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVwb3J0cycsXG4gICAgICAgICAgZGF0YTogcmVwb3J0Q291bnRzLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKScsXG4gICAgICAgICAgZmlsbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdSZXNjdWVkIEFuaW1hbHMnLFxuICAgICAgICAgIGRhdGE6IHJlc2N1ZWRDb3VudHMsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDEzOCwgMTI2LCAxOTAsIDEpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEzOCwgMTI2LCAxOTAsIDAuNCknLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlRG91Z2hudXREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbHM6IFsnUmVwb3J0ZWQgQW5pbWFscycsICdSZW1haW5pbmcgQ2FwYWNpdHknXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBbdG90YWxSZXBvcnRzLCAxMDAwIC0gdG90YWxSZXBvcnRzXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsncmdiYSgxMzgsIDEyNiwgMTkwLCAxKScsICdyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSknXSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogWydyZ2JhKDEzOCwgMTI2LCAxOTAsIDEpJywgJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC41KSddLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGRvdWdobnV0T3B0aW9ucyA9IHtcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLCBcbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkYXRhbGFiZWxzOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGNvbG9yOiAncmdiYSgxMzgsIDEyNiwgMTkwLCAxKScsXG4gICAgICAgIGZvcm1hdHRlcjogKHZhbHVlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgICAgaWYgKGNvbnRleHQuZGF0YUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dG90YWxSZXBvcnRzfWA7IFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJyc7IFxuICAgICAgICB9LFxuICAgICAgICBmb250OiB7XG4gICAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgc2l6ZTogJzMwJyxcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMTM4LCAxMjYsIDE5MCwgMSknLCBcbiAgICAgICAgfSxcbiAgICAgICAgYW5jaG9yOiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGN1dG91dDogJzc1JScsIFxuICAgIHJvdGF0aW9uOiAyNDAsXG4gICAgY2lyY3VtZmVyZW5jZTogMjQwLFxuICB9O1xuXG4gIC8vIFBhZ2luYXRpb24gbG9naWMgZm9yIHJlcG9ydHNcbiAgY29uc3QgaW5kZXhPZkxhc3RSZXBvcnQgPSBjdXJyZW50UGFnZVJlcG9ydHMgKiBpdGVtc1BlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdFJlcG9ydCA9IGluZGV4T2ZMYXN0UmVwb3J0IC0gaXRlbXNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50UmVwb3J0cyA9IHJlcG9ydHMuc2xpY2UoaW5kZXhPZkZpcnN0UmVwb3J0LCBpbmRleE9mTGFzdFJlcG9ydCk7XG4gIGNvbnN0IHRvdGFsUGFnZXNSZXBvcnRzID0gTWF0aC5jZWlsKHJlcG9ydHMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcblxuICBjb25zdCBoYW5kbGVOZXh0UmVwb3J0cyA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2VSZXBvcnRzIDwgdG90YWxQYWdlc1JlcG9ydHMpIHtcbiAgICAgIHNldEN1cnJlbnRQYWdlUmVwb3J0cyhjdXJyZW50UGFnZVJlcG9ydHMgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXNSZXBvcnRzID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZVJlcG9ydHMgPiAxKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZVJlcG9ydHMoY3VycmVudFBhZ2VSZXBvcnRzIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFBhZ2luYXRpb24gbG9naWMgZm9yIGFkb3B0YWJsZSBhbmltYWxzXG4gIGNvbnN0IGluZGV4T2ZMYXN0QW5pbWFsID0gY3VycmVudFBhZ2VBbmltYWxzICogaXRlbXNQZXJQYWdlO1xuICBjb25zdCBpbmRleE9mRmlyc3RBbmltYWwgPSBpbmRleE9mTGFzdEFuaW1hbCAtIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudEFuaW1hbHMgPSBhZG9wdGFibGVBbmltYWxzLnNsaWNlKGluZGV4T2ZGaXJzdEFuaW1hbCwgaW5kZXhPZkxhc3RBbmltYWwpO1xuICBjb25zdCB0b3RhbFBhZ2VzQW5pbWFscyA9IE1hdGguY2VpbChhZG9wdGFibGVBbmltYWxzLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dEFuaW1hbHMgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlQW5pbWFscyA8IHRvdGFsUGFnZXNBbmltYWxzKSB7XG4gICAgICBzZXRDdXJyZW50UGFnZUFuaW1hbHMoY3VycmVudFBhZ2VBbmltYWxzICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzQW5pbWFscyA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBhZ2VBbmltYWxzID4gMSkge1xuICAgICAgc2V0Q3VycmVudFBhZ2VBbmltYWxzKGN1cnJlbnRQYWdlQW5pbWFscyAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nIGRhdGEuLi48L3A+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPntlcnJvcn08L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1jb250YWluZXJcIj5cbiAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8aDE+QWRtaW4gRGFzaGJvYXJkPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRhc2hib2FyZC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyPlJlcG9ydHM8L2gyPlxuICAgICAgICAgIHtjdXJyZW50UmVwb3J0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8cD5ObyByZXBvcnRzIGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJkYXNoYm9hcmQtdGFibGVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+QW5pbWFsIFR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkRldGFpbHM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkNydWVsdHkgRGV0YWlsczwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+RGF0ZSBDcmVhdGVkPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFJlcG9ydHMubWFwKChyZXBvcnQpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3JlcG9ydC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cmVwb3J0LmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cmVwb3J0LmFuaW1hbF90eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cmVwb3J0LmFuaW1hbF9kZXRhaWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cmVwb3J0LmNydWVsdHlfZGV0YWlsc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e25ldyBEYXRlKHJlcG9ydC5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3JlcG9ydC5zdGF0dXN9PC90ZD4gXG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1JlcG9ydHN9IGRpc2FibGVkPXtjdXJyZW50UGFnZVJlcG9ydHMgPT09IDF9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuPntjdXJyZW50UGFnZVJlcG9ydHN9IG9mIHt0b3RhbFBhZ2VzUmVwb3J0c308L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRSZXBvcnRzfSBkaXNhYmxlZD17Y3VycmVudFBhZ2VSZXBvcnRzID09PSB0b3RhbFBhZ2VzUmVwb3J0c30+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRhc2hib2FyZC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyPkFkb3B0YWJsZSBBbmltYWxzPC9oMj5cbiAgICAgICAgICB7Y3VycmVudEFuaW1hbHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHA+Tm8gYWRvcHRhYmxlIGFuaW1hbHMgYXZhaWxhYmxlLjwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImRhc2hib2FyZC10YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5CcmVlZDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+QWdlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb25hbGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+SGVhbHRoIFN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50QW5pbWFscy5tYXAoKGFuaW1hbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17YW5pbWFsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLmJyZWVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLmFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC5wZXJzb25hbGl0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC5oZWFsdGhfc3RhdHVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c0FuaW1hbHN9IGRpc2FibGVkPXtjdXJyZW50UGFnZUFuaW1hbHMgPT09IDF9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuPntjdXJyZW50UGFnZUFuaW1hbHN9IG9mIHt0b3RhbFBhZ2VzQW5pbWFsc308L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHRBbmltYWxzfSBkaXNhYmxlZD17Y3VycmVudFBhZ2VBbmltYWxzID09PSB0b3RhbFBhZ2VzQW5pbWFsc30+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydC1wb3NpdGlvbic+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXJ0LXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDI+UmVwb3J0cyB2cyBSZXNjdWVkIEFuaW1hbHM8L2gyPlxuICAgICAgICAgIHtjaGFydERhdGEgPyAoXG4gICAgICAgICAgICA8TGluZSBkYXRhPXtjaGFydERhdGF9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPk5vIGRhdGEgYXZhaWxhYmxlIGZvciB0aGUgY2hhcnQuPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkb3VnaG51dC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyPlRvdGFsIFJlcG9ydGVkIEFuaW1hbHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG91Z2hudXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8RG91Z2hudXQgXG4gICAgICAgICAgICAgIGRhdGE9e2dlbmVyYXRlRG91Z2hudXREYXRhKCl9IFxuICAgICAgICAgICAgICBvcHRpb25zPXtkb3VnaG51dE9wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFBhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRGFzaGJvYXJkIGNvbnRhaW5lcjogbWFpbiBmbGV4IGxheW91dCAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoOyAvKiBNYWtlIGJvZHkgZnVsbCBoZWlnaHQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgLyogWW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cbn1cblxuLmRhc2hib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBtYXJnaW4tbGVmdDogNDUwcHg7XG59XG5cbi8qIFNpZGViYXIgKi9cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEE3RUJFOyAvKiBQdXJwbGUgYmFja2dyb3VuZCAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4gIC5zaWRlYmFyIGgxIHtcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgQXJpYWwsIHNhbnMtc2VyaWY7IC8qIEZhbGxiYWNrIHRvIEFyaWFsIGFuZCBzYW5zLXNlcmlmICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4uc2lkZWJhciBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCBBcmlhbCwgc2Fucy1zZXJpZjsgLyogRmFsbGJhY2sgdG8gQXJpYWwgYW5kIHNhbnMtc2VyaWYgKi9cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2lkZWJhciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXIgdWwgbGkge1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLnNpZGViYXIgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnNpZGViYXIgdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDY4QTM7IC8qIEhvdmVyIGVmZmVjdCAqL1xufVxuXG4vKiBNYWluIGNvbnRlbnQgbmV4dCB0byB0aGUgc2lkZWJhciAqL1xuLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7IC8qIFNwYWNlIGZvciBzaWRlYmFyICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE1ha2Ugc3VyZSBtYWluIGNvbnRlbnQgaXMgdHJhbnNwYXJlbnQgdG8gc2hvdyBib2R5IGJhY2tncm91bmQgKi9cbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIEFkZCBleHRyYSBwYWRkaW5nIHRvIHB1c2ggY29udGVudCBkb3duICovXG4gIHBhZGRpbmctbGVmdDogMCU7XG4gIHRleHQtaW5kZW50OiAzMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xufVxuXG4vKiBTZWN0aW9uIHN0eWxpbmcgKi9cbi5kYXNoYm9hcmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXG4gIHBhZGRpbmc6IDIwcHg7IFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IFxuICBtYXJnaW4tbGVmdDogLTIwcHg7IFxuICB3aWR0aDogODAlO1xufVxuXG4uZGFzaGJvYXJkLXNlY3Rpb24gaDJ7XG4gIGNvbG9yOiAjMTgxMTExO1xufVxuXG5cblxuLm1haW4tY29udGVudCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjb2xvcjojMDAwMDAwO1xufVxuLyogVGFibGUgY29udGFpbmVyIHRvIGFsbG93IHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cblxuLmRhc2hib2FyZC10YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBhdXRvOyAvKiBBbGxvdyBob3Jpem9udGFsIHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBTZXQgdG8gbWF4IHdpZHRoIG9mIHRoZSBwYXJlbnQgKi9cbn1cbi5kYXNoYm9hcmQtdGFibGUge1xuICB3aWR0aDogMTAwJTsgLyogS2VlcCBpdCAxMDAlIG9mIHRoZSBjb250YWluZXIgKi9cbiAgbWluLXdpZHRoOiA4MDBweDsgLyogU2V0IGEgbWluaW11bSB3aWR0aCB0byBlbnN1cmUgY29uc2lzdGVuY3kgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG4uZGFzaGJvYXJkLXRhYmxlIHRoLCAuZGFzaGJvYXJkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGFzaGJvYXJkLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjsgXG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kYXNoYm9hcmQtdGFibGUgdGg6bnRoLWNoaWxkKDEpLFxuLmRhc2hib2FyZC10YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTUwcHg7IFxufVxuLmRhc2hib2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMiksXG4uZGFzaGJvYXJkLXRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuXG4uZGFzaGJvYXJkLXRhYmxlIHRoOm50aC1jaGlsZCgzKSxcbi5kYXNoYm9hcmQtdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDM1MHB4OyBcbn1cbi5kYXNoYm9hcmQtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogWmVicmEgc3RyaXBpbmcgZm9yIGV2ZW4gcm93cyAqL1xufVxuXG4uZGFzaGJvYXJkLXRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgXG59XG5cbi50YWJsZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udGFibGUtYWN0aW9uLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2RjY0QTk7IFxuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi50YWJsZS1hY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhBN0VCRTtcbn1cblxuLnRhYmxlLWFjdGlvbi1idG4uZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7IC8qIEdyZWVuIGZvciBlZGl0ICovXG59XG5cbi50YWJsZS1hY3Rpb24tYnRuLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7IC8qIFJlZCBmb3IgZGVsZXRlICovXG59XG4uY2hhcnQtc2VjdGlvblxue1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtZmFtaWx5OiAgQXJpYWwsIHNhbnMtc2VyaWY7IC8qIEZhbGxiYWNrIHRvIEFyaWFsIGFuZCBzYW5zLXNlcmlmICovXG59XG4uY2hhcnQtc2VjdGlvbiBoMntcbiAgY29sb3I6IzE4MTExMTtcbn1cbi5kb3VnaG51dC1zZWN0aW9uIGgye1xuICBjb2xvcjogIzE4MTExMTtcbiAgbWFyZ2luLXJpZ2h0OjIwcHggO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcblxufVxuLmRvdWdobnV0LWNvbnRhaW5lcntcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM4LCAxMjYsIDE5MCwgMSk7IC8qIERhcmsgcHVycGxlIGZvciBidXR0b24gKi9cbiAgY29sb3I6IHdoaXRlOyAvKiBUZXh0IGNvbG9yICovXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOCwgMTI2LCAxOTAsIDAuOCk7IC8qIExpZ2h0ZXIgcHVycGxlIG9uIGhvdmVyICovXG59XG5cbi5wYWdpbmF0aW9uIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIEdyYXkgY29sb3Igd2hlbiBkaXNhYmxlZCAqL1xuICBjb2xvcjogIzY2NjsgLyogRGFya2VyIGdyYXkgdGV4dCB3aGVuIGRpc2FibGVkICovXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5wYWdpbmF0aW9uIHNwYW4ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgY29sb3I6IHJnYmEoMTM4LCAxMjYsIDE5MCwgMSk7IC8qIENvbG9yIHRvIG1hdGNoIGJ1dHRvbnMgKi9cbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIEJvbGQgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9EYXNoYm9hcmRQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxTQUFTO0VBQ1QsZ0RBQWdELEVBQUUscUNBQXFDO0VBQ3ZGLFVBQVU7RUFDVixhQUFhLEVBQUUsMEJBQTBCO0VBQ3pDLHlCQUF5QixFQUFFLGtDQUFrQztBQUMvRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLFlBQVk7QUFDWjtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBRSxzQkFBc0I7RUFDakQsWUFBWSxFQUFFLGVBQWU7RUFDN0IsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87QUFDVDtFQUNFO0lBQ0UsZ0RBQWdELEVBQUUscUNBQXFDO0lBQ3ZGLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0UsZ0RBQWdELEVBQUUscUNBQXFDO0VBQ3ZGLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxpQkFBaUI7QUFDOUM7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsZ0JBQWdCLEVBQUUsc0JBQXNCO0VBQ3hDLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCLEVBQUUsa0VBQWtFO0VBQ2pHLGlCQUFpQixFQUFFLDJDQUEyQztFQUM5RCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUUsK0JBQStCO0FBQ3BEOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7Ozs7QUFJQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQSxpREFBaUQ7O0FBRWpEO0VBQ0UsZ0JBQWdCLEVBQUUseUNBQXlDO0VBQzNELGVBQWUsRUFBRSxtQ0FBbUM7QUFDdEQ7QUFDQTtFQUNFLFdBQVcsRUFBRSxrQ0FBa0M7RUFDL0MsZ0JBQWdCLEVBQUUsOENBQThDO0VBQ2hFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOztFQUVFLFlBQVk7QUFDZDs7O0FBR0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSxpQ0FBaUM7QUFDOUQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsbUJBQW1CO0FBQ2hEO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0JBQStCLEVBQUUscUNBQXFDO0FBQ3hFO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QyxFQUFFLDJCQUEyQjtFQUNyRSxZQUFZLEVBQUUsZUFBZTtFQUM3QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBRSxvQkFBb0I7RUFDeEMsaUNBQWlDLEVBQUUsdUNBQXVDO0FBQzVFOztBQUVBO0VBQ0UsMENBQTBDLEVBQUUsNEJBQTRCO0FBQzFFOztBQUVBO0VBQ0Usc0JBQXNCLEVBQUUsNkJBQTZCO0VBQ3JELFdBQVcsRUFBRSxtQ0FBbUM7RUFDaEQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QixFQUFFLDJCQUEyQjtFQUMxRCxpQkFBaUIsRUFBRSwrQkFBK0I7QUFDcERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGFzaGJvYXJkIGNvbnRhaW5lcjogbWFpbiBmbGV4IGxheW91dCAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsIEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7IC8qIE1ha2UgYm9keSBmdWxsIGhlaWdodCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgLyogWW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cXG59XFxuXFxuLmRhc2hib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICBtYXJnaW4tbGVmdDogNDUwcHg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEE3RUJFOyAvKiBQdXJwbGUgYmFja2dyb3VuZCAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbiAgLnNpZGViYXIgaDEge1xcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgQXJpYWwsIHNhbnMtc2VyaWY7IC8qIEZhbGxiYWNrIHRvIEFyaWFsIGFuZCBzYW5zLXNlcmlmICovXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4uc2lkZWJhciBoMiB7XFxuICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywgQXJpYWwsIHNhbnMtc2VyaWY7IC8qIEZhbGxiYWNrIHRvIEFyaWFsIGFuZCBzYW5zLXNlcmlmICovXFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNpZGViYXIgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNpZGViYXIgdWwgbGkge1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbi5zaWRlYmFyIHVsIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDY4QTM7IC8qIEhvdmVyIGVmZmVjdCAqL1xcbn1cXG5cXG4vKiBNYWluIGNvbnRlbnQgbmV4dCB0byB0aGUgc2lkZWJhciAqL1xcbi5tYWluLWNvbnRlbnQge1xcbiAgbWFyZ2luLWxlZnQ6IDBweDsgLyogU3BhY2UgZm9yIHNpZGViYXIgKi9cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogTWFrZSBzdXJlIG1haW4gY29udGVudCBpcyB0cmFuc3BhcmVudCB0byBzaG93IGJvZHkgYmFja2dyb3VuZCAqL1xcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIEFkZCBleHRyYSBwYWRkaW5nIHRvIHB1c2ggY29udGVudCBkb3duICovXFxuICBwYWRkaW5nLWxlZnQ6IDAlO1xcbiAgdGV4dC1pbmRlbnQ6IDMwcHg7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkICovXFxufVxcblxcbi8qIFNlY3Rpb24gc3R5bGluZyAqL1xcbi5kYXNoYm9hcmQtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyBcXG4gIHBhZGRpbmc6IDIwcHg7IFxcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IFxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgXFxuICBtYXJnaW4tbGVmdDogLTIwcHg7IFxcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmRhc2hib2FyZC1zZWN0aW9uIGgye1xcbiAgY29sb3I6ICMxODExMTE7XFxufVxcblxcblxcblxcbi5tYWluLWNvbnRlbnQgaDEge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjb2xvcjojMDAwMDAwO1xcbn1cXG4vKiBUYWJsZSBjb250YWluZXIgdG8gYWxsb3cgc2Nyb2xsaW5nIGlmIG5lZWRlZCAqL1xcblxcbi5kYXNoYm9hcmQtdGFibGUtY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIEFsbG93IGhvcml6b250YWwgc2Nyb2xsaW5nIGlmIG5lZWRlZCAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBTZXQgdG8gbWF4IHdpZHRoIG9mIHRoZSBwYXJlbnQgKi9cXG59XFxuLmRhc2hib2FyZC10YWJsZSB7XFxuICB3aWR0aDogMTAwJTsgLyogS2VlcCBpdCAxMDAlIG9mIHRoZSBjb250YWluZXIgKi9cXG4gIG1pbi13aWR0aDogODAwcHg7IC8qIFNldCBhIG1pbmltdW0gd2lkdGggdG8gZW5zdXJlIGNvbnNpc3RlbmN5ICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcbi5kYXNoYm9hcmQtdGFibGUgdGgsIC5kYXNoYm9hcmQtdGFibGUgdGQge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZGFzaGJvYXJkLXRhYmxlIHRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IFxcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmRhc2hib2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMSksXFxuLmRhc2hib2FyZC10YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xcbiAgd2lkdGg6IDE1MHB4OyBcXG59XFxuLmRhc2hib2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMiksXFxuLmRhc2hib2FyZC10YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG5cXG4uZGFzaGJvYXJkLXRhYmxlIHRoOm50aC1jaGlsZCgzKSxcXG4uZGFzaGJvYXJkLXRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogMzUwcHg7IFxcbn1cXG4uZGFzaGJvYXJkLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBaZWJyYSBzdHJpcGluZyBmb3IgZXZlbiByb3dzICovXFxufVxcblxcbi5kYXNoYm9hcmQtdGFibGUgdHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgXFxufVxcblxcbi50YWJsZS1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YWJsZS1hY3Rpb24tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2RjY0QTk7IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi50YWJsZS1hY3Rpb24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4QTdFQkU7XFxufVxcblxcbi50YWJsZS1hY3Rpb24tYnRuLmVkaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gZm9yIGVkaXQgKi9cXG59XFxuXFxuLnRhYmxlLWFjdGlvbi1idG4uZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7IC8qIFJlZCBmb3IgZGVsZXRlICovXFxufVxcbi5jaGFydC1zZWN0aW9uXFxue1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMTUwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LWZhbWlseTogIEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBGYWxsYmFjayB0byBBcmlhbCBhbmQgc2Fucy1zZXJpZiAqL1xcbn1cXG4uY2hhcnQtc2VjdGlvbiBoMntcXG4gIGNvbG9yOiMxODExMTE7XFxufVxcbi5kb3VnaG51dC1zZWN0aW9uIGgye1xcbiAgY29sb3I6ICMxODExMTE7XFxuICBtYXJnaW4tcmlnaHQ6MjBweCA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG4uZG91Z2hudXQtY29udGFpbmVye1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ucGFnaW5hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOCwgMTI2LCAxOTAsIDEpOyAvKiBEYXJrIHB1cnBsZSBmb3IgYnV0dG9uICovXFxuICBjb2xvcjogd2hpdGU7IC8qIFRleHQgY29sb3IgKi9cXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBob3ZlciBlZmZlY3QgKi9cXG59XFxuXFxuLnBhZ2luYXRpb24gYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM4LCAxMjYsIDE5MCwgMC44KTsgLyogTGlnaHRlciBwdXJwbGUgb24gaG92ZXIgKi9cXG59XFxuXFxuLnBhZ2luYXRpb24gYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIEdyYXkgY29sb3Igd2hlbiBkaXNhYmxlZCAqL1xcbiAgY29sb3I6ICM2NjY7IC8qIERhcmtlciBncmF5IHRleHQgd2hlbiBkaXNhYmxlZCAqL1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnBhZ2luYXRpb24gc3BhbiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGNvbG9yOiByZ2JhKDEzOCwgMTI2LCAxOTAsIDEpOyAvKiBDb2xvciB0byBtYXRjaCBidXR0b25zICovXFxuICBmb250LXdlaWdodDogYm9sZDsgLyogQm9sZCBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EYXNoYm9hcmRQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGFzaGJvYXJkUGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU2lkZWJhciIsIkxpbmUiLCJEb3VnaG51dCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIlBvaW50RWxlbWVudCIsIkxpbmVFbGVtZW50IiwiQXJjRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkNoYXJ0RGF0YUxhYmVscyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCIsInJlZ2lzdGVyIiwiRGFzaGJvYXJkUGFnZSIsInJlcG9ydHMiLCJzZXRSZXBvcnRzIiwiYWRvcHRhYmxlQW5pbWFscyIsInNldEFkb3B0YWJsZUFuaW1hbHMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ0b3RhbFJlcG9ydHMiLCJzZXRUb3RhbFJlcG9ydHMiLCJjdXJyZW50UGFnZVJlcG9ydHMiLCJzZXRDdXJyZW50UGFnZVJlcG9ydHMiLCJjdXJyZW50UGFnZUFuaW1hbHMiLCJzZXRDdXJyZW50UGFnZUFuaW1hbHMiLCJpdGVtc1BlclBhZ2UiLCJmZXRjaERhc2hib2FyZERhdGEiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JBU0VfVVJMIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicmVwb3J0Q291bnRzIiwiZ2V0Q291bnRzQnlNb250aCIsInJlc2N1ZWRDb3VudHMiLCJyZXNjdWVkQW5pbWFscyIsImdlbmVyYXRlQ2hhcnREYXRhIiwibGVuZ3RoIiwiZXJyIiwiY29uc29sZSIsImRhdGVLZXkiLCJjb3VudHMiLCJBcnJheSIsImZpbGwiLCJmb3JFYWNoIiwiaXRlbSIsImRhdGUiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImdlbmVyYXRlRG91Z2hudXREYXRhIiwiYm9yZGVyV2lkdGgiLCJkb3VnaG51dE9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJsZWdlbmQiLCJkaXNwbGF5IiwidG9vbHRpcCIsImVuYWJsZWQiLCJkYXRhbGFiZWxzIiwiY29sb3IiLCJmb3JtYXR0ZXIiLCJ2YWx1ZSIsImNvbnRleHQiLCJkYXRhSW5kZXgiLCJmb250Iiwid2VpZ2h0Iiwic2l6ZSIsImFuY2hvciIsImFsaWduIiwiY3V0b3V0Iiwicm90YXRpb24iLCJjaXJjdW1mZXJlbmNlIiwiaW5kZXhPZkxhc3RSZXBvcnQiLCJpbmRleE9mRmlyc3RSZXBvcnQiLCJjdXJyZW50UmVwb3J0cyIsInNsaWNlIiwidG90YWxQYWdlc1JlcG9ydHMiLCJNYXRoIiwiY2VpbCIsImhhbmRsZU5leHRSZXBvcnRzIiwiaGFuZGxlUHJldmlvdXNSZXBvcnRzIiwiaW5kZXhPZkxhc3RBbmltYWwiLCJpbmRleE9mRmlyc3RBbmltYWwiLCJjdXJyZW50QW5pbWFscyIsInRvdGFsUGFnZXNBbmltYWxzIiwiaGFuZGxlTmV4dEFuaW1hbHMiLCJoYW5kbGVQcmV2aW91c0FuaW1hbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwicmVwb3J0Iiwia2V5IiwiaWQiLCJhbmltYWxfdHlwZSIsImFuaW1hbF9kZXRhaWxzIiwiY3J1ZWx0eV9kZXRhaWxzIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInN0YXR1cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImljb24iLCJhbmltYWwiLCJuYW1lIiwidHlwZSIsImJyZWVkIiwiYWdlIiwicGVyc29uYWxpdHkiLCJoZWFsdGhfc3RhdHVzIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=