import React from "react";
import "./Profil.css";
import NavbarProfil from "./NavbarProfil/NavbarProfil";

const Profil = () => {
  return (
    
        <div className="Profil" >
            <NavbarProfil />
            <div >
                <div className="Profil_content" >
                    <div>
                        <h2>Profil gauche</h2>
                    </div>
                    <div>
                        <h2>Profil milieu</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    
  );
};

export default Profil;
