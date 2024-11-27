import React from 'react';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';  // Example of importing icons

const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul>
        <li><FaHome /> Home</li>
        <li><FaSearch /> Search Properties</li>
        <li><FaUser /> Profile</li>
      </ul>
    </div>
  );
};

export default SideMenu;
