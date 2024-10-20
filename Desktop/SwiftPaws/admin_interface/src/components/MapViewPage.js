import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../style/MapPage.css';
import PetsIcon from '@mui/icons-material/Pets'; 
import { renderToString } from 'react-dom/server'; 
import Sidebar from './Sidebar';

// Use environment variable for base URL
const baseURL = process.env.REACT_APP_BASE_URL;

const customMarkerIcon = L.divIcon({
    className: 'custom-marker', 
    html: renderToString(
        <div className="custom-marker-circle" style={{ backgroundColor: '#8a7ebe', borderRadius: '50%', padding: '5px' }}>
            <PetsIcon style={{ color: 'white', fontSize: '20px' }} />
        </div>
    ),
    iconSize: [30, 30], 
    iconAnchor: [15, 30], 
    popupAnchor: [0, -30],
});

const MapView = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch(`${baseURL}/api/admin/reports`); // Use baseURL here
                if (!response.ok) {
                    throw new Error('Failed to fetch reports');
                }
                const data = await response.json();
                setReports(data);
            } catch (error) {
                console.error('Error loading reports:', error);
                setError(error.message); 
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="map-container">
        
            <div className='sidebar-component'>
            <Sidebar/>
            </div>
            <h2 className="header">Animal Cruelty Geotagged Reports</h2> {/* Use header class for styling */}
            {error && <div className="error">{error}</div>} {/* Display error message if exists */}
            <div className="map-sidebar">
                <h3>Reports List</h3>
                {reports.map((report, index) => (
                    <div key={index} className="report-item">
                        <div className="report-container"> 
                            <b>{report.animal_type}</b><br />
                            <span>{report.animal_details}</span><br />
                            <img src={report.image_url} alt="Animal Report" style={{ width: '80px', height: '80px' }} /><br />
                            <span>Reported on: {new Date(report.accident_date).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
            <MapContainer center={[7.1907, 125.4553]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {reports.map((report, index) => {
                    const lat = parseFloat(report.latitude);
                    const lng = parseFloat(report.longitude);

                    if (!isNaN(lat) && !isNaN(lng)) {
                        return (
                            <Marker key={index} position={[lat, lng]} icon={customMarkerIcon}>
                                <Popup>
                                    <b>{report.animal_type}</b><br />
                                    {report.animal_details}<br />
                                    <img src={report.image_url} alt="Animal Report" style={{ width: '100px', height: '100px' }} /><br />
                                    Reported on: {new Date(report.accident_date).toLocaleDateString()}
                                </Popup>
                            </Marker>
                        );
                    }
                    return null;
                })}
            </MapContainer>
        </div>
    );
};

export default MapView;
