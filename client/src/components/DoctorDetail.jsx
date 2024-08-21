import React from 'react';
import { useParams } from 'react-router-dom';

// Ensure you have the doctors data available
const doctors = [
  { id: 1, name: 'Dr. John Doe', experience: 15, rating: 4.8, specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Jane Smith', experience: 10, rating: 4.5, specialty: 'Neurology' },
  { id: 3, name: 'Dr. Alice Johnson', experience: 8, rating: 4.2, specialty: 'Dermatology' },
  // Add more doctors
];

export const DoctorDetail = () => {
  const { id } = useParams();

  // Convert id to number and find the doctor
  const doctor = doctors.find(doc => doc.id === parseInt(id, 10));

  // If doctor is not found, you might want to return a 'Not Found' message or redirect
  if (!doctor) {
    return <div>Doctor not found.</div>;
  }

  return (
    <div className="container doctor-detail">
      <h1>{doctor.name}</h1>
      <p>Experience: {doctor.experience} years</p>
      <p>Rating: {doctor.rating}</p>
      <p>Specialty: {doctor.specialty}</p>
      <a href="#" className="book-appointment-button">Book Appointment</a>
    </div>
  );
};
