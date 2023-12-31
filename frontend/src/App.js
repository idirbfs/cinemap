import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import Profil from './components/Profil/Profil';
import Jeu from './components/Jeu/Jeu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/jeu" element={<Jeu/>} />

      </Routes>
    </Router>
  );
}

export default App;
