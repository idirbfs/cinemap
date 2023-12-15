import React from "react";
import "./Accueil.css";
import NavbarAccueil from "./NavbarAcceuil/NavbarAccueil";
const Accueil = () => {
  return (
    <div>
    <header>
      <nav>
        <NavbarAccueil />
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
    </div>
  );
};

export default Accueil;
