import React from "react";
import "./Inscription.css";
import logo from "../../assets/images/logo.png";

const Inscription = ({ onClose, openConnexionPopup }) => {
  const handleConnexionClick = () => {
    onClose(); // Fermer la popup d'inscription
    openConnexionPopup(); // Ouvrir la popup de connexion
  };
  return (
    <div className="popup InscriptionP">
      <div className="popup-content InscriptionC">
        <div className="register-box">
          <div className="register-box-header">
            <button className="close-buttonI" onClick={onClose}>
              &times;
            </button>
            <img src={logo} width="229" height="74" alt="Cinémaps logo" />
            <div id="register-box-footer">
              <h4>S'inscrire</h4>
              <p>
                Déjà un compte ?&nbsp;
                <a id="login-link" onClick={handleConnexionClick} style={{color: 'grey', cursor:'pointer'}}>
                  Connexion!
                </a>
              </p>
            </div>
          </div>
          <div className="form">
            <input
              type="text"
              className="name-input form-control"
              required
              placeholder="Pseudo"
            />
            <input
              type="email"
              className="email-input form-control"
              required
              placeholder="Adresse mail"
              minLength="6"
            />
            <input
              type="password"
              className="password-input form-control"
              required
              placeholder="Mot de passe"
              minLength="6"
            />
            <input
              type="password"
              className="password-input form-control"
              required
              placeholder="Confirmer le mot de passe"
              minLength="6"
            />
          </div>
          <div className="submit-rowI">
            <button
              className="btn btn-primary"
              id="submit-id-submit"
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
