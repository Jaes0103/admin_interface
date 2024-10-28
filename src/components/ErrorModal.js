import React from 'react';
import './ErrorModal.css'; // Assuming you want to use a separate CSS file for styling

const ErrorModal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null; // If the modal is not open, return null

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Error</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ErrorModal;
