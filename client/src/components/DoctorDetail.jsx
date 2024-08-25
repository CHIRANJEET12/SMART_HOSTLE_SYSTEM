import React from 'react';
import { useParams } from 'react-router-dom';

// Ensure you have the doctors data available
const doctors = 
  [{"id":1,"name":"Dr. Joby Kitt","experience":15,"ratings":1.7,"speciality":"Orthopedics"},
    {"id":2,"name":"Dr. Anderea Divall","experience":13,"ratings":1.3,"speciality":"Orthopedics"},
    {"id":3,"name":"Dr. Wallie Littell","experience":21,"ratings":2.2,"speciality":"iology"},
    {"id":4,"name":"Dr. Greg Sextone","experience":17,"ratings":3.2,"speciality":"Surgery"},
    {"id":5,"name":"Dr. Rochester Fawcitt","experience":9,"ratings":3.0,"speciality":"Cardiology"},
    {"id":6,"name":"Dr. Beltran Fillimore","experience":14,"ratings":4.6,"speciality":"Pediatrics"},
    {"id":7,"name":"Dr. Bruce Sherer","experience":7,"ratings":1.1,"speciality":"Physical therapy"},
    {"id":8,"name":"Dr. Ingamar Fold","experience":22,"ratings":1.4,"speciality":"Physical therapy"},
    {"id":9,"name":"Dr. Barnabas Riddock","experience":25,"ratings":3.7,"speciality":"Dermatology"},
    {"id":10,"name":"Dr. Stormie Matuskiewicz","experience":25,"ratings":1.5,"speciality":"Orthopedics"},
    {"id":11,"name":"Dr. Konstanze Cazin","experience":20,"ratings":2.7,"speciality":"Surgery"},
    {"id":12,"name":"Dr. Law Bettesworth","experience":19,"ratings":0.3,"speciality":"Internal medicine"},
    {"id":13,"name":"Dr. Andy Seville","experience":16,"ratings":1.6,"speciality":"Orthopedics"},
    {"id":14,"name":"Dr. Consuelo Stirton","experience":4,"ratings":0.2,"speciality":"Dermatology"},
    {"id":15,"name":"Dr. Jana Polden","experience":23,"ratings":1.3,"speciality":"medicine"},
    {"id":16,"name":"Dr. Barnebas Tour","experience":11,"ratings":3.4,"speciality":"Cardiology"},
    {"id":17,"name":"Dr. Deck Buckberry","experience":22,"ratings":1.7,"speciality":"Surgery"},
    {"id":18,"name":"Dr. Thorin Binfield","experience":20,"ratings":4.4,"speciality":"Dermatology"},
    {"id":19,"name":"Dr. Eachelle Elam","experience":20,"ratings":4.9,"speciality":"iology"},
    {"id":20,"name":"Dr. Minnaminnie Mattiacci","experience":18,"ratings":0.8,"speciality":"Dermatology"},
    {"id":21,"name":"Dr. Lillis Tassaker","experience":25,"ratings":4.5,"speciality":"iology"},
    {"id":22,"name":"Dr. Stesha Lamzed","experience":19,"ratings":4.5,"speciality":"iology"},
    {"id":23,"name":"Dr. Tommy Beszant","experience":17,"ratings":4.3,"speciality":"Pediatrics"},
    {"id":24,"name":"Dr. Brad Dudek","experience":20,"ratings":1.9,"speciality":"iology"},
    {"id":25,"name":"Dr. Ulrike Hutt","experience":17,"ratings":1.8,"speciality":"Dermatology"},
    {"id":26,"name":"Dr. Nanette Cord","experience":3,"ratings":2.3,"speciality":"Surgery"},
    {"id":27,"name":"Dr. Brinna Pauel","experience":6,"ratings":0.3,"speciality":"iology"},
    {"id":28,"name":"Dr. Misha Morrice","experience":12,"ratings":3.6,"speciality":"Dermatology"},
    {"id":29,"name":"Dr. Maridel Kaman","experience":6,"ratings":3.0,"speciality":"medicine"},
    {"id":30,"name":"Dr. Carina Whitmarsh","experience":24,"ratings":2.7,"speciality":"iology"},
    {"id":31,"name":"Dr. Gabe Kubicki","experience":4,"ratings":2.8,"speciality":"Surgery"},
    {"id":32,"name":"Dr. Shaw Comsty","experience":20,"ratings":1.0,"speciality":"Orthopedics"},
    {"id":33,"name":"Dr. Haskel Lansdowne","experience":22,"ratings":4.3,"speciality":"Physical therapy"},
    {"id":34,"name":"Dr. Ogdon Devanny","experience":19,"ratings":2.3,"speciality":"iology"},
    {"id":35,"name":"Dr. Adrienne Fernandes","experience":10,"ratings":0.7,"speciality":"Physical therapy"},
    {"id":36,"name":"Dr. Keane Rowbottam","experience":17,"ratings":3.7,"speciality":"Surgery"},
    {"id":37,"name":"Dr. Chadd Fouldes","experience":24,"ratings":1.3,"speciality":"Cardiology"},
    {"id":38,"name":"Dr. Ambrosi Landall","experience":19,"ratings":2.9,"speciality":"Dermatology"},
    {"id":39,"name":"Dr. Thedric Kenworthey","experience":20,"ratings":3.6,"speciality":"iology"},
    {"id":40,"name":"Dr. Flo MacCarrane","experience":5,"ratings":1.8,"speciality":"medicine"}];

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
