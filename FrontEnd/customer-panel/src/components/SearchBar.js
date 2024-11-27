import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle clicking on a location
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-bar">
      <div className="search-box-container">
        <div className="search-box where">
          <div className="search-heading">Where</div>
          <input
            type="text"
            placeholder="Address, City or Zip"
            className="search-input"
            value={selectedLocation || ""}
            onClick={toggleDropdown}
            ref={inputRef}
          />
          
          {/* Dropdown Box */}
          {showDropdown && (
            <div className="dropdown" ref={dropdownRef}>
              <div
                className="dropdown-item"
                onClick={() => handleLocationSelect("New York, NY")}
              >
                <span className="location-icon">📍</span> New York, NY
              </div>
              <hr />
              <div
                className="dropdown-item"
                onClick={() => handleLocationSelect("Los Angeles, CA")}
              >
                <span className="location-icon">📍</span> Los Angeles, CA
              </div>
              <hr />
              <div
                className="dropdown-item"
                onClick={() => handleLocationSelect("Chicago, IL")}
              >
                <span className="location-icon">📍</span> Chicago, IL
              </div>
              <hr />
              <div
                className="dropdown-item"
                onClick={() => handleLocationSelect("Miami, FL")}
              >
                <span className="location-icon">📍</span> Miami, FL
              </div>
              <hr />
              <div
                className="dropdown-item"
                onClick={() => handleLocationSelect("Dallas, TX")}
              >
                <span className="location-icon">📍</span> Dallas, TX
              </div>
            </div>
          )}
        </div>

        {/* Other search boxes here */}
        <div className="search-box min-price">
          <div className="search-heading">Min Price</div>
          <input type="text" placeholder="Add price" className="search-input" />
          
        </div>
        <div className="search-box beds">
          <div className="search-heading">Beds</div>
          <input type="text" placeholder="Add Bed & Bath" className="search-input" />
        </div>
        <div className="search-box property-type">
          <div className="search-heading">Property type</div>
          <input type="text" placeholder="Property" className="search-input" />
        </div>
      </div>

      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search-icon"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
