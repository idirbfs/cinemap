import React from 'react'
import './NavbarProfil.css'
import logo from '../../../assets/images/logo.png'

const NavbarProfil = () => {
  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg profil-navbar ">
      <div className="container-fluid" >
        <div className="d-flex" style={{ alignItems: 'center' }}>
        <a className="navbar-brand" >
          <img src={logo} alt='logo' id='logo'/>
        </a>
        <h6>| Nous sommes conetents de te rervoir</h6>
        </div>
        <div className="d-flex">
          <button className="btn btn-dark me-5 profil-button">Profil</button>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavbarProfil