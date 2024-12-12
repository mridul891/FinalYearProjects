
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import { Geocoder } from 'leaflet-control-geocoder';

const Map = (locations) => {
    const [map, setMap] = useState(null);
    const [location, setLocation] = useState(locations);
    const [marker, setMarker] = useState(null);
  
    useEffect(() => {
      // Initialize the map
      const initialMap = L.map('disaster-map').setView([28.7041, 77.1025], 5);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(initialMap);
  
      setMap(initialMap);
    }, []);
  
    const handleSearch = () => {
      if (location && map) {
        const geocoder = Geocoder.nominatim();
  
        // Perform geocoding based on user input
        geocoder.geocode(location, function (results) {
          if (results.length > 0) {
            const latLon = results[0].center;
  
            // Remove any existing markers
            if (marker) {
              map.removeLayer(marker);
            }
  
            // Add a new marker
            const newMarker = L.marker(latLon).addTo(map);
            newMarker.bindPopup(`Location: ${location}` ).openPopup();
  
            // Set map view to the new location
            map.setView(latLon, 10);
  
            setMarker(newMarker);
          } else {
            alert('Location not found. Please try again.');
          }
        });
      } else {
        alert('Please enter a location.');
      }
    };
  
    return (
      <div>
        <h1>Pin Location on Map</h1>
  
        <div>
          <label htmlFor="location-input">Enter Location:</label>
          <input
            type="text"
            id="location-input"
            placeholder="Enter a place name or address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
  
        <div id="disaster-map" style={{ width: '500px', height: '500px' }}></div>
      </div>
    );
  
}

export default Map