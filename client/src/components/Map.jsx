import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

function Map() {
  const [location, setLocation] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [center, setCenter] = useState([51.505, -0.09]);

  const searchLocation = async () => {
    try {
      // Example: Geocode the location to get latitude and longitude
      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;
      const response = await axios.get(geocodeUrl);
      const data = response.data[0];
      const lat = parseFloat(data.lat);
      const lon = parseFloat(data.lon);

      // Update map center
      setCenter([lat, lon]);

      // Find nearby hospitals (example using OpenStreetMap's Overpass API)
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="hospital"](around:5000,${lat},${lon});out;`;
      const hospitalResponse = await axios.get(overpassUrl);
      setHospitals(hospitalResponse.data.elements);
    } catch (error) {
      console.error("Error fetching location or hospitals", error);
    }
  };

  const MapEffect = () => {
    const map = useMap();
    map.setView(center, 13);
    return null;
  };

  return (
    <div className="map-container">
      <div className="search-bar">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
          className="form-control"
        />
        <button className="btn btn-primary mt-2" onClick={searchLocation}>
          Find Hospitals
        </button>
      </div>
      
      <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
        <MapEffect />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {hospitals.map((hospital, index) => (
          <Marker key={index} position={[hospital.lat, hospital.lon]}>
            <Popup>{hospital.tags.name || "Unnamed Hospital"}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
