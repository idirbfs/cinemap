// Jeu.jsx
import React, { useState } from 'react';
import './Jeu.css';
import StreetViewComponent from './StreetView/StreetView';
import Quizz from './Quizz/Quizz';

const Jeu = () => {
  const [streetViewPosition, setStreetViewPosition] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  const handleSkip = () => {
    console.log('Skipped!');
  };

  const handleSubmit = () => {
    console.log('Submitted!');
  };

  return (
    <div className="jeu-container">
      {/* Street View as background */}
      <StreetViewComponent position={streetViewPosition} />

      

      {/* Foreground content with mini map and quiz */}
      <div className="foreground-container">
        {/* Mini Google Map */}
        <Quizz onSkip={handleSkip} onSubmit={handleSubmit} mapPosition={streetViewPosition} />
      </div>
    </div>
  );
};

export default Jeu;
