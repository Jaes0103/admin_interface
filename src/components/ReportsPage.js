import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSort, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import '../style/ReportsPage.css';
import Sidebar from './Sidebar';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [rescuedAnimals, setRescuedAnimals] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isRecent, setIsRecent] = useState(true);

  // Pagination state
  const [currentPageReports, setCurrentPageReports] = useState(1);
  const [itemsPerPageReports, setItemsPerPageReports] = useState(10);

  const [currentPageRescued, setCurrentPageRescued] = useState(1);
  const [itemsPerPageRescued, setItemsPerPageRescued] = useState(10);

  // Fetch report details
  const fetchReportDetails = async () => {
    try {
      const reportUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/reportsdetails`;
      const reportResponse = await axios.get(reportUrl);
      setReports(reportResponse.data.reports);

      const rescuedUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/rescuedanimalsdetails`;
      const rescuedResponse = await axios.get(rescuedUrl);
      setRescuedAnimals(rescuedResponse.data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching report or rescued animal details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReportDetails();
  }, []);

  const toggleReportOrder = () => {
    setIsRecent(!isRecent);
  };

  const sortedReports = reports.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return isRecent ? dateB - dateA : dateA - dateB;
  });

  // Pagination calculations
  const totalPagesReports = Math.ceil(reports.length / itemsPerPageReports);
  const totalPagesRescued = Math.ceil(rescuedAnimals.length / itemsPerPageRescued);

  const currentReports = sortedReports.slice(
    (currentPageReports - 1) * itemsPerPageReports,
    currentPageReports * itemsPerPageReports
  );

  const currentRescuedAnimals = rescuedAnimals.slice(
    (currentPageRescued - 1) * itemsPerPageRescued,
    currentPageRescued * itemsPerPageRescued
  );

  const handleNextReports = () => {
    if (currentPageReports < totalPagesReports) {
      setCurrentPageReports((prev) => prev + 1);
    }
  };

  const handlePreviousReports = () => {
    if (currentPageReports > 1) {
      setCurrentPageReports((prev) => prev - 1);
    }
  };

  const handleNextRescued = () => {
    if (currentPageRescued < totalPagesRescued) {
      setCurrentPageRescued((prev) => prev + 1);
    }
  };

  const handlePreviousRescued = () => {
    if (currentPageRescued > 1) {
      setCurrentPageRescued((prev) => prev - 1);
    }
  };

  if (loading) {
    return <p>Loading reports and rescued animals...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="report-details-container">
      <Sidebar />
      <h1>Report Details</h1>
      <table className="report-details-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Reporter</th>
            <th>Animal Type</th>
            <th>Details</th>
            <th>Cruelty Details</th>
            <th>
              <span>Date Created</span>
              <button onClick={toggleReportOrder} className="toggle-button">
                <FaSort />
              </button>
            </th>
            <th>Accident Date</th>
            <th>Status</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.length === 0 ? (
            <tr>
              <td colSpan="9">No reports available.</td>
            </tr>
          ) : (
            currentReports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.reporter_name}</td>
                <td>{report.animal_type}</td>
                <td>{report.animal_details}</td>
                <td>{report.cruelty_details}</td>
                <td>{new Date(report.created_at).toLocaleDateString()}</td>
                <td>{new Date(report.accident_date).toLocaleDateString()}</td>
                <td>{report.status}</td>
                <td>
                  {report.image_url && (
                    <img src={report.image_url} alt="Report" className="report-image" />
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Reports Pagination */}
      <div className="pagination">
        <button onClick={handlePreviousReports} disabled={currentPageReports === 1}>
          <FaChevronLeft />
        </button>
        <span>
          Page {currentPageReports} of {totalPagesReports}
        </span>
        <button onClick={handleNextReports} disabled={currentPageReports === totalPagesReports}>
          <FaChevronRight />
        </button>
      </div>

      <h1>Rescued Animals</h1>
      <table className="rescued-animals-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Report ID</th>
            <th>Rescuer</th>
            <th>Animal Type</th>
            <th>Number of Animals</th>
            <th>Accident Date</th>
            <th>Rescue Date</th>
            <th>Animal Condition</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {currentRescuedAnimals.length === 0 ? (
            <tr>
              <td colSpan="9">No rescued animals available.</td>
            </tr>
          ) : (
            currentRescuedAnimals.map((rescued) => (
              <tr key={rescued.id}>
                <td>
                  {rescued.image_url && (
                    <img src={rescued.image_url} alt="Rescued Animal" className="report-image" />
                  )}
                </td>
                <td>{rescued.rescued_report_id}</td>
                <td>{rescued.full_name}</td>
                <td>{rescued.animal_type}</td>
                <td>{rescued.number_of_animals}</td>
                <td>{new Date(rescued.accident_date).toLocaleDateString()}</td>
                <td>{new Date(rescued.rescue_date).toLocaleDateString()}</td>
                <td>{rescued.animal_condition}</td>
                <td>{rescued.phone_number}</td> 
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Rescued Animals Pagination */}
      <div className="pagination">
        <button onClick={handlePreviousRescued} disabled={currentPageRescued === 1}>
          <FaChevronLeft />
        </button>
        <span>
          Page {currentPageRescued} of {totalPagesRescued}
        </span>
        <button onClick={handleNextRescued} disabled={currentPageRescued === totalPagesRescued}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReportsPage;
