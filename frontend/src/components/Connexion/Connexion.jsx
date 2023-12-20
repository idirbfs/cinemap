import React from "react";
import "./Connexion.css";
import logo from "../../assets/images/logo.png";

const Connexion = ({ onClose, openInscriptionPopup }) => {
  const handleInscriptionClick = () => {
    onClose(); // Fermer la popup de connexion
    openInscriptionPopup(); // Ouvrir la popup d'inscription
  };
  return (
    <div className="popup ConnexionP">
      <div className="popup-content ConnexionC">
        <div className="login-box">
          <div className="login-box-header">
          <button className="close-buttonC" onClick={onClose}>
              &times;
            </button>
            <img src={logo} width="229" height="74" alt="Cinémaps logo" />
            <div id="login-box-footer">
              <h4>Se connecter</h4>
              <p>
                Pas de compte ?&nbsp;
                <a id="register-link" onClick={handleInscriptionClick} style={{color: 'grey', cursor:'pointer'}}>
                  Inscription!
                </a>
              </p>
            </div>
          </div>
          <div className="email-login">
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
          </div>
          <div className="submit-rowC">
            <button className="btn btn-primary" id="submit-id-submit" type="submit">
              Se connecter
            </button>
          </div>
          <div className="d-flex flex-row align-items-center login-box-seperator-container">
            <div className="login-box-seperator"></div>
            <div className="login-box-seperator-text">
              <p>ou&nbsp;</p>
            </div>
            <div className="login-box-seperator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
