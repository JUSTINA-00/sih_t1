import React from 'react';
import MapComponent from './Maps';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Location</h1>
      <div className="map-wrapper">
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
