import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <label>Where</label>
        <input type="text" placeholder="Address, City or Zip" />
      </div>
      <div className="divider"></div>
      <div className="search-input">
        <label>Price</label>
        <input type="text" placeholder="Add price" />
      </div>
      <div className="divider"></div>
      <div className="search-input">
        <label>Beds & bath</label>
        <input type="text" placeholder="Add bed & bath" />
      </div>
      <div className="divider"></div>
      <div className="search-input">
        <label>Property Type</label>
        <input type="text" placeholder="Property" />
      </div>
      <button className="search-button">
        <span className="search-icon">🔍</span>
      </button>
    </div>
  );
};

export default SearchBar;
