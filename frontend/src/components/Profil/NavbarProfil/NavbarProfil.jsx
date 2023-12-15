import React from 'react'
import './NavbarProfil.css'
import logo from '../../../assets/images/logo.png'

const NavbarProfil = () => {
  return (
    <nav className="navbar navbar-expand-lg profil-navbar ">
      <div className="container-fluid" >
        <div className="d-flex" style={{ alignItems: 'center' }}>
        <a className="navbar-brand" >
          <img src={logo} alt='logo'/>
        </a>
        <h6>| Nous sommes conetents de te rervoir</h6>
        </div>
        <div className="d-flex">
          <button className="btn btn-dark me-5 inscription">Inscription</button>
          <button className="btn btn-light connexion" >Connexion</button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarProfil