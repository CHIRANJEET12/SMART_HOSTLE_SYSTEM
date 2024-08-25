import React, { useState } from 'react';
import './Pharmacyhelp.css'
import { Chat } from './Chat';
import Map from './Map';

export const PharmacyHelp = () => {
    const [activeTab, setActiveTab] = useState('chat');

  return (
<div className="container mt-5">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            Chat
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            Map
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'map' && <Map />}
      </div>
    </div>
  )
}
