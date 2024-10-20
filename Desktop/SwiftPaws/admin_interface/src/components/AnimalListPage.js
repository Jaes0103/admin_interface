import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../style/AnimalListPage.css';
import Sidebar from './Sidebar';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const fetchAnimals = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/animals`);
            setAnimals(response.data.animals);
            setLoading(false);
        } catch (err) {
            setError('Error fetching animals');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);

    const handleViewClick = (id) => {
        navigate(`/animals/${id}/details`);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value));
        setCurrentPage(1);
    };

    const filteredAnimals = animals.filter(animal => 
        animal.name.toLowerCase().includes(searchQuery) ||
        animal.type.toLowerCase().includes(searchQuery) ||
        animal.breed.toLowerCase().includes(searchQuery)
    );

    const indexOfLastAnimal = currentPage * entriesPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - entriesPerPage;
    const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);

    const totalPages = Math.ceil(filteredAnimals.length / entriesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        return <div>Loading animals...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="animal-list-page">
            <h1>Animals in the Shelter</h1>
            <Sidebar />
            <div className="table-container"> 
            <div className="controls">
                <label htmlFor="entries">Show</label>
                <select id="entries" value={entriesPerPage} onChange={handleEntriesChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <span> entries</span>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
    
                {filteredAnimals.length === 0 ? (
                    <p>No animals found in the shelter.</p>
                ) : (
                    <>
                        <table className="animal-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Age</th>
                                    <th>Breed</th>
                                    <th>Birthdate</th>
                                    <th>Location</th>
                                    <th>Personality</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentAnimals.map(animal => (
                                    <tr key={animal.id}>
                                        <td>
                                            {animal.image_url ? (
                                                <img 
                                                    src={animal.image_url} 
                                                    alt={animal.name} 
                                                    className="animal-image" 
                                                />
                                            ) : (
                                                <div className="paw-icon-container">
                                                    <FontAwesomeIcon icon={faPaw} className="default-paw-icon" />
                                                </div>
                                            )}
                                        </td>
                                        <td>{animal.name}</td>
                                        <td>{animal.type}</td>
                                        <td>{animal.age}</td>
                                        <td>{animal.breed}</td>
                                        <td>{new Date(animal.birthdate).toLocaleDateString()}</td>
                                        <td>{animal.location}</td>
                                        <td>{animal.personality}</td>
                                        <td>{animal.status}</td>
                                        <td>
                                            <button onClick={() => handleViewClick(animal.id)}>View Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Pagination Controls */}
                        <div className="pagination-container">
                            <div className="pagination">
                                <button 
                                    onClick={handlePrevious} 
                                    disabled={currentPage === 1}
                                    className="prev-next-button"
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button 
                                        key={index + 1} 
                                        onClick={() => paginate(index + 1)} 
                                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button 
                                    onClick={handleNext} 
                                    disabled={currentPage === totalPages}
                                    className="prev-next-button"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnimalList;
