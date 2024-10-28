"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_AnimalListPage_js"],{

/***/ "./src/components/AddAnimalModal.js":
/*!******************************************!*\
  !*** ./src/components/AddAnimalModal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AddAnimalModal = _ref => {
  let {
    isOpen,
    onClose,
    onAddAnimal
  } = _ref;
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [breed, setBreed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [personality, setPersonality] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [imgFile, setImgFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State for image file
  const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for background text field

  const handleImageChange = e => {
    setImgFile(e.target.files[0]); // Update state with selected file
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newAnimal = {
      name,
      type,
      age,
      breed,
      location,
      personality,
      status,
      gender,
      background // Include the background field in the object
    };

    // If an image file is selected, add it to the newAnimal object
    if (imgFile) {
      newAnimal.imgFile = imgFile; // Include the image file in the object
    }
    onAddAnimal(newAnimal);
    // Reset the form
    setName('');
    setType('');
    setAge('');
    setBreed('');
    setLocation('');
    setPersonality('');
    setStatus('');
    setGender('');
    setBackground(''); // Reset background field
    setImgFile(null); // Reset image file
  };
  if (!isOpen) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Add New Animal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Name",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: type,
    onChange: e => setType(e.target.value),
    placeholder: "Type",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: age,
    onChange: e => setAge(e.target.value),
    placeholder: "Age",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: breed,
    onChange: e => setBreed(e.target.value),
    placeholder: "Breed",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: location,
    onChange: e => setLocation(e.target.value),
    placeholder: "Location",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: personality,
    onChange: e => setPersonality(e.target.value),
    placeholder: "Personality",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: status,
    onChange: e => setStatus(e.target.value),
    placeholder: "Status",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: background // Add input for background
    ,
    onChange: e => setBackground(e.target.value),
    placeholder: "Background",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    onChange: handleImageChange,
    accept: "image/*",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: gender,
    onChange: e => setGender(e.target.value),
    placeholder: "Gender",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Add Animal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: onClose
  }, "Cancel"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddAnimalModal);

/***/ }),

/***/ "./src/components/AnimalListPage.js":
/*!******************************************!*\
  !*** ./src/components/AnimalListPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _style_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/AnimalListPage.css */ "./src/style/AnimalListPage.css");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _components_AddAnimalModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddAnimalModal */ "./src/components/AddAnimalModal.js");
/* harmony import */ var _components_UpdateAnimalModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UpdateAnimalModal */ "./src/components/UpdateAnimalModal.js");
/* harmony import */ var _components_DeleteConfirmationModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DeleteConfirmationModal */ "./src/components/DeleteConfirmationModal.js");










const AnimalList = () => {
  const [animals, setAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [entriesPerPage, setEntriesPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [updateModalOpen, setUpdateModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [deleteModalOpen, setDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State to control delete modal
  const [selectedAnimal, setSelectedAnimal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [animalToDelete, setAnimalToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();

  // Fetch animals from the API
  const fetchAnimals = async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].get(`${process.env.REACT_APP_BASE_URL}/api/admin/animals`);
      setAnimals(response.data.animals);
    } catch (err) {
      console.error('Error fetching animals:', err.response ? err.response.data : err.message);
      setError('Error fetching animals');
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAnimals();
  }, []);

  // Navigate to animal details page
  const handleViewClick = id => {
    navigate(`/animals/${id}/details`);
  };

  // Handle search input change
  const handleSearchChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Handle entries per page change
  const handleEntriesChange = e => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  // Handle adding a new animal
  const handleAddAnimal = async newAnimal => {
    const formData = new FormData();
    formData.append('name', newAnimal.name);
    formData.append('type', newAnimal.type);
    formData.append('age', newAnimal.age);
    formData.append('breed', newAnimal.breed);
    formData.append('location', newAnimal.location);
    formData.append('personality', newAnimal.personality);
    formData.append('status', newAnimal.status);
    formData.append('gender', newAnimal.gender);
    formData.append('background', newAnimal.background);
    if (newAnimal.imgFile) {
      formData.append('imgFile', newAnimal.imgFile); // Ensure the image is included
    }
    try {
      await axios__WEBPACK_IMPORTED_MODULE_8__["default"].post(`${process.env.REACT_APP_BASE_URL}/api/admin/add-animal`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Let the browser set this automatically
        }
      });
      fetchAnimals(); // Refresh the list after adding
      setModalOpen(false); // Close the modal after success
    } catch (err) {
      setError('Error adding animal');
      console.error('Error adding animal:', err.response ? err.response.data : err.message); // Log more details
    }
  };

  // Handle updating an animal
  const handleUpdateAnimal = async (id, updatedAnimal) => {
    const formData = new FormData();
    formData.append('name', updatedAnimal.name);
    formData.append('type', updatedAnimal.type);
    formData.append('age', updatedAnimal.age);
    formData.append('breed', updatedAnimal.breed);
    formData.append('location', updatedAnimal.location);
    formData.append('personality', updatedAnimal.personality);
    formData.append('status', updatedAnimal.status);
    formData.append('gender', updatedAnimal.gender);
    if (updatedAnimal.imgFile) {
      formData.append('imgFile', updatedAnimal.imgFile); // Include the image file if one is selected
    }
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].put(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Browser will handle multipart boundary
        }
      });
      fetchAnimals(); // Refresh the animal list after updating
      setUpdateModalOpen(false);
    } catch (err) {
      setError('Error updating animal');
      console.error('Error updating animal:', err.response ? err.response.data : err.message);
    }
  };
  const handleDeleteClick = animal => {
    setAnimalToDelete(animal);
    setDeleteModalOpen(true);
  };
  const confirmDelete = async id => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_8__["default"].delete(`${process.env.REACT_APP_BASE_URL}/api/admin/animals/${id}`);
      fetchAnimals();
    } catch (err) {
      setError('Error deleting animal');
      console.error('Error deleting animal:', err.response ? err.response.data : err.message);
    } finally {
      setDeleteModalOpen(false);
    }
  };
  // Handle clicking the edit button
  const handleEditClick = animal => {
    setSelectedAnimal(animal);
    setUpdateModalOpen(true);
  };

  // Filter animals based on search query
  const filteredAnimals = animals.filter(animal => animal.name && animal.name.toLowerCase().includes(searchQuery) || animal.type && animal.type.toLowerCase().includes(searchQuery) || animal.breed && animal.breed.toLowerCase().includes(searchQuery));

  // Sort animals based on selected order
  const sortedAnimals = [...filteredAnimals].sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'age') {
      return a.age - b.age;
    }
    return 0; // Default case
  });
  const indexOfLastAnimal = currentPage * entriesPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - entriesPerPage;
  const currentAnimals = sortedAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);
  const totalPages = Math.ceil(sortedAnimals.length / entriesPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading animals...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Animals in the Shelter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-animal-button",
    onClick: () => setModalOpen(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlus
  }), " Add Animal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AddAnimalModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: modalOpen,
    onClose: () => setModalOpen(false),
    onAddAnimal: handleAddAnimal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UpdateAnimalModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: updateModalOpen,
    onClose: () => setUpdateModalOpen(false),
    onUpdateAnimal: handleUpdateAnimal,
    animal: selectedAnimal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DeleteConfirmationModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: deleteModalOpen,
    onClose: () => setDeleteModalOpen(false),
    onDeleteConfirm: () => confirmDelete(animalToDelete?.id) // Fix the function call here
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "entries"
  }, "Show"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    id: "entries",
    value: entriesPerPage,
    onChange: handleEntriesChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "50"
  }, "50")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " entries"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Search...",
    value: searchQuery,
    onChange: handleSearchChange,
    className: "search-input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "sort"
  }, "Sort by:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    id: "sort",
    value: sortOrder,
    onChange: e => setSortOrder(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "name"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "age"
  }, "Age"))), filteredAnimals.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No animals found in the shelter.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "animal-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Breed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Personality"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, currentAnimals.map(animal => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: animal.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.imgurl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: animal.imgurl,
    alt: animal.name,
    className: "animal-image"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paw-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPaw,
    className: "default-paw-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.breed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.gender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.personality), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleEditClick(animal)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEdit
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteClick(animal),
    className: "delete-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrash
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleViewClick(animal.id)
  }, "View Details")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePrevious,
    disabled: currentPage === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faChevronLeft
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPage, " of ", totalPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNext,
    disabled: currentPage === totalPages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faChevronRight
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimalList);

/***/ }),

/***/ "./src/components/DeleteConfirmationModal.js":
/*!***************************************************!*\
  !*** ./src/components/DeleteConfirmationModal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DeleteConfirmationModal = _ref => {
  let {
    isOpen,
    onClose,
    onDeleteConfirm
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Are you sure you want to delete this animal?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel-button",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "confirm-button",
    onClick: onDeleteConfirm
  }, "Confirm"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteConfirmationModal);

/***/ }),

/***/ "./src/components/UpdateAnimalModal.js":
/*!*********************************************!*\
  !*** ./src/components/UpdateAnimalModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UpdateAnimalModal = _ref => {
  let {
    isOpen,
    onClose,
    onUpdateAnimal,
    animal
  } = _ref;
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [breed, setBreed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [personality, setPersonality] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [imgFile, setImgFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // State for image file
  const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [imgPreview, setImgPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for image preview

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (animal) {
      setName(animal.name);
      setType(animal.type);
      setAge(animal.age);
      setBreed(animal.breed);
      setLocation(animal.location);
      setPersonality(animal.personality);
      setStatus(animal.status);
      setGender(animal.gender || ''); // Set gender from animal data

      // Resetting the image file and preview when the animal changes
      setImgFile(null);
      setImgPreview(animal.imgurl || ''); // Set preview to existing image URL if available
    }
  }, [animal]);
  const handleImageChange = e => {
    const file = e.target.files[0];
    setImgFile(file); // Update state with selected file

    // Generate image preview URL
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    } else {
      setImgPreview(''); // Clear preview if no file is selected
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const updatedAnimal = {
      name,
      type,
      age,
      breed,
      location,
      personality,
      status,
      gender
    };

    // If an image file is selected, add it to the updatedAnimal object
    if (imgFile) {
      updatedAnimal.imgFile = imgFile; // Include the image file in the object
    }
    onUpdateAnimal(animal.id, updatedAnimal);
  };
  if (!isOpen) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Update Animal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Name",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: type,
    onChange: e => setType(e.target.value),
    placeholder: "Type",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: age,
    onChange: e => setAge(e.target.value),
    placeholder: "Age",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: breed,
    onChange: e => setBreed(e.target.value),
    placeholder: "Breed",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: location,
    onChange: e => setLocation(e.target.value),
    placeholder: "Location",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: personality,
    onChange: e => setPersonality(e.target.value),
    placeholder: "Personality",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: status,
    onChange: e => setStatus(e.target.value),
    placeholder: "Status",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    onChange: handleImageChange // Handle file selection
    ,
    accept: "image/*" // Accept only image files
  }), imgPreview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-preview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Image Preview:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imgPreview,
    alt: "Image Preview",
    style: {
      width: '100%',
      height: 'auto'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: gender,
    onChange: e => setGender(e.target.value),
    placeholder: "Gender",
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Update Animal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: onClose
  }, "Cancel"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateAnimalModal);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/AnimalListPage.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/AnimalListPage.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Main Container */
.animal-list-page {
    margin-top: 100px; /* Space from the top */
    padding: 20px; /* Padding inside the main container */
    font-family: 'Montserrat', sans-serif; /* Apply font-family to the main container */
    background-color: #d0b190; /* Background color */
    min-height: 100vh; /* Full height for the page */
}

/* Control Elements */
.controls {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Space between controls */
    margin: 20px; /* Margin around controls */
}

.controls label {
    margin-right: 10px; /* Space to the right of the label */
}

.controls select, 
.controls .search-input {
    padding: 10px; /* Padding for controls */
    font-size: 16px; /* Font size for readability */
    border: 1px solid #ddd; /* Border for inputs */
    border-radius: 5px; /* Rounded corners */
    transition: border-color 0.3s; /* Smooth transition for focus */
}

.controls select:focus, 
.controls .search-input:focus {
    border-color: #6351a2; /* Highlight border on focus */
    outline: none; /* Remove default outline */
}

.controls .search-input {
    flex-grow: 1; /* Allow search input to grow */
    margin-left: 10px; /* Space between select and search input */
}
.animal-table th:last-child, .animal-table td:last-child {
    width: 180px; /* Increase width for the action buttons */
    text-align: center; /* Center align the buttons */
}

.icon-button {
    background-color: transparent; /* Transparent background for icon buttons */
    border: none; /* Remove border */
    cursor: pointer; /* Pointer cursor on hover */
    color: #6351a2; /* Match icon color with theme */
    margin-left: 5px; /* Add some spacing between the buttons */
    transition: color 0.3s ease; /* Smooth color transition */
}

.icon-button:hover {
    color: #4a3e86; /* Darker shade on hover */
}
/* Animal Table */
.animal-table {
    width: 100%; 
    border-collapse: collapse; /* Collapse borders */
    margin-top: 20px; /* Space above the table */
    font-size: 18px; /* Font size for the table */
    background-color: #ffffff; /* White background for the table */
    border-radius: 5px; /* Rounded corners for the table */
    overflow: hidden; /* Prevent overflow for rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.animal-table th, .animal-table td {
    padding: 12px 15px; /* Padding for table cells */
    text-align: left; /* Left align text */
    border: 1px solid #ddd; /* Light gray border */
}

.animal-table thead th {
    background-color: #FFFFFF; /* Background for header */
    color: #333; /* Text color for header */
    font-weight: 700; /* Bold header text */
    font-size: 21px; /* Font size for header */
}

.animal-table tbody td {
    font-weight: 400; /* Regular weight for body text */
}

.animal-table tbody tr:nth-child(odd) {
    background-color: #e5e1ff; /* Light purple for odd rows */
}

.animal-table tbody tr:nth-child(even) {
    background-color: #dfeefa; /* Light blue for even rows */
}

/* Image Styling */
.animal-table img.animal-image {
    width: 60px; /* Image width */
    height: 60px; /* Image height */
    object-fit: cover; /* Cover the image */
    border-radius: 5px; /* Rounded corners for images */
}

.paw-icon-container {
    width: 60px; /* Container width */
    height: 60px; /* Container height */
    background-color: #6351a2e1; /* Background color for paw icon */
    border-radius: 15px; /* Rounded corners for icon container */
    display: flex; /* Flexbox for alignment */
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
}

.default-paw-icon {
    font-size: 30px; /* Icon size */
    color: #2c2a33; /* Icon color */
}

/* Button Styling */
button {
    padding: 10px 15px; /* Padding for buttons */
    background-color: #6351a2; /* Button background color */
    color: white; /* Button text color */
    border: none; /* No border */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s ease; /* Smooth transition for hover */
}

button:hover {
    background-color: #4a3e86; /* Darker shade on hover */
}

/* Pagination Styles */
.pagination {
    display: flex; /* Flexbox for alignment */
    align-items: center; /* Center vertically */
    margin-top: 20px; /* Space above pagination */
    justify-content: center; /* Center pagination controls */
}

.pagination button {
    border: none; /* No border */
    background-color: #6351a2; /* Match button background color */
    color: white; /* Text color */
    padding: 10px 15px; /* Increase padding for buttons */
    margin: 0 5px; /* Space between buttons */
    cursor: pointer; /* Pointer cursor on hover */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.pagination button:hover:not(:disabled) {
    background-color: #4a3e86; /* Darker shade on hover */
}

.pagination button:disabled {
    background-color: #ccc; /* Gray when disabled */
    color: #666; /* Darker gray text when disabled */
    cursor: not-allowed; /* Not allowed cursor */
}

.pagination span {
    margin: 0 10px; /* Space around the page indicator */
    color: #6351a2; /* Color to match buttons */
    font-weight: bold; /* Bold for visibility */
}

/* Responsive Styles */
@media (max-width: 768px) {
    .controls {
        flex-direction: column; /* Stack controls vertically */
        align-items: flex-start; /* Align items to the start */
    }

    .controls label {   
        margin-bottom: 20px; /* Space below label */
    }

    .controls select, 
    .controls .search-input {
        width: 100%; /* Full width for inputs */
        margin-left: 0; /* Remove left margin */
    }
    
    .animal-table {
        font-size: 16px; /* Smaller font for tables on small screens */
    }

    .pagination {
        flex-direction: column; /* Stack pagination vertically on small screens */
    }
}

.table-container {
    padding: 20px; 
    background-color: #ffffff; 
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
    width: 100%; 
    max-width: 1200px; 
    min-width: 800px;
    min-height: 900px; 
    max-height: 1000px; 
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-close-button {
    background: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
}

.modal-content input,
.modal-content textarea {
    width: 100%;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.modal-content button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}
.add-animal-button{
    margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style/AnimalListPage.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');\n\n/* Main Container */\n.animal-list-page {\n    margin-top: 100px; /* Space from the top */\n    padding: 20px; /* Padding inside the main container */\n    font-family: 'Montserrat', sans-serif; /* Apply font-family to the main container */\n    background-color: #d0b190; /* Background color */\n    min-height: 100vh; /* Full height for the page */\n}\n\n/* Control Elements */\n.controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; /* Space between controls */\n    margin: 20px; /* Margin around controls */\n}\n\n.controls label {\n    margin-right: 10px; /* Space to the right of the label */\n}\n\n.controls select, \n.controls .search-input {\n    padding: 10px; /* Padding for controls */\n    font-size: 16px; /* Font size for readability */\n    border: 1px solid #ddd; /* Border for inputs */\n    border-radius: 5px; /* Rounded corners */\n    transition: border-color 0.3s; /* Smooth transition for focus */\n}\n\n.controls select:focus, \n.controls .search-input:focus {\n    border-color: #6351a2; /* Highlight border on focus */\n    outline: none; /* Remove default outline */\n}\n\n.controls .search-input {\n    flex-grow: 1; /* Allow search input to grow */\n    margin-left: 10px; /* Space between select and search input */\n}\n.animal-table th:last-child, .animal-table td:last-child {\n    width: 180px; /* Increase width for the action buttons */\n    text-align: center; /* Center align the buttons */\n}\n\n.icon-button {\n    background-color: transparent; /* Transparent background for icon buttons */\n    border: none; /* Remove border */\n    cursor: pointer; /* Pointer cursor on hover */\n    color: #6351a2; /* Match icon color with theme */\n    margin-left: 5px; /* Add some spacing between the buttons */\n    transition: color 0.3s ease; /* Smooth color transition */\n}\n\n.icon-button:hover {\n    color: #4a3e86; /* Darker shade on hover */\n}\n/* Animal Table */\n.animal-table {\n    width: 100%; \n    border-collapse: collapse; /* Collapse borders */\n    margin-top: 20px; /* Space above the table */\n    font-size: 18px; /* Font size for the table */\n    background-color: #ffffff; /* White background for the table */\n    border-radius: 5px; /* Rounded corners for the table */\n    overflow: hidden; /* Prevent overflow for rounded corners */\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */\n}\n\n.animal-table th, .animal-table td {\n    padding: 12px 15px; /* Padding for table cells */\n    text-align: left; /* Left align text */\n    border: 1px solid #ddd; /* Light gray border */\n}\n\n.animal-table thead th {\n    background-color: #FFFFFF; /* Background for header */\n    color: #333; /* Text color for header */\n    font-weight: 700; /* Bold header text */\n    font-size: 21px; /* Font size for header */\n}\n\n.animal-table tbody td {\n    font-weight: 400; /* Regular weight for body text */\n}\n\n.animal-table tbody tr:nth-child(odd) {\n    background-color: #e5e1ff; /* Light purple for odd rows */\n}\n\n.animal-table tbody tr:nth-child(even) {\n    background-color: #dfeefa; /* Light blue for even rows */\n}\n\n/* Image Styling */\n.animal-table img.animal-image {\n    width: 60px; /* Image width */\n    height: 60px; /* Image height */\n    object-fit: cover; /* Cover the image */\n    border-radius: 5px; /* Rounded corners for images */\n}\n\n.paw-icon-container {\n    width: 60px; /* Container width */\n    height: 60px; /* Container height */\n    background-color: #6351a2e1; /* Background color for paw icon */\n    border-radius: 15px; /* Rounded corners for icon container */\n    display: flex; /* Flexbox for alignment */\n    align-items: center; /* Center vertically */\n    justify-content: center; /* Center horizontally */\n}\n\n.default-paw-icon {\n    font-size: 30px; /* Icon size */\n    color: #2c2a33; /* Icon color */\n}\n\n/* Button Styling */\nbutton {\n    padding: 10px 15px; /* Padding for buttons */\n    background-color: #6351a2; /* Button background color */\n    color: white; /* Button text color */\n    border: none; /* No border */\n    border-radius: 5px; /* Rounded corners */\n    cursor: pointer; /* Pointer cursor on hover */\n    transition: background-color 0.3s ease; /* Smooth transition for hover */\n}\n\nbutton:hover {\n    background-color: #4a3e86; /* Darker shade on hover */\n}\n\n/* Pagination Styles */\n.pagination {\n    display: flex; /* Flexbox for alignment */\n    align-items: center; /* Center vertically */\n    margin-top: 20px; /* Space above pagination */\n    justify-content: center; /* Center pagination controls */\n}\n\n.pagination button {\n    border: none; /* No border */\n    background-color: #6351a2; /* Match button background color */\n    color: white; /* Text color */\n    padding: 10px 15px; /* Increase padding for buttons */\n    margin: 0 5px; /* Space between buttons */\n    cursor: pointer; /* Pointer cursor on hover */\n    border-radius: 5px; /* Rounded corners */\n    transition: background-color 0.3s; /* Smooth transition for hover effect */\n}\n\n.pagination button:hover:not(:disabled) {\n    background-color: #4a3e86; /* Darker shade on hover */\n}\n\n.pagination button:disabled {\n    background-color: #ccc; /* Gray when disabled */\n    color: #666; /* Darker gray text when disabled */\n    cursor: not-allowed; /* Not allowed cursor */\n}\n\n.pagination span {\n    margin: 0 10px; /* Space around the page indicator */\n    color: #6351a2; /* Color to match buttons */\n    font-weight: bold; /* Bold for visibility */\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n    .controls {\n        flex-direction: column; /* Stack controls vertically */\n        align-items: flex-start; /* Align items to the start */\n    }\n\n    .controls label {   \n        margin-bottom: 20px; /* Space below label */\n    }\n\n    .controls select, \n    .controls .search-input {\n        width: 100%; /* Full width for inputs */\n        margin-left: 0; /* Remove left margin */\n    }\n    \n    .animal-table {\n        font-size: 16px; /* Smaller font for tables on small screens */\n    }\n\n    .pagination {\n        flex-direction: column; /* Stack pagination vertically on small screens */\n    }\n}\n\n.table-container {\n    padding: 20px; \n    background-color: #ffffff; \n    border-radius: 10px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); \n    width: 100%; \n    max-width: 1200px; \n    min-width: 800px;\n    min-height: 900px; \n    max-height: 1000px; \n}\n.modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-content {\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    width: 400px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.modal-close-button {\n    background: transparent;\n    border: none;\n    color: #007bff;\n    cursor: pointer;\n}\n\n.modal-content input,\n.modal-content textarea {\n    width: 100%;\n    margin: 10px 0;\n    padding: 8px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n.modal-content button {\n    background: #007bff;\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n.add-animal-button{\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/AnimalListPage.css":
/*!**************************************!*\
  !*** ./src/style/AnimalListPage.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./AnimalListPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/AnimalListPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AnimalListPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfQW5pbWFsTGlzdFBhZ2VfanMuMWEyMTdhY2UxNzM4ZDVhOWMxMmIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLGNBQWMsR0FBR0MsSUFBQSxJQUFzQztFQUFBLElBQXJDO0lBQUVDLE1BQU07SUFBRUMsT0FBTztJQUFFQztFQUFZLENBQUMsR0FBQUgsSUFBQTtFQUNwRCxNQUFNLENBQUNJLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3BDLE1BQU0sQ0FBQ1EsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1QsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDcEMsTUFBTSxDQUFDVSxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHWCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUNsQyxNQUFNLENBQUNZLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdiLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLE1BQU0sQ0FBQ2MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDNUMsTUFBTSxDQUFDZ0IsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR2pCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ2xELE1BQU0sQ0FBQ2tCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUduQiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN4QyxNQUFNLENBQUNvQixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHckIsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzlDLE1BQU0sQ0FBQ3NCLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUd2QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUN4QyxNQUFNLENBQUN3QixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHekIsK0NBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztFQUVsRCxNQUFNMEIs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QixpQ0FBaUMsMkJBQTJCLGlEQUFpRCxtQkFBbUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsMEJBQTBCLEdBQUcsa0JBQWtCLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IscUNBQXFDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsb0JBQW9CLHdCQUF3QixvQkFBb0IseUJBQXlCLG1CQUFtQixnREFBZ0QsR0FBRyx5QkFBeUIsOEJBQThCLG1CQUFtQixxQkFBcUIsc0JBQXNCLEdBQUcsb0RBQW9ELGtCQUFrQixxQkFBcUIsbUJBQW1CLDZCQUE2Qix5QkFBeUIsR0FBRywyQkFBMkIsMEJBQTBCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHlCQUF5QixzQkFBc0IsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQ2xqVjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBK0c7QUFDL0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywrRkFBTzs7OztBQUl5RDtBQUNqRixPQUFPLGlFQUFlLCtGQUFPLElBQUksK0ZBQU8sVUFBVSwrRkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0FkZEFuaW1hbE1vZGFsLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0FuaW1hbExpc3RQYWdlLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL0RlbGV0ZUNvbmZpcm1hdGlvbk1vZGFsLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9jb21wb25lbnRzL1VwZGF0ZUFuaW1hbE1vZGFsLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9BbmltYWxMaXN0UGFnZS5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0FuaW1hbExpc3RQYWdlLmNzcz83MDE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFkZEFuaW1hbE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlLCBvbkFkZEFuaW1hbCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JyZWVkLCBzZXRCcmVlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwZXJzb25hbGl0eSwgc2V0UGVyc29uYWxpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSBmb3IgaW1hZ2UgZmlsZVxyXG4gICAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgZm9yIGJhY2tncm91bmQgdGV4dCBmaWVsZFxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbWdGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggc2VsZWN0ZWQgZmlsZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdBbmltYWwgPSB7IFxyXG4gICAgICAgICAgICBuYW1lLCBcclxuICAgICAgICAgICAgdHlwZSwgXHJcbiAgICAgICAgICAgIGFnZSwgXHJcbiAgICAgICAgICAgIGJyZWVkLCBcclxuICAgICAgICAgICAgbG9jYXRpb24sIFxyXG4gICAgICAgICAgICBwZXJzb25hbGl0eSwgXHJcbiAgICAgICAgICAgIHN0YXR1cywgXHJcbiAgICAgICAgICAgIGdlbmRlcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZCAvLyBJbmNsdWRlIHRoZSBiYWNrZ3JvdW5kIGZpZWxkIGluIHRoZSBvYmplY3RcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJZiBhbiBpbWFnZSBmaWxlIGlzIHNlbGVjdGVkLCBhZGQgaXQgdG8gdGhlIG5ld0FuaW1hbCBvYmplY3RcclxuICAgICAgICBpZiAoaW1nRmlsZSkge1xyXG4gICAgICAgICAgICBuZXdBbmltYWwuaW1nRmlsZSA9IGltZ0ZpbGU7IC8vIEluY2x1ZGUgdGhlIGltYWdlIGZpbGUgaW4gdGhlIG9iamVjdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25BZGRBbmltYWwobmV3QW5pbWFsKTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIHNldFR5cGUoJycpO1xyXG4gICAgICAgIHNldEFnZSgnJyk7XHJcbiAgICAgICAgc2V0QnJlZWQoJycpO1xyXG4gICAgICAgIHNldExvY2F0aW9uKCcnKTtcclxuICAgICAgICBzZXRQZXJzb25hbGl0eSgnJyk7XHJcbiAgICAgICAgc2V0U3RhdHVzKCcnKTtcclxuICAgICAgICBzZXRHZW5kZXIoJycpO1xyXG4gICAgICAgIHNldEJhY2tncm91bmQoJycpOyAvLyBSZXNldCBiYWNrZ3JvdW5kIGZpZWxkXHJcbiAgICAgICAgc2V0SW1nRmlsZShudWxsKTsgLy8gUmVzZXQgaW1hZ2UgZmlsZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkFkZCBOZXcgQW5pbWFsPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JyZWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJyZWVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCcmVlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb25hbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQZXJzb25hbGl0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVyc29uYWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFja2dyb3VuZH0gLy8gQWRkIGlucHV0IGZvciBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmFja2dyb3VuZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgaW5wdXQgZm9yIHBpY2tpbmcgdGhlIGltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIEFuaW1hbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRBbmltYWxNb2RhbDtcclxuICAgICIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFQYXcsIGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0LCBmYVBsdXMsIGZhRWRpdCwgZmFUcmFzaCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgJy4uL3N0eWxlL0FuaW1hbExpc3RQYWdlLmNzcyc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xuaW1wb3J0IEFkZEFuaW1hbE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkQW5pbWFsTW9kYWwnO1xuaW1wb3J0IFVwZGF0ZUFuaW1hbE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvVXBkYXRlQW5pbWFsTW9kYWwnO1xuaW1wb3J0IERlbGV0ZUNvbmZpcm1hdGlvbk1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvRGVsZXRlQ29uZmlybWF0aW9uTW9kYWwnO1xuXG5jb25zdCBBbmltYWxMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFthbmltYWxzLCBzZXRBbmltYWxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbnRyaWVzUGVyUGFnZSwgc2V0RW50cmllc1BlclBhZ2VdID0gdXNlU3RhdGUoMTApO1xuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXBkYXRlTW9kYWxPcGVuLCBzZXRVcGRhdGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkZWxldGVNb2RhbE9wZW4sIHNldERlbGV0ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFN0YXRlIHRvIGNvbnRyb2wgZGVsZXRlIG1vZGFsXG4gICAgY29uc3QgW3NlbGVjdGVkQW5pbWFsLCBzZXRTZWxlY3RlZEFuaW1hbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYW5pbWFsVG9EZWxldGUsIHNldEFuaW1hbFRvRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZSgnbmFtZScpO1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuXG4gICAgLy8gRmV0Y2ggYW5pbWFscyBmcm9tIHRoZSBBUElcbiAgICBjb25zdCBmZXRjaEFuaW1hbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hbmltYWxzYCk7XG4gICAgICAgICAgICBzZXRBbmltYWxzKHJlc3BvbnNlLmRhdGEuYW5pbWFscyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYW5pbWFsczonLCBlcnIucmVzcG9uc2UgPyBlcnIucmVzcG9uc2UuZGF0YSA6IGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHNldEVycm9yKCdFcnJvciBmZXRjaGluZyBhbmltYWxzJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEFuaW1hbHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBhbmltYWwgZGV0YWlscyBwYWdlXG4gICAgY29uc3QgaGFuZGxlVmlld0NsaWNrID0gKGlkKSA9PiB7XG4gICAgICAgIG5hdmlnYXRlKGAvYW5pbWFscy8ke2lkfS9kZXRhaWxzYCk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBzZWFyY2ggaW5wdXQgY2hhbmdlXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgZW50cmllcyBwZXIgcGFnZSBjaGFuZ2VcbiAgICBjb25zdCBoYW5kbGVFbnRyaWVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0RW50cmllc1BlclBhZ2UocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBhZGRpbmcgYSBuZXcgYW5pbWFsXG4gICAgY29uc3QgaGFuZGxlQWRkQW5pbWFsID0gYXN5bmMgKG5ld0FuaW1hbCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCBuZXdBbmltYWwubmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsIG5ld0FuaW1hbC50eXBlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhZ2UnLCBuZXdBbmltYWwuYWdlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdicmVlZCcsIG5ld0FuaW1hbC5icmVlZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9jYXRpb24nLCBuZXdBbmltYWwubG9jYXRpb24pO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3BlcnNvbmFsaXR5JywgbmV3QW5pbWFsLnBlcnNvbmFsaXR5KTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCBuZXdBbmltYWwuc3RhdHVzKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5kZXInLCBuZXdBbmltYWwuZ2VuZGVyKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdiYWNrZ3JvdW5kJywgbmV3QW5pbWFsLmJhY2tncm91bmQpO1xuXG4gICAgICAgIGlmIChuZXdBbmltYWwuaW1nRmlsZSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWdGaWxlJywgbmV3QW5pbWFsLmltZ0ZpbGUpOyAvLyBFbnN1cmUgdGhlIGltYWdlIGlzIGluY2x1ZGVkXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hZGQtYW5pbWFsYCwgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsIC8vIExldCB0aGUgYnJvd3NlciBzZXQgdGhpcyBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmV0Y2hBbmltYWxzKCk7IC8vIFJlZnJlc2ggdGhlIGxpc3QgYWZ0ZXIgYWRkaW5nXG4gICAgICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpOyAvLyBDbG9zZSB0aGUgbW9kYWwgYWZ0ZXIgc3VjY2Vzc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHNldEVycm9yKCdFcnJvciBhZGRpbmcgYW5pbWFsJyk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgYW5pbWFsOicsIGVyci5yZXNwb25zZSA/IGVyci5yZXNwb25zZS5kYXRhIDogZXJyLm1lc3NhZ2UpOyAvLyBMb2cgbW9yZSBkZXRhaWxzXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHVwZGF0aW5nIGFuIGFuaW1hbFxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZUFuaW1hbCA9IGFzeW5jIChpZCwgdXBkYXRlZEFuaW1hbCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB1cGRhdGVkQW5pbWFsLm5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCB1cGRhdGVkQW5pbWFsLnR5cGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FnZScsIHVwZGF0ZWRBbmltYWwuYWdlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdicmVlZCcsIHVwZGF0ZWRBbmltYWwuYnJlZWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvY2F0aW9uJywgdXBkYXRlZEFuaW1hbC5sb2NhdGlvbik7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGVyc29uYWxpdHknLCB1cGRhdGVkQW5pbWFsLnBlcnNvbmFsaXR5KTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGF0dXMnLCB1cGRhdGVkQW5pbWFsLnN0YXR1cyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VuZGVyJywgdXBkYXRlZEFuaW1hbC5nZW5kZXIpO1xuXG4gICAgICAgIGlmICh1cGRhdGVkQW5pbWFsLmltZ0ZpbGUpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1nRmlsZScsIHVwZGF0ZWRBbmltYWwuaW1nRmlsZSk7IC8vIEluY2x1ZGUgdGhlIGltYWdlIGZpbGUgaWYgb25lIGlzIHNlbGVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYW5pbWFscy8ke2lkfWAsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLCAvLyBCcm93c2VyIHdpbGwgaGFuZGxlIG11bHRpcGFydCBib3VuZGFyeVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZldGNoQW5pbWFscygpOyAvLyBSZWZyZXNoIHRoZSBhbmltYWwgbGlzdCBhZnRlciB1cGRhdGluZ1xuICAgICAgICAgICAgc2V0VXBkYXRlTW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcignRXJyb3IgdXBkYXRpbmcgYW5pbWFsJyk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBhbmltYWw6JywgZXJyLnJlc3BvbnNlID8gZXJyLnJlc3BvbnNlLmRhdGEgOiBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoYW5pbWFsKSA9PiB7XG4gICAgICAgIHNldEFuaW1hbFRvRGVsZXRlKGFuaW1hbCk7IFxuICAgICAgICBzZXREZWxldGVNb2RhbE9wZW4odHJ1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9L2FwaS9hZG1pbi9hbmltYWxzLyR7aWR9YCk7XG4gICAgICAgICAgICBmZXRjaEFuaW1hbHMoKTsgXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGFuaW1hbCcpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYW5pbWFsOicsIGVyci5yZXNwb25zZSA/IGVyci5yZXNwb25zZS5kYXRhIDogZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0RGVsZXRlTW9kYWxPcGVuKGZhbHNlKTsgXG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEhhbmRsZSBjbGlja2luZyB0aGUgZWRpdCBidXR0b25cbiAgICBjb25zdCBoYW5kbGVFZGl0Q2xpY2sgPSAoYW5pbWFsKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkQW5pbWFsKGFuaW1hbCk7XG4gICAgICAgIHNldFVwZGF0ZU1vZGFsT3Blbih0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gRmlsdGVyIGFuaW1hbHMgYmFzZWQgb24gc2VhcmNoIHF1ZXJ5XG4gICAgY29uc3QgZmlsdGVyZWRBbmltYWxzID0gYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+XG4gICAgICAgIChhbmltYWwubmFtZSAmJiBhbmltYWwubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSkgfHxcbiAgICAgICAgKGFuaW1hbC50eXBlICYmIGFuaW1hbC50eXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpKSB8fFxuICAgICAgICAoYW5pbWFsLmJyZWVkICYmIGFuaW1hbC5icmVlZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSlcbiAgICApO1xuXG4gICAgLy8gU29ydCBhbmltYWxzIGJhc2VkIG9uIHNlbGVjdGVkIG9yZGVyXG4gICAgY29uc3Qgc29ydGVkQW5pbWFscyA9IFsuLi5maWx0ZXJlZEFuaW1hbHNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3J0T3JkZXIgPT09ICdhZ2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5hZ2UgLSBiLmFnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDsgLy8gRGVmYXVsdCBjYXNlXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmRleE9mTGFzdEFuaW1hbCA9IGN1cnJlbnRQYWdlICogZW50cmllc1BlclBhZ2U7XG4gICAgY29uc3QgaW5kZXhPZkZpcnN0QW5pbWFsID0gaW5kZXhPZkxhc3RBbmltYWwgLSBlbnRyaWVzUGVyUGFnZTtcbiAgICBjb25zdCBjdXJyZW50QW5pbWFscyA9IHNvcnRlZEFuaW1hbHMuc2xpY2UoaW5kZXhPZkZpcnN0QW5pbWFsLCBpbmRleE9mTGFzdEFuaW1hbCk7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChzb3J0ZWRBbmltYWxzLmxlbmd0aCAvIGVudHJpZXNQZXJQYWdlKTtcblxuICAgIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZyBhbmltYWxzLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+QW5pbWFscyBpbiB0aGUgU2hlbHRlcjwvaDE+XG4gICAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtYW5pbWFsLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBsdXN9IC8+IEFkZCBBbmltYWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPEFkZEFuaW1hbE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkFkZEFuaW1hbD17aGFuZGxlQWRkQW5pbWFsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxVcGRhdGVBbmltYWxNb2RhbFxuICAgICAgICAgICAgICAgIGlzT3Blbj17dXBkYXRlTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFVwZGF0ZU1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVBbmltYWw9e2hhbmRsZVVwZGF0ZUFuaW1hbH1cbiAgICAgICAgICAgICAgICBhbmltYWw9e3NlbGVjdGVkQW5pbWFsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICA8RGVsZXRlQ29uZmlybWF0aW9uTW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e2RlbGV0ZU1vZGFsT3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXREZWxldGVNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlQ29uZmlybT17KCkgPT4gY29uZmlybURlbGV0ZShhbmltYWxUb0RlbGV0ZT8uaWQpfSAvLyBGaXggdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVudHJpZXNcIj5TaG93PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZW50cmllc1wiIHZhbHVlPXtlbnRyaWVzUGVyUGFnZX0gb25DaGFuZ2U9e2hhbmRsZUVudHJpZXNDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjI1XCI+MjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gZW50cmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29ydFwiPlNvcnQgYnk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic29ydFwiIHZhbHVlPXtzb3J0T3JkZXJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U29ydE9yZGVyKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYW1lXCI+TmFtZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWdlXCI+QWdlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2ZpbHRlcmVkQW5pbWFscy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPHA+Tm8gYW5pbWFscyBmb3VuZCBpbiB0aGUgc2hlbHRlci48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhbmltYWwtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWdlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJyZWVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbmRlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Mb2NhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb25hbGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRBbmltYWxzLm1hcChhbmltYWwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthbmltYWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbmltYWwuaW1ndXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FuaW1hbC5pbWd1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FuaW1hbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWFsLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhdy1pY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBhd30gY2xhc3NOYW1lPVwiZGVmYXVsdC1wYXctaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwudHlwZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwuYWdlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC5icmVlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwuZ2VuZGVyfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC5sb2NhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwucGVyc29uYWxpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLnN0YXR1c308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdENsaWNrKGFuaW1hbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWRpdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUNsaWNrKGFuaW1hbCl9IGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRyYXNofSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVmlld0NsaWNrKGFuaW1hbC5pZCl9PlZpZXcgRGV0YWlsczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c30gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2hldnJvbkxlZnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGV2cm9uUmlnaHR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWFsTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgRGVsZXRlQ29uZmlybWF0aW9uTW9kYWwgPSAoeyBpc09wZW4sIG9uQ2xvc2UsIG9uRGVsZXRlQ29uZmlybSB9KSA9PiB7XHJcbiAgICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q29uZmlybSBEZWxldGlvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYW5pbWFsPzwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FuY2VsLWJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xvc2V9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29uZmlybS1idXR0b25cIiBvbkNsaWNrPXtvbkRlbGV0ZUNvbmZpcm19PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVDb25maXJtYXRpb25Nb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBVcGRhdGVBbmltYWxNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgb25VcGRhdGVBbmltYWwsIGFuaW1hbCB9KSA9PiB7XHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JyZWVkLCBzZXRCcmVlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwZXJzb25hbGl0eSwgc2V0UGVyc29uYWxpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbWdGaWxlLCBzZXRJbWdGaWxlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSBmb3IgaW1hZ2UgZmlsZVxyXG4gICAgY29uc3QgW2dlbmRlciwgc2V0R2VuZGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpbWdQcmV2aWV3LCBzZXRJbWdQcmV2aWV3XSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgZm9yIGltYWdlIHByZXZpZXdcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhbmltYWwpIHtcclxuICAgICAgICAgICAgc2V0TmFtZShhbmltYWwubmFtZSk7XHJcbiAgICAgICAgICAgIHNldFR5cGUoYW5pbWFsLnR5cGUpO1xyXG4gICAgICAgICAgICBzZXRBZ2UoYW5pbWFsLmFnZSk7XHJcbiAgICAgICAgICAgIHNldEJyZWVkKGFuaW1hbC5icmVlZCk7XHJcbiAgICAgICAgICAgIHNldExvY2F0aW9uKGFuaW1hbC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIHNldFBlcnNvbmFsaXR5KGFuaW1hbC5wZXJzb25hbGl0eSk7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cyhhbmltYWwuc3RhdHVzKTtcclxuICAgICAgICAgICAgc2V0R2VuZGVyKGFuaW1hbC5nZW5kZXIgfHwgJycpOyAvLyBTZXQgZ2VuZGVyIGZyb20gYW5pbWFsIGRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIFJlc2V0dGluZyB0aGUgaW1hZ2UgZmlsZSBhbmQgcHJldmlldyB3aGVuIHRoZSBhbmltYWwgY2hhbmdlc1xyXG4gICAgICAgICAgICBzZXRJbWdGaWxlKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRJbWdQcmV2aWV3KGFuaW1hbC5pbWd1cmwgfHwgJycpOyAvLyBTZXQgcHJldmlldyB0byBleGlzdGluZyBpbWFnZSBVUkwgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FuaW1hbF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgc2V0SW1nRmlsZShmaWxlKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggc2VsZWN0ZWQgZmlsZVxyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBpbWFnZSBwcmV2aWV3IFVSTFxyXG4gICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgICAgICBzZXRJbWdQcmV2aWV3KHByZXZpZXdVcmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEltZ1ByZXZpZXcoJycpOyAvLyBDbGVhciBwcmV2aWV3IGlmIG5vIGZpbGUgaXMgc2VsZWN0ZWRcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBbmltYWwgPSB7IG5hbWUsIHR5cGUsIGFnZSwgYnJlZWQsIGxvY2F0aW9uLCBwZXJzb25hbGl0eSwgc3RhdHVzLCBnZW5kZXIgfTtcclxuXHJcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgZmlsZSBpcyBzZWxlY3RlZCwgYWRkIGl0IHRvIHRoZSB1cGRhdGVkQW5pbWFsIG9iamVjdFxyXG4gICAgICAgIGlmIChpbWdGaWxlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRBbmltYWwuaW1nRmlsZSA9IGltZ0ZpbGU7IC8vIEluY2x1ZGUgdGhlIGltYWdlIGZpbGUgaW4gdGhlIG9iamVjdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25VcGRhdGVBbmltYWwoYW5pbWFsLmlkLCB1cGRhdGVkQW5pbWFsKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5VcGRhdGUgQW5pbWFsPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JyZWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJyZWVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCcmVlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJzb25hbGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQZXJzb25hbGl0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVyc29uYWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgaW5wdXQgZm9yIHBpY2tpbmcgdGhlIGltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX0gLy8gSGFuZGxlIGZpbGUgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiAvLyBBY2NlcHQgb25seSBpbWFnZSBmaWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNob3cgaW1hZ2UgcHJldmlldyBpZiBhdmFpbGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge2ltZ1ByZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbWFnZSBQcmV2aWV3OjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUHJldmlld30gYWx0PVwiSW1hZ2UgUHJldmlld1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHZW5kZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgQW5pbWFsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZUFuaW1hbE1vZGFsO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTWFpbiBDb250YWluZXIgKi9cbi5hbmltYWwtbGlzdC1wYWdlIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgLyogU3BhY2UgZnJvbSB0aGUgdG9wICovXG4gICAgcGFkZGluZzogMjBweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyICovXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgLyogQXBwbHkgZm9udC1mYW1pbHkgdG8gdGhlIG1haW4gY29udGFpbmVyICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjE5MDsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCBmb3IgdGhlIHBhZ2UgKi9cbn1cblxuLyogQ29udHJvbCBFbGVtZW50cyAqL1xuLmNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBTcGFjZSBiZXR3ZWVuIGNvbnRyb2xzICovXG4gICAgbWFyZ2luOiAyMHB4OyAvKiBNYXJnaW4gYXJvdW5kIGNvbnRyb2xzICovXG59XG5cbi5jb250cm9scyBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSB0byB0aGUgcmlnaHQgb2YgdGhlIGxhYmVsICovXG59XG5cbi5jb250cm9scyBzZWxlY3QsIFxuLmNvbnRyb2xzIC5zZWFyY2gtaW5wdXQge1xuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgZm9yIGNvbnRyb2xzICovXG4gICAgZm9udC1zaXplOiAxNnB4OyAvKiBGb250IHNpemUgZm9yIHJlYWRhYmlsaXR5ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogQm9yZGVyIGZvciBpbnB1dHMgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzOyAvKiBTbW9vdGggdHJhbnNpdGlvbiBmb3IgZm9jdXMgKi9cbn1cblxuLmNvbnRyb2xzIHNlbGVjdDpmb2N1cywgXG4uY29udHJvbHMgLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjM1MWEyOyAvKiBIaWdobGlnaHQgYm9yZGVyIG9uIGZvY3VzICovXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgb3V0bGluZSAqL1xufVxuXG4uY29udHJvbHMgLnNlYXJjaC1pbnB1dCB7XG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvdyBzZWFyY2ggaW5wdXQgdG8gZ3JvdyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIHNlbGVjdCBhbmQgc2VhcmNoIGlucHV0ICovXG59XG4uYW5pbWFsLXRhYmxlIHRoOmxhc3QtY2hpbGQsIC5hbmltYWwtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDE4MHB4OyAvKiBJbmNyZWFzZSB3aWR0aCBmb3IgdGhlIGFjdGlvbiBidXR0b25zICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgYWxpZ24gdGhlIGJ1dHRvbnMgKi9cbn1cblxuLmljb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogVHJhbnNwYXJlbnQgYmFja2dyb3VuZCBmb3IgaWNvbiBidXR0b25zICovXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVyICovXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyIGN1cnNvciBvbiBob3ZlciAqL1xuICAgIGNvbG9yOiAjNjM1MWEyOyAvKiBNYXRjaCBpY29uIGNvbG9yIHdpdGggdGhlbWUgKi9cbiAgICBtYXJnaW4tbGVmdDogNXB4OyAvKiBBZGQgc29tZSBzcGFjaW5nIGJldHdlZW4gdGhlIGJ1dHRvbnMgKi9cbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCBjb2xvciB0cmFuc2l0aW9uICovXG59XG5cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICM0YTNlODY7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xufVxuLyogQW5pbWFsIFRhYmxlICovXG4uYW5pbWFsLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogQ29sbGFwc2UgYm9yZGVycyAqL1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIFNwYWNlIGFib3ZlIHRoZSB0YWJsZSAqL1xuICAgIGZvbnQtc2l6ZTogMThweDsgLyogRm9udCBzaXplIGZvciB0aGUgdGFibGUgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciB0aGUgdGFibGUgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHRhYmxlICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCBvdmVyZmxvdyBmb3Igcm91bmRlZCBjb3JuZXJzICovXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoICovXG59XG5cbi5hbmltYWwtdGFibGUgdGgsIC5hbmltYWwtdGFibGUgdGQge1xuICAgIHBhZGRpbmc6IDEycHggMTVweDsgLyogUGFkZGluZyBmb3IgdGFibGUgY2VsbHMgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBMZWZ0IGFsaWduIHRleHQgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBMaWdodCBncmF5IGJvcmRlciAqL1xufVxuXG4uYW5pbWFsLXRhYmxlIHRoZWFkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGOyAvKiBCYWNrZ3JvdW5kIGZvciBoZWFkZXIgKi9cbiAgICBjb2xvcjogIzMzMzsgLyogVGV4dCBjb2xvciBmb3IgaGVhZGVyICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgLyogQm9sZCBoZWFkZXIgdGV4dCAqL1xuICAgIGZvbnQtc2l6ZTogMjFweDsgLyogRm9udCBzaXplIGZvciBoZWFkZXIgKi9cbn1cblxuLmFuaW1hbC10YWJsZSB0Ym9keSB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgLyogUmVndWxhciB3ZWlnaHQgZm9yIGJvZHkgdGV4dCAqL1xufVxuXG4uYW5pbWFsLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlMWZmOyAvKiBMaWdodCBwdXJwbGUgZm9yIG9kZCByb3dzICovXG59XG5cbi5hbmltYWwtdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlZWZhOyAvKiBMaWdodCBibHVlIGZvciBldmVuIHJvd3MgKi9cbn1cblxuLyogSW1hZ2UgU3R5bGluZyAqL1xuLmFuaW1hbC10YWJsZSBpbWcuYW5pbWFsLWltYWdlIHtcbiAgICB3aWR0aDogNjBweDsgLyogSW1hZ2Ugd2lkdGggKi9cbiAgICBoZWlnaHQ6IDYwcHg7IC8qIEltYWdlIGhlaWdodCAqL1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBDb3ZlciB0aGUgaW1hZ2UgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgaW1hZ2VzICovXG59XG5cbi5wYXctaWNvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA2MHB4OyAvKiBDb250YWluZXIgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDYwcHg7IC8qIENvbnRhaW5lciBoZWlnaHQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1MWEyZTE7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHBhdyBpY29uICovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciBpY29uIGNvbnRhaW5lciAqL1xuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEZsZXhib3ggZm9yIGFsaWdubWVudCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbn1cblxuLmRlZmF1bHQtcGF3LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogSWNvbiBzaXplICovXG4gICAgY29sb3I6ICMyYzJhMzM7IC8qIEljb24gY29sb3IgKi9cbn1cblxuLyogQnV0dG9uIFN0eWxpbmcgKi9cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBQYWRkaW5nIGZvciBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNTFhMjsgLyogQnV0dG9uIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIEJ1dHRvbiB0ZXh0IGNvbG9yICovXG4gICAgYm9yZGVyOiBub25lOyAvKiBObyBib3JkZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGhvdmVyICovXG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhM2U4NjsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXG59XG5cbi8qIFBhZ2luYXRpb24gU3R5bGVzICovXG4ucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDsgLyogRmxleGJveCBmb3IgYWxpZ25tZW50ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBTcGFjZSBhYm92ZSBwYWdpbmF0aW9uICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBwYWdpbmF0aW9uIGNvbnRyb2xzICovXG59XG5cbi5wYWdpbmF0aW9uIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lOyAvKiBObyBib3JkZXIgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM1MWEyOyAvKiBNYXRjaCBidXR0b24gYmFja2dyb3VuZCBjb2xvciAqL1xuICAgIGNvbG9yOiB3aGl0ZTsgLyogVGV4dCBjb2xvciAqL1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogSW5jcmVhc2UgcGFkZGluZyBmb3IgYnV0dG9ucyAqL1xuICAgIG1hcmdpbjogMCA1cHg7IC8qIFNwYWNlIGJldHdlZW4gYnV0dG9ucyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTNlODY7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xufVxuXG4ucGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IC8qIEdyYXkgd2hlbiBkaXNhYmxlZCAqL1xuICAgIGNvbG9yOiAjNjY2OyAvKiBEYXJrZXIgZ3JheSB0ZXh0IHdoZW4gZGlzYWJsZWQgKi9cbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBOb3QgYWxsb3dlZCBjdXJzb3IgKi9cbn1cblxuLnBhZ2luYXRpb24gc3BhbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7IC8qIFNwYWNlIGFyb3VuZCB0aGUgcGFnZSBpbmRpY2F0b3IgKi9cbiAgICBjb2xvcjogIzYzNTFhMjsgLyogQ29sb3IgdG8gbWF0Y2ggYnV0dG9ucyAqL1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBCb2xkIGZvciB2aXNpYmlsaXR5ICovXG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udHJvbHMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb250cm9scyB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGlnbiBpdGVtcyB0byB0aGUgc3RhcnQgKi9cbiAgICB9XG5cbiAgICAuY29udHJvbHMgbGFiZWwgeyAgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBTcGFjZSBiZWxvdyBsYWJlbCAqL1xuICAgIH1cblxuICAgIC5jb250cm9scyBzZWxlY3QsIFxuICAgIC5jb250cm9scyAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggZm9yIGlucHV0cyAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogMDsgLyogUmVtb3ZlIGxlZnQgbWFyZ2luICovXG4gICAgfVxuICAgIFxuICAgIC5hbmltYWwtdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7IC8qIFNtYWxsZXIgZm9udCBmb3IgdGFibGVzIG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICB9XG5cbiAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIHBhZ2luYXRpb24gdmVydGljYWxseSBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIG1heC13aWR0aDogMTIwMHB4OyBcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDkwMHB4OyBcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7IFxufVxuLm1vZGFsLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1vZGFsLWNsb3NlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaW5wdXQsXG4ubW9kYWwtY29udGVudCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWFuaW1hbC1idXR0b257XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9BbmltYWxMaXN0UGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksaUJBQWlCLEVBQUUsdUJBQXVCO0lB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QkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLmFuaW1hbC1saXN0LXBhZ2Uge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDsgLyogU3BhY2UgZnJvbSB0aGUgdG9wICovXFxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIFBhZGRpbmcgaW5zaWRlIHRoZSBtYWluIGNvbnRhaW5lciAqL1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAvKiBBcHBseSBmb250LWZhbWlseSB0byB0aGUgbWFpbiBjb250YWluZXIgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwYjE5MDsgLyogQmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgZm9yIHRoZSBwYWdlICovXFxufVxcblxcbi8qIENvbnRyb2wgRWxlbWVudHMgKi9cXG4uY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIGJldHdlZW4gY29udHJvbHMgKi9cXG4gICAgbWFyZ2luOiAyMHB4OyAvKiBNYXJnaW4gYXJvdW5kIGNvbnRyb2xzICovXFxufVxcblxcbi5jb250cm9scyBsYWJlbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogU3BhY2UgdG8gdGhlIHJpZ2h0IG9mIHRoZSBsYWJlbCAqL1xcbn1cXG5cXG4uY29udHJvbHMgc2VsZWN0LCBcXG4uY29udHJvbHMgLnNlYXJjaC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFBhZGRpbmcgZm9yIGNvbnRyb2xzICovXFxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogRm9udCBzaXplIGZvciByZWFkYWJpbGl0eSAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBCb3JkZXIgZm9yIGlucHV0cyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zczsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGZvY3VzICovXFxufVxcblxcbi5jb250cm9scyBzZWxlY3Q6Zm9jdXMsIFxcbi5jb250cm9scyAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNjM1MWEyOyAvKiBIaWdobGlnaHQgYm9yZGVyIG9uIGZvY3VzICovXFxuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IG91dGxpbmUgKi9cXG59XFxuXFxuLmNvbnRyb2xzIC5zZWFyY2gtaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEFsbG93IHNlYXJjaCBpbnB1dCB0byBncm93ICovXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIHNlbGVjdCBhbmQgc2VhcmNoIGlucHV0ICovXFxufVxcbi5hbmltYWwtdGFibGUgdGg6bGFzdC1jaGlsZCwgLmFuaW1hbC10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDE4MHB4OyAvKiBJbmNyZWFzZSB3aWR0aCBmb3IgdGhlIGFjdGlvbiBidXR0b25zICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIGFsaWduIHRoZSBidXR0b25zICovXFxufVxcblxcbi5pY29uLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBUcmFuc3BhcmVudCBiYWNrZ3JvdW5kIGZvciBpY29uIGJ1dHRvbnMgKi9cXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cXG4gICAgY29sb3I6ICM2MzUxYTI7IC8qIE1hdGNoIGljb24gY29sb3Igd2l0aCB0aGVtZSAqL1xcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAvKiBBZGQgc29tZSBzcGFjaW5nIGJldHdlZW4gdGhlIGJ1dHRvbnMgKi9cXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggY29sb3IgdHJhbnNpdGlvbiAqL1xcbn1cXG5cXG4uaWNvbi1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogIzRhM2U4NjsgLyogRGFya2VyIHNoYWRlIG9uIGhvdmVyICovXFxufVxcbi8qIEFuaW1hbCBUYWJsZSAqL1xcbi5hbmltYWwtdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIENvbGxhcHNlIGJvcmRlcnMgKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDsgLyogU3BhY2UgYWJvdmUgdGhlIHRhYmxlICovXFxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogRm9udCBzaXplIGZvciB0aGUgdGFibGUgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgYmFja2dyb3VuZCBmb3IgdGhlIHRhYmxlICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgdGFibGUgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCBvdmVyZmxvdyBmb3Igcm91bmRlZCBjb3JuZXJzICovXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTdWJ0bGUgc2hhZG93IGZvciBkZXB0aCAqL1xcbn1cXG5cXG4uYW5pbWFsLXRhYmxlIHRoLCAuYW5pbWFsLXRhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogMTJweCAxNXB4OyAvKiBQYWRkaW5nIGZvciB0YWJsZSBjZWxscyAqL1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBMZWZ0IGFsaWduIHRleHQgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLyogTGlnaHQgZ3JheSBib3JkZXIgKi9cXG59XFxuXFxuLmFuaW1hbC10YWJsZSB0aGVhZCB0aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IC8qIEJhY2tncm91bmQgZm9yIGhlYWRlciAqL1xcbiAgICBjb2xvcjogIzMzMzsgLyogVGV4dCBjb2xvciBmb3IgaGVhZGVyICovXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IC8qIEJvbGQgaGVhZGVyIHRleHQgKi9cXG4gICAgZm9udC1zaXplOiAyMXB4OyAvKiBGb250IHNpemUgZm9yIGhlYWRlciAqL1xcbn1cXG5cXG4uYW5pbWFsLXRhYmxlIHRib2R5IHRkIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDsgLyogUmVndWxhciB3ZWlnaHQgZm9yIGJvZHkgdGV4dCAqL1xcbn1cXG5cXG4uYW5pbWFsLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTFmZjsgLyogTGlnaHQgcHVycGxlIGZvciBvZGQgcm93cyAqL1xcbn1cXG5cXG4uYW5pbWFsLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmVlZmE7IC8qIExpZ2h0IGJsdWUgZm9yIGV2ZW4gcm93cyAqL1xcbn1cXG5cXG4vKiBJbWFnZSBTdHlsaW5nICovXFxuLmFuaW1hbC10YWJsZSBpbWcuYW5pbWFsLWltYWdlIHtcXG4gICAgd2lkdGg6IDYwcHg7IC8qIEltYWdlIHdpZHRoICovXFxuICAgIGhlaWdodDogNjBweDsgLyogSW1hZ2UgaGVpZ2h0ICovXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBDb3ZlciB0aGUgaW1hZ2UgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGltYWdlcyAqL1xcbn1cXG5cXG4ucGF3LWljb24tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDYwcHg7IC8qIENvbnRhaW5lciB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDYwcHg7IC8qIENvbnRhaW5lciBoZWlnaHQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNTFhMmUxOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBwYXcgaWNvbiAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGljb24gY29udGFpbmVyICovXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEZsZXhib3ggZm9yIGFsaWdubWVudCAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGhvcml6b250YWxseSAqL1xcbn1cXG5cXG4uZGVmYXVsdC1wYXctaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDsgLyogSWNvbiBzaXplICovXFxuICAgIGNvbG9yOiAjMmMyYTMzOyAvKiBJY29uIGNvbG9yICovXFxufVxcblxcbi8qIEJ1dHRvbiBTdHlsaW5nICovXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBQYWRkaW5nIGZvciBidXR0b25zICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzUxYTI7IC8qIEJ1dHRvbiBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAgIGNvbG9yOiB3aGl0ZTsgLyogQnV0dG9uIHRleHQgY29sb3IgKi9cXG4gICAgYm9yZGVyOiBub25lOyAvKiBObyBib3JkZXIgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyIGN1cnNvciBvbiBob3ZlciAqL1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGhvdmVyICovXFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTNlODY7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBQYWdpbmF0aW9uIFN0eWxlcyAqL1xcbi5wYWdpbmF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDsgLyogRmxleGJveCBmb3IgYWxpZ25tZW50ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7IC8qIFNwYWNlIGFib3ZlIHBhZ2luYXRpb24gKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBwYWdpbmF0aW9uIGNvbnRyb2xzICovXFxufVxcblxcbi5wYWdpbmF0aW9uIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTsgLyogTm8gYm9yZGVyICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzUxYTI7IC8qIE1hdGNoIGJ1dHRvbiBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAgIGNvbG9yOiB3aGl0ZTsgLyogVGV4dCBjb2xvciAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIEluY3JlYXNlIHBhZGRpbmcgZm9yIGJ1dHRvbnMgKi9cXG4gICAgbWFyZ2luOiAwIDVweDsgLyogU3BhY2UgYmV0d2VlbiBidXR0b25zICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogUG9pbnRlciBjdXJzb3Igb24gaG92ZXIgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzOyAvKiBTbW9vdGggdHJhbnNpdGlvbiBmb3IgaG92ZXIgZWZmZWN0ICovXFxufVxcblxcbi5wYWdpbmF0aW9uIGJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTNlODY7IC8qIERhcmtlciBzaGFkZSBvbiBob3ZlciAqL1xcbn1cXG5cXG4ucGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyAvKiBHcmF5IHdoZW4gZGlzYWJsZWQgKi9cXG4gICAgY29sb3I6ICM2NjY7IC8qIERhcmtlciBncmF5IHRleHQgd2hlbiBkaXNhYmxlZCAqL1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAvKiBOb3QgYWxsb3dlZCBjdXJzb3IgKi9cXG59XFxuXFxuLnBhZ2luYXRpb24gc3BhbiB7XFxuICAgIG1hcmdpbjogMCAxMHB4OyAvKiBTcGFjZSBhcm91bmQgdGhlIHBhZ2UgaW5kaWNhdG9yICovXFxuICAgIGNvbG9yOiAjNjM1MWEyOyAvKiBDb2xvciB0byBtYXRjaCBidXR0b25zICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBCb2xkIGZvciB2aXNpYmlsaXR5ICovXFxufVxcblxcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250cm9scyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBjb250cm9scyB2ZXJ0aWNhbGx5ICovXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgLyogQWxpZ24gaXRlbXMgdG8gdGhlIHN0YXJ0ICovXFxuICAgIH1cXG5cXG4gICAgLmNvbnRyb2xzIGxhYmVsIHsgICBcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFNwYWNlIGJlbG93IGxhYmVsICovXFxuICAgIH1cXG5cXG4gICAgLmNvbnRyb2xzIHNlbGVjdCwgXFxuICAgIC5jb250cm9scyAuc2VhcmNoLWlucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBpbnB1dHMgKi9cXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyAvKiBSZW1vdmUgbGVmdCBtYXJnaW4gKi9cXG4gICAgfVxcbiAgICBcXG4gICAgLmFuaW1hbC10YWJsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7IC8qIFNtYWxsZXIgZm9udCBmb3IgdGFibGVzIG9uIHNtYWxsIHNjcmVlbnMgKi9cXG4gICAgfVxcblxcbiAgICAucGFnaW5hdGlvbiB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBwYWdpbmF0aW9uIHZlcnRpY2FsbHkgb24gc21hbGwgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi50YWJsZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7IFxcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA5MDBweDsgXFxuICAgIG1heC1oZWlnaHQ6IDEwMDBweDsgXFxufVxcbi5tb2RhbC1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGlucHV0LFxcbi5tb2RhbC1jb250ZW50IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLWFuaW1hbC1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQW5pbWFsTGlzdFBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BbmltYWxMaXN0UGFnZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZEFuaW1hbE1vZGFsIiwiX3JlZiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkFkZEFuaW1hbCIsIm5hbWUiLCJzZXROYW1lIiwidHlwZSIsInNldFR5cGUiLCJhZ2UiLCJzZXRBZ2UiLCJicmVlZCIsInNldEJyZWVkIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsInBlcnNvbmFsaXR5Iiwic2V0UGVyc29uYWxpdHkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpbWdGaWxlIiwic2V0SW1nRmlsZSIsImdlbmRlciIsInNldEdlbmRlciIsImJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0FuaW1hbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYWNjZXB0Iiwib25DbGljayIsInVzZUVmZmVjdCIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJGb250QXdlc29tZUljb24iLCJmYVBhdyIsImZhQ2hldnJvbkxlZnQiLCJmYUNoZXZyb25SaWdodCIsImZhUGx1cyIsImZhRWRpdCIsImZhVHJhc2giLCJTaWRlYmFyIiwiVXBkYXRlQW5pbWFsTW9kYWwiLCJEZWxldGVDb25maXJtYXRpb25Nb2RhbCIsIkFuaW1hbExpc3QiLCJhbmltYWxzIiwic2V0QW5pbWFscyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlbnRyaWVzUGVyUGFnZSIsInNldEVudHJpZXNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInVwZGF0ZU1vZGFsT3BlbiIsInNldFVwZGF0ZU1vZGFsT3BlbiIsImRlbGV0ZU1vZGFsT3BlbiIsInNldERlbGV0ZU1vZGFsT3BlbiIsInNlbGVjdGVkQW5pbWFsIiwic2V0U2VsZWN0ZWRBbmltYWwiLCJhbmltYWxUb0RlbGV0ZSIsInNldEFuaW1hbFRvRGVsZXRlIiwic29ydE9yZGVyIiwic2V0U29ydE9yZGVyIiwibmF2aWdhdGUiLCJmZXRjaEFuaW1hbHMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVWaWV3Q2xpY2siLCJpZCIsImhhbmRsZVNlYXJjaENoYW5nZSIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRW50cmllc0NoYW5nZSIsInBhcnNlSW50IiwiaGFuZGxlQWRkQW5pbWFsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwiaGFuZGxlVXBkYXRlQW5pbWFsIiwidXBkYXRlZEFuaW1hbCIsInB1dCIsImhhbmRsZURlbGV0ZUNsaWNrIiwiYW5pbWFsIiwiY29uZmlybURlbGV0ZSIsImRlbGV0ZSIsImhhbmRsZUVkaXRDbGljayIsImZpbHRlcmVkQW5pbWFscyIsImZpbHRlciIsImluY2x1ZGVzIiwic29ydGVkQW5pbWFscyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJpbmRleE9mTGFzdEFuaW1hbCIsImluZGV4T2ZGaXJzdEFuaW1hbCIsImN1cnJlbnRBbmltYWxzIiwic2xpY2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldmlvdXMiLCJpY29uIiwib25VcGRhdGVBbmltYWwiLCJvbkRlbGV0ZUNvbmZpcm0iLCJodG1sRm9yIiwiRnJhZ21lbnQiLCJtYXAiLCJrZXkiLCJpbWd1cmwiLCJzcmMiLCJhbHQiLCJkaXNhYmxlZCIsImltZ1ByZXZpZXciLCJzZXRJbWdQcmV2aWV3IiwiZmlsZSIsInByZXZpZXdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==