// Jeu.jsx
import React, { useState } from "react";
import "./Jeu.css";
import StreetViewComponent from "./StreetView/StreetView";
import Quizz from "./Quizz/Quizz";

const Jeu = () => {
  const [streetViewPosition, setStreetViewPosition] = useState({
    lat: -36.8288279,
    lng: 175.7903014,
  });

  const handleSkip = () => {
    console.log("Skipped!");
  };

  const handleSubmit = () => {
    console.log("Submitted!");
  };

  return (
    <div className="jeu-container">
      <StreetViewComponent position={streetViewPosition} />
      <div className="foreground-container">
        <Quizz
          onSkip={handleSkip}
          onSubmit={handleSubmit}
          mapPosition={streetViewPosition}
        />
      </div>
    </div>
  );
};

export default Jeu;
