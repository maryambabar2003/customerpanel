import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook

import "../styles/SearchBar.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");  // Initially empty
  const [maxPrice, setMaxPrice] = useState("");  // Initially empty
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [priceError, setPriceError] = useState(""); // To store validation error message
  const [bedrooms, setBedrooms] = useState(0); // Set initial value to 0
  const [bathrooms, setBathrooms] = useState(0); // Set initial value to 0
  const [showBedDropdown, setShowBedDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const locationDropdownRef = useRef(null);
  const locationInputRef = useRef(null);
  const priceDropdownRef = useRef(null);
  const bedDropdownRef = useRef(null);
  const propertyDropdownRef = useRef(null);

  // Close other dropdowns when one is opened
  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
    setShowPriceDropdown(false);
    setShowBedDropdown(false);
    setShowPropertyDropdown(false);
  };

  const togglePriceDropdown = () => {
    setShowPriceDropdown(!showPriceDropdown);
    setShowLocationDropdown(false);
    setShowBedDropdown(false);
    setShowPropertyDropdown(false);
  };

  const toggleBedDropdown = () => {
    setShowBedDropdown(!showBedDropdown);
    setShowLocationDropdown(false);
    setShowPriceDropdown(false);
    setShowPropertyDropdown(false);
  };

  const togglePropertyDropdown = () => {
    setShowPropertyDropdown(!showPropertyDropdown);
    setShowLocationDropdown(false);
    setShowPriceDropdown(false);
    setShowBedDropdown(false);
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  // Handle price confirmation
  const handlePriceConfirm = () => {
    if (minPrice < 0 || maxPrice < 0) {
      setPriceError("Price cannot be less than 0");
      return;
    }
    if (minPrice >= maxPrice) {
      setPriceError("Min price must be less than max price");
      return;
    }
    setShowPriceDropdown(false);
  };

  const navigate = useNavigate();  // Initialize the navigate function
  
  const handleSearch = () => {
    // Navigate to the SearchPage
    navigate("/search");  // Replace "/search" with your actual route
  };

  // Handle bedroom and bathroom changes
  const incrementBedroom = () => setBedrooms(prev => prev + 1);
  const decrementBedroom = () => setBedrooms(prev => (prev > 0 ? prev - 1 : 0)); // Prevent going below 0
  const incrementBathroom = () => setBathrooms(prev => prev + 1);
  const decrementBathroom = () => setBathrooms(prev => (prev > 0 ? prev - 1 : 0)); // Prevent going below 0

  // Handle property type selection
  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);  // Update the property type
    setShowPropertyDropdown(false);  // Close the dropdown
  };

  // Handle checkbox selection for property types
  const handleCheckboxChange = (type) => {
    setSelectedCheckbox(type);
    setSelectedPropertyType(type); // Set the selected property type when checkbox is clicked
    setShowPropertyDropdown(false);
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target) &&
        !locationInputRef.current.contains(event.target) &&
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target) &&
        bedDropdownRef.current &&
        !bedDropdownRef.current.contains(event.target) &&
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(event.target)
      ) {
        setShowLocationDropdown(false);
        setShowPriceDropdown(false);
        setShowBedDropdown(false);
        setShowPropertyDropdown(false);
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
        {/* Location Input */}
        <div className="search-box location-box">
          <div className="search-heading">Where</div>
          <input
            type="text"
            placeholder="Enter Address, City or Zip"
            className="search-input location-input"
            value={selectedLocation || ""}
            onClick={toggleLocationDropdown}
            ref={locationInputRef}
          />
          
          {/* Location Dropdown */}
          {showLocationDropdown && (
            <div className="location-dropdown" ref={locationDropdownRef}>
              <div
                className="location-dropdown-item"
                onClick={() => handleLocationSelect("New York, NY")}
              >
                <span className="location-icon"><FaMapMarkerAlt /></span> New York, NY
              </div>
              <hr />
              <div
                className="location-dropdown-item"
                onClick={() => handleLocationSelect("Los Angeles, CA")}
              >
                <span className="location-icon"><FaMapMarkerAlt /></span> Los Angeles, CA
              </div>
              <hr />
              <div
                className="location-dropdown-item"
                onClick={() => handleLocationSelect("Chicago, IL")}
              >
                <span className="location-icon"><FaMapMarkerAlt /></span> Chicago, IL
              </div>
              <hr />
              <div
                className="location-dropdown-item"
                onClick={() => handleLocationSelect("Miami, FL")}
              >
                <span className="location-icon"><FaMapMarkerAlt /></span> Miami, FL
              </div>
              <hr />
              <div
                className="location-dropdown-item"
                onClick={() => handleLocationSelect("Dallas, TX")}
              >
                <span className="location-icon"><FaMapMarkerAlt /></span> Dallas, TX
              </div>
            </div>
          )}
        </div>

        {/* Price Range Input */}
        <div className="search-box price-box">
          <div className="search-heading">Price Range</div>
          
          <input
            type="text"
            placeholder="Add price"
            className="search-input price-input"
            value={minPrice === "" || maxPrice === "" || minPrice >= maxPrice ? "" : `Rs. ${minPrice} - Rs. ${maxPrice}`}
            onClick={togglePriceDropdown}
          />
          
          {/* Price Dropdown */}
          {showPriceDropdown && (
            <div className="price-dropdown" ref={priceDropdownRef}>
              <div className="price-inputs">
                <div className="price-field">
                  <label htmlFor="min-price">Minimum</label>
                  <input
                    id="min-price"
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="price-field">
                  <label htmlFor="max-price">Maximum</label>
                  <input
                    id="max-price"
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
              {priceError && <div className="error-message">{priceError}</div>}
              <div className="confirm-text" onClick={handlePriceConfirm}>
                Confirm
              </div>
            </div>
          )}
        </div>

        {/* Bed Input */}
        <div className="search-box bed-box">
          <div className="search-heading">Beds</div>
          <input
            type="text"
            placeholder="Add Bed & Bath"
            className="search-input bed-input"
            value={bedrooms === 0 ? "Add Bed(s)" : `${bedrooms} Bed(s) & ${bathrooms} Bath(s)`}
            onClick={toggleBedDropdown}
          />
          
          {/* Bed Dropdown */}
          {showBedDropdown && (
            <div className="bed-dropdown" ref={bedDropdownRef}>
              <div className="bed-row">
                <div>Bedroom</div>
                <div className="bed-controls">
                <button className="bed-controls-scroll-button left" onClick={decrementBedroom}>-</button>
                  <span>{bedrooms}</span>
                  <button className="bed-controls-scroll-button right" onClick={incrementBedroom}>+</button>
                </div>
              </div>
              <hr />
              <div className="bed-row">
                <div>Bathroom</div>
                <div className="bed-controls">
                  <button className="bathroom-controls-scroll-button left" onClick={decrementBathroom}>-</button>
                  <span>{bathrooms}</span>
                  <button className="bathroom-controls-scroll-button right" onClick={incrementBathroom}>+</button>
                </div>
              </div>
              <hr />
            </div>
          )}
        </div>

        {/* Property Type Input */}
        <div className="search-box property-type-box">
          <div className="search-heading">Property Type</div>
          <input
            type="text"
            placeholder="Property"
            className="search-input property-type-input"
            value={selectedPropertyType || ""}
            onClick={togglePropertyDropdown}
          />
          
          {/* Property Type Dropdown */}
          {showPropertyDropdown && (
            <div className="property-type-dropdown" ref={propertyDropdownRef}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "House"}
                  onChange={() => handleCheckboxChange("House")}
                />
                House
              </label>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "Condo"}
                  onChange={() => handleCheckboxChange("Condo")}
                />
                Condo
              </label>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "Townhome"}
                  onChange={() => handleCheckboxChange("Townhome")}
                />
                Townhome
              </label>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "Multi-family"}
                  onChange={() => handleCheckboxChange("Multi-family")}
                />
                Multi-family
              </label>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "Land"}
                  onChange={() => handleCheckboxChange("Land")}
                />
                Land
              </label>
              <hr />
              <label>
                <input
                  type="checkbox"
                  checked={selectedCheckbox === "Other"}
                  onChange={() => handleCheckboxChange("Other")}
                />
                Other
              </label>
            </div>
          )}
        </div>
      </div>

      <button className="search-button" onClick={handleSearch}>
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
