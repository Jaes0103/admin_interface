import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../style/CreateRescuerPage.css'; // Add CSS file for styles

const passwordStrength = (password) => {
    const strengthCriteria = [
        { regex: /.{8,}/, message: 'At least 8 characters' }, // Minimum length
        { regex: /[A-Z]/, message: 'At least one uppercase letter' },
        { regex: /[a-z]/, message: 'At least one lowercase letter' },
        { regex: /\d/, message: 'At least one number' },
        { regex: /[@$!%*?&]/, message: 'At least one special character' },
    ];

    const strength = strengthCriteria.reduce((acc, { regex }) => acc + (regex.test(password) ? 1 : 0), 0);
    return strength;
};

const CreateRescuer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const [passwordStrengthValue, setPasswordStrengthValue] = useState(0); // Password strength
    const [rescuers, setRescuers] = useState([]); // State for rescuers
    const [loadingRescuers, setLoadingRescuers] = useState(false); // Loading state for rescuers
    const [errorRescuers, setErrorRescuers] = useState(''); // Error state for rescuers

    useEffect(() => {
        fetchRescuers(); // Fetch rescuers on component mount
    }, []);

    const fetchRescuers = async () => {
        setLoadingRescuers(true); // Start loading rescuers
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/rescuers`);
            setRescuers(response.data); // Set rescuers data
        } catch (error) {
            console.error('Error fetching rescuers:', error);
            setErrorRescuers('Error fetching rescuers. Please try again later.');
        } finally { 
            setLoadingRescuers(false); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setLoading(true); 

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/create-rescuer`, {
                name,
                email,
                password,
            });

            setMessage(response.data.msg); 
            setName('');
            setEmail('');
            setPassword('');
            setPasswordStrengthValue(0); // Reset password strength
            fetchRescuers(); // Refresh the list of rescuers
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                setError(err.response.data.msg || 'Failed to create rescuer');
            } else {
                setError('Server error. Please try again later.');
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordStrengthValue(passwordStrength(newPassword)); // Update password strength
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="form-container">
                <h2>Create Rescuer Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {/* Password Strength Indicator */}
                        <div className="password-strength">
                            <div
                                className="strength-meter"
                                style={{ width: `${(passwordStrengthValue / 5) * 100}%`, backgroundColor: getStrengthColor(passwordStrengthValue) }}
                            />
                            <p>Password strength: {getStrengthLabel(passwordStrengthValue)}</p>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="submit-button">
                        {loading ? 'Creating...' : 'Create Rescuer'}
                    </button>
                </form>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
                
            </div>
            {/* Rescuers List Section */}
            <div className="rescuers-list">
                    <h2>Rescuers</h2>
                    {loadingRescuers && <p>Loading rescuers...</p>} {/* Loading message for rescuers */}
                    <h3>Validated Rescuers</h3>
                    <ul>
                        {rescuers.filter(rescuer => rescuer.isValidated).map(rescuer => (
                            <li key={rescuer.id}>{rescuer.name} - {rescuer.email}</li>
                        ))}
                    </ul>
                    <h3>Unvalidated Rescuers</h3>
                    <ul>
                        {rescuers.filter(rescuer => !rescuer.isValidated).map(rescuer => (
                            <li key={rescuer.id}>{rescuer.name} - {rescuer.email}</li>
                        ))}
                    </ul>
                </div>
        </div>
    );
};

// Helper functions for strength feedback
const getStrengthColor = (strength) => {
    switch (strength) {
        case 0: return 'red';
        case 1: return 'orange';
        case 2: return 'yellow';
        case 3: return 'lightgreen';
        case 4: return 'green';
        case 5: return 'darkgreen';
        default: return 'transparent';
    }
};

const getStrengthLabel = (strength) => {
    switch (strength) {
        case 0: return 'Very Weak';
        case 1: return 'Weak';
        case 2: return 'Fair';
        case 3: return 'Good';
        case 4: return 'Strong';
        case 5: return 'Very Strong';
        default: return '';
    }
};

export default CreateRescuer;
