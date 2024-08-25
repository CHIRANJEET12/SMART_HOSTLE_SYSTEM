import { useState, React, useContext } from 'react';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { TalkDoc } from './components/TalkDoc';
import { DoctorDetail } from './components/DoctorDetail';
import GoogleAuth from './components/GoogleAuth';
import { UserContext } from './components/UseContext';
import { PharmacyHelp } from './components/PharmacyHelp';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const user = useContext(UserContext);
  
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={user?.loggedIn ? <Home /> : <Navigate to="/login" />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<GoogleAuth />} />
        <Route path="/TalkDoc" element={<TalkDoc />} />
        <Route path="/PharmacyHelp" element={<PharmacyHelp/>} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
