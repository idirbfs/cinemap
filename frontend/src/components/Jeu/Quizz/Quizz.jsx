// Quizz.jsx
import React, { useState } from "react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import "./Quizz.css";
import googlemapApikey from "../../../Api/googleMapsApiKey";
import styled from "styled-components";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};
const mapContainerStyleM = {
  height: "100%",
  width: "100%",
};

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-300px")};
  height: 100%;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  overflow: hidden;
`;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1px auto;
  height: 100%;
  background-color: rgba(30, 30, 30, 100);
`;

const MapGrid = styled.div`
  overflow: hidden;
`;

const QuestionGrid = styled.div`
  padding: 16px;
  text-align: center;
  position: relative;
  top: 5rem;
`;

const AnswersGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: column;
  margin-top: 25px;
  height: 25%;
  width: 100%;
`;

const AnswerButton = styled.button`
  flex: 1;
  margin: 0 8px;
  padding: 8px;
`;

const Quizz = ({ onSkip, onSubmit, mapPosition }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const handleSkip = () => {
    onSkip();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLoad = () => {
    console.log("Google Maps script loaded");
  };

  const handleAnswerClick = (answer) => { 
    setSelectedAnswer(answer);
  };

  return (
    <LoadScriptNext
      googleMapsApiKey="AIzaSyCw512GnohOqzRSY4As-Q7q6sahTeoAUUI"
      libraries={libraries} // Ajoutez des bibliothèques supplémentaires si nécessaire
      onLoad={handleLoad}
    >
      <Sidebar open={isSidebarOpen}>
        <ContentGrid>
          <MapGrid>
            <GoogleMap
              mapContainerStyle={mapContainerStyleM}
              zoom={10}
              center={mapPosition}
              options={{
                disableDefaultUI: true,
                zoomControl: false,
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                clickableIcons: false,
                gestureHandling: "none",
                draggable: false,
                scrollwheel: false,
                disableDoubleClickZoom: true,
              }}
            >
              <Marker position={mapPosition} />
            </GoogleMap>
          </MapGrid>
          <div
            style={{ height: "2px", backgroundColor: "rgba(73,73,73,100)" }}
          ></div>
          <QuestionGrid>
            <p style={{ color: "white" }}>Question 1/20</p>
            <p style={{ color: "white" }}>Où a été tourné ce film?</p>
            <AnswersGrid>
      <AnswerButton
        onClick={() => handleAnswerClick('Réponse 1')} // Ajout de l'événement onClick
        style={{
          color: selectedAnswer === 'Réponse 1' ? 'white' : 'black', // Changement de la couleur du texte en fonction de la réponse sélectionnée
          backgroundColor: selectedAnswer === 'Réponse 1' ? 'black' : 'rgba(73,73,73,100)', // Changement de la couleur de fond en fonction de la réponse sélectionnée
          borderRadius: "1rem",
          border: "wite",
        }}
      >
        Réponse 1
      </AnswerButton>
      <AnswerButton
        onClick={() => handleAnswerClick('Réponse 2')} // Ajout de l'événement onClick
        style={{
          color: selectedAnswer === 'Réponse 2' ? 'white' : 'black', // Changement de la couleur du texte en fonction de la réponse sélectionnée
          backgroundColor: selectedAnswer === 'Réponse 2' ? 'black' : 'rgba(73,73,73,100)', // Changement de la couleur de fond en fonction de la réponse sélectionnée
          borderRadius: "1rem",
          border: "wite",
        }}
      >
                Réponse 2
              </AnswerButton>
            </AnswersGrid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
                position: "relative",
                top: "5rem",
              }}
            >
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgba(73,73,73,100)",
                  borderRadius: "1rem",
                  border: "wite",
                }}
              >
                Passer
              </button>
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgba(73,73,73,100)",
                  borderRadius: "1rem",
                  border: "wite",
                }}
              >
                Valider
              </button>
            </div>
          </QuestionGrid>
        </ContentGrid>
      </Sidebar>
    </LoadScriptNext>
  );
};

export default Quizz;
