import React, {useState} from "react";
import "./Accueil.css";
import NavbarAccueil from "./NavbarAcceuil/NavbarAccueil";
import Inscription from "../Inscription/Inscription";
import Connexion from "../Connexion/Connexion";

const Accueil = () => {
  const [showInscription, setShowInscription] = useState(false);
  const [showConnexion, setShowConnexion] = useState(false);

  const openInscriptionPopup = () => {
    setShowInscription(true);
    setShowConnexion(false);
  };

  const openConnexionPopup = () => {
    setShowConnexion(true);
    setShowInscription(false);
  };

  const closePopup = () => {
    setShowInscription(false);
    setShowConnexion(false);
  };
  return (
    <div>
    <header>
      <nav>
      <NavbarAccueil
            openInscriptionPopup={openInscriptionPopup}
            openConnexionPopup={openConnexionPopup}
          />
      </nav>
    </header>
    <main>
      <section className="Accueil">
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <p className="text-center">
            Immergez-vous <br />
            dans les grands décors <br />
            du cinéma de l’imaginaire !
          </p>
          <button type="button" className="btn btn-secondary btn-sm">Jouer</button>
        </div>
      </section>
    </main>
    {showInscription && <Inscription onClose={closePopup} />}
      {showConnexion && <Connexion onClose={closePopup} />}
    </div>
  );
};

export default Accueil;
