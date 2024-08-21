import React, { useState } from 'react';
import "./TalkDoc.css"
import { useNavigate } from 'react-router-dom';

// Sample doctor data
const doctors = [
  { id: 1, name: 'Dr. John Doe', experience: 15, rating: 4.8, specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Jane Smith', experience: 10, rating: 4.5, specialty: 'Neurology' },
  { id: 3, name: 'Dr. Alice Johnson', experience: 8, rating: 4.2, specialty: 'Dermatology' },
  // Add more doctors
];

export const TalkDoc = () => {
    const [sortedDoctors, setSortedDoctors] = useState(doctors);
    const navigate = useNavigate();
  
    const handleSort = (criteria) => {
      const sorted = [...sortedDoctors].sort((a, b) => b[criteria] - a[criteria]);
      setSortedDoctors(sorted);
    };
  
    const handleFilter = (specialty) => {
      const filtered = doctors.filter(doctor => doctor.specialty === specialty);
      setSortedDoctors(filtered);
    };
  
    const handleDoctorClick = (doctorId) => {
      navigate(`/doctor/${doctorId}`);
    };
  
    return (
      <div className="container">
        <div className="talkdoc-header">
          <h1>Talk to a Doctor</h1>
        </div>
        
        <div className="sort-filter-buttons">
          <div>
            <h2>Sort By</h2>
            <button onClick={() => handleSort('experience')}>Experience</button>
            <button onClick={() => handleSort('rating')}>Rating</button>
          </div>
          <div>
            <h2>Filter By Disease</h2>
            <button onClick={() => handleFilter('Cardiology')}>Cardiology</button>
            <button onClick={() => handleFilter('Neurology')}>Neurology</button>
            <button onClick={() => handleFilter('Dermatology')}>Dermatology</button>
          </div>
        </div>
  
        <div className="doctors-list">
          <h2>Doctors List</h2>
          <ul>
            {sortedDoctors.map(doctor => (
              <li key={doctor.id} onClick={() => handleDoctorClick(doctor.id)}>
                <h3>{doctor.name}</h3>
                <p>{doctor.experience} years - Rating: {doctor.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  