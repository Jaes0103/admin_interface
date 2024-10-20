import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/AdoptableAnimalsPage.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import Sidebar from './Sidebar';

const AdoptableAnimalsPage = () => {
    const [adoptableAnimals, setAdoptableAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [animalToDelete, setAnimalToDelete] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState('');

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

            if (editMode) {
                setAdoptableAnimals((prev) =>
                    prev.map((animal) => (animal.id === newAnimal.id ? response.data : animal))
                );
            } else {
                setAdoptableAnimals((prev) => [...prev, response.data]);
            }

            resetForm();
            setModalOpen(false);
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

    const handleDelete = async (animalId) => {
        const url = `${process.env.REACT_APP_BASE_URL}/api/admin/delete-adoptable-animal/${animalId}`;
    
        try {
            await axios.delete(url);
            setAdoptableAnimals((prev) => prev.filter((animal) => animal.id !== animalId));
        } catch (error) {
            console.error('Delete error:', error); // Log the entire error response
    
            if (error.response && error.response.status === 400) {
                const requests = error.response.data.requests;
                if (requests && requests.length > 0) {
                    const requestMessage = requests.map(req => `Request ID: ${req.id}, User: ${req.user_id}`).join('\n');
                    setDeleteMessage(`This animal has existing adoption requests:\n${requestMessage}\nClick "OK" to dismiss.`);
                    setAnimalToDelete(animalId);
                    setDeleteModalOpen(true);
                } else {
                    setError('This animal cannot be deleted due to existing processes.');
                }
            } else {
                console.error('Error deleting animal:', error);
                setError('Error deleting animal');
            }
        }
    };
    
    
    const confirmDelete = async () => {
        console.log(`Attempting to confirm delete for animal ID: ${animalToDelete}`);
        const url = `${process.env.REACT_APP_BASE_URL}/api/admin/delete-adoptable-animal/${animalToDelete}`;
        
        try {
            await axios.delete(url);
            setAdoptableAnimals((prev) => prev.filter((animal) => animal.id !== animalToDelete));
            console.log(`Successfully deleted animal ID: ${animalToDelete}`);
        } catch (error) {
            console.error('Error confirming delete:', error);
            setError('Error deleting animal');
        } finally {
            setDeleteModalOpen(false);
            setAnimalToDelete(null);
            setDeleteMessage(''); // Reset the delete message
        }
    };

    const cancelDelete = () => {
        setDeleteModalOpen(false);
        setAnimalToDelete(null);
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

    if (loading) {
        return <p>Loading adoptable animals...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="adoptable-animals-container">
        <Sidebar/>
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
                    message={deleteMessage || "Are you sure you want to delete this animal? This action cannot be undone."}
                    onConfirm={animalToDelete ? confirmDelete : () => setDeleteModalOpen(false)}
                    onCancel={cancelDelete}
                    title={animalToDelete ? "Confirm Deletion" : "Adoption Requests Warning"}
                />
            )}
            {adoptableAnimals.length === 0 ? (
                <p>No adoptable animals available.</p>
            ) : (
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
                        {adoptableAnimals.map((animal) => (
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>
    );
};

export default AdoptableAnimalsPage;
