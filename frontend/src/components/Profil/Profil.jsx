import React from "react";
import "./Profil.css";
import NavbarProfil from "./NavbarProfil/NavbarProfil";
import config from "../../assets/config.json";
import avatar from "../../assets/images/avatar.png";

const Profil = () => {
  return (
    <>
      <NavbarProfil />
      <div className="Profil">
        <div className="Profil_content">
          <div className="Profil-container">
            <section className="Profil-container">
              <div className="Profil-Grid">
                {/* Left side */}
                <div className="col-sm-4 Profil-mode">
                  <p>Modes de jeu</p>

                  <h1>La quête du cinéphile</h1>
                  <h1>Sprint cinématique</h1>
                  <h1>Bataille des records</h1>
                  <h1>Duels</h1>
                </div>

                {/* Right side */}
                <div className="Profil-Grid Profil-details">
                  <div className="Avatar-Grid" id="avatar">
                    <img src={avatar} alt="Avatar" className="Profil-avatar" />
                  </div>
                  <div className="row">
                    <div className="text-center Profil-details">
                      <h1>Profil</h1>
                      <p>
                        Pseudo : <b>{config.pseudo}</b>
                      </p>
                      <h3>Statistiques</h3>
                      <p>
                        Points : <b>{config.points}</b>
                      </p>
                      <p>
                        Meilleur temps : <b>{config.points}</b>
                      </p>
                      <p>
                        Parties jouées : <b>{config.nbPlayed}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
