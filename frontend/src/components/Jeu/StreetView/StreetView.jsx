// StreetView.jsx
import React, {useState, useEffect} from 'react';
import StreetView from 'react-google-streetview';
import './StreetView.css';
import googlemapApikey from '../../../Api/googleMapsApiKey';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Timer = styled.div`
  position: absolute;
  top: 16px;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  z-index: 1; // Ajoutez cette ligne
`;

const QuitButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 1;
`;

const StreetViewComponent = ({ position }) => {
  const [timer, setTimer] = useState(1000);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((timer) => timer > 0 ? timer - 1 : 0);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleQuitGame = () => {
    navigate('/'); 
  };


  return (
    <div id="street-view" className="street-view">
      
      <StreetView
        apiKey={googlemapApikey}
        streetViewPanoramaOptions={{
          position: position,
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }}
        onUnmount={(streetViewPanorama) => {
          
        }}
      ></StreetView>
      <Timer style={{borderRadius:"50%", backgroundColor: "rgba(30, 30, 30,100)", color: 'white', fontSize: '2rem'}}>{`0:${timer < 10 ? `0${timer}` : timer}`}</Timer>
        <QuitButton style={{borderRadius:"90%", backgroundColor: "rgba(30, 30, 30,100)", color: 'white'}} onClick={handleQuitGame}>{"Quitter"}</QuitButton>
    </div>
  );
};

export default StreetViewComponent;
