// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>KAAS Salon & Spa</h1>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#appointment">Appointment</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
