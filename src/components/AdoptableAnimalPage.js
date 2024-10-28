import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/AdoptableAnimalsPage.css';
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import Sidebar from './Sidebar';
import ErrorModal from '../style/ErrorModal.css';

const AdoptableAnimalsPage = () => {
    const [adoptableAnimals, setAdoptableAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [animalToDelete, setAnimalToDelete] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState('');
    const [adoptionRequestToDelete, setAdoptionRequestToDelete] = useState(null);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [success, setSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [newAnimal, setNewAnimal] = useState({
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
        imgurl: '',
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; 
    const fetchAdoptableAnimals = async () => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/api/admin/adoptable-animals`;
            const response = await axios.get(url);
            setAdoptableAnimals(response.data.animals);
        } catch (err) {
            console.error('Fetch error:', err);
            setError('Error fetching adoptable animals');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdoptableAnimals();
    }, []);

    const handleAnimalChange = (e) => {
        const { name, value } = e.target;
        setNewAnimal({ ...newAnimal, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewAnimal({ ...newAnimal, img: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(newAnimal).forEach((key) => {
            formData.append(key, newAnimal[key]);
        });

        try {
            const url = editMode
                ? `${process.env.REACT_APP_BASE_URL}/api/admin/update-adoptable-animal/${newAnimal.id}`
                : `${process.env.REACT_APP_BASE_URL}/api/admin/add-adoptable-animal`;
            const method = editMode ? 'put' : 'post';
            const response = await axios[method](url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const updatedAnimal = response.data;

            if (editMode) {
                setAdoptableAnimals((prev) =>
                    prev.map((animal) => (animal.id === updatedAnimal.id ? updatedAnimal : animal))
                );
            } else {
                setAdoptableAnimals((prev) => [...prev, updatedAnimal]);
            }

            resetForm();
            setModalOpen(false);
            setCurrentPage(1);

        } catch (err) {
            console.error('Error adding/updating animal:', err);
            setError(editMode ? 'Error updating animal' : 'Error adding animal');
        }
    };

    const handleEdit = (animal) => {
        setNewAnimal({ ...animal, img: null });
        setEditMode(true);
        setModalOpen(true);
    };
    const handleDeleteAdoptionRequest = (requestId) => {
        setAdoptionRequestToDelete(requestId);
        setDeleteMessage('Are you sure you want to delete this adoption request? This action cannot be undone.');
        setIsDeleteModalOpen(true); 
    };
    const handleDelete = (animalId) => {
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
                const response = await axios.delete(url);
                console.log('Delete response:', response.data); 

                if (response.status === 200) {
                    setAdoptableAnimals((prev) => prev.filter((animal) => animal.id !== animalToDelete));
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
            imgurl: '',
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
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (loading) {
        return <p>Loading adoptable animals...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="adoptable-animals-container">
            <Sidebar />
            <div className='container'>
                <h1>Adoptable Animals</h1>
                <button className='add-animal-button' onClick={toggleModal}>Add Adoptable Animal</button>
            </div>
            {isModalOpen && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <span className="close" onClick={toggleModal}>
                            &times;
                        </span>
                        <h4>{editMode ? 'Edit Adoptable Animal' : 'Add Adoptable Animal'}</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newAnimal.name}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type:</label>
                                    <input
                                        type="text"
                                        name="type"
                                        value={newAnimal.type}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Breed:</label>
                                    <input
                                        type="text"
                                        name="breed"
                                        value={newAnimal.breed}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Age:</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={newAnimal.age}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Size:</label>
                                    <input
                                        type="text"
                                        name="size"
                                        value={newAnimal.size}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Personality:</label>
                                    <input
                                        type="text"
                                        name="personality"
                                        value={newAnimal.personality}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Health Status:</label>
                                    <input
                                        type="text"
                                        name="health_status"
                                        value={newAnimal.health_status}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Shelter:</label>
                                    <input
                                        type="text"
                                        name="shelter"
                                        value={newAnimal.shelter}
                                        onChange={handleAnimalChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Image display section */}
                            {newAnimal.imgurl && (
                                <div className="form-group">
                                    <label>Current Image:</label>
                                    <img
                                        src={newAnimal.imgurl}
                                        alt={newAnimal.name}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </div>
                            )}
                            
                            {/* Image upload section */}
                            <div className="form-group">
                                <label>Image:</label>
                                <input
                                    type="file"
                                    name="img"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    required={!editMode}
                                />
                            </div>

                            {/* Special Needs and Shelter fields */}
                            <div className="form-group">
                                <label>Special Needs:</label>
                                <input
                                    type="text"
                                    name="special_needs"
                                    value={newAnimal.special_needs}
                                    onChange={handleAnimalChange}
                                    required
                                />
                            </div>
                            {/* Background field moved here */}
                            <div className="form-group">
                                <label>Background:</label>
                                <input
                                    type="text"
                                    name="background"
                                    value={newAnimal.background}
                                    onChange={handleAnimalChange}
                                    required
                                />
                            </div>
                            <button type="submit">
                                {editMode ? 'Update Animal' : 'Add Animal'}
                            </button>
                            <button type="button" onClick={toggleModal}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {isDeleteModalOpen && (
                <ConfirmationModal
                    isOpen={isDeleteModalOpen}
                    message={deleteMessage}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                    title="Confirm Deletion"
                />
            )}

            {isErrorModalOpen && (
                <ErrorModal
                    isOpen={isErrorModalOpen}
                    message={errorMessage}
                    onClose={closeErrorModal}
                />
            )}
            {adoptableAnimals.length === 0 ? (
                <p>No adoptable animals available.</p>
            ) : (
                <>
                    <table className="adoptable-animals-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Breed</th>
                                <th>Age</th>
                                <th>Size</th>
                                <th>Personality</th>
                                <th>Health Status</th>
                                <th>Background</th>
                                <th>Special Needs</th>
                                <th>Shelter</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedAnimals.map((animal) => (
                                <tr key={animal.id}>
                                    <td>{animal.id}</td>
                                    <td>{animal.name}</td>
                                    <td>{animal.type}</td>
                                    <td>{animal.breed}</td>
                                    <td>{animal.age}</td>
                                    <td>{animal.size}</td>
                                    <td>{animal.personality}</td>
                                    <td>{animal.health_status}</td>
                                    <td>{animal.background}</td>
                                    <td>{animal.special_needs}</td>
                                    <td>{animal.shelter}</td>
                                    <td>
                                        <img
                                            src={animal.imgurl}
                                            alt={animal.name}
                                            style={{ width: '100px', height: 'auto' }}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(animal)}>
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => handleDelete(animal.id)}>
                                            <FaTrash />
                                        </button>
                                        {animal.adoptionRequests && animal.adoptionRequests.map(request => (
                                            <div key={request.id}>
                                                <button onClick={() => handleDeleteAdoptionRequest(request.id)}>
                                                    Delete Request
                                                </button>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            <FaChevronLeft />
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            <FaChevronRight />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdoptableAnimalsPage;
