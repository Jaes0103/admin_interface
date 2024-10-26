import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaTachometerAlt, FaFileAlt, FaHeart, FaPaw, FaCogs, FaCalendarAlt, FaUsers, FaSignOutAlt, FaMap } from 'react-icons/fa'; 

import '../style/Sidebar.css';
import ConfirmationModal from './ConfirmationModal'; 
import { useAuth } from '../context/AuthContext'; 

const Sidebar = () => {
  const { logout } = useAuth(); 
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setModalOpen(true); 
  };

  const confirmLogout = () => {
    logout(); 
    navigate('/'); 
    alert("Successfully logged out!"); 
  };

  const cancelLogout = () => {
    setModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Menu</h2>
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/dashboard" className="sidebar-link">
            <FaTachometerAlt className="sidebar-icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/reports" className="sidebar-link">
            <FaFileAlt className="sidebar-icon" /> Reports
          </Link>
        </li>
        <li>
          <Link to="/adopt-animal" className="sidebar-link">
            <FaHeart className="sidebar-icon" /> Adoptions
          </Link>
        </li>
        <li>
          <Link to="/animals" className="sidebar-link">
            <FaPaw className="sidebar-icon" /> Animals
          </Link>
        </li>
        <li>
          <Link to="/events" className="sidebar-link">
            <FaCalendarAlt className="sidebar-icon" /> Events
          </Link>
        </li>
        <li>
          <Link to="/rescuers" className="sidebar-link">
            <FaUsers className="sidebar-icon" /> Rescuers
          </Link>
        </li>
        <li>
          <Link to="/maps" className="sidebar-link"> 
            <FaMap className="sidebar-icon" /> Map
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <button onClick={handleLogoutClick} className="sidebar-link logout-button">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </button>
      </div>

     
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to log out?"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </div>
  );
};

export default Sidebar;
