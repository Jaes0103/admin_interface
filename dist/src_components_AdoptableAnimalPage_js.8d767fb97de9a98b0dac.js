"use strict";
(self["webpackChunkadmin_interface"] = self["webpackChunkadmin_interface"] || []).push([["src_components_AdoptableAnimalPage_js"],{

/***/ "./src/components/AdoptableAnimalPage.js":
/*!***********************************************!*\
  !*** ./src/components/AdoptableAnimalPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _style_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/AdoptableAnimalsPage.css */ "./src/style/AdoptableAnimalsPage.css");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmationModal */ "./src/components/ConfirmationModal.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _style_ErrorModal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/ErrorModal.css */ "./src/style/ErrorModal.css");







const AdoptableAnimalsPage = () => {
  const [adoptableAnimals, setAdoptableAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [animalToDelete, setAnimalToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [deleteMessage, setDeleteMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [adoptionRequestToDelete, setAdoptionRequestToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isErrorModalOpen, setIsErrorModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [newAnimal, setNewAnimal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    id: null,
    name: '',
    type: '',
    breed: '',
    age: '',
    size: '',
    personality: '',
    health_status: '',
    background: '',
    special_needs: '',
    shelter: '',
    img: null,
    imgurl: ''
  });
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const itemsPerPage = 5;
  const fetchAdoptableAnimals = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/api/admin/adoptable-animals`;
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(url);
      setAdoptableAnimals(response.data.animals);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching adoptable animals');
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchAdoptableAnimals();
  }, []);
  const handleAnimalChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewAnimal({
      ...newAnimal,
      [name]: value
    });
  };
  const handleImageChange = e => {
    setNewAnimal({
      ...newAnimal,
      img: e.target.files[0]
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newAnimal).forEach(key => {
      formData.append(key, newAnimal[key]);
    });
    try {
      const url = editMode ? `${process.env.REACT_APP_BASE_URL}/api/admin/update-adoptable-animal/${newAnimal.id}` : `${process.env.REACT_APP_BASE_URL}/api/admin/add-adoptable-animal`;
      const method = editMode ? 'put' : 'post';
      const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"][method](url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const updatedAnimal = response.data;
      if (editMode) {
        setAdoptableAnimals(prev => prev.map(animal => animal.id === updatedAnimal.id ? updatedAnimal : animal));
      } else {
        setAdoptableAnimals(prev => [...prev, updatedAnimal]);
      }
      resetForm();
      setModalOpen(false);
      setCurrentPage(1);
    } catch (err) {
      console.error('Error adding/updating animal:', err);
      setError(editMode ? 'Error updating animal' : 'Error adding animal');
    }
  };
  const handleEdit = animal => {
    setNewAnimal({
      ...animal,
      img: null
    });
    setEditMode(true);
    setModalOpen(true);
  };
  const handleDeleteAdoptionRequest = requestId => {
    setAdoptionRequestToDelete(requestId);
    setDeleteMessage('Are you sure you want to delete this adoption request? This action cannot be undone.');
    setIsDeleteModalOpen(true);
  };
  const handleDelete = animalId => {
    console.log('Deleting animal with ID:', animalId);
    setAnimalToDelete(animalId);
    setDeleteMessage('Are you sure you want to delete this animal? This action cannot be undone.');
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = async () => {
    console.log('Confirmed deletion for animal ID:', animalToDelete);
    if (animalToDelete) {
      const url = `${process.env.REACT_APP_BASE_URL}/api/admin/delete-adoptable-animal/${animalToDelete}`;
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].delete(url);
        console.log('Delete response:', response.data);
        if (response.status === 200) {
          setAdoptableAnimals(prev => prev.filter(animal => animal.id !== animalToDelete));
          setIsDeleteModalOpen(false);
          setAnimalToDelete(null);
          setSuccess('Animal deleted successfully');
        } else {
          setError(response.data.error || 'Error deleting animal');
        }
      } catch (error) {
        console.error('Error confirming delete:', error);
        if (error.response) {
          setError(error.response.data.error || 'Error deleting animal');
        } else {
          setError('Network error or server did not respond');
        }
      }
    }
  };
  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setAnimalToDelete(null);
    setError(null);
    setSuccess(null);
  };
  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorMessage('');
  };
  const resetForm = () => {
    setNewAnimal({
      id: null,
      name: '',
      type: '',
      breed: '',
      age: '',
      size: '',
      personality: '',
      health_status: '',
      background: '',
      special_needs: '',
      shelter: '',
      img: null,
      imgurl: ''
    });
    setEditMode(false);
  };
  const toggleModal = () => {
    resetForm();
    setModalOpen(!isModalOpen);
  };
  const totalPages = Math.ceil(adoptableAnimals.length / itemsPerPage);
  const displayedAnimals = adoptableAnimals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading adoptable animals...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "adoptable-animals-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Adoptable Animals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "add-animal-button",
    onClick: toggleModal
  }, "Add Adoptable Animal")), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-overlay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dialog-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "close",
    onClick: toggleModal
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, editMode ? 'Edit Adoptable Animal' : 'Add Adoptable Animal'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: newAnimal.name,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Type:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "type",
    value: newAnimal.type,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Breed:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "breed",
    value: newAnimal.breed,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Age:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "age",
    value: newAnimal.age,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Size:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "size",
    value: newAnimal.size,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Personality:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "personality",
    value: newAnimal.personality,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Health Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "health_status",
    value: newAnimal.health_status,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Shelter:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "shelter",
    value: newAnimal.shelter,
    onChange: handleAnimalChange,
    required: true
  }))), newAnimal.imgurl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Current Image:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: newAnimal.imgurl,
    alt: newAnimal.name,
    style: {
      width: '100px',
      height: 'auto'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Image:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    name: "img",
    accept: "image/*",
    onChange: handleImageChange,
    required: !editMode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Special Needs:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "special_needs",
    value: newAnimal.special_needs,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Background:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "background",
    value: newAnimal.background,
    onChange: handleAnimalChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, editMode ? 'Update Animal' : 'Add Animal'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: toggleModal
  }, "Cancel")))), isDeleteModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: isDeleteModalOpen,
    message: deleteMessage,
    onConfirm: confirmDelete,
    onCancel: cancelDelete,
    title: "Confirm Deletion"
  }), isErrorModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_ErrorModal_css__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isErrorModalOpen,
    message: errorMessage,
    onClose: closeErrorModal
  }), adoptableAnimals.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No adoptable animals available.") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "adoptable-animals-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Breed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Personality"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Health Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Background"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Special Needs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Shelter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, displayedAnimals.map(animal => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: animal.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.breed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.size), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.personality), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.health_status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.background), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.special_needs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, animal.shelter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: animal.imgurl,
    alt: animal.name,
    style: {
      width: '100px',
      height: 'auto'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleEdit(animal)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaEdit, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDelete(animal.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, null)), animal.adoptionRequests && animal.adoptionRequests.map(request => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: request.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDeleteAdoptionRequest(request.id)
  }, "Delete Request")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handlePrevPage,
    disabled: currentPage === 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleNextPage,
    disabled: currentPage === totalPages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdoptableAnimalsPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/AdoptableAnimalsPage.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/AdoptableAnimalsPage.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.adoptable-animals-container {
    background-color: whitesmoke;
    margin-top: 80px;
}

/* Title and Button Container */
.container {
    display: flex;
    justify-content: space-between; /* Align title to the left and button to the right */
    align-items: center; /* Center vertically */
    margin-bottom: 20px; /* Add some spacing below the title and button */
    padding-right: 10px;
}

/* Button Style */
.add-animal-button {
    padding: 12px 20px;
    background-color: #624DE3; /* Button color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    margin-top: 150px;
    margin-right: 0%;
    margin-bottom: 0%;
}

.add-animal-button:hover {
    background-color: #5039c2; /* Darken on hover */
}

/* Modal Overlay */
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
    overflow: hidden; /* Prevent scrolling when modal is open */
}

/* Modal Content */
.modal-content {
    background-color: #fff;
    padding: 30px; /* Increased padding for more white space */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* Slight shadow for depth */
    width: 90% !important; /* Ensure 90% width */
    max-width: 500px !important; /* Maximum width */
    font-family: Arial, sans-serif; /* Consistent font family */
    position: relative; /* Ensure close button aligns well */
    margin: 0 auto; /* Centered */
}

/* Dialog Overlay */
.dialog-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

/* Dialog Box */
.dialog-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 90% !important; /* Ensure 90% width */
    max-width: 900px !important; /* Increased max-width for a wider dialog box */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    margin: auto; /* Center the dialog box */
    box-sizing: border-box; /* Ensure padding is included in width calculation */
}

/* Ensure the dialog box remains responsive on smaller screens */
@media (max-width: 600px) {
    .dialog-box {
        max-width: 100% !important; /* Full width on small screens */
        padding: 15px;   /* Reduce padding for mobile */
    }
}/* Table Styles */
.adoptable-animals-table {
    width: 80%; /* Ensure the table takes the full width */
    border-collapse: collapse; /* Collapse borders */
    margin-left: 300px;
}

.adoptable-animals-table th, .adoptable-animals-table td {
    padding: 10px; /* Spacing in cells */
    border: 1px solid #ccc; /* Add borders */
    text-align: left; /* Align text to the left */
}

.adoptable-animals-table img {
    max-width: 100px; /* Set max width for images */
    height: auto; /* Maintain aspect ratio */
}

/* Responsive Styles */
@media (max-width: 600px) {
    .adoptable-animals-table {
        font-size: 0.9em; /* Smaller font on mobile */
    }
}


/* Close Button */
.close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    color: #aaa;
    cursor: pointer;
    transition: color 0.2s ease;
}

.close:hover {
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

/* Two-column layout for form fields */
.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Keeps two-column layout */
    gap: 20px; /* Space between form items */
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: bold;
    margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="file"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    font-size: 1em;
}

button[type="submit"],
button[type="button"] {
    padding: 12px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; /* Full width buttons */
    font-size: 1em;
    transition: background-color 0.3s ease;
}

button[type="submit"] {
    background-color: #624DE3;
    color: white;
}

button[type="button"] {
    background-color: #f44336;
    color: white;
}

button:hover {
    opacity: 0.9;
}

img {
    display: block;
    margin-top: 10px;
}
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}

.pagination button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin: 0 10px;
    color: #007bff; 
}

.pagination button:disabled {
    color: #ccc; 
    cursor: not-allowed;
}

.pagination span {
    font-size: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/style/AdoptableAnimalsPage.css"],"names":[],"mappings":"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","sourcesContent":[".adoptable-animals-container {\n    background-color: whitesmoke;\n    margin-top: 80px;\n}\n\n/* Title and Button Container */\n.container {\n    display: flex;\n    justify-content: space-between; /* Align title to the left and button to the right */\n    align-items: center; /* Center vertically */\n    margin-bottom: 20px; /* Add some spacing below the title and button */\n    padding-right: 10px;\n}\n\n/* Button Style */\n.add-animal-button {\n    padding: 12px 20px;\n    background-color: #624DE3; /* Button color */\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1em;\n    transition: background-color 0.3s ease;\n    margin-top: 150px;\n    margin-right: 0%;\n    margin-bottom: 0%;\n}\n\n.add-animal-button:hover {\n    background-color: #5039c2; /* Darken on hover */\n}\n\n/* Modal Overlay */\n.modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */\n    overflow: hidden; /* Prevent scrolling when modal is open */\n}\n\n/* Modal Content */\n.modal-content {\n    background-color: #fff;\n    padding: 30px; /* Increased padding for more white space */\n    border-radius: 10px; /* Rounded corners */\n    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* Slight shadow for depth */\n    width: 90% !important; /* Ensure 90% width */\n    max-width: 500px !important; /* Maximum width */\n    font-family: Arial, sans-serif; /* Consistent font family */\n    position: relative; /* Ensure close button aligns well */\n    margin: 0 auto; /* Centered */\n}\n\n/* Dialog Overlay */\n.dialog-overlay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n/* Dialog Box */\n.dialog-box {\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    width: 90% !important; /* Ensure 90% width */\n    max-width: 900px !important; /* Increased max-width for a wider dialog box */\n    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);\n    position: relative;\n    margin: auto; /* Center the dialog box */\n    box-sizing: border-box; /* Ensure padding is included in width calculation */\n}\n\n/* Ensure the dialog box remains responsive on smaller screens */\n@media (max-width: 600px) {\n    .dialog-box {\n        max-width: 100% !important; /* Full width on small screens */\n        padding: 15px;   /* Reduce padding for mobile */\n    }\n}/* Table Styles */\n.adoptable-animals-table {\n    width: 80%; /* Ensure the table takes the full width */\n    border-collapse: collapse; /* Collapse borders */\n    margin-left: 300px;\n}\n\n.adoptable-animals-table th, .adoptable-animals-table td {\n    padding: 10px; /* Spacing in cells */\n    border: 1px solid #ccc; /* Add borders */\n    text-align: left; /* Align text to the left */\n}\n\n.adoptable-animals-table img {\n    max-width: 100px; /* Set max width for images */\n    height: auto; /* Maintain aspect ratio */\n}\n\n/* Responsive Styles */\n@media (max-width: 600px) {\n    .adoptable-animals-table {\n        font-size: 0.9em; /* Smaller font on mobile */\n    }\n}\n\n\n/* Close Button */\n.close {\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    font-size: 28px;\n    color: #aaa;\n    cursor: pointer;\n    transition: color 0.2s ease;\n}\n\n.close:hover {\n    color: #333;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Two-column layout for form fields */\n.form-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr); /* Keeps two-column layout */\n    gap: 20px; /* Space between form items */\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-group label {\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n.form-group input[type=\"text\"],\n.form-group input[type=\"file\"] {\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 1em;\n}\n\nbutton[type=\"submit\"],\nbutton[type=\"button\"] {\n    padding: 12px 20px;\n    margin-top: 10px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    width: 100%; /* Full width buttons */\n    font-size: 1em;\n    transition: background-color 0.3s ease;\n}\n\nbutton[type=\"submit\"] {\n    background-color: #624DE3;\n    color: white;\n}\n\nbutton[type=\"button\"] {\n    background-color: #f44336;\n    color: white;\n}\n\nbutton:hover {\n    opacity: 0.9;\n}\n\nimg {\n    display: block;\n    margin-top: 10px;\n}\n.pagination {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n}\n\n.pagination button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: 1.5rem;\n    margin: 0 10px;\n    color: #007bff; \n}\n\n.pagination button:disabled {\n    color: #ccc; \n    cursor: not-allowed;\n}\n\n.pagination span {\n    font-size: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/ErrorModal.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/ErrorModal.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above other content */
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    width: 400px;
    text-align: center;
}

.modal h2 {
    margin: 0 0 10px;
}

.modal p {
    margin: 10px 0 20px;
}

.modal button {
    background: #007bff; /* Bootstrap primary color */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.modal button:hover {
    background: #0056b3; /* Darker shade for hover effect */
}
`, "",{"version":3,"sources":["webpack://./src/style/ErrorModal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,8BAA8B,EAAE,gCAAgC;IAChE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa,EAAE,oCAAoC;AACvD;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB,EAAE,4BAA4B;IACjD,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB,EAAE,kCAAkC;AAC3D","sourcesContent":[".modal-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000; /* Ensure it's above other content */\r\n}\r\n\r\n.modal {\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);\r\n    width: 400px;\r\n    text-align: center;\r\n}\r\n\r\n.modal h2 {\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.modal p {\r\n    margin: 10px 0 20px;\r\n}\r\n\r\n.modal button {\r\n    background: #007bff; /* Bootstrap primary color */\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal button:hover {\r\n    background: #0056b3; /* Darker shade for hover effect */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/AdoptableAnimalsPage.css":
/*!********************************************!*\
  !*** ./src/style/AdoptableAnimalsPage.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./AdoptableAnimalsPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/AdoptableAnimalsPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AdoptableAnimalsPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/ErrorModal.css":
/*!**********************************!*\
  !*** ./src/style/ErrorModal.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ErrorModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ErrorModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/ErrorModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ErrorModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ErrorModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ErrorModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ErrorModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfQWRvcHRhYmxlQW5pbWFsUGFnZV9qcy44ZDc2N2ZiOTdkZTlhOThiMGRhYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDaUI7QUFDcUM7QUFDNUI7QUFDcEI7QUFDaUI7QUFFakQsTUFBTVcsb0JBQW9CLEdBQUdBLENBQUEsS0FBTTtFQUMvQixNQUFNLENBQUNDLGdCQUFnQixFQUFFQyxtQkFBbUIsQ0FBQyxHQUFHWCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztFQUM1RCxNQUFNLENBQUNZLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdiLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQzVDLE1BQU0sQ0FBQ2MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7RUFDdEMsTUFBTSxDQUFDZ0IsV0FBVyxFQUFFQyxZQUFZLENBQUMsR0FBR2pCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQ25ELE1BQU0sQ0FBQ2tCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUMvQyxNQUFNLENBQUNvQixpQkFBaUIsRUFBRUMsb0JBQW9CLENBQUMsR0FBR3JCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pFLE1BQU0sQ0FBQ3NCLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR3ZCLCtDQUFRLENBQUMsSUFBSSxDQUFDO0VBQzFELE1BQU0sQ0FBQ3dCLGFBQWEsRUFBRUMsZ0JBQWdCLENBQUMsR0FBR3pCLCtDQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RELE1BQU0sQ0FBQzBCLHVCQUF1QixFQUFFQywwQkFBMEIsQ0FBQyxHQUFHM0IsK0NBQVEsQ0FBQyxJQUFJLENBQUM7RUFDNUUsTUFBTSxDQUFDNEIsZ0JBQWdCLEVBQUVDLG1CQUFtQixDQUFDLEdBQUc3QiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztFQUMvRCxNQUFNLENBQUM4QixPQUFP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QUE2QixrREFBa0QscUJBQXFCLDJCQUEyQiwyQkFBMkIsd0JBQXdCLEtBQUssNkJBQTZCLDZCQUE2Qix3Q0FBd0MsdUJBQXVCO0FBQ3g3QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEdkMsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUg7QUFDckg7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxR0FBTzs7OztBQUkrRDtBQUN2RixPQUFPLGlFQUFlLHFHQUFPLElBQUkscUdBQU8sVUFBVSxxR0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkZBQU87Ozs7QUFJcUQ7QUFDN0UsT0FBTyxpRUFBZSwyRkFBTyxJQUFJLDJGQUFPLFVBQVUsMkZBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvY29tcG9uZW50cy9BZG9wdGFibGVBbmltYWxQYWdlLmpzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9BZG9wdGFibGVBbmltYWxzUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vYWRtaW5faW50ZXJmYWNlLy4vc3JjL3N0eWxlL0Vycm9yTW9kYWwuY3NzIiwid2VicGFjazovL2FkbWluX2ludGVyZmFjZS8uL3NyYy9zdHlsZS9BZG9wdGFibGVBbmltYWxzUGFnZS5jc3M/OTY1ZCIsIndlYnBhY2s6Ly9hZG1pbl9pbnRlcmZhY2UvLi9zcmMvc3R5bGUvRXJyb3JNb2RhbC5jc3M/OGM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4uL3N0eWxlL0Fkb3B0YWJsZUFuaW1hbHNQYWdlLmNzcyc7XG5pbXBvcnQgeyBGYUVkaXQsIEZhVHJhc2gsIEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IENvbmZpcm1hdGlvbk1vZGFsIGZyb20gJy4vQ29uZmlybWF0aW9uTW9kYWwnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcbmltcG9ydCBFcnJvck1vZGFsIGZyb20gJy4uL3N0eWxlL0Vycm9yTW9kYWwuY3NzJztcblxuY29uc3QgQWRvcHRhYmxlQW5pbWFsc1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2Fkb3B0YWJsZUFuaW1hbHMsIHNldEFkb3B0YWJsZUFuaW1hbHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNEZWxldGVNb2RhbE9wZW4sIHNldElzRGVsZXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYW5pbWFsVG9EZWxldGUsIHNldEFuaW1hbFRvRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkZWxldGVNZXNzYWdlLCBzZXREZWxldGVNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYWRvcHRpb25SZXF1ZXN0VG9EZWxldGUsIHNldEFkb3B0aW9uUmVxdWVzdFRvRGVsZXRlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtpc0Vycm9yTW9kYWxPcGVuLCBzZXRJc0Vycm9yTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtuZXdBbmltYWwsIHNldE5ld0FuaW1hbF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgdHlwZTogJycsXG4gICAgICAgIGJyZWVkOiAnJyxcbiAgICAgICAgYWdlOiAnJyxcbiAgICAgICAgc2l6ZTogJycsXG4gICAgICAgIHBlcnNvbmFsaXR5OiAnJyxcbiAgICAgICAgaGVhbHRoX3N0YXR1czogJycsXG4gICAgICAgIGJhY2tncm91bmQ6ICcnLFxuICAgICAgICBzcGVjaWFsX25lZWRzOiAnJyxcbiAgICAgICAgc2hlbHRlcjogJycsXG4gICAgICAgIGltZzogbnVsbCxcbiAgICAgICAgaW1ndXJsOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgaXRlbXNQZXJQYWdlID0gNTsgXG4gICAgY29uc3QgZmV0Y2hBZG9wdGFibGVBbmltYWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vYWRvcHRhYmxlLWFuaW1hbHNgO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAgICAgICAgIHNldEFkb3B0YWJsZUFuaW1hbHMocmVzcG9uc2UuZGF0YS5hbmltYWxzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFkb3B0YWJsZSBhbmltYWxzJyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEFkb3B0YWJsZUFuaW1hbHMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVBbmltYWxDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0TmV3QW5pbWFsKHsgLi4ubmV3QW5pbWFsLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldE5ld0FuaW1hbCh7IC4uLm5ld0FuaW1hbCwgaW1nOiBlLnRhcmdldC5maWxlc1swXSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBPYmplY3Qua2V5cyhuZXdBbmltYWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgbmV3QW5pbWFsW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gZWRpdE1vZGVcbiAgICAgICAgICAgICAgICA/IGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL3VwZGF0ZS1hZG9wdGFibGUtYW5pbWFsLyR7bmV3QW5pbWFsLmlkfWBcbiAgICAgICAgICAgICAgICA6IGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vYXBpL2FkbWluL2FkZC1hZG9wdGFibGUtYW5pbWFsYDtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGVkaXRNb2RlID8gJ3B1dCcgOiAncG9zdCc7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRBbmltYWwgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAoZWRpdE1vZGUpIHtcbiAgICAgICAgICAgICAgICBzZXRBZG9wdGFibGVBbmltYWxzKChwcmV2KSA9PlxuICAgICAgICAgICAgICAgICAgICBwcmV2Lm1hcCgoYW5pbWFsKSA9PiAoYW5pbWFsLmlkID09PSB1cGRhdGVkQW5pbWFsLmlkID8gdXBkYXRlZEFuaW1hbCA6IGFuaW1hbCkpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWRvcHRhYmxlQW5pbWFscygocHJldikgPT4gWy4uLnByZXYsIHVwZGF0ZWRBbmltYWxdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcvdXBkYXRpbmcgYW5pbWFsOicsIGVycik7XG4gICAgICAgICAgICBzZXRFcnJvcihlZGl0TW9kZSA/ICdFcnJvciB1cGRhdGluZyBhbmltYWwnIDogJ0Vycm9yIGFkZGluZyBhbmltYWwnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0ID0gKGFuaW1hbCkgPT4ge1xuICAgICAgICBzZXROZXdBbmltYWwoeyAuLi5hbmltYWwsIGltZzogbnVsbCB9KTtcbiAgICAgICAgc2V0RWRpdE1vZGUodHJ1ZSk7XG4gICAgICAgIHNldE1vZGFsT3Blbih0cnVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUFkb3B0aW9uUmVxdWVzdCA9IChyZXF1ZXN0SWQpID0+IHtcbiAgICAgICAgc2V0QWRvcHRpb25SZXF1ZXN0VG9EZWxldGUocmVxdWVzdElkKTtcbiAgICAgICAgc2V0RGVsZXRlTWVzc2FnZSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFkb3B0aW9uIHJlcXVlc3Q/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuJyk7XG4gICAgICAgIHNldElzRGVsZXRlTW9kYWxPcGVuKHRydWUpOyBcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChhbmltYWxJZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRpbmcgYW5pbWFsIHdpdGggSUQ6JywgYW5pbWFsSWQpO1xuICAgICAgICBzZXRBbmltYWxUb0RlbGV0ZShhbmltYWxJZCk7XG4gICAgICAgIHNldERlbGV0ZU1lc3NhZ2UoJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhbmltYWw/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuJyk7XG4gICAgICAgIHNldElzRGVsZXRlTW9kYWxPcGVuKHRydWUpOyBcbiAgICB9O1xuXG4gICAgY29uc3QgY29uZmlybURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1lZCBkZWxldGlvbiBmb3IgYW5pbWFsIElEOicsIGFuaW1hbFRvRGVsZXRlKTsgXG4gICAgICAgIGlmIChhbmltYWxUb0RlbGV0ZSkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JBU0VfVVJMfS9hcGkvYWRtaW4vZGVsZXRlLWFkb3B0YWJsZS1hbmltYWwvJHthbmltYWxUb0RlbGV0ZX1gO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGUgcmVzcG9uc2U6JywgcmVzcG9uc2UuZGF0YSk7IFxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkb3B0YWJsZUFuaW1hbHMoKHByZXYpID0+IHByZXYuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5pZCAhPT0gYW5pbWFsVG9EZWxldGUpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNEZWxldGVNb2RhbE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBbmltYWxUb0RlbGV0ZShudWxsKTsgXG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3MoJ0FuaW1hbCBkZWxldGVkIHN1Y2Nlc3NmdWxseScpOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihyZXNwb25zZS5kYXRhLmVycm9yIHx8ICdFcnJvciBkZWxldGluZyBhbmltYWwnKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25maXJtaW5nIGRlbGV0ZTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgfHwgJ0Vycm9yIGRlbGV0aW5nIGFuaW1hbCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdOZXR3b3JrIGVycm9yIG9yIHNlcnZlciBkaWQgbm90IHJlc3BvbmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2FuY2VsRGVsZXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgIHNldEFuaW1hbFRvRGVsZXRlKG51bGwpOyBcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7IFxuICAgICAgICBzZXRTdWNjZXNzKG51bGwpOyBcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VFcnJvck1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Vycm9yTW9kYWxPcGVuKGZhbHNlKTsgXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7IFxuICAgIH07XG4gICAgY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXROZXdBbmltYWwoe1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgYnJlZWQ6ICcnLFxuICAgICAgICAgICAgYWdlOiAnJyxcbiAgICAgICAgICAgIHNpemU6ICcnLFxuICAgICAgICAgICAgcGVyc29uYWxpdHk6ICcnLFxuICAgICAgICAgICAgaGVhbHRoX3N0YXR1czogJycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICAgICAgICAgIHNwZWNpYWxfbmVlZHM6ICcnLFxuICAgICAgICAgICAgc2hlbHRlcjogJycsXG4gICAgICAgICAgICBpbWc6IG51bGwsXG4gICAgICAgICAgICBpbWd1cmw6ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgIHNldE1vZGFsT3BlbighaXNNb2RhbE9wZW4pO1xuICAgIH07XG5cbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGFkb3B0YWJsZUFuaW1hbHMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcbiAgICBjb25zdCBkaXNwbGF5ZWRBbmltYWxzID0gYWRvcHRhYmxlQW5pbWFscy5zbGljZSgoY3VycmVudFBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZSwgY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2UpO1xuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUHJldlBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcgYWRvcHRhYmxlIGFuaW1hbHMuLi48L3A+O1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gPHA+e2Vycm9yfTwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG9wdGFibGUtYW5pbWFscy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8aDE+QWRvcHRhYmxlIEFuaW1hbHM8L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdhZGQtYW5pbWFsLWJ1dHRvbicgb25DbGljaz17dG9nZ2xlTW9kYWx9PkFkZCBBZG9wdGFibGUgQW5pbWFsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtpc01vZGFsT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57ZWRpdE1vZGUgPyAnRWRpdCBBZG9wdGFibGUgQW5pbWFsJyA6ICdBZGQgQWRvcHRhYmxlIEFuaW1hbCd9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0FuaW1hbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbmltYWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UeXBlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW5pbWFsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnJlZWQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnJlZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwuYnJlZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFuaW1hbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwuYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbmltYWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TaXplOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW5pbWFsQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGVyc29uYWxpdHk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyc29uYWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwucGVyc29uYWxpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFuaW1hbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhlYWx0aCBTdGF0dXM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGVhbHRoX3N0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0FuaW1hbC5oZWFsdGhfc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbmltYWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2hlbHRlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGVsdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3QW5pbWFsLnNoZWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFuaW1hbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgZGlzcGxheSBzZWN0aW9uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBbmltYWwuaW1ndXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3VycmVudCBJbWFnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bmV3QW5pbWFsLmltZ3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25ld0FuaW1hbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSW1hZ2UgdXBsb2FkIHNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbWFnZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17IWVkaXRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNwZWNpYWwgTmVlZHMgYW5kIFNoZWx0ZXIgZmllbGRzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3BlY2lhbCBOZWVkczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsX25lZWRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdBbmltYWwuc3BlY2lhbF9uZWVkc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbmltYWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIGZpZWxkIG1vdmVkIGhlcmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CYWNrZ3JvdW5kOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0FuaW1hbC5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFuaW1hbENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlZGl0TW9kZSA/ICdVcGRhdGUgQW5pbWFsJyA6ICdBZGQgQW5pbWFsJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXNEZWxldGVNb2RhbE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxDb25maXJtYXRpb25Nb2RhbFxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzRGVsZXRlTW9kYWxPcGVufVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtkZWxldGVNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2NvbmZpcm1EZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtjYW5jZWxEZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29uZmlybSBEZWxldGlvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtpc0Vycm9yTW9kYWxPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8RXJyb3JNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzRXJyb3JNb2RhbE9wZW59XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VFcnJvck1vZGFsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2Fkb3B0YWJsZUFuaW1hbHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxwPk5vIGFkb3B0YWJsZSBhbmltYWxzIGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhZG9wdGFibGUtYW5pbWFscy10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5CcmVlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZ2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2l6ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QZXJzb25hbGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IZWFsdGggU3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkJhY2tncm91bmQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3BlY2lhbCBOZWVkczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TaGVsdGVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5ZWRBbmltYWxzLm1hcCgoYW5pbWFsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FuaW1hbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FuaW1hbC5pZH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwudHlwZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwuYnJlZWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLmFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwuc2l6ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnthbmltYWwucGVyc29uYWxpdHl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLmhlYWx0aF9zdGF0dXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLmJhY2tncm91bmR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLnNwZWNpYWxfbmVlZHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YW5pbWFsLnNoZWx0ZXJ9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YW5pbWFsLmltZ3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthbmltYWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGFuaW1hbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFFZGl0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYW5pbWFsLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVRyYXNoIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FuaW1hbC5hZG9wdGlvblJlcXVlc3RzICYmIGFuaW1hbC5hZG9wdGlvblJlcXVlc3RzLm1hcChyZXF1ZXN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JlcXVlc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVBZG9wdGlvblJlcXVlc3QocmVxdWVzdC5pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBSZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQcmV2UGFnZX0gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uTGVmdCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYWdlIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG9wdGFibGVBbmltYWxzUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWRvcHRhYmxlLWFuaW1hbHMtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi8qIFRpdGxlIGFuZCBCdXR0b24gQ29udGFpbmVyICovXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogQWxpZ24gdGl0bGUgdG8gdGhlIGxlZnQgYW5kIGJ1dHRvbiB0byB0aGUgcmlnaHQgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFkZCBzb21lIHNwYWNpbmcgYmVsb3cgdGhlIHRpdGxlIGFuZCBidXR0b24gKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBCdXR0b24gU3R5bGUgKi9cbi5hZGQtYW5pbWFsLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjRERTM7IC8qIEJ1dHRvbiBjb2xvciAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xufVxuXG4uYWRkLWFuaW1hbC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDM5YzI7IC8qIERhcmtlbiBvbiBob3ZlciAqL1xufVxuXG4vKiBNb2RhbCBPdmVybGF5ICovXG4ubW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGRhcmsgYmFja2dyb3VuZCAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIHdoZW4gbW9kYWwgaXMgb3BlbiAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50ICovXG4ubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4OyAvKiBJbmNyZWFzZWQgcGFkZGluZyBmb3IgbW9yZSB3aGl0ZSBzcGFjZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIFNsaWdodCBzaGFkb3cgZm9yIGRlcHRoICovXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50OyAvKiBFbnN1cmUgOTAlIHdpZHRoICovXG4gICAgbWF4LXdpZHRoOiA1MDBweCAhaW1wb3J0YW50OyAvKiBNYXhpbXVtIHdpZHRoICovXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBDb25zaXN0ZW50IGZvbnQgZmFtaWx5ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgY2xvc2UgYnV0dG9uIGFsaWducyB3ZWxsICovXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlcmVkICovXG59XG5cbi8qIERpYWxvZyBPdmVybGF5ICovXG4uZGlhbG9nLW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLyogRGlhbG9nIEJveCAqL1xuLmRpYWxvZy1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDsgLyogRW5zdXJlIDkwJSB3aWR0aCAqL1xuICAgIG1heC13aWR0aDogOTAwcHggIWltcG9ydGFudDsgLyogSW5jcmVhc2VkIG1heC13aWR0aCBmb3IgYSB3aWRlciBkaWFsb2cgYm94ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvOyAvKiBDZW50ZXIgdGhlIGRpYWxvZyBib3ggKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBFbnN1cmUgcGFkZGluZyBpcyBpbmNsdWRlZCBpbiB3aWR0aCBjYWxjdWxhdGlvbiAqL1xufVxuXG4vKiBFbnN1cmUgdGhlIGRpYWxvZyBib3ggcmVtYWlucyByZXNwb25zaXZlIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmRpYWxvZy1ib3gge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgLyogRnVsbCB3aWR0aCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7ICAgLyogUmVkdWNlIHBhZGRpbmcgZm9yIG1vYmlsZSAqL1xuICAgIH1cbn0vKiBUYWJsZSBTdHlsZXMgKi9cbi5hZG9wdGFibGUtYW5pbWFscy10YWJsZSB7XG4gICAgd2lkdGg6IDgwJTsgLyogRW5zdXJlIHRoZSB0YWJsZSB0YWtlcyB0aGUgZnVsbCB3aWR0aCAqL1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIENvbGxhcHNlIGJvcmRlcnMgKi9cbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG59XG5cbi5hZG9wdGFibGUtYW5pbWFscy10YWJsZSB0aCwgLmFkb3B0YWJsZS1hbmltYWxzLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBTcGFjaW5nIGluIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogQWRkIGJvcmRlcnMgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSBsZWZ0ICovXG59XG5cbi5hZG9wdGFibGUtYW5pbWFscy10YWJsZSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwcHg7IC8qIFNldCBtYXggd2lkdGggZm9yIGltYWdlcyAqL1xuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuYWRvcHRhYmxlLWFuaW1hbHMtdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDAuOWVtOyAvKiBTbWFsbGVyIGZvbnQgb24gbW9iaWxlICovXG4gICAgfVxufVxuXG5cbi8qIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBjb2xvcjogI2FhYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIFR3by1jb2x1bW4gbGF5b3V0IGZvciBmb3JtIGZpZWxkcyAqL1xuLmZvcm0tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyAvKiBLZWVwcyB0d28tY29sdW1uIGxheW91dCAqL1xuICAgIGdhcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBmb3JtIGl0ZW1zICovXG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sXG5idXR0b25bdHlwZT1cImJ1dHRvblwiXSB7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggYnV0dG9ucyAqL1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNERFMztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cbmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5wYWdpbmF0aW9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGNvbG9yOiAjMDA3YmZmOyBcbn1cblxuLnBhZ2luYXRpb24gYnV0dG9uOmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2NjYzsgXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnBhZ2luYXRpb24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvQWRvcHRhYmxlQW5pbWFsc1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjs7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSxhQUFhO0lBQ2IsOEJBQThCLEVBQUUsb0RBQW9EO0lBQ3BGLG1CQUFtQixFQUFFLHNCQUFzQjtJQUMzQyxtQkFBbUIsRUFBRSxnREFBZ0Q7SUFDckUsbUJBQW1CO0FBQ3ZCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBRSxpQkFBaUI7SUFDNUMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSxvQkFBb0I7QUFDbkQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUscUNBQXFDO0lBQzNFLGdCQUFnQixFQUFFLHlDQUF5QztBQUMvRDs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYSxFQUFFLDJDQUEyQztJQUMxRCxtQkFBbUIsRUFBRSxvQkFBb0I7SUFDekMsMkNBQTJDLEVBQUUsNEJBQTRCO0lBQ3pFLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QywyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsOEJBQThCLEVBQUUsMkJBQTJCO0lBQzNELGtCQUFrQixFQUFFLG9DQUFvQztJQUN4RCxjQUFjLEVBQUUsYUFBYTtBQUNqQzs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUIsRUFBRSxxQkFBcUI7SUFDNUMsMkJBQTJCLEVBQUUsK0NBQStDO0lBQzVFLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsWUFBWSxFQUFFLDBCQUEwQjtJQUN4QyxzQkFBc0IsRUFBRSxvREFBb0Q7QUFDaEY7O0FBRUEsZ0VBQWdFO0FBQ2hFO0lBQ0k7UUFDSSwwQkFBMEIsRUFBRSxnQ0FBZ0M7UUFDNUQsYUFBYSxJQUFJLDhCQUE4QjtJQUNuRDtBQUNKLENBQUMsaUJBQWlCO0FBQ2xCO0lBQ0ksVUFBVSxFQUFFLDBDQUEwQztJQUN0RCx5QkFBeUIsRUFBRSxxQkFBcUI7SUFDaEQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYSxFQUFFLHFCQUFxQjtJQUNwQyxzQkFBc0IsRUFBRSxnQkFBZ0I7SUFDeEMsZ0JBQWdCLEVBQUUsMkJBQTJCO0FBQ2pEOztBQUVBO0lBQ0ksZ0JBQWdCLEVBQUUsNkJBQTZCO0lBQy9DLFlBQVksRUFBRSwwQkFBMEI7QUFDNUM7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSSxnQkFBZ0IsRUFBRSwyQkFBMkI7SUFDakQ7QUFDSjs7O0FBR0EsaUJBQWlCO0FBQ2pCO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxhQUFhO0lBQ2IscUNBQXFDLEVBQUUsNEJBQTRCO0lBQ25FLFNBQVMsRUFBRSw2QkFBNkI7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLGNBQWM7SUFDZCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWRvcHRhYmxlLWFuaW1hbHMtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLyogVGl0bGUgYW5kIEJ1dHRvbiBDb250YWluZXIgKi9cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBBbGlnbiB0aXRsZSB0byB0aGUgbGVmdCBhbmQgYnV0dG9uIHRvIHRoZSByaWdodCAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdmVydGljYWxseSAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGQgc29tZSBzcGFjaW5nIGJlbG93IHRoZSB0aXRsZSBhbmQgYnV0dG9uICovXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEJ1dHRvbiBTdHlsZSAqL1xcbi5hZGQtYW5pbWFsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNERFMzsgLyogQnV0dG9uIGNvbG9yICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XFxufVxcblxcbi5hZGQtYW5pbWFsLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDM5YzI7IC8qIERhcmtlbiBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBNb2RhbCBPdmVybGF5ICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgZGFyayBiYWNrZ3JvdW5kICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIHdoZW4gbW9kYWwgaXMgb3BlbiAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAzMHB4OyAvKiBJbmNyZWFzZWQgcGFkZGluZyBmb3IgbW9yZSB3aGl0ZSBzcGFjZSAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgKi9cXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLyogU2xpZ2h0IHNoYWRvdyBmb3IgZGVwdGggKi9cXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50OyAvKiBFbnN1cmUgOTAlIHdpZHRoICovXFxuICAgIG1heC13aWR0aDogNTAwcHggIWltcG9ydGFudDsgLyogTWF4aW11bSB3aWR0aCAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IC8qIENvbnNpc3RlbnQgZm9udCBmYW1pbHkgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBFbnN1cmUgY2xvc2UgYnV0dG9uIGFsaWducyB3ZWxsICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXJlZCAqL1xcbn1cXG5cXG4vKiBEaWFsb2cgT3ZlcmxheSAqL1xcbi5kaWFsb2ctb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4vKiBEaWFsb2cgQm94ICovXFxuLmRpYWxvZy1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7IC8qIEVuc3VyZSA5MCUgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA5MDBweCAhaW1wb3J0YW50OyAvKiBJbmNyZWFzZWQgbWF4LXdpZHRoIGZvciBhIHdpZGVyIGRpYWxvZyBib3ggKi9cXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87IC8qIENlbnRlciB0aGUgZGlhbG9nIGJveCAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBFbnN1cmUgcGFkZGluZyBpcyBpbmNsdWRlZCBpbiB3aWR0aCBjYWxjdWxhdGlvbiAqL1xcbn1cXG5cXG4vKiBFbnN1cmUgdGhlIGRpYWxvZyBib3ggcmVtYWlucyByZXNwb25zaXZlIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuZGlhbG9nLWJveCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgLyogRnVsbCB3aWR0aCBvbiBzbWFsbCBzY3JlZW5zICovXFxuICAgICAgICBwYWRkaW5nOiAxNXB4OyAgIC8qIFJlZHVjZSBwYWRkaW5nIGZvciBtb2JpbGUgKi9cXG4gICAgfVxcbn0vKiBUYWJsZSBTdHlsZXMgKi9cXG4uYWRvcHRhYmxlLWFuaW1hbHMtdGFibGUge1xcbiAgICB3aWR0aDogODAlOyAvKiBFbnN1cmUgdGhlIHRhYmxlIHRha2VzIHRoZSBmdWxsIHdpZHRoICovXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIENvbGxhcHNlIGJvcmRlcnMgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xcbn1cXG5cXG4uYWRvcHRhYmxlLWFuaW1hbHMtdGFibGUgdGgsIC5hZG9wdGFibGUtYW5pbWFscy10YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7IC8qIFNwYWNpbmcgaW4gY2VsbHMgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogQWRkIGJvcmRlcnMgKi9cXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgLyogQWxpZ24gdGV4dCB0byB0aGUgbGVmdCAqL1xcbn1cXG5cXG4uYWRvcHRhYmxlLWFuaW1hbHMtdGFibGUgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDsgLyogU2V0IG1heCB3aWR0aCBmb3IgaW1hZ2VzICovXFxuICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXFxufVxcblxcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5hZG9wdGFibGUtYW5pbWFscy10YWJsZSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtOyAvKiBTbWFsbGVyIGZvbnQgb24gbW9iaWxlICovXFxuICAgIH1cXG59XFxuXFxuXFxuLyogQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBUd28tY29sdW1uIGxheW91dCBmb3IgZm9ybSBmaWVsZHMgKi9cXG4uZm9ybS1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgLyogS2VlcHMgdHdvLWNvbHVtbiBsYXlvdXQgKi9cXG4gICAgZ2FwOiAyMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGZvcm0gaXRlbXMgKi9cXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1ncm91cCBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybS1ncm91cCBpbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggYnV0dG9ucyAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjRERTM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGFnaW5hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnBhZ2luYXRpb24gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgY29sb3I6ICMwMDdiZmY7IFxcbn1cXG5cXG4ucGFnaW5hdGlvbiBidXR0b246ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogI2NjYzsgXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wYWdpbmF0aW9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGJhY2tncm91bmQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBjb250ZW50ICovXHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCBwIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjsgLyogQm9vdHN0cmFwIHByaW1hcnkgY29sb3IgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgZm9yIGhvdmVyIGVmZmVjdCAqL1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL0Vycm9yTW9kYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCw4QkFBOEIsRUFBRSxnQ0FBZ0M7SUFDaEUsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFFLG9DQUFvQztBQUN2RDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CLEVBQUUsNEJBQTRCO0lBQ2pELFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CLEVBQUUsa0NBQWtDO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgaXQncyBhYm92ZSBvdGhlciBjb250ZW50ICovXFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHAge1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjsgLyogQm9vdHN0cmFwIHByaW1hcnkgY29sb3IgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgZm9yIGhvdmVyIGVmZmVjdCAqL1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Fkb3B0YWJsZUFuaW1hbHNQYWdlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQWRvcHRhYmxlQW5pbWFsc1BhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Vycm9yTW9kYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FcnJvck1vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJGYUVkaXQiLCJGYVRyYXNoIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiQ29uZmlybWF0aW9uTW9kYWwiLCJTaWRlYmFyIiwiRXJyb3JNb2RhbCIsIkFkb3B0YWJsZUFuaW1hbHNQYWdlIiwiYWRvcHRhYmxlQW5pbWFscyIsInNldEFkb3B0YWJsZUFuaW1hbHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJpc01vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJpc0RlbGV0ZU1vZGFsT3BlbiIsInNldElzRGVsZXRlTW9kYWxPcGVuIiwiYW5pbWFsVG9EZWxldGUiLCJzZXRBbmltYWxUb0RlbGV0ZSIsImRlbGV0ZU1lc3NhZ2UiLCJzZXREZWxldGVNZXNzYWdlIiwiYWRvcHRpb25SZXF1ZXN0VG9EZWxldGUiLCJzZXRBZG9wdGlvblJlcXVlc3RUb0RlbGV0ZSIsImlzRXJyb3JNb2RhbE9wZW4iLCJzZXRJc0Vycm9yTW9kYWxPcGVuIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJuZXdBbmltYWwiLCJzZXROZXdBbmltYWwiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiYnJlZWQiLCJhZ2UiLCJzaXplIiwicGVyc29uYWxpdHkiLCJoZWFsdGhfc3RhdHVzIiwiYmFja2dyb3VuZCIsInNwZWNpYWxfbmVlZHMiLCJzaGVsdGVyIiwiaW1nIiwiaW1ndXJsIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIml0ZW1zUGVyUGFnZSIsImZldGNoQWRvcHRhYmxlQW5pbWFscyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQkFTRV9VUkwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJhbmltYWxzIiwiZXJyIiwiY29uc29sZSIsImhhbmRsZUFuaW1hbENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZmlsZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ1cGRhdGVkQW5pbWFsIiwicHJldiIsIm1hcCIsImFuaW1hbCIsInJlc2V0Rm9ybSIsImhhbmRsZUVkaXQiLCJoYW5kbGVEZWxldGVBZG9wdGlvblJlcXVlc3QiLCJyZXF1ZXN0SWQiLCJoYW5kbGVEZWxldGUiLCJhbmltYWxJZCIsImxvZyIsImNvbmZpcm1EZWxldGUiLCJkZWxldGUiLCJzdGF0dXMiLCJmaWx0ZXIiLCJjYW5jZWxEZWxldGUiLCJjbG9zZUVycm9yTW9kYWwiLCJ0b2dnbGVNb2RhbCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImRpc3BsYXllZEFuaW1hbHMiLCJzbGljZSIsImhhbmRsZU5leHRQYWdlIiwiaGFuZGxlUHJldlBhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhY2NlcHQiLCJpc09wZW4iLCJtZXNzYWdlIiwib25Db25maXJtIiwib25DYW5jZWwiLCJ0aXRsZSIsIm9uQ2xvc2UiLCJGcmFnbWVudCIsImFkb3B0aW9uUmVxdWVzdHMiLCJyZXF1ZXN0IiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9