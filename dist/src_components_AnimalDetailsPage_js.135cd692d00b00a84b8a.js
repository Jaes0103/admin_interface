"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_AnimalDetailsPage_js"],{

/***/ "./src/components/AnimalDetailsPage.js":
/*!*********************************************!*\
  !*** ./src/components/AnimalDetailsPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _style_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/AnimalDetailsPage.css */ "./src/style/AnimalDetailsPage.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");







const AnimalDetails = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const {
    id: animalId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const [animal, setAnimal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [healthRecords, setHealthRecords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [medications, setMedications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [observations, setObservations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [observationDialogVisible, setObservationDialogVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedObservation, setSelectedObservation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [observationToDelete, setObservationToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [medicalUpdate, setMedicalUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    checkupDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd'),
    healthStatus: '',
    labResults: '',
    nextCheckupDate: '',
    observations: ''
  });
  const [showHealthRecordDialog, setShowHealthRecordDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showMedicationDialog, setShowMedicationDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectedMedication, setSelectedMedication] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [selectedHealthRecordId, setSelectedHealthRecordId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [medicationToDelete, setMedicationToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fetchAnimalDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setLoading(true);
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}`);
      console.log("Fetched animal details:", response.data);
      setAnimal(response.data.animal || {});
      setHealthRecords(response.data.healthRecords || []);
      setError(null);
    } catch (err) {
      console.error(err);
      setError({
        message: 'Error fetching animal details',
        details: err.response ? err.response.data : err.message
      });
    } finally {
      setLoading(false);
    }
  }, [animalId]);
  const fetchMedications = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (healthRecords.length === 0) return;
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/medications`);
      console.log("Fetched medications:", response.data); // Log the medications
      setMedications(response.data || []);
    } catch (err) {
      console.error(err); // Log the error
      setError({
        message: 'Error fetching medications',
        details: err.response ? err.response.data : err.message
      });
    }
  }, [animalId, healthRecords]);
  const fetchObservations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async animalId => {
    console.log('Fetching observations for Animal ID:', animalId);
    if (!animalId) return;
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/observations`);
      console.log("Fetched observations:", response.data);
      setObservations(response.data || []);
    } catch (err) {
      console.error("Error fetching observations:", err);
      setError({
        message: 'Error fetching observations',
        details: err.response ? err.response.data : err.message
      });
    }
  }, [animalId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (animalId) {
      fetchAnimalDetails();
    } else {
      setError({
        message: 'Invalid animal ID'
      });
      setLoading(false);
    }
  }, [animalId, fetchAnimalDetails]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchMedications();
  }, [healthRecords, fetchMedications]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedHealthRecordId) {
      console.log("Fetching observations for selected health record ID:", selectedHealthRecordId);
      fetchObservations(selectedHealthRecordId);
    }
  }, [selectedHealthRecordId, fetchObservations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (healthRecords.length > 0) {
      setSelectedHealthRecordId(healthRecords[0].id);
    }
  }, [healthRecords]);
  const handleMedicationChange = event => {
    const {
      name,
      value
    } = event.target;
    setSelectedMedication(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to handle editing an observation
  const handleEditObservation = observation => {
    console.log("Editing Observation:", observation);
    setSelectedObservation(observation);
    setObservationDialogVisible(true);
  };

  // Function to submit observation (both create and update)
  const submitObservationUpdate = async () => {
    if (!selectedObservation) return;
    try {
      if (selectedObservation.id) {
        // Update existing observation
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].put(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/observations/${selectedObservation.id}`, {
          note: selectedObservation.note,
          observation_date: selectedObservation.observation_date
        });
      } else {
        // Create new observation
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/observations`, {
          note: selectedObservation.note,
          observation_date: selectedObservation.observation_date
        });
      }
      // Fetch updated observations
      await fetchObservations(animalId);
      setObservationDialogVisible(false);
    } catch (err) {
      console.error('Error details:', err);
      setError({
        message: 'Error updating observation',
        details: err.response ? err.response.data : err.message
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (animalId) {
      fetchAnimalDetails();
    } else {
      setError({
        message: 'Invalid animal ID'
      });
      setLoading(false);
    }
  }, [animalId, fetchAnimalDetails]);
  const handleMedicalUpdateChange = e => {
    setMedicalUpdate({
      ...medicalUpdate,
      [e.target.name]: e.target.value
    });
  };
  const handleObservationChange = e => {
    setSelectedObservation({
      ...selectedObservation,
      [e.target.name]: e.target.value
    });
  };
  const submitHealthRecordUpdate = async recordId => {
    try {
      if (recordId) {
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].put(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/health-records/${recordId}`, {
          health_status: medicalUpdate.healthStatus,
          checkup_date: medicalUpdate.checkupDate,
          lab_results: medicalUpdate.labResults,
          next_checkup_date: medicalUpdate.nextCheckupDate
        });
      } else {
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/health-records`, {
          health_status: medicalUpdate.healthStatus,
          checkup_date: medicalUpdate.checkupDate,
          lab_results: medicalUpdate.labResults,
          next_checkup_date: medicalUpdate.nextCheckupDate
        });
      }
      await fetchAnimalDetails();
      setShowHealthRecordDialog(false);
    } catch (err) {
      setError({
        message: 'Error updating health record',
        details: err.response ? err.response.data : err.message
      });
    }
  };
  const submitMedicationUpdate = async () => {
    if (!selectedMedication || !animalId || !selectedHealthRecordId) return;
    try {
      if (selectedMedication.id) {
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].put(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/medications/${selectedMedication.id}`, {
          medication_name: selectedMedication.medication_name,
          dosage: selectedMedication.dosage,
          frequency: selectedMedication.frequency,
          status: selectedMedication.status,
          start_date: selectedMedication.start_date,
          end_date: selectedMedication.end_date
        });
      } else {
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/medications`, {
          medication_name: selectedMedication.medication_name,
          dosage: selectedMedication.dosage,
          frequency: selectedMedication.frequency,
          status: selectedMedication.status,
          start_date: selectedMedication.start_date,
          end_date: selectedMedication.end_date
        });
      }
      await fetchAnimalDetails();
      setShowMedicationDialog(false);
    } catch (err) {
      setError({
        message: 'Error updating medications',
        details: err.response ? err.response.data : err.message
      });
    }
  };
  const handleDeleteObservationClick = observationId => {
    setObservationToDelete(observationId);
    setShowDeleteConfirmation(true);
  };
  const confirmDeleteObservation = async () => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/observations/${observationToDelete}`);
      await fetchAnimalDetails();
      setShowDeleteConfirmation(false);
      setObservationToDelete(null);
    } catch (err) {
      setError({
        message: 'Error deleting observation',
        details: err.response ? err.response.data : err.message
      });
    }
  };
  const handleDeleteHealthRecord = async recordId => {
    const confirmDelete = window.confirm('Are you sure you want to delete this health record? This action cannot be undone.');
    if (!confirmDelete) {
      return;
    }
    try {
      await axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/health-records/${recordId}`);
      await fetchAnimalDetails();
    } catch (err) {
      setError({
        message: 'Error deleting health record',
        details: err.response ? err.response.data : err.message
      });
    }
  };
  const handleDeleteMedication = medicationId => {
    setMedicationToDelete(medicationId); // Set the medication ID to be deleted
    setShowDeleteConfirmation(true); // Show the confirmation modal
  };

  // Function to confirm deletion
  const confirmDeleteMedication = async () => {
    if (medicationToDelete) {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${animalId}/medications/${medicationToDelete}`);
        await fetchMedications(); // Refresh the medication list after deletion
      } catch (err) {
        setError({
          message: 'Error deleting medication',
          details: err.response ? err.response.data : err.message
        });
      } finally {
        setShowDeleteConfirmation(false); // Hide the confirmation modal
        setMedicationToDelete(null); // Clear the medication ID
      }
    }
  };
  const handleHealthRecordSubmit = async e => {
    e.preventDefault();
    await submitHealthRecordUpdate(selectedHealthRecordId);
  };
  const handleMedicationSubmit = async e => {
    e.preventDefault();
    await submitMedicationUpdate();
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading animal details...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, error.message), error.details && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "error-details"
    }, typeof error.details === 'string' ? error.details : JSON.stringify(error.details)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animal-details-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => navigate('/animals')
  }, "Back to Animal List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animal-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Animal Details"), animal.imgurl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: animal.imgurl,
    alt: animal.name,
    className: "animal-details-image"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "no-image-placeholder"
  }, "No Image Available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, animal.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animal-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animal-details-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Type:"), " ", animal.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Breed:"), " ", animal.breed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Age:"), " ", animal.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Size:"), " ", animal.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Birthdate:"), " ", new Date(animal.birthdate).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animal-details-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Location:"), " ", animal.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Background:"), " ", animal.background), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Personality:"), " ", animal.personality), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Status:"), " ", animal.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Health Records"), healthRecords.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No health records available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Checkup Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Health Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Lab Results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Next Checkup Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, healthRecords.map(record => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: record.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(record.checkup_date), 'MM/dd/yyyy')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, record.health_status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, record.lab_results), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(record.next_checkup_date), 'MM/dd/yyyy')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setSelectedHealthRecordId(record.id);
      setShowHealthRecordDialog(true);
      setMedicalUpdate({
        checkupDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(record.checkup_date), 'yyyy-MM-dd'),
        healthStatus: record.health_status,
        labResults: record.lab_results,
        nextCheckupDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(record.next_checkup_date), 'yyyy-MM-dd')
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-pencil"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteHealthRecord(record.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-trash"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setShowHealthRecordDialog(true);
      setSelectedHealthRecordId(null);
      setMedicalUpdate({
        checkupDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'yyyy-MM-dd'),
        healthStatus: '',
        labResults: '',
        nextCheckupDate: ''
      });
    }
  }, "Update Health Record"), showHealthRecordDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, selectedHealthRecordId ? 'Edit Health Record' : 'Add Health Record'), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleHealthRecordSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Checkup Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "checkupDate",
    value: medicalUpdate.checkupDate,
    onChange: handleMedicalUpdateChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Health Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "healthStatus",
    value: medicalUpdate.healthStatus,
    onChange: handleMedicalUpdateChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Lab Results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "labResults",
    value: medicalUpdate.labResults,
    onChange: handleMedicalUpdateChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Next Checkup Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "nextCheckupDate",
    value: medicalUpdate.nextCheckupDate,
    onChange: handleMedicalUpdateChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setShowHealthRecordDialog(false)
  }, "Cancel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Medications"), medications.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No medications available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Medication Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Dosage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Frequency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Date Started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Date Ended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, medications.map(medication => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: medication.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, medication.medication_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, medication.dosage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, medication.frequency), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, medication.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(medication.start_date), 'MM/dd/yyyy')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, medication.end_date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(medication.end_date), 'MM/dd/yyyy') : 'N/A'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setSelectedMedication(medication);
      setShowMedicationDialog(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-pencil"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteMedication(medication.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-trash"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setShowMedicationDialog(true);
      setSelectedMedication({});
    }
  }, "Add Medication"), showDeleteConfirmation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Are you sure you want to delete this medication? This action cannot be undone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: confirmDeleteMedication
  }, "Yes, Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowDeleteConfirmation(false)
  }, "Cancel"))), showMedicationDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Add Medication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      submitMedicationUpdate();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Medication Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "medication_name",
    value: selectedMedication.medication_name || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Dosage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "dosage",
    value: selectedMedication.dosage || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Frequency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "frequency",
    value: selectedMedication.frequency || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "status",
    value: selectedMedication.status || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "start_date",
    value: selectedMedication.start_date || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "end_date",
    value: selectedMedication.end_date || '',
    onChange: handleMedicationChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setShowMedicationDialog(false)
  }, "Cancel")))), showMedicationDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Add Medication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      submitMedicationUpdate();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Medication Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "medication_name",
    value: selectedMedication.medication_name || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Dosage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "dosage",
    value: selectedMedication.dosage || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Frequency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "frequency",
    value: selectedMedication.frequency || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "status",
    value: selectedMedication.status || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "start_date",
    value: selectedMedication.start_date || '',
    onChange: handleMedicationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "end_date",
    value: selectedMedication.end_date || '',
    onChange: handleMedicationChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setShowMedicationDialog(false)
  }, "Cancel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Observations"), observations.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No observations available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, observations.map(observation => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: observation.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, observation.observation_date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(observation.observation_date), 'MM/dd/yyyy') : 'No Date Available'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, observation.note), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleEditObservation(observation)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-pencil"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteObservationClick(observation.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-trash"
  }))))), showDeleteConfirmation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Are you sure you want to delete this observation? This action cannot be undone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: confirmDeleteObservation
  }, "Yes, Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowDeleteConfirmation(false)
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      setSelectedObservation({});
      setObservationDialogVisible(true);
    }
  }, "Add Observation"), observationDialogVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, selectedObservation.id ? 'Edit Observation' : 'Add Observation'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      submitObservationUpdate();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Observation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "note",
    value: selectedObservation.note || '',
    onChange: handleObservationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "date",
    name: "observation_date",
    value: selectedObservation.observation_date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(selectedObservation.observation_date), 'yyyy-MM-dd') : '',
    onChange: handleObservationChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, selectedObservation.id ? 'Update' : 'Save'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setObservationDialogVisible(false)
  }, "Cancel"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimalDetails);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/AnimalDetailsPage.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/AnimalDetailsPage.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* General Font Styles */
body {
  font-family: Arial, sans-serif; /* Set the font for the entire page */
  line-height: 1.6; /* Improve readability */
}

/* Main container to ensure page scrolls */
html, body {
  height: 100%; /* Ensures that the page takes the full height of the viewport */
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal overflow (side scrolling) */
  overflow-y: auto; /* Allow vertical scrolling */
}

.animal-details-page {
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto; 
}
.animal-box {
  border: 1px solid #ccc; /* Add border */
  border-radius: 8px; /* Rounded corners */
  padding: 16px; /* Inner padding */
  margin: 20px 0; /* Spacing above and below */
  background-color: #f9f9f9; /* Background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
}
/* Box Styling */
.box {
  border: 1px solid #ccc; /* Light border */
  border-radius: 8px; /* Rounded corners */
  background-color: #f9f9f9; /* Light background */
  padding: 20px; /* Internal spacing */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-bottom: 20px; /* Spacing below the box */
}

.animal-details-page h1 {
  font-size: 2.5em; 
  margin-top: 10px;
}

.animal-details-page h2 {
  font-size: 2em; 
  color: #6251A2;
}

/* Back Button Styling */
.animal-details-page button {
  background-color: #624DE3; /* Match your theme color */
  color: white; /* White text for contrast */
  padding: 10px 15px; /* Padding inside the button */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer on hover */
  margin-bottom: 20px; /* Space below the button */
  transition: background-color 0.3s; /* Smooth transition */
}

.animal-details-page button:hover {
  background-color: #5a3db5; /* Darker shade on hover */
}

.animal-details-page h3 {
  color: #6251A2;
}

/* Flexbox for Two Column Layout */
.animal-details-container {
  display: flex;
  flex-wrap: wrap; /* Allows content to wrap if screen is small */
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start; /* Align items to the top of the container */
}

/* Column for Animal Details */
.animal-details-column {
  flex: 1;
}

/* Adjust styling for the image container */
.animal-details-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Make sure the image container is responsive */
  max-width: 350px; /* Set a max width for the image container */
}

/* Styling for the image itself */
.animal-details-image {
  width: 100%;
  max-width: 300px; /* Adjust max-width to keep the image within bounds */
  height: auto; /* Let the height adjust to the image aspect ratio */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

/* Placeholder for when there is no image */
.no-image-placeholder {
  margin-top: 20px;
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border-radius: 10px;
  margin-bottom: 35px;
  font-size: 18px;
}

/* Styling for paragraphs inside each column */
.animal-details-column p {
  margin: 16px 0;
  font-size: 16px;
}

/* Specific styles for the details to ensure text alignment */
.animal-details-column strong {
  display: inline-block;
  width: 100px; /* Adjust the width for label alignment */
  font-weight: bold;
}

/* General Table Styling */
table {
  width: 100%;
  border-collapse: collapse; /* Remove spacing between table borders */
  margin-bottom: 20px; /* Space between tables and other elements */
}

/* Table Header Styling */
thead th {
  background-color: #f4f4f4; /* Light background for headers */
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ddd; /* Solid border between header and body */
  color: #333; /* Darker color for text */
}

/* Table Body Styling */
tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Light border between rows */
  vertical-align: middle; /* Align content vertically */
  color: #555; /* Slightly lighter text color */
}

/* Table Row Hover Effect */
tbody tr:hover {
  background-color: #f9f9f9; /* Subtle hover effect for rows */
}

/* Button Styling inside Table */
table button {
  background-color: #f0f0f0;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #624DE3;
}

table button i {
  margin-right: 5px;
}

table button:hover {
  background-color: #ddd; /* Slight color change on hover */
}

/* Responsive Table Styling */
@media (max-width: 768px) {
  table, thead, tbody, th, td, tr {
      display: block; /* Make table rows and cells block elements on smaller screens */
  }
  
  /* Styling for table headers in small screens */
  thead {
      display: none; /* Hide the table headers */
  }
  
  /* Make table cells behave like rows with labels */
  tbody tr {
      margin-bottom: 10px; /* Add some space between rows */
  }
  
  tbody td {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border: none; /* Remove borders for mobile */
      border-bottom: 1px solid #eee;
  }
  
  tbody td::before {
      content: attr(data-label);
      font-weight: bold;
      color: #666;
  }
}

/* Dialog Overlay */
.dialog-overlay {
  position: fixed; /* Fixed position to cover the entire viewport */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex; /* Use flexbox to center content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  z-index: 1000; /* Ensure it appears above other content */
}

/* Dialog Box */
.dialog-box {
  background-color: white; /* Background for the dialog */
  padding: 20px; /* Padding inside the dialog */
  border-radius: 8px; /* Slightly more rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  width: 400px; /* Set a width for the dialog */
  max-width: 90%; /* Responsive width */
  font-family: Arial, sans-serif; /* Use the same font as animal details page */
}

/* Dialog Title */
.dialog-box h4 {
  margin-bottom: 15px; /* Spacing below the title */
  font-size: 1.5em; /* Adjust title size */
  text-align: center; /* Center the title */
  color: #6251A2;
}

/* Dialog Form Styling */
.dialog-box form {
  display: flex; /* Use flexbox for form layout */
  flex-direction: column; /* Stack inputs vertically */
}

/* Form Group */
.dialog-box .form-group {
  display: flex; 
  flex-direction: column;
  margin-bottom: 15px; 
}

/* Label Styles */
.dialog-box label {
  margin-bottom: 5px; 
  font-weight: bold;
}

/* Input Styles */
.dialog-box input {
  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 5px; 
  width: 100%; 
  box-sizing: border-box;
}

/* Button Styling in Dialog */
.dialog-box button {
  padding: 10px; /* Padding inside buttons */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners for buttons */
  cursor: pointer; /* Pointer on hover */
  margin-top: 10px; /* Space above buttons */
  transition: background-color 0.3s; /* Smooth background transition */
  width: 100%; /* Ensure buttons take full width */
}

.dialog-box button[type="submit"] {
  background-color: #f0f0f0; /* Match button background */
  color: #624DE3; /* Button text color */
}

.dialog-box button[type="button"] {
  background-color: #f44336; /* Red background for cancel button */
  color: white; /* White text */
}

.dialog-box button:hover {
  opacity: 0.9; /* Slight transparency on hover */
}
`, "",{"version":3,"sources":["webpack://./src/style/AnimalDetailsPage.css"],"names":[],"mappings":"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","sourcesContent":["/* General Font Styles */\nbody {\n  font-family: Arial, sans-serif; /* Set the font for the entire page */\n  line-height: 1.6; /* Improve readability */\n}\n\n/* Main container to ensure page scrolls */\nhtml, body {\n  height: 100%; /* Ensures that the page takes the full height of the viewport */\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; /* Prevent horizontal overflow (side scrolling) */\n  overflow-y: auto; /* Allow vertical scrolling */\n}\n\n.animal-details-page {\n  padding: 20px;\n  min-height: 100vh;\n  box-sizing: border-box;\n  overflow-y: auto; \n}\n.animal-box {\n  border: 1px solid #ccc; /* Add border */\n  border-radius: 8px; /* Rounded corners */\n  padding: 16px; /* Inner padding */\n  margin: 20px 0; /* Spacing above and below */\n  background-color: #f9f9f9; /* Background color */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */\n}\n/* Box Styling */\n.box {\n  border: 1px solid #ccc; /* Light border */\n  border-radius: 8px; /* Rounded corners */\n  background-color: #f9f9f9; /* Light background */\n  padding: 20px; /* Internal spacing */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */\n  margin-bottom: 20px; /* Spacing below the box */\n}\n\n.animal-details-page h1 {\n  font-size: 2.5em; \n  margin-top: 10px;\n}\n\n.animal-details-page h2 {\n  font-size: 2em; \n  color: #6251A2;\n}\n\n/* Back Button Styling */\n.animal-details-page button {\n  background-color: #624DE3; /* Match your theme color */\n  color: white; /* White text for contrast */\n  padding: 10px 15px; /* Padding inside the button */\n  border: none; /* Remove default border */\n  border-radius: 5px; /* Rounded corners */\n  cursor: pointer; /* Pointer on hover */\n  margin-bottom: 20px; /* Space below the button */\n  transition: background-color 0.3s; /* Smooth transition */\n}\n\n.animal-details-page button:hover {\n  background-color: #5a3db5; /* Darker shade on hover */\n}\n\n.animal-details-page h3 {\n  color: #6251A2;\n}\n\n/* Flexbox for Two Column Layout */\n.animal-details-container {\n  display: flex;\n  flex-wrap: wrap; /* Allows content to wrap if screen is small */\n  justify-content: space-between;\n  gap: 20px;\n  align-items: flex-start; /* Align items to the top of the container */\n}\n\n/* Column for Animal Details */\n.animal-details-column {\n  flex: 1;\n}\n\n/* Adjust styling for the image container */\n.animal-details-image-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%; /* Make sure the image container is responsive */\n  max-width: 350px; /* Set a max width for the image container */\n}\n\n/* Styling for the image itself */\n.animal-details-image {\n  width: 100%;\n  max-width: 300px; /* Adjust max-width to keep the image within bounds */\n  height: auto; /* Let the height adjust to the image aspect ratio */\n  object-fit: cover;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n/* Placeholder for when there is no image */\n.no-image-placeholder {\n  margin-top: 20px;\n  width: 200px;\n  height: 200px;\n  background-color: #f0f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  border-radius: 10px;\n  margin-bottom: 35px;\n  font-size: 18px;\n}\n\n/* Styling for paragraphs inside each column */\n.animal-details-column p {\n  margin: 16px 0;\n  font-size: 16px;\n}\n\n/* Specific styles for the details to ensure text alignment */\n.animal-details-column strong {\n  display: inline-block;\n  width: 100px; /* Adjust the width for label alignment */\n  font-weight: bold;\n}\n\n/* General Table Styling */\ntable {\n  width: 100%;\n  border-collapse: collapse; /* Remove spacing between table borders */\n  margin-bottom: 20px; /* Space between tables and other elements */\n}\n\n/* Table Header Styling */\nthead th {\n  background-color: #f4f4f4; /* Light background for headers */\n  font-weight: bold;\n  padding: 10px;\n  text-align: left;\n  border-bottom: 2px solid #ddd; /* Solid border between header and body */\n  color: #333; /* Darker color for text */\n}\n\n/* Table Body Styling */\ntbody td {\n  padding: 10px;\n  border-bottom: 1px solid #ddd; /* Light border between rows */\n  vertical-align: middle; /* Align content vertically */\n  color: #555; /* Slightly lighter text color */\n}\n\n/* Table Row Hover Effect */\ntbody tr:hover {\n  background-color: #f9f9f9; /* Subtle hover effect for rows */\n}\n\n/* Button Styling inside Table */\ntable button {\n  background-color: #f0f0f0;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #624DE3;\n}\n\ntable button i {\n  margin-right: 5px;\n}\n\ntable button:hover {\n  background-color: #ddd; /* Slight color change on hover */\n}\n\n/* Responsive Table Styling */\n@media (max-width: 768px) {\n  table, thead, tbody, th, td, tr {\n      display: block; /* Make table rows and cells block elements on smaller screens */\n  }\n  \n  /* Styling for table headers in small screens */\n  thead {\n      display: none; /* Hide the table headers */\n  }\n  \n  /* Make table cells behave like rows with labels */\n  tbody tr {\n      margin-bottom: 10px; /* Add some space between rows */\n  }\n  \n  tbody td {\n      display: flex;\n      justify-content: space-between;\n      padding: 10px;\n      border: none; /* Remove borders for mobile */\n      border-bottom: 1px solid #eee;\n  }\n  \n  tbody td::before {\n      content: attr(data-label);\n      font-weight: bold;\n      color: #666;\n  }\n}\n\n/* Dialog Overlay */\n.dialog-overlay {\n  position: fixed; /* Fixed position to cover the entire viewport */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */\n  display: flex; /* Use flexbox to center content */\n  justify-content: center; /* Center horizontally */\n  align-items: center; /* Center vertically */\n  z-index: 1000; /* Ensure it appears above other content */\n}\n\n/* Dialog Box */\n.dialog-box {\n  background-color: white; /* Background for the dialog */\n  padding: 20px; /* Padding inside the dialog */\n  border-radius: 8px; /* Slightly more rounded corners */\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Shadow for depth */\n  width: 400px; /* Set a width for the dialog */\n  max-width: 90%; /* Responsive width */\n  font-family: Arial, sans-serif; /* Use the same font as animal details page */\n}\n\n/* Dialog Title */\n.dialog-box h4 {\n  margin-bottom: 15px; /* Spacing below the title */\n  font-size: 1.5em; /* Adjust title size */\n  text-align: center; /* Center the title */\n  color: #6251A2;\n}\n\n/* Dialog Form Styling */\n.dialog-box form {\n  display: flex; /* Use flexbox for form layout */\n  flex-direction: column; /* Stack inputs vertically */\n}\n\n/* Form Group */\n.dialog-box .form-group {\n  display: flex; \n  flex-direction: column;\n  margin-bottom: 15px; \n}\n\n/* Label Styles */\n.dialog-box label {\n  margin-bottom: 5px; \n  font-weight: bold;\n}\n\n/* Input Styles */\n.dialog-box input {\n  padding: 10px;\n  border: 1px solid #ccc; \n  border-radius: 5px; \n  width: 100%; \n  box-sizing: border-box;\n}\n\n/* Button Styling in Dialog */\n.dialog-box button {\n  padding: 10px; /* Padding inside buttons */\n  border: none; /* Remove default border */\n  border-radius: 5px; /* Rounded corners for buttons */\n  cursor: pointer; /* Pointer on hover */\n  margin-top: 10px; /* Space above buttons */\n  transition: background-color 0.3s; /* Smooth background transition */\n  width: 100%; /* Ensure buttons take full width */\n}\n\n.dialog-box button[type=\"submit\"] {\n  background-color: #f0f0f0; /* Match button background */\n  color: #624DE3; /* Button text color */\n}\n\n.dialog-box button[type=\"button\"] {\n  background-color: #f44336; /* Red background for cancel button */\n  color: white; /* White text */\n}\n\n.dialog-box button:hover {\n  opacity: 0.9; /* Slight transparency on hover */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/AnimalDetailsPage.css":
/*!*****************************************!*\
  !*** ./src/style/AnimalDetailsPage.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./AnimalDetailsPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/AnimalDetailsPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AnimalDetailsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfQW5pbWFsRGV0YWlsc1BhZ2VfanMuMTM1Y2Q2OTJkMDBiMDBhODRiOGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDdEM7QUFDbUI7QUFDWDtBQUNNO0FBQ087QUFDQTtBQUUvQyxNQUFNUSxhQUFhLEdBQUdBLENBQUEsS0FBTTtFQUMxQixNQUFNQyxRQUFRLEdBQUdGLDZEQUFXLENBQUMsQ0FBQztFQUM5QixNQUFNO0lBQUVHLEVBQUUsRUFBRUM7RUFBUyxDQUFDLEdBQUdOLDJEQUFTLENBQUMsQ0FBQztFQUNwQyxNQUFNLENBQUNPLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQzFDLE1BQU0sQ0FBQ1ksYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN0RCxNQUFNLENBQUNjLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdmLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU0sQ0FBQ2dCLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUM1QyxNQUFNLENBQUNrQixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDeEMsTUFBTSxDQUFDb0IsWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR3JCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3BELE1BQU0sQ0FBQ3NCLHdCQUF3QixFQUFFQywyQkFBMkIsQ0FBQyxHQUFHdkIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7RUFDL0UsTUFBTSxDQUFDd0IsbUJBQW1CLEVBQUVDLHNCQUFzQixDQUFDLEdBQUd6QiwrQ0FBUSxDQUFDLElBQUksQ0FBQztFQUNwRSxNQUFNLENBQUMwQixtQkFBbUIsRUFBRUMsc0JBQXNCLENBQUMsR0FBRzNCLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQ3BF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TSxZQUFZLE1BQU0sd0JBQXdCLHlCQUF5Qix5QkFBeUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLHdCQUF3Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLHNCQUFzQixhQUFhLFdBQVcsd0JBQXdCLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsdUJBQXVCLHlCQUF5QixPQUFPLFlBQVksTUFBTSxVQUFVLHdCQUF3Qix1QkFBdUIsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLHVCQUF1QixhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsd0JBQXdCLHlCQUF5QixPQUFPLFlBQVksTUFBTSx3QkFBd0IsYUFBYSxXQUFXLFlBQVkseUJBQXlCLHVCQUF1QixPQUFPLFlBQVksTUFBTSxVQUFVLHdCQUF3Qix5QkFBeUIsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssd0JBQXdCLE9BQU8sWUFBWSxNQUFNLEtBQUssc0JBQXNCLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLHNCQUFzQixhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLHNCQUFzQixXQUFXLFVBQVUsVUFBVSxVQUFVLHdCQUF3Qix1QkFBdUIs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REFBd0QsbUJBQW1CLDhDQUE4QyxtREFBbUQsc0RBQXNELDRDQUE0QyxnRUFBZ0UsbURBQW1ELHVDQUF1Qyx5Q0FBeUMsK0JBQStCLGlEQUFpRCwwQkFBMEIseUNBQXlDLCtCQUErQix3REFBd0QsbUJBQW1CLDhCQUE4QixrQkFBa0IscUNBQXFDLHFCQUFxQjtBQUNqMFc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1U3ZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtIO0FBQ2xIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0dBQU87Ozs7QUFJNEQ7QUFDcEYsT0FBTyxpRUFBZSxrR0FBTyxJQUFJLGtHQUFPLFVBQVUsa0dBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9BbmltYWxEZXRhaWxzUGFnZS5qcyIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvQW5pbWFsRGV0YWlsc1BhZ2UuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9BbmltYWxEZXRhaWxzUGFnZS5jc3M/NmI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgJy4uL3N0eWxlL0FuaW1hbERldGFpbHNQYWdlLmNzcyc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQW5pbWFsRGV0YWlscyA9ICgpID0+IHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCB7IGlkOiBhbmltYWxJZCB9ID0gdXNlUGFyYW1zKCk7IFxuICBjb25zdCBbYW5pbWFsLCBzZXRBbmltYWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtoZWFsdGhSZWNvcmRzLCBzZXRIZWFsdGhSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW21lZGljYXRpb25zLCBzZXRNZWRpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbb2JzZXJ2YXRpb25zLCBzZXRPYnNlcnZhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbb2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlLCBzZXRPYnNlcnZhdGlvbkRpYWxvZ1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRPYnNlcnZhdGlvbiwgc2V0U2VsZWN0ZWRPYnNlcnZhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW29ic2VydmF0aW9uVG9EZWxldGUsIHNldE9ic2VydmF0aW9uVG9EZWxldGVdID0gdXNlU3RhdGUobnVsbCk7IFxuICBjb25zdCBbbWVkaWNhbFVwZGF0ZSwgc2V0TWVkaWNhbFVwZGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgY2hlY2t1cERhdGU6IGZvcm1hdChuZXcgRGF0ZSgpLCAneXl5eS1NTS1kZCcpLFxuICAgIGhlYWx0aFN0YXR1czogJycsXG4gICAgbGFiUmVzdWx0czogJycsXG4gICAgbmV4dENoZWNrdXBEYXRlOiAnJyxcbiAgICBvYnNlcnZhdGlvbnM6ICcnLFxuICB9KTtcblxuICBjb25zdCBbc2hvd0hlYWx0aFJlY29yZERpYWxvZywgc2V0U2hvd0hlYWx0aFJlY29yZERpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TWVkaWNhdGlvbkRpYWxvZywgc2V0U2hvd01lZGljYXRpb25EaWFsb2ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRNZWRpY2F0aW9uLCBzZXRTZWxlY3RlZE1lZGljYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZEhlYWx0aFJlY29yZElkLCBzZXRTZWxlY3RlZEhlYWx0aFJlY29yZElkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd0RlbGV0ZUNvbmZpcm1hdGlvbiwgc2V0U2hvd0RlbGV0ZUNvbmZpcm1hdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZWRpY2F0aW9uVG9EZWxldGUsIHNldE1lZGljYXRpb25Ub0RlbGV0ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBmZXRjaEFuaW1hbERldGFpbHMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2FuaW1hbHMvJHthbmltYWxJZH1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBhbmltYWwgZGV0YWlsczpcIiwgcmVzcG9uc2UuZGF0YSk7IFxuICAgICAgICBzZXRBbmltYWwocmVzcG9uc2UuZGF0YS5hbmltYWwgfHwge30pO1xuICAgICAgICBzZXRIZWFsdGhSZWNvcmRzKHJlc3BvbnNlLmRhdGEuaGVhbHRoUmVjb3JkcyB8fCBbXSk7XG4gICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IFxuICAgICAgICBzZXRFcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgYW5pbWFsIGRldGFpbHMnLFxuICAgICAgICAgICAgZGV0YWlsczogZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLmRhdGEgOiBlcnIubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxufSwgW2FuaW1hbElkXSk7XG5cbmNvbnN0IGZldGNoTWVkaWNhdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGhlYWx0aFJlY29yZHMubGVuZ3RoID09PSAwKSByZXR1cm47IFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9tZWRpY2F0aW9uc2BcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIG1lZGljYXRpb25zOlwiLCByZXNwb25zZS5kYXRhKTsgLy8gTG9nIHRoZSBtZWRpY2F0aW9uc1xuICAgICAgICBzZXRNZWRpY2F0aW9ucyhyZXNwb25zZS5kYXRhIHx8IFtdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyBMb2cgdGhlIGVycm9yXG4gICAgICAgIHNldEVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBmZXRjaGluZyBtZWRpY2F0aW9ucycsXG4gICAgICAgICAgICBkZXRhaWxzOiBlcnIucmVzcG9uc2UgPyBlcnIucmVzcG9uc2UuZGF0YSA6IGVyci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICB9XG59LCBbYW5pbWFsSWQsIGhlYWx0aFJlY29yZHNdKTtcblxuY29uc3QgZmV0Y2hPYnNlcnZhdGlvbnMgPSB1c2VDYWxsYmFjayhhc3luYyAoYW5pbWFsSWQpID0+IHtcbiAgY29uc29sZS5sb2coJ0ZldGNoaW5nIG9ic2VydmF0aW9ucyBmb3IgQW5pbWFsIElEOicsIGFuaW1hbElkKTtcbiAgaWYgKCFhbmltYWxJZCkgcmV0dXJuO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2FuaW1hbHMvJHthbmltYWxJZH0vb2JzZXJ2YXRpb25zYCk7XG4gICAgY29uc29sZS5sb2coXCJGZXRjaGVkIG9ic2VydmF0aW9uczpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgc2V0T2JzZXJ2YXRpb25zKHJlc3BvbnNlLmRhdGEgfHwgW10pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb2JzZXJ2YXRpb25zOlwiLCBlcnIpO1xuICAgIHNldEVycm9yKHsgbWVzc2FnZTogJ0Vycm9yIGZldGNoaW5nIG9ic2VydmF0aW9ucycsIGRldGFpbHM6IGVyci5yZXNwb25zZSA/IGVyci5yZXNwb25zZS5kYXRhIDogZXJyLm1lc3NhZ2UgfSk7XG4gIH1cbn0sIFxuIFthbmltYWxJZF0pO1xudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKGFuaW1hbElkKSB7XG4gICAgZmV0Y2hBbmltYWxEZXRhaWxzKCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0RXJyb3IoeyBtZXNzYWdlOiAnSW52YWxpZCBhbmltYWwgSUQnIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG59LCBbYW5pbWFsSWQsIGZldGNoQW5pbWFsRGV0YWlsc10pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBmZXRjaE1lZGljYXRpb25zKCk7XG59LCBbaGVhbHRoUmVjb3JkcywgZmV0Y2hNZWRpY2F0aW9uc10pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBpZiAoc2VsZWN0ZWRIZWFsdGhSZWNvcmRJZCkge1xuICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgb2JzZXJ2YXRpb25zIGZvciBzZWxlY3RlZCBoZWFsdGggcmVjb3JkIElEOlwiLCBzZWxlY3RlZEhlYWx0aFJlY29yZElkKTtcbiAgICBmZXRjaE9ic2VydmF0aW9ucyhzZWxlY3RlZEhlYWx0aFJlY29yZElkKTtcbiAgfVxufSwgW3NlbGVjdGVkSGVhbHRoUmVjb3JkSWQsIGZldGNoT2JzZXJ2YXRpb25zXSk7XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmIChoZWFsdGhSZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICBzZXRTZWxlY3RlZEhlYWx0aFJlY29yZElkKGhlYWx0aFJlY29yZHNbMF0uaWQpOyBcbiAgfVxufSwgW2hlYWx0aFJlY29yZHNdKTtcblxuXG5jb25zdCBoYW5kbGVNZWRpY2F0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgc2V0U2VsZWN0ZWRNZWRpY2F0aW9uKChwcmV2KSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gIH0pKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBlZGl0aW5nIGFuIG9ic2VydmF0aW9uXG5jb25zdCBoYW5kbGVFZGl0T2JzZXJ2YXRpb24gPSAob2JzZXJ2YXRpb24pID0+IHtcbiAgY29uc29sZS5sb2coXCJFZGl0aW5nIE9ic2VydmF0aW9uOlwiLCBvYnNlcnZhdGlvbik7XG4gIHNldFNlbGVjdGVkT2JzZXJ2YXRpb24ob2JzZXJ2YXRpb24pOyBcbiAgc2V0T2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlKHRydWUpOyBcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHN1Ym1pdCBvYnNlcnZhdGlvbiAoYm90aCBjcmVhdGUgYW5kIHVwZGF0ZSlcbmNvbnN0IHN1Ym1pdE9ic2VydmF0aW9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIXNlbGVjdGVkT2JzZXJ2YXRpb24pIHJldHVybjtcbiAgdHJ5IHtcbiAgICBpZiAoc2VsZWN0ZWRPYnNlcnZhdGlvbi5pZCkge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIG9ic2VydmF0aW9uXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9vYnNlcnZhdGlvbnMvJHtzZWxlY3RlZE9ic2VydmF0aW9uLmlkfWAsIHtcbiAgICAgICAgbm90ZTogc2VsZWN0ZWRPYnNlcnZhdGlvbi5ub3RlLFxuICAgICAgICBvYnNlcnZhdGlvbl9kYXRlOiBzZWxlY3RlZE9ic2VydmF0aW9uLm9ic2VydmF0aW9uX2RhdGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIG5ldyBvYnNlcnZhdGlvblxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hbmltYWxzLyR7YW5pbWFsSWR9L29ic2VydmF0aW9uc2AsIHtcbiAgICAgICAgbm90ZTogc2VsZWN0ZWRPYnNlcnZhdGlvbi5ub3RlLFxuICAgICAgICBvYnNlcnZhdGlvbl9kYXRlOiBzZWxlY3RlZE9ic2VydmF0aW9uLm9ic2VydmF0aW9uX2RhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gRmV0Y2ggdXBkYXRlZCBvYnNlcnZhdGlvbnNcbiAgICBhd2FpdCBmZXRjaE9ic2VydmF0aW9ucyhhbmltYWxJZCk7IFxuICAgIHNldE9ic2VydmF0aW9uRGlhbG9nVmlzaWJsZShmYWxzZSk7IFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXRhaWxzOicsIGVycik7IFxuICAgIHNldEVycm9yKHsgXG4gICAgICBtZXNzYWdlOiAnRXJyb3IgdXBkYXRpbmcgb2JzZXJ2YXRpb24nLCBcbiAgICAgIGRldGFpbHM6IGVyci5yZXNwb25zZSA/IGVyci5yZXNwb25zZS5kYXRhIDogZXJyLm1lc3NhZ2UgXG4gICAgfSk7XG4gIH1cbn07XG5cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgaWYgKGFuaW1hbElkKSB7XG4gICAgZmV0Y2hBbmltYWxEZXRhaWxzKCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0RXJyb3IoeyBtZXNzYWdlOiAnSW52YWxpZCBhbmltYWwgSUQnIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG59LCBbYW5pbWFsSWQsIGZldGNoQW5pbWFsRGV0YWlsc10pO1xuXG4gIGNvbnN0IGhhbmRsZU1lZGljYWxVcGRhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE1lZGljYWxVcGRhdGUoeyAuLi5tZWRpY2FsVXBkYXRlLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVPYnNlcnZhdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPYnNlcnZhdGlvbih7XG4gICAgICAuLi5zZWxlY3RlZE9ic2VydmF0aW9uLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0SGVhbHRoUmVjb3JkVXBkYXRlID0gYXN5bmMgKHJlY29yZElkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyZWNvcmRJZCkge1xuICAgICAgICBhd2FpdCBheGlvcy5wdXQoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9oZWFsdGgtcmVjb3Jkcy8ke3JlY29yZElkfWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhbHRoX3N0YXR1czogbWVkaWNhbFVwZGF0ZS5oZWFsdGhTdGF0dXMsXG4gICAgICAgICAgICBjaGVja3VwX2RhdGU6IG1lZGljYWxVcGRhdGUuY2hlY2t1cERhdGUsXG4gICAgICAgICAgICBsYWJfcmVzdWx0czogbWVkaWNhbFVwZGF0ZS5sYWJSZXN1bHRzLFxuICAgICAgICAgICAgbmV4dF9jaGVja3VwX2RhdGU6IG1lZGljYWxVcGRhdGUubmV4dENoZWNrdXBEYXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9oZWFsdGgtcmVjb3Jkc2AsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhbHRoX3N0YXR1czogbWVkaWNhbFVwZGF0ZS5oZWFsdGhTdGF0dXMsXG4gICAgICAgICAgICBjaGVja3VwX2RhdGU6IG1lZGljYWxVcGRhdGUuY2hlY2t1cERhdGUsXG4gICAgICAgICAgICBsYWJfcmVzdWx0czogbWVkaWNhbFVwZGF0ZS5sYWJSZXN1bHRzLFxuICAgICAgICAgICAgbmV4dF9jaGVja3VwX2RhdGU6IG1lZGljYWxVcGRhdGUubmV4dENoZWNrdXBEYXRlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGZldGNoQW5pbWFsRGV0YWlscygpOyBcbiAgICAgIHNldFNob3dIZWFsdGhSZWNvcmREaWFsb2coZmFsc2UpOyBcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHVwZGF0aW5nIGhlYWx0aCByZWNvcmQnLFxuICAgICAgICBkZXRhaWxzOiBlcnIucmVzcG9uc2UgPyBlcnIucmVzcG9uc2UuZGF0YSA6IGVyci5tZXNzYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzdWJtaXRNZWRpY2F0aW9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRNZWRpY2F0aW9uIHx8ICFhbmltYWxJZCB8fCAhc2VsZWN0ZWRIZWFsdGhSZWNvcmRJZCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkTWVkaWNhdGlvbi5pZCkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KFxuICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2FuaW1hbHMvJHthbmltYWxJZH0vbWVkaWNhdGlvbnMvJHtzZWxlY3RlZE1lZGljYXRpb24uaWR9YCxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGljYXRpb25fbmFtZTogc2VsZWN0ZWRNZWRpY2F0aW9uLm1lZGljYXRpb25fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZG9zYWdlOiBzZWxlY3RlZE1lZGljYXRpb24uZG9zYWdlLFxuICAgICAgICAgICAgICAgICAgICBmcmVxdWVuY3k6IHNlbGVjdGVkTWVkaWNhdGlvbi5mcmVxdWVuY3ksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc2VsZWN0ZWRNZWRpY2F0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc2VsZWN0ZWRNZWRpY2F0aW9uLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBzZWxlY3RlZE1lZGljYXRpb24uZW5kX2RhdGUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9tZWRpY2F0aW9uc2AsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZWRpY2F0aW9uX25hbWU6IHNlbGVjdGVkTWVkaWNhdGlvbi5tZWRpY2F0aW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRvc2FnZTogc2VsZWN0ZWRNZWRpY2F0aW9uLmRvc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgZnJlcXVlbmN5OiBzZWxlY3RlZE1lZGljYXRpb24uZnJlcXVlbmN5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHNlbGVjdGVkTWVkaWNhdGlvbi5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHNlbGVjdGVkTWVkaWNhdGlvbi5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogc2VsZWN0ZWRNZWRpY2F0aW9uLmVuZF9kYXRlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZmV0Y2hBbmltYWxEZXRhaWxzKCk7IFxuICAgICAgICBzZXRTaG93TWVkaWNhdGlvbkRpYWxvZyhmYWxzZSk7IFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgdXBkYXRpbmcgbWVkaWNhdGlvbnMnLFxuICAgICAgICAgICAgZGV0YWlsczogZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLmRhdGEgOiBlcnIubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlRGVsZXRlT2JzZXJ2YXRpb25DbGljayA9IChvYnNlcnZhdGlvbklkKSA9PiB7XG4gIHNldE9ic2VydmF0aW9uVG9EZWxldGUob2JzZXJ2YXRpb25JZCk7IFxuICBzZXRTaG93RGVsZXRlQ29uZmlybWF0aW9uKHRydWUpOyAgICAgIFxufTtcblxuY29uc3QgY29uZmlybURlbGV0ZU9ic2VydmF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hbmltYWxzLyR7YW5pbWFsSWR9L29ic2VydmF0aW9ucy8ke29ic2VydmF0aW9uVG9EZWxldGV9YCk7XG4gICAgYXdhaXQgZmV0Y2hBbmltYWxEZXRhaWxzKCk7IFxuICAgIHNldFNob3dEZWxldGVDb25maXJtYXRpb24oZmFsc2UpOyBcbiAgICBzZXRPYnNlcnZhdGlvblRvRGVsZXRlKG51bGwpOyBcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc2V0RXJyb3Ioe1xuICAgICAgbWVzc2FnZTogJ0Vycm9yIGRlbGV0aW5nIG9ic2VydmF0aW9uJyxcbiAgICAgIGRldGFpbHM6IGVyci5yZXNwb25zZSA/IGVyci5yZXNwb25zZS5kYXRhIDogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG4gIGNvbnN0IGhhbmRsZURlbGV0ZUhlYWx0aFJlY29yZCA9IGFzeW5jIChyZWNvcmRJZCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpcm1EZWxldGUgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGhlYWx0aCByZWNvcmQ/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuJyk7XG4gICAgaWYgKCFjb25maXJtRGVsZXRlKSB7XG4gICAgICByZXR1cm47IFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2FuaW1hbHMvJHthbmltYWxJZH0vaGVhbHRoLXJlY29yZHMvJHtyZWNvcmRJZH1gKTtcbiAgICAgIGF3YWl0IGZldGNoQW5pbWFsRGV0YWlscygpOyAgXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6ICdFcnJvciBkZWxldGluZyBoZWFsdGggcmVjb3JkJyxcbiAgICAgICAgZGV0YWlsczogZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLmRhdGEgOiBlcnIubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU1lZGljYXRpb24gPSAobWVkaWNhdGlvbklkKSA9PiB7XG4gICAgc2V0TWVkaWNhdGlvblRvRGVsZXRlKG1lZGljYXRpb25JZCk7IC8vIFNldCB0aGUgbWVkaWNhdGlvbiBJRCB0byBiZSBkZWxldGVkXG4gICAgc2V0U2hvd0RlbGV0ZUNvbmZpcm1hdGlvbih0cnVlKTsgLy8gU2hvdyB0aGUgY29uZmlybWF0aW9uIG1vZGFsXG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gY29uZmlybSBkZWxldGlvblxuICBjb25zdCBjb25maXJtRGVsZXRlTWVkaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobWVkaWNhdGlvblRvRGVsZXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2FuaW1hbElkfS9tZWRpY2F0aW9ucy8ke21lZGljYXRpb25Ub0RlbGV0ZX1gXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoTWVkaWNhdGlvbnMoKTsgLy8gUmVmcmVzaCB0aGUgbWVkaWNhdGlvbiBsaXN0IGFmdGVyIGRlbGV0aW9uXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBkZWxldGluZyBtZWRpY2F0aW9uJyxcbiAgICAgICAgICBkZXRhaWxzOiBlcnIucmVzcG9uc2UgPyBlcnIucmVzcG9uc2UuZGF0YSA6IGVyci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFNob3dEZWxldGVDb25maXJtYXRpb24oZmFsc2UpOyAvLyBIaWRlIHRoZSBjb25maXJtYXRpb24gbW9kYWxcbiAgICAgICAgc2V0TWVkaWNhdGlvblRvRGVsZXRlKG51bGwpOyAvLyBDbGVhciB0aGUgbWVkaWNhdGlvbiBJRFxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlSGVhbHRoUmVjb3JkU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgc3VibWl0SGVhbHRoUmVjb3JkVXBkYXRlKHNlbGVjdGVkSGVhbHRoUmVjb3JkSWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVNZWRpY2F0aW9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgIGF3YWl0IHN1Ym1pdE1lZGljYXRpb25VcGRhdGUoKTtcbiAgfTsgIFxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBhbmltYWwgZGV0YWlscy4uLjwvZGl2PjtcbiAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICB7ZXJyb3IuZGV0YWlscyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIHt0eXBlb2YgZXJyb3IuZGV0YWlscyA9PT0gJ3N0cmluZycgPyBlcnJvci5kZXRhaWxzIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IuZGV0YWlscyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWFsLWRldGFpbHMtcGFnZVwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2FuaW1hbHMnKX0+QmFjayB0byBBbmltYWwgTGlzdDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYWwtYm94XCI+XG4gIDxoMT5BbmltYWwgRGV0YWlsczwvaDE+XG4gIHthbmltYWwuaW1ndXJsID8gKFxuICAgIDxpbWcgc3JjPXthbmltYWwuaW1ndXJsfSBhbHQ9e2FuaW1hbC5uYW1lfSBjbGFzc05hbWU9XCJhbmltYWwtZGV0YWlscy1pbWFnZVwiIC8+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuby1pbWFnZS1wbGFjZWhvbGRlclwiPk5vIEltYWdlIEF2YWlsYWJsZTwvZGl2PlxuICApfVxuICBcbiAgPGgyPnthbmltYWwubmFtZX08L2gyPlxuICBcbiAgPGRpdiBjbGFzc05hbWU9XCJhbmltYWwtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICB7LyogQ29sdW1uIDEgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYWwtZGV0YWlscy1jb2x1bW5cIj5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlR5cGU6PC9zdHJvbmc+IHthbmltYWwudHlwZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPkJyZWVkOjwvc3Ryb25nPiB7YW5pbWFsLmJyZWVkfVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxzdHJvbmc+QWdlOjwvc3Ryb25nPiB7YW5pbWFsLmFnZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlNpemU6PC9zdHJvbmc+IHthbmltYWwuc2l6ZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPkJpcnRoZGF0ZTo8L3N0cm9uZz4ge25ldyBEYXRlKGFuaW1hbC5iaXJ0aGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIHsvKiBDb2x1bW4gMiAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hbC1kZXRhaWxzLWNvbHVtblwiPlxuICAgICAgPHA+XG4gICAgICAgIDxzdHJvbmc+TG9jYXRpb246PC9zdHJvbmc+IHthbmltYWwubG9jYXRpb259XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5CYWNrZ3JvdW5kOjwvc3Ryb25nPiB7YW5pbWFsLmJhY2tncm91bmR9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5QZXJzb25hbGl0eTo8L3N0cm9uZz4ge2FuaW1hbC5wZXJzb25hbGl0eX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlN0YXR1czo8L3N0cm9uZz4ge2FuaW1hbC5zdGF0dXN9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgPGgzPkhlYWx0aCBSZWNvcmRzPC9oMz5cbiAge2hlYWx0aFJlY29yZHMubGVuZ3RoID09PSAwID8gKFxuICAgIDxwPk5vIGhlYWx0aCByZWNvcmRzIGF2YWlsYWJsZS48L3A+XG4gICkgOiAoXG4gICAgPHRhYmxlPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPkNoZWNrdXAgRGF0ZTwvdGg+XG4gICAgICAgICAgPHRoPkhlYWx0aCBTdGF0dXM8L3RoPlxuICAgICAgICAgIDx0aD5MYWIgUmVzdWx0czwvdGg+XG4gICAgICAgICAgPHRoPk5leHQgQ2hlY2t1cCBEYXRlPC90aD5cbiAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICB7aGVhbHRoUmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gKFxuICAgIDx0ciBrZXk9e3JlY29yZC5pZH0+XG4gICAgICA8dGQ+e2Zvcm1hdChuZXcgRGF0ZShyZWNvcmQuY2hlY2t1cF9kYXRlKSwgJ01NL2RkL3l5eXknKX08L3RkPlxuICAgICAgPHRkPntyZWNvcmQuaGVhbHRoX3N0YXR1c308L3RkPlxuICAgICAgPHRkPntyZWNvcmQubGFiX3Jlc3VsdHN9PC90ZD5cbiAgICAgIDx0ZD57Zm9ybWF0KG5ldyBEYXRlKHJlY29yZC5uZXh0X2NoZWNrdXBfZGF0ZSksICdNTS9kZC95eXl5Jyl9PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSGVhbHRoUmVjb3JkSWQocmVjb3JkLmlkKTsgXG4gICAgICAgICAgICBzZXRTaG93SGVhbHRoUmVjb3JkRGlhbG9nKHRydWUpO1xuICAgICAgICAgICAgc2V0TWVkaWNhbFVwZGF0ZSh7XG4gICAgICAgICAgICAgIGNoZWNrdXBEYXRlOiBmb3JtYXQobmV3IERhdGUocmVjb3JkLmNoZWNrdXBfZGF0ZSksICd5eXl5LU1NLWRkJyksXG4gICAgICAgICAgICAgIGhlYWx0aFN0YXR1czogcmVjb3JkLmhlYWx0aF9zdGF0dXMsXG4gICAgICAgICAgICAgIGxhYlJlc3VsdHM6IHJlY29yZC5sYWJfcmVzdWx0cyxcbiAgICAgICAgICAgICAgbmV4dENoZWNrdXBEYXRlOiBmb3JtYXQobmV3IERhdGUocmVjb3JkLm5leHRfY2hlY2t1cF9kYXRlKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIj48L2k+IFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVIZWFsdGhSZWNvcmQocmVjb3JkLmlkKX0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+IFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKSl9XG48L3Rib2R5PlxuXG4gICAgPC90YWJsZT5cbiAgKX1cbiAgXG4gIDxidXR0b25cbiAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICBzZXRTaG93SGVhbHRoUmVjb3JkRGlhbG9nKHRydWUpO1xuICAgICAgc2V0U2VsZWN0ZWRIZWFsdGhSZWNvcmRJZChudWxsKTtcbiAgICAgIHNldE1lZGljYWxVcGRhdGUoe1xuICAgICAgICBjaGVja3VwRGF0ZTogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyksXG4gICAgICAgIGhlYWx0aFN0YXR1czogJycsXG4gICAgICAgIGxhYlJlc3VsdHM6ICcnLFxuICAgICAgICBuZXh0Q2hlY2t1cERhdGU6ICcnLFxuICAgICAgfSk7XG4gICAgfX1cbiAgPlxuICAgIFVwZGF0ZSBIZWFsdGggUmVjb3JkXG4gIDwvYnV0dG9uPlxuXG4gIHsvKiBIZWFsdGggUmVjb3JkIERpYWxvZyBCb3ggKi99XG4gICAge3Nob3dIZWFsdGhSZWNvcmREaWFsb2cgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib3hcIj5cbiAgICAgICAgICA8aDQ+e3NlbGVjdGVkSGVhbHRoUmVjb3JkSWQgPyAnRWRpdCBIZWFsdGggUmVjb3JkJyA6ICdBZGQgSGVhbHRoIFJlY29yZCd9PC9oND4gey8qIERpc3BsYXkgY29ycmVjdCB0aXRsZSAqL31cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlSGVhbHRoUmVjb3JkU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD5DaGVja3VwIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrdXBEYXRlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVkaWNhbFVwZGF0ZS5jaGVja3VwRGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVkaWNhbFVwZGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+SGVhbHRoIFN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaGVhbHRoU3RhdHVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVkaWNhbFVwZGF0ZS5oZWFsdGhTdGF0dXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lZGljYWxVcGRhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPkxhYiBSZXN1bHRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYWJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVkaWNhbFVwZGF0ZS5sYWJSZXN1bHRzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2FsVXBkYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+TmV4dCBDaGVja3VwIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5leHRDaGVja3VwRGF0ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21lZGljYWxVcGRhdGUubmV4dENoZWNrdXBEYXRlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2FsVXBkYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93SGVhbHRoUmVjb3JkRGlhbG9nKGZhbHNlKX0+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAgICAgICB7LyogTWVkaWNhdGlvbnMgU2VjdGlvbiAqL31cbiAgICAgIDxoMz5NZWRpY2F0aW9uczwvaDM+XG4gICAgICB7bWVkaWNhdGlvbnMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cD5ObyBtZWRpY2F0aW9ucyBhdmFpbGFibGUuPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPk1lZGljYXRpb24gTmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Eb3NhZ2U8L3RoPlxuICAgICAgICAgICAgICA8dGg+RnJlcXVlbmN5PC90aD5cbiAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRlIFN0YXJ0ZWQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0ZSBFbmRlZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7bWVkaWNhdGlvbnMubWFwKChtZWRpY2F0aW9uKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e21lZGljYXRpb24uaWR9PlxuICAgICAgICAgICAgICAgIDx0ZD57bWVkaWNhdGlvbi5tZWRpY2F0aW9uX25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21lZGljYXRpb24uZG9zYWdlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnttZWRpY2F0aW9uLmZyZXF1ZW5jeX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bWVkaWNhdGlvbi5zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdChuZXcgRGF0ZShtZWRpY2F0aW9uLnN0YXJ0X2RhdGUpLCAnTU0vZGQveXl5eScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnttZWRpY2F0aW9uLmVuZF9kYXRlID8gZm9ybWF0KG5ldyBEYXRlKG1lZGljYXRpb24uZW5kX2RhdGUpLCAnTU0vZGQveXl5eScpIDogJ04vQSd9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZE1lZGljYXRpb24obWVkaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01lZGljYXRpb25EaWFsb2codHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVNZWRpY2F0aW9uKG1lZGljYXRpb24uaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBCdXR0b24gdG8gQWRkIE1lZGljYXRpb24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93TWVkaWNhdGlvbkRpYWxvZyh0cnVlKTtcbiAgICAgICAgICBzZXRTZWxlY3RlZE1lZGljYXRpb24oe30pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgTWVkaWNhdGlvblxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHsvKiBDb25maXJtYXRpb24gTW9kYWwgZm9yIERlbGV0aW9uICovfVxuICAgICAge3Nob3dEZWxldGVDb25maXJtYXRpb24gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1vdmVybGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctYm94XCI+XG4gICAgICAgICAgICA8aDQ+Q29uZmlybSBEZWxldGlvbjwvaDQ+XG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbWVkaWNhdGlvbj8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS48L3A+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGVNZWRpY2F0aW9ufT5ZZXMsIERlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGVsZXRlQ29uZmlybWF0aW9uKGZhbHNlKX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIE1lZGljYXRpb24gRGlhbG9nIEJveCAqL31cbiAgICAgIHtzaG93TWVkaWNhdGlvbkRpYWxvZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLW92ZXJsYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib3hcIj5cbiAgICAgICAgICAgIDxoND5BZGQgTWVkaWNhdGlvbjwvaDQ+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBzdWJtaXRNZWRpY2F0aW9uVXBkYXRlKCk7IH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NZWRpY2F0aW9uIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lZGljYXRpb25fbmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNZWRpY2F0aW9uLm1lZGljYXRpb25fbmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2F0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+RG9zYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkb3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTWVkaWNhdGlvbi5kb3NhZ2UgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVkaWNhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkZyZXF1ZW5jeTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZnJlcXVlbmN5XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE1lZGljYXRpb24uZnJlcXVlbmN5IHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lZGljYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNZWRpY2F0aW9uLnN0YXR1cyB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2F0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnQgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhcnRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNZWRpY2F0aW9uLnN0YXJ0X2RhdGUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVkaWNhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVuZCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNZWRpY2F0aW9uLmVuZF9kYXRlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lZGljYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd01lZGljYXRpb25EaWFsb2coZmFsc2UpfT5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsvKiBNZWRpY2F0aW9uIERpYWxvZyBCb3ggKi99XG4gICAgICB7c2hvd01lZGljYXRpb25EaWFsb2cgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1vdmVybGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctYm94XCI+XG4gICAgICAgICAgICA8aDQ+QWRkIE1lZGljYXRpb248L2g0PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgc3VibWl0TWVkaWNhdGlvblVwZGF0ZSgpOyB9fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWVkaWNhdGlvbiBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZWRpY2F0aW9uX25hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTWVkaWNhdGlvbi5tZWRpY2F0aW9uX25hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVkaWNhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkRvc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZG9zYWdlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE1lZGljYXRpb24uZG9zYWdlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lZGljYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5GcmVxdWVuY3k8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZyZXF1ZW5jeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNZWRpY2F0aW9uLmZyZXF1ZW5jeSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2F0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTWVkaWNhdGlvbi5zdGF0dXMgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVkaWNhdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0YXJ0IERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTWVkaWNhdGlvbi5zdGFydF9kYXRlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1lZGljYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbmQgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkTWVkaWNhdGlvbi5lbmRfZGF0ZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZWRpY2F0aW9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dNZWRpY2F0aW9uRGlhbG9nKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8aDM+T2JzZXJ2YXRpb25zPC9oMz5cbiAgICAgICAge29ic2VydmF0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHA+Tm8gb2JzZXJ2YXRpb25zIGF2YWlsYWJsZS48L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5PYnNlcnZhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge29ic2VydmF0aW9ucy5tYXAoKG9ic2VydmF0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17b2JzZXJ2YXRpb24uaWR9PlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7b2JzZXJ2YXRpb24ub2JzZXJ2YXRpb25fZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0KG5ldyBEYXRlKG9ic2VydmF0aW9uLm9ic2VydmF0aW9uX2RhdGUpLCAnTU0vZGQveXl5eScpXG4gICAgICAgICAgICAgICAgICAgICAgOiAnTm8gRGF0ZSBBdmFpbGFibGUnfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57b2JzZXJ2YXRpb24ubm90ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRPYnNlcnZhdGlvbihvYnNlcnZhdGlvbil9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlT2JzZXJ2YXRpb25DbGljayhvYnNlcnZhdGlvbi5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtzaG93RGVsZXRlQ29uZmlybWF0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkNvbmZpcm0gRGVsZXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgb2JzZXJ2YXRpb24/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGVPYnNlcnZhdGlvbn0+WWVzLCBEZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGVsZXRlQ29uZmlybWF0aW9uKGZhbHNlKX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKX1cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRPYnNlcnZhdGlvbih7fSk7XG4gICAgICAgICAgICAgICAgc2V0T2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgQWRkIE9ic2VydmF0aW9uXG4gICAgPC9idXR0b24+XG5cbiAgICAgICB7LyogT2JzZXJ2YXRpb24gRGlhbG9nIEJveCAqL31cbiAgICAgICAge29ic2VydmF0aW9uRGlhbG9nVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctYm94XCI+XG4gICAgICAgICAgICAgIDxoND57c2VsZWN0ZWRPYnNlcnZhdGlvbi5pZCA/ICdFZGl0IE9ic2VydmF0aW9uJyA6ICdBZGQgT2JzZXJ2YXRpb24nfTwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IHN1Ym1pdE9ic2VydmF0aW9uVXBkYXRlKCk7IH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+T2JzZXJ2YXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPYnNlcnZhdGlvbi5ub3RlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT2JzZXJ2YXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2JzZXJ2YXRpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9ic2VydmF0aW9uLm9ic2VydmF0aW9uX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0KG5ldyBEYXRlKHNlbGVjdGVkT2JzZXJ2YXRpb24ub2JzZXJ2YXRpb25fZGF0ZSksICd5eXl5LU1NLWRkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT2JzZXJ2YXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPntzZWxlY3RlZE9ic2VydmF0aW9uLmlkID8gJ1VwZGF0ZScgOiAnU2F2ZSd9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0T2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4gICAgZXhwb3J0IGRlZmF1bHQgQW5pbWFsRGV0YWlscztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIEZvbnQgU3R5bGVzICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBTZXQgdGhlIGZvbnQgZm9yIHRoZSBlbnRpcmUgcGFnZSAqL1xuICBsaW5lLWhlaWdodDogMS42OyAvKiBJbXByb3ZlIHJlYWRhYmlsaXR5ICovXG59XG5cbi8qIE1haW4gY29udGFpbmVyIHRvIGVuc3VyZSBwYWdlIHNjcm9sbHMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZXMgdGhhdCB0aGUgcGFnZSB0YWtlcyB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0ICovXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBQcmV2ZW50IGhvcml6b250YWwgb3ZlcmZsb3cgKHNpZGUgc2Nyb2xsaW5nKSAqL1xuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBBbGxvdyB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cbn1cblxuLmFuaW1hbC1kZXRhaWxzLXBhZ2Uge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cteTogYXV0bzsgXG59XG4uYW5pbWFsLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEFkZCBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgcGFkZGluZzogMTZweDsgLyogSW5uZXIgcGFkZGluZyAqL1xuICBtYXJnaW46IDIwcHggMDsgLyogU3BhY2luZyBhYm92ZSBhbmQgYmVsb3cgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb2Z0IHNoYWRvdyAqL1xufVxuLyogQm94IFN0eWxpbmcgKi9cbi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBMaWdodCBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogTGlnaHQgYmFja2dyb3VuZCAqL1xuICBwYWRkaW5nOiAyMHB4OyAvKiBJbnRlcm5hbCBzcGFjaW5nICovXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBzaGFkb3cgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2luZyBiZWxvdyB0aGUgYm94ICovXG59XG5cbi5hbmltYWwtZGV0YWlscy1wYWdlIGgxIHtcbiAgZm9udC1zaXplOiAyLjVlbTsgXG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5hbmltYWwtZGV0YWlscy1wYWdlIGgyIHtcbiAgZm9udC1zaXplOiAyZW07IFxuICBjb2xvcjogIzYyNTFBMjtcbn1cblxuLyogQmFjayBCdXR0b24gU3R5bGluZyAqL1xuLmFuaW1hbC1kZXRhaWxzLXBhZ2UgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNERFMzsgLyogTWF0Y2ggeW91ciB0aGVtZSBjb2xvciAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgZm9yIGNvbnRyYXN0ICovXG4gIHBhZGRpbmc6IDEwcHggMTVweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGJ1dHRvbiAqL1xuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIgb24gaG92ZXIgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmVsb3cgdGhlIGJ1dHRvbiAqL1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXG59XG5cbi5hbmltYWwtZGV0YWlscy1wYWdlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTNkYjU7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xufVxuXG4uYW5pbWFsLWRldGFpbHMtcGFnZSBoMyB7XG4gIGNvbG9yOiAjNjI1MUEyO1xufVxuXG4vKiBGbGV4Ym94IGZvciBUd28gQ29sdW1uIExheW91dCAqL1xuLmFuaW1hbC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIGNvbnRlbnQgdG8gd3JhcCBpZiBzY3JlZW4gaXMgc21hbGwgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgdG9wIG9mIHRoZSBjb250YWluZXIgKi9cbn1cblxuLyogQ29sdW1uIGZvciBBbmltYWwgRGV0YWlscyAqL1xuLmFuaW1hbC1kZXRhaWxzLWNvbHVtbiB7XG4gIGZsZXg6IDE7XG59XG5cbi8qIEFkanVzdCBzdHlsaW5nIGZvciB0aGUgaW1hZ2UgY29udGFpbmVyICovXG4uYW5pbWFsLWRldGFpbHMtaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7IC8qIE1ha2Ugc3VyZSB0aGUgaW1hZ2UgY29udGFpbmVyIGlzIHJlc3BvbnNpdmUgKi9cbiAgbWF4LXdpZHRoOiAzNTBweDsgLyogU2V0IGEgbWF4IHdpZHRoIGZvciB0aGUgaW1hZ2UgY29udGFpbmVyICovXG59XG5cbi8qIFN0eWxpbmcgZm9yIHRoZSBpbWFnZSBpdHNlbGYgKi9cbi5hbmltYWwtZGV0YWlscy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4OyAvKiBBZGp1c3QgbWF4LXdpZHRoIHRvIGtlZXAgdGhlIGltYWdlIHdpdGhpbiBib3VuZHMgKi9cbiAgaGVpZ2h0OiBhdXRvOyAvKiBMZXQgdGhlIGhlaWdodCBhZGp1c3QgdG8gdGhlIGltYWdlIGFzcGVjdCByYXRpbyAqL1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogUGxhY2Vob2xkZXIgZm9yIHdoZW4gdGhlcmUgaXMgbm8gaW1hZ2UgKi9cbi5uby1pbWFnZS1wbGFjZWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIFN0eWxpbmcgZm9yIHBhcmFncmFwaHMgaW5zaWRlIGVhY2ggY29sdW1uICovXG4uYW5pbWFsLWRldGFpbHMtY29sdW1uIHAge1xuICBtYXJnaW46IDE2cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBTcGVjaWZpYyBzdHlsZXMgZm9yIHRoZSBkZXRhaWxzIHRvIGVuc3VyZSB0ZXh0IGFsaWdubWVudCAqL1xuLmFuaW1hbC1kZXRhaWxzLWNvbHVtbiBzdHJvbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBmb3IgbGFiZWwgYWxpZ25tZW50ICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBHZW5lcmFsIFRhYmxlIFN0eWxpbmcgKi9cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIFJlbW92ZSBzcGFjaW5nIGJldHdlZW4gdGFibGUgYm9yZGVycyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIHRhYmxlcyBhbmQgb3RoZXIgZWxlbWVudHMgKi9cbn1cblxuLyogVGFibGUgSGVhZGVyIFN0eWxpbmcgKi9cbnRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDsgLyogTGlnaHQgYmFja2dyb3VuZCBmb3IgaGVhZGVycyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7IC8qIFNvbGlkIGJvcmRlciBiZXR3ZWVuIGhlYWRlciBhbmQgYm9keSAqL1xuICBjb2xvcjogIzMzMzsgLyogRGFya2VyIGNvbG9yIGZvciB0ZXh0ICovXG59XG5cbi8qIFRhYmxlIEJvZHkgU3R5bGluZyAqL1xudGJvZHkgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgYm9yZGVyIGJldHdlZW4gcm93cyAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBBbGlnbiBjb250ZW50IHZlcnRpY2FsbHkgKi9cbiAgY29sb3I6ICM1NTU7IC8qIFNsaWdodGx5IGxpZ2h0ZXIgdGV4dCBjb2xvciAqL1xufVxuXG4vKiBUYWJsZSBSb3cgSG92ZXIgRWZmZWN0ICovXG50Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7IC8qIFN1YnRsZSBob3ZlciBlZmZlY3QgZm9yIHJvd3MgKi9cbn1cblxuLyogQnV0dG9uIFN0eWxpbmcgaW5zaWRlIFRhYmxlICovXG50YWJsZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MjRERTM7XG59XG5cbnRhYmxlIGJ1dHRvbiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbnRhYmxlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IC8qIFNsaWdodCBjb2xvciBjaGFuZ2Ugb24gaG92ZXIgKi9cbn1cblxuLyogUmVzcG9uc2l2ZSBUYWJsZSBTdHlsaW5nICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgLyogTWFrZSB0YWJsZSByb3dzIGFuZCBjZWxscyBibG9jayBlbGVtZW50cyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbiAgfVxuICBcbiAgLyogU3R5bGluZyBmb3IgdGFibGUgaGVhZGVycyBpbiBzbWFsbCBzY3JlZW5zICovXG4gIHRoZWFkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHRhYmxlIGhlYWRlcnMgKi9cbiAgfVxuICBcbiAgLyogTWFrZSB0YWJsZSBjZWxscyBiZWhhdmUgbGlrZSByb3dzIHdpdGggbGFiZWxzICovXG4gIHRib2R5IHRyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZCBzb21lIHNwYWNlIGJldHdlZW4gcm93cyAqL1xuICB9XG4gIFxuICB0Ym9keSB0ZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgZm9yIG1vYmlsZSAqL1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIH1cbiAgXG4gIHRib2R5IHRkOjpiZWZvcmUge1xuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM2NjY7XG4gIH1cbn1cblxuLyogRGlhbG9nIE92ZXJsYXkgKi9cbi5kaWFsb2ctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgcG9zaXRpb24gdG8gY292ZXIgdGhlIGVudGlyZSB2aWV3cG9ydCAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXG4gIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IHRvIGNlbnRlciBjb250ZW50ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBhcHBlYXJzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cbn1cblxuLyogRGlhbG9nIEJveCAqL1xuLmRpYWxvZy1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogQmFja2dyb3VuZCBmb3IgdGhlIGRpYWxvZyAqL1xuICBwYWRkaW5nOiAyMHB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgZGlhbG9nICovXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogU2xpZ2h0bHkgbW9yZSByb3VuZGVkIGNvcm5lcnMgKi9cbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFNoYWRvdyBmb3IgZGVwdGggKi9cbiAgd2lkdGg6IDQwMHB4OyAvKiBTZXQgYSB3aWR0aCBmb3IgdGhlIGRpYWxvZyAqL1xuICBtYXgtd2lkdGg6IDkwJTsgLyogUmVzcG9uc2l2ZSB3aWR0aCAqL1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IC8qIFVzZSB0aGUgc2FtZSBmb250IGFzIGFuaW1hbCBkZXRhaWxzIHBhZ2UgKi9cbn1cblxuLyogRGlhbG9nIFRpdGxlICovXG4uZGlhbG9nLWJveCBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIFNwYWNpbmcgYmVsb3cgdGhlIHRpdGxlICovXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIEFkanVzdCB0aXRsZSBzaXplICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0aXRsZSAqL1xuICBjb2xvcjogIzYyNTFBMjtcbn1cblxuLyogRGlhbG9nIEZvcm0gU3R5bGluZyAqL1xuLmRpYWxvZy1ib3ggZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IGZvciBmb3JtIGxheW91dCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBpbnB1dHMgdmVydGljYWxseSAqL1xufVxuXG4vKiBGb3JtIEdyb3VwICovXG4uZGlhbG9nLWJveCAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcbn1cblxuLyogTGFiZWwgU3R5bGVzICovXG4uZGlhbG9nLWJveCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKiBJbnB1dCBTdHlsZXMgKi9cbi5kaWFsb2ctYm94IGlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gIHdpZHRoOiAxMDAlOyBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQnV0dG9uIFN0eWxpbmcgaW4gRGlhbG9nICovXG4uZGlhbG9nLWJveCBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4OyAvKiBQYWRkaW5nIGluc2lkZSBidXR0b25zICovXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciBidXR0b25zICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBvbiBob3ZlciAqL1xuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBTcGFjZSBhYm92ZSBidXR0b25zICovXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgLyogU21vb3RoIGJhY2tncm91bmQgdHJhbnNpdGlvbiAqL1xuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIGJ1dHRvbnMgdGFrZSBmdWxsIHdpZHRoICovXG59XG5cbi5kaWFsb2ctYm94IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogTWF0Y2ggYnV0dG9uIGJhY2tncm91bmQgKi9cbiAgY29sb3I6ICM2MjRERTM7IC8qIEJ1dHRvbiB0ZXh0IGNvbG9yICovXG59XG5cbi5kaWFsb2ctYm94IGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkIGJhY2tncm91bmQgZm9yIGNhbmNlbCBidXR0b24gKi9cbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXG59XG5cbi5kaWFsb2ctYm94IGJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTsgLyogU2xpZ2h0IHRyYW5zcGFyZW5jeSBvbiBob3ZlciAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvQW5pbWFsRGV0YWlsc1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtFQUNFLDhCQUE4QixFQUFFLHFDQUFxQztFQUNyRSxnQkFBZ0IsRUFBRSx3QkFBd0I7QUFDNUM7O0FBRUEsMENBQTBDO0FBQzFDO0VBQ0UsWUFBWSxFQUFFLGdFQUFnRTtFQUM5RSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQixFQUFFLGlEQUFpRDtFQUNyRSxnQkFBZ0IsRUFBRSw2QkFBNkI7QUFDakQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQixFQUFFLGVBQWU7RUFDdkMsa0JBQWtCLEVBQUUsb0JBQW9CO0VBQ3hDLGFBQWEsRUFBRSxrQkFBa0I7RUFDakMsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQsd0NBQXdDLEVBQUUsZ0JBQWdCO0FBQzVEO0FBQ0EsZ0JBQWdCO0FBQ2hCO0VBQ0Usc0JBQXNCLEVBQUUsaUJBQWlCO0VBQ3pDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4Qyx5QkFBeUIsRUFBRSxxQkFBcUI7RUFDaEQsYUFBYSxFQUFFLHFCQUFxQjtFQUNwQyx3Q0FBd0MsRUFBRSxrQkFBa0I7RUFDNUQsbUJBQW1CLEVBQUUsMEJBQTBCO0FBQ2pEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLHlCQUF5QixFQUFFLDJCQUEyQjtFQUN0RCxZQUFZLEVBQUUsNEJBQTRCO0VBQzFDLGtCQUFrQixFQUFFLDhCQUE4QjtFQUNsRCxZQUFZLEVBQUUs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Q0UsWUFBWSxFQUFFLGlDQUFpQztBQUNqRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIEZvbnQgU3R5bGVzICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IC8qIFNldCB0aGUgZm9udCBmb3IgdGhlIGVudGlyZSBwYWdlICovXFxuICBsaW5lLWhlaWdodDogMS42OyAvKiBJbXByb3ZlIHJlYWRhYmlsaXR5ICovXFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyIHRvIGVuc3VyZSBwYWdlIHNjcm9sbHMgKi9cXG5odG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTsgLyogRW5zdXJlcyB0aGF0IHRoZSBwYWdlIHRha2VzIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIFByZXZlbnQgaG9yaXpvbnRhbCBvdmVyZmxvdyAoc2lkZSBzY3JvbGxpbmcpICovXFxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBBbGxvdyB2ZXJ0aWNhbCBzY3JvbGxpbmcgKi9cXG59XFxuXFxuLmFuaW1hbC1kZXRhaWxzLXBhZ2Uge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93LXk6IGF1dG87IFxcbn1cXG4uYW5pbWFsLWJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBBZGQgYm9yZGVyICovXFxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgcGFkZGluZzogMTZweDsgLyogSW5uZXIgcGFkZGluZyAqL1xcbiAgbWFyZ2luOiAyMHB4IDA7IC8qIFNwYWNpbmcgYWJvdmUgYW5kIGJlbG93ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBCYWNrZ3JvdW5kIGNvbG9yICovXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb2Z0IHNoYWRvdyAqL1xcbn1cXG4vKiBCb3ggU3R5bGluZyAqL1xcbi5ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogTGlnaHQgYm9yZGVyICovXFxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgLyogTGlnaHQgYmFja2dyb3VuZCAqL1xcbiAgcGFkZGluZzogMjBweDsgLyogSW50ZXJuYWwgc3BhY2luZyAqL1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU3VidGxlIHNoYWRvdyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2luZyBiZWxvdyB0aGUgYm94ICovXFxufVxcblxcbi5hbmltYWwtZGV0YWlscy1wYWdlIGgxIHtcXG4gIGZvbnQtc2l6ZTogMi41ZW07IFxcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmFuaW1hbC1kZXRhaWxzLXBhZ2UgaDIge1xcbiAgZm9udC1zaXplOiAyZW07IFxcbiAgY29sb3I6ICM2MjUxQTI7XFxufVxcblxcbi8qIEJhY2sgQnV0dG9uIFN0eWxpbmcgKi9cXG4uYW5pbWFsLWRldGFpbHMtcGFnZSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNERFMzsgLyogTWF0Y2ggeW91ciB0aGVtZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0IGZvciBjb250cmFzdCAqL1xcbiAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgYnV0dG9uICovXFxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGJvcmRlciAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBvbiBob3ZlciAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmVsb3cgdGhlIGJ1dHRvbiAqL1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xcbn1cXG5cXG4uYW5pbWFsLWRldGFpbHMtcGFnZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhM2RiNTsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXFxufVxcblxcbi5hbmltYWwtZGV0YWlscy1wYWdlIGgzIHtcXG4gIGNvbG9yOiAjNjI1MUEyO1xcbn1cXG5cXG4vKiBGbGV4Ym94IGZvciBUd28gQ29sdW1uIExheW91dCAqL1xcbi5hbmltYWwtZGV0YWlscy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIGNvbnRlbnQgdG8gd3JhcCBpZiBzY3JlZW4gaXMgc21hbGwgKi9cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgdG9wIG9mIHRoZSBjb250YWluZXIgKi9cXG59XFxuXFxuLyogQ29sdW1uIGZvciBBbmltYWwgRGV0YWlscyAqL1xcbi5hbmltYWwtZGV0YWlscy1jb2x1bW4ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogQWRqdXN0IHN0eWxpbmcgZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cXG4uYW5pbWFsLWRldGFpbHMtaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyAvKiBNYWtlIHN1cmUgdGhlIGltYWdlIGNvbnRhaW5lciBpcyByZXNwb25zaXZlICovXFxuICBtYXgtd2lkdGg6IDM1MHB4OyAvKiBTZXQgYSBtYXggd2lkdGggZm9yIHRoZSBpbWFnZSBjb250YWluZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGltYWdlIGl0c2VsZiAqL1xcbi5hbmltYWwtZGV0YWlscy1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7IC8qIEFkanVzdCBtYXgtd2lkdGggdG8ga2VlcCB0aGUgaW1hZ2Ugd2l0aGluIGJvdW5kcyAqL1xcbiAgaGVpZ2h0OiBhdXRvOyAvKiBMZXQgdGhlIGhlaWdodCBhZGp1c3QgdG8gdGhlIGltYWdlIGFzcGVjdCByYXRpbyAqL1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogUGxhY2Vob2xkZXIgZm9yIHdoZW4gdGhlcmUgaXMgbm8gaW1hZ2UgKi9cXG4ubm8taW1hZ2UtcGxhY2Vob2xkZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHBhcmFncmFwaHMgaW5zaWRlIGVhY2ggY29sdW1uICovXFxuLmFuaW1hbC1kZXRhaWxzLWNvbHVtbiBwIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiBTcGVjaWZpYyBzdHlsZXMgZm9yIHRoZSBkZXRhaWxzIHRvIGVuc3VyZSB0ZXh0IGFsaWdubWVudCAqL1xcbi5hbmltYWwtZGV0YWlscy1jb2x1bW4gc3Ryb25nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBmb3IgbGFiZWwgYWxpZ25tZW50ICovXFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogR2VuZXJhbCBUYWJsZSBTdHlsaW5nICovXFxudGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiBSZW1vdmUgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgKi9cXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFNwYWNlIGJldHdlZW4gdGFibGVzIGFuZCBvdGhlciBlbGVtZW50cyAqL1xcbn1cXG5cXG4vKiBUYWJsZSBIZWFkZXIgU3R5bGluZyAqL1xcbnRoZWFkIHRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7IC8qIExpZ2h0IGJhY2tncm91bmQgZm9yIGhlYWRlcnMgKi9cXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDsgLyogU29saWQgYm9yZGVyIGJldHdlZW4gaGVhZGVyIGFuZCBib2R5ICovXFxuICBjb2xvcjogIzMzMzsgLyogRGFya2VyIGNvbG9yIGZvciB0ZXh0ICovXFxufVxcblxcbi8qIFRhYmxlIEJvZHkgU3R5bGluZyAqL1xcbnRib2R5IHRkIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgYm9yZGVyIGJldHdlZW4gcm93cyAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogQWxpZ24gY29udGVudCB2ZXJ0aWNhbGx5ICovXFxuICBjb2xvcjogIzU1NTsgLyogU2xpZ2h0bHkgbGlnaHRlciB0ZXh0IGNvbG9yICovXFxufVxcblxcbi8qIFRhYmxlIFJvdyBIb3ZlciBFZmZlY3QgKi9cXG50Ym9keSB0cjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyAvKiBTdWJ0bGUgaG92ZXIgZWZmZWN0IGZvciByb3dzICovXFxufVxcblxcbi8qIEJ1dHRvbiBTdHlsaW5nIGluc2lkZSBUYWJsZSAqL1xcbnRhYmxlIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzYyNERFMztcXG59XFxuXFxudGFibGUgYnV0dG9uIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbnRhYmxlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiBTbGlnaHQgY29sb3IgY2hhbmdlIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFJlc3BvbnNpdmUgVGFibGUgU3R5bGluZyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IC8qIE1ha2UgdGFibGUgcm93cyBhbmQgY2VsbHMgYmxvY2sgZWxlbWVudHMgb24gc21hbGxlciBzY3JlZW5zICovXFxuICB9XFxuICBcXG4gIC8qIFN0eWxpbmcgZm9yIHRhYmxlIGhlYWRlcnMgaW4gc21hbGwgc2NyZWVucyAqL1xcbiAgdGhlYWQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIHRhYmxlIGhlYWRlcnMgKi9cXG4gIH1cXG4gIFxcbiAgLyogTWFrZSB0YWJsZSBjZWxscyBiZWhhdmUgbGlrZSByb3dzIHdpdGggbGFiZWxzICovXFxuICB0Ym9keSB0ciB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkIHNvbWUgc3BhY2UgYmV0d2VlbiByb3dzICovXFxuICB9XFxuICBcXG4gIHRib2R5IHRkIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgZm9yIG1vYmlsZSAqL1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgfVxcbiAgXFxuICB0Ym9keSB0ZDo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGNvbG9yOiAjNjY2O1xcbiAgfVxcbn1cXG5cXG4vKiBEaWFsb2cgT3ZlcmxheSAqL1xcbi5kaWFsb2ctb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIHBvc2l0aW9uIHRvIGNvdmVyIHRoZSBlbnRpcmUgdmlld3BvcnQgKi9cXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXFxuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBjZW50ZXIgY29udGVudCAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgaXQgYXBwZWFycyBhYm92ZSBvdGhlciBjb250ZW50ICovXFxufVxcblxcbi8qIERpYWxvZyBCb3ggKi9cXG4uZGlhbG9nLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogQmFja2dyb3VuZCBmb3IgdGhlIGRpYWxvZyAqL1xcbiAgcGFkZGluZzogMjBweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGRpYWxvZyAqL1xcbiAgYm9yZGVyLXJhZGl1czogOHB4OyAvKiBTbGlnaHRseSBtb3JlIHJvdW5kZWQgY29ybmVycyAqL1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFNoYWRvdyBmb3IgZGVwdGggKi9cXG4gIHdpZHRoOiA0MDBweDsgLyogU2V0IGEgd2lkdGggZm9yIHRoZSBkaWFsb2cgKi9cXG4gIG1heC13aWR0aDogOTAlOyAvKiBSZXNwb25zaXZlIHdpZHRoICovXFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IC8qIFVzZSB0aGUgc2FtZSBmb250IGFzIGFuaW1hbCBkZXRhaWxzIHBhZ2UgKi9cXG59XFxuXFxuLyogRGlhbG9nIFRpdGxlICovXFxuLmRpYWxvZy1ib3ggaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgLyogU3BhY2luZyBiZWxvdyB0aGUgdGl0bGUgKi9cXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIEFkanVzdCB0aXRsZSBzaXplICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgdGl0bGUgKi9cXG4gIGNvbG9yOiAjNjI1MUEyO1xcbn1cXG5cXG4vKiBEaWFsb2cgRm9ybSBTdHlsaW5nICovXFxuLmRpYWxvZy1ib3ggZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCBmb3IgZm9ybSBsYXlvdXQgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGlucHV0cyB2ZXJ0aWNhbGx5ICovXFxufVxcblxcbi8qIEZvcm0gR3JvdXAgKi9cXG4uZGlhbG9nLWJveCAuZm9ybS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4OyBcXG59XFxuXFxuLyogTGFiZWwgU3R5bGVzICovXFxuLmRpYWxvZy1ib3ggbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBJbnB1dCBTdHlsZXMgKi9cXG4uZGlhbG9nLWJveCBpbnB1dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IDEwMCU7IFxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogQnV0dG9uIFN0eWxpbmcgaW4gRGlhbG9nICovXFxuLmRpYWxvZy1ib3ggYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgaW5zaWRlIGJ1dHRvbnMgKi9cXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgYm9yZGVyICovXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgYnV0dG9ucyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyIG9uIGhvdmVyICovXFxuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBTcGFjZSBhYm92ZSBidXR0b25zICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7IC8qIFNtb290aCBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gKi9cXG4gIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgYnV0dG9ucyB0YWtlIGZ1bGwgd2lkdGggKi9cXG59XFxuXFxuLmRpYWxvZy1ib3ggYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIE1hdGNoIGJ1dHRvbiBiYWNrZ3JvdW5kICovXFxuICBjb2xvcjogIzYyNERFMzsgLyogQnV0dG9uIHRleHQgY29sb3IgKi9cXG59XFxuXFxuLmRpYWxvZy1ib3ggYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IC8qIFJlZCBiYWNrZ3JvdW5kIGZvciBjYW5jZWwgYnV0dG9uICovXFxuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cXG59XFxuXFxuLmRpYWxvZy1ib3ggYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuOTsgLyogU2xpZ2h0IHRyYW5zcGFyZW5jeSBvbiBob3ZlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FuaW1hbERldGFpbHNQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQW5pbWFsRGV0YWlsc1BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidXNlUGFyYW1zIiwiZm9ybWF0IiwidXNlTmF2aWdhdGUiLCJBbmltYWxEZXRhaWxzIiwibmF2aWdhdGUiLCJpZCIsImFuaW1hbElkIiwiYW5pbWFsIiwic2V0QW5pbWFsIiwiaGVhbHRoUmVjb3JkcyIsInNldEhlYWx0aFJlY29yZHMiLCJtZWRpY2F0aW9ucyIsInNldE1lZGljYXRpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwib2JzZXJ2YXRpb25zIiwic2V0T2JzZXJ2YXRpb25zIiwib2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlIiwic2V0T2JzZXJ2YXRpb25EaWFsb2dWaXNpYmxlIiwic2VsZWN0ZWRPYnNlcnZhdGlvbiIsInNldFNlbGVjdGVkT2JzZXJ2YXRpb24iLCJvYnNlcnZhdGlvblRvRGVsZXRlIiwic2V0T2JzZXJ2YXRpb25Ub0RlbGV0ZSIsIm1lZGljYWxVcGRhdGUiLCJzZXRNZWRpY2FsVXBkYXRlIiwiY2hlY2t1cERhdGUiLCJEYXRlIiwiaGVhbHRoU3RhdHVzIiwibGFiUmVzdWx0cyIsIm5leHRDaGVja3VwRGF0ZSIsInNob3dIZWFsdGhSZWNvcmREaWFsb2ciLCJzZXRTaG93SGVhbHRoUmVjb3JkRGlhbG9nIiwic2hvd01lZGljYXRpb25EaWFsb2ciLCJzZXRTaG93TWVkaWNhdGlvbkRpYWxvZyIsInNlbGVjdGVkTWVkaWNhdGlvbiIsInNldFNlbGVjdGVkTWVkaWNhdGlvbiIsInNlbGVjdGVkSGVhbHRoUmVjb3JkSWQiLCJzZXRTZWxlY3RlZEhlYWx0aFJlY29yZElkIiwic2hvd0RlbGV0ZUNvbmZpcm1hdGlvbiIsInNldFNob3dEZWxldGVDb25maXJtYXRpb24iLCJtZWRpY2F0aW9uVG9EZWxldGUiLCJzZXRNZWRpY2F0aW9uVG9EZWxldGUiLCJmZXRjaEFuaW1hbERldGFpbHMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwiZmV0Y2hNZWRpY2F0aW9ucyIsImxlbmd0aCIsImZldGNoT2JzZXJ2YXRpb25zIiwiaGFuZGxlTWVkaWNhdGlvbkNoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsImhhbmRsZUVkaXRPYnNlcnZhdGlvbiIsIm9ic2VydmF0aW9uIiwic3VibWl0T2JzZXJ2YXRpb25VcGRhdGUiLCJwdXQiLCJub3RlIiwib2JzZXJ2YXRpb25fZGF0ZSIsInBvc3QiLCJoYW5kbGVNZWRpY2FsVXBkYXRlQ2hhbmdlIiwiZSIsImhhbmRsZU9ic2VydmF0aW9uQ2hhbmdlIiwic3VibWl0SGVhbHRoUmVjb3JkVXBkYXRlIiwicmVjb3JkSWQiLCJoZWFsdGhfc3RhdHVzIiwiY2hlY2t1cF9kYXRlIiwibGFiX3Jlc3VsdHMiLCJuZXh0X2NoZWNrdXBfZGF0ZSIsInN1Ym1pdE1lZGljYXRpb25VcGRhdGUiLCJtZWRpY2F0aW9uX25hbWUiLCJkb3NhZ2UiLCJmcmVxdWVuY3kiLCJzdGF0dXMiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJoYW5kbGVEZWxldGVPYnNlcnZhdGlvbkNsaWNrIiwib2JzZXJ2YXRpb25JZCIsImNvbmZpcm1EZWxldGVPYnNlcnZhdGlvbiIsImRlbGV0ZSIsImhhbmRsZURlbGV0ZUhlYWx0aFJlY29yZCIsImNvbmZpcm1EZWxldGUiLCJ3aW5kb3ciLCJjb25maXJtIiwiaGFuZGxlRGVsZXRlTWVkaWNhdGlvbiIsIm1lZGljYXRpb25JZCIsImNvbmZpcm1EZWxldGVNZWRpY2F0aW9uIiwiaGFuZGxlSGVhbHRoUmVjb3JkU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNZWRpY2F0aW9uU3VibWl0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNsaWNrIiwiaW1ndXJsIiwic3JjIiwiYWx0IiwidHlwZSIsImJyZWVkIiwiYWdlIiwic2l6ZSIsImJpcnRoZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImxvY2F0aW9uIiwiYmFja2dyb3VuZCIsInBlcnNvbmFsaXR5IiwibWFwIiwicmVjb3JkIiwia2V5Iiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwibWVkaWNhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=