import React from "react";
import { FaHeart, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Left section (empty) */}
        <div className="navbar-left"></div>

        {/* Middle section (nav links) */}
        <div className="navbar-center">
          <div className="nav-links">
            <a href="#" className="nav-link">Buy</a>
            <a href="#" className="nav-link">Rent</a>
            <a href="#" className="nav-link">Sell</a>
          </div>
        </div>

        {/* Right section (favorites, language, profile) */}
        <div className="navbar-right">
          <a href="#" className="favorites nav-link">
            <FaHeart className="icon" /> Favorite
          </a>
          <a href="#" className="language nav-link">
            <FaGlobe className="icon" /> EN
          </a>
          <div className="profile-pic"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;