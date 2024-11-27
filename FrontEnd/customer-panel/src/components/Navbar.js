import React from "react";
import { FaHeart, FaGlobe } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container visible">
      <div className="navbar">
        {/* Center Section (Links) */}
        <div className="nav-links">
          <a href="#" className="nav-link">Buy</a>
          <span>|</span>
          <a href="#" className="nav-link">Rent</a>
          <span>|</span>
          <a href="#" className="nav-link">Sell</a>
        </div>

        {/* Right Section (Favorite, Language, Profile) */}
        <div className="nav-right">
          <a href="#" className="favorites nav-link">
            <FaHeart className="icon" /> Favorite
          </a>
          <a href="#" className="language nav-link">
            <FaGlobe className="icon" /> EN
          </a>
          <div className="profile">
            <div className="profile-pic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
