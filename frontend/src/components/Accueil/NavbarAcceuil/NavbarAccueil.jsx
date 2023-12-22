import React from "react";
import "./NavbarAccueil.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavbarAccueil = ({ openInscriptionPopup, openConnexionPopup }) => {
  return (
    <nav className="navbar navbar-expand-lg accueil-navbar">
      <div className="container-fluid">
        <Link to="/">
          <div className="d-flex" style={{ alignItems: "center" }}>
            <img src={logo} alt="logo" id="logo" />
          </div>
        </Link>
        <div className="d-flex">
          <button
            className="btn btn-dark me-5 inscription"
            onClick={openInscriptionPopup}
          >
            Inscription
          </button>
          <button
            className="btn btn-light connexion"
            onClick={openConnexionPopup}
          >
            Connexion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAccueil;
