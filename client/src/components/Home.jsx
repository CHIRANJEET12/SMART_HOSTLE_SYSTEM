import React from 'react';
import './Home.css';
import Navbar from './Navbar';

export const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <header className="hero-section">
        <h1>Your Health Our Priority</h1>
        <p>Expert consultations and care at your fingertips</p>
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
          <div className="card">
            <h3>Telemedicine</h3>
            <p>Access healthcare from the comfort of your home.</p>
          </div>
        </div>
      </section>

      <br /><br />
      <br />

      <section className="domain">
        <h2>Consult top doctors online for any health concern </h2>
        <h5>Private online consultations with verified doctors in all specialists</h5>
        <br />
        <br />
        <div className="services-cards">
          <div className="card">
            <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Period Doubts/Pregnancy</h3>
            <p> Consult now</p>
          </div>

          <div className="card">
          <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Acne Pimple or Skin Issue</h3>
            <p> Consult now</p>
          </div>
          <div className="card">
          <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Cold Cough</h3>
            <p> Consult now</p>
          </div>
          <div className="card">
          <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Stomach Pain</h3>
            <p> Consult now</p>
          </div>
          <div className="card">
          <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Depression or Anxiety</h3>
            <p> Consult now</p>
          </div>
          <div className="card">
          <img className="w-full h-32 object-cover" src="your-image-url.jpg" alt="General Consultation" />
            <h3>Telemedicine</h3>
            <p> Consult now</p>
          </div>
        </div>
      </section>
      
      <br />
      <br />
      <hr />

      <section className="publicDomain">
        <h2>Access the public domain and cure your health.</h2>
        <div className="pmm">
        <div className="img1">
          <img src="\public\download (3).jpg" alt="" />
        </div>
        <div className="pm">
          <h4>Access the <span>public domain</span> and get the <br /> most demanding help by <span>helping people</span>, <br /> Get collective mass responce from <br /> <span>specialized doctors</span> </h4>
        </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 MediConsult. All rights reserved.</p>
        <br />
        <div className="foo">
          <div className="one">
            <h5>For doctors</h5>
            <a href="#"><h6>profile </h6></a> <br />
            <h5>For clinics</h5>
            <a href="#"><h6>locate</h6></a>
          </div>
          <div className="two">
          <h5>For doctors</h5>
            <a href="#"><h6>profile </h6></a> <br />
            <h5>For clinics</h5>
            <a href="#"><h6>locate</h6></a>
          </div>
          <div className="three">
          <h5>For doctors</h5>
            <a href="#"><h6>profile </h6></a> <br />
            <h5>For clinics</h5>
            <a href="#"><h6>locate</h6></a>
          </div>
        </div>
      </footer>
    </div>
  );
};
