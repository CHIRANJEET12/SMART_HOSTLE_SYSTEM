import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Your Health, Our Priority</h1>
        <p>Expert consultations and care at your fingertips.</p>
        <a href="#" className="btn-primary">Book a Consultation</a>
      </header>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>General Consultation</h3>
            <p>Get advice from our expert general practitioners.</p>
          </div>
          <div className="card">
            <h3>Specialist Doctors</h3>
            <p>Consult with top specialists across various fields.</p>
          </div>
          <div className="card">
            <h3>Telemedicine</h3>
            <p>Access healthcare from the comfort of your home.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MediConsult. All rights reserved.</p>
      </footer>
    </div>
  );
};
