import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light  bg-warning sticky-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bolder text-dark" to="/">Luxe Car Rentals</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cars">Cars</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>  
       
    </header>
  )
}

export default Header;