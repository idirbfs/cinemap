// StreetView.jsx
import React from 'react';
import StreetView from 'react-google-streetview';
import './StreetView.css';
import googlemapApikey from '../../../Api/googleMapsApiKey';

const StreetViewComponent = ({ position }) => {
  return (
    <div id="street-view" className="street-view">
      <div className="overlay">
        <button className="quit-button" onClick={() => window.close()}>
          Quit
        </button>
        <p className="timeout-text">Timeout: 5s</p>
      </div>
      <StreetView
        apiKey={googlemapApikey}
        streetViewPanoramaOptions={{
          position: position,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }}
        onUnmount={(streetViewPanorama) => {
          // Handle cleanup if needed
        }}
      />
    </div>
  );
};

export default StreetViewComponent;
