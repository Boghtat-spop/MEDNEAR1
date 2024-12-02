import React from "react";

const Header = () => (
  <header className="navbar bg-light shadow ">
    <div className="container">
      <a className="navbar-brand text-primary" href="/">Clinic Finder</a>
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="#specialty" className="nav-link">Specialty</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#contact" className="nav-link">Contact Us</a>
        <a href="/login" className="btn btn-outline-primary ms-2">Login</a>
      </nav>
    </div>
  </header>
);

export default Header;
