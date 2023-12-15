import React from 'react'
import './NavbarAccueil.css'
import logo from '../../../assets/images/logo.png'


const NavbarAccueil = () => {
 return (
    <nav className="navbar navbar-expand-lg accueil-navbar ">
      <div className="container-fluid">
          <div className="d-flex" style={{ alignItems: 'center' }}>
          <img src={logo} alt='logo' id='logo'/>
          </div>
        <div className="d-flex">
          <button className="btn btn-dark me-5 inscription">Inscription</button>
          <button className="btn btn-light connexion" >Connexion</button>
        </div>
      </div>
    </nav>
 )
}

export default NavbarAccueil