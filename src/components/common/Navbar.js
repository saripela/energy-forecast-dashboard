import React from 'react';

import logoImage from '../../assets/images/logo.png'; // Path to your logo image

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar-header">
    
        <div className="navbar-left">

        {/* Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleSidebar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <img src={logoImage} alt="Logo" className="logo" />
        </div>
     
      <h1>Energy Forecasting Dashboard</h1>
      <button className="select-date-button" disabled>Select Date</button>
    </header>
  );
};

export default Navbar;
