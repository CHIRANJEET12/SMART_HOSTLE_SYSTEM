import React, { useContext } from 'react';
import { UserContext } from './UseContext';
function Navbar() {

  const user = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <a className="navbar-brand" href="/Home">Medify</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/TalkDoc">Talk-to-doctor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Health-Monitor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pharmacy-help</a>
            </li>
            {user?.loggedIn == true?( <li className="nav-item">
              <a className="nav-link" href="/login">Login/Signup</a>
            </li>):("")}
           
          </ul>

          {/* login icon */}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
