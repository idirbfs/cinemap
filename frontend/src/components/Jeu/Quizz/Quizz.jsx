// Quizz.jsx
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Quizz.css';
import googlemapApikey from '../../../Api/googleMapsApiKey';

const Quizz = ({ onSkip, onSubmit, mapPosition }) => {
  const handleSkip = () => {
    onSkip();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="quiz-section">
      <h2>Quiz Question</h2>
      <LoadScript googleMapsApiKey={googlemapApikey}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '150px',
          }}
          center={mapPosition}
          zoom={8}
          options={{
            disableDefaultUI: true,
          }}
        />
      </LoadScript>
      <div className="rectangle-option" onClick={() => console.log('Option 1 selected')}>
        Option 1
      </div>
      <div className="rectangle-option" onClick={() => console.log('Option 2 selected')}>
        Option 2
      </div>
      <div className="button-container">
        <button className="skip-button" onClick={handleSkip}>
          Skip
        </button>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quizz;
