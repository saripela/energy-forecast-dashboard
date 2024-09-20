//A reusable Navbar component.

import React from 'react';
import logoImage from '../../assets/images/logo.png'; // Path to your logo image

const Navbar = () => {
  return (
    <header className="navbar-header">
      
        <img src={logoImage} alt="Logo" className="logo" />
        <h1>Energy Forecasting Dashboard</h1>

      <button>Select Date</button>
    </header>
  );
};

export default Navbar;
