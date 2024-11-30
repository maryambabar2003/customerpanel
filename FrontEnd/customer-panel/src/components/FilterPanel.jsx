import React, { useState, useEffect, useRef } from "react";
import { FaFilter, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import "../styles/FilterPanel.css";

const FilterPanel = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [priceError, setPriceError] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [showBedDropdown, setShowBedDropdown] = useState(false);
  const [showPropertyDropdown, setShowPropertyDropdown] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [buyOrSell, setBuyOrSell] = useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [showBuySellDropdown, setShowBuySellDropdown] = useState(false);

  const locationInputRef = useRef(null);
  const locationDropdownRef = useRef(null);
  const priceDropdownRef = useRef(null);
  const bedDropdownRef = useRef(null);
  const propertyDropdownRef = useRef(null);
  const buySellDropdownRef = useRef(null);

  const locations = ["New York", "Los Angeles", "Chicago", "San Francisco"];

  const toggleLocationDropdown = () => {
    setShowLocationDropdown(!showLocationDropdown);
    closeAllDropdownsExcept("location");
  };

  const togglePriceDropdown = () => {
    setShowPriceDropdown(!showPriceDropdown);
    closeAllDropdownsExcept("price");
  };

  const toggleBedDropdown = () => {
    setShowBedDropdown(!showBedDropdown);
    closeAllDropdownsExcept("bed");
  };

  const togglePropertyDropdown = () => {
    setShowPropertyDropdown(!showPropertyDropdown);
    closeAllDropdownsExcept("property");
  };

  const toggleBuySellDropdown = () => {
    setShowBuySellDropdown(!showBuySellDropdown);
    closeAllDropdownsExcept("buySell");
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

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

  const incrementBedroom = () => setBedrooms(prev => prev + 1);
  const decrementBedroom = () => setBedrooms(prev => (prev > 0 ? prev - 1 : 0));
  const incrementBathroom = () => setBathrooms(prev => prev + 1);
  const decrementBathroom = () => setBathrooms(prev => (prev > 0 ? prev - 1 : 0));

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
    setShowPropertyDropdown(false);
  };

  const handleCheckboxChange = (type) => {
    setSelectedCheckbox(type);
    setSelectedPropertyType(type); // Set the selected property type when checkbox is clicked
    setShowPropertyDropdown(false);
  };

  const handleBuySellSelect = (option) => {
    setBuyOrSell(prev => {
      const newOptions = prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option];
      return newOptions;
    });
    setShowBuySellDropdown(false);
  };

  const handleSearch = () => {
    // Close all dropdowns when search button is clicked
    closeAllDropdowns();
    console.log("Searching with the selected filters...");
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setShowLocationDropdown(false);
    setShowPriceDropdown(false);
    setShowBedDropdown(false);
    setShowPropertyDropdown(false);
    setShowBuySellDropdown(false);
  };

  // Function to close all dropdowns except the specified one
  const closeAllDropdownsExcept = (except) => {
    if (except !== "location") setShowLocationDropdown(false);
    if (except !== "price") setShowPriceDropdown(false);
    if (except !== "bed") setShowBedDropdown(false);
    if (except !== "property") setShowPropertyDropdown(false);
    if (except !== "buySell") setShowBuySellDropdown(false);
  };

  // Close dropdowns if clicked outside of any of the filter boxes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target) &&
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target) &&
        bedDropdownRef.current &&
        !bedDropdownRef.current.contains(event.target) &&
        propertyDropdownRef.current &&
        !propertyDropdownRef.current.contains(event.target) &&
        buySellDropdownRef.current &&
        !buySellDropdownRef.current.contains(event.target)
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="filter-panel">
      <div className="filter-box-container">
        
        {/* Filters Button with Three-bar Icon (Hamburger Menu) */}
        <div className="filter-box advanced-filters-box">
          <button 
            className="filter-button"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            <FaFilter className="filter-icon" />
            Advanced Filters
          </button>
        </div>

        {/* Location Input with Dropdown */}
        <div className="filter-box location-box">
          <input
            type="text"
            placeholder="Enter Address, City or Zip"
            className="filter-input filter-location-input"
            value={selectedLocation || ""}
            onClick={toggleLocationDropdown}
            ref={locationInputRef}
          />
          
          {/* Location Dropdown */}
          {showLocationDropdown && (
            <div className="filter-location-dropdown" ref={locationDropdownRef}>
              {locations.map((location, index) => (
                <div key={index}>
                  <div
                    className="filter-location-dropdown-item"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <span className="location-icon"><FaMapMarkerAlt /></span> {location}
                  </div>
                  {index < locations.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Input */}
        <div className="filter-box price-box">
          <input
            type="text"
            placeholder="Price Range"
            className="filter-input filter-price-input"
            value={minPrice === "" || maxPrice === "" ? "" : `Rs. ${minPrice} - Rs. ${maxPrice}`}
            onClick={togglePriceDropdown}
          />
          {/* Price Dropdown */}
          {showPriceDropdown && (
            <div className="filter-price-dropdown" ref={priceDropdownRef}>
              <div className="filter-price-inputs">
                <div className="filter-price-field">
                <label htmlFor="min-price">Minimum</label>

                  <input
                    id="min-price"
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="filter-price-field">
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
              <div className="filter-confirm-text" onClick={handlePriceConfirm}>
                Confirm
              </div>
            </div>
          )}
        </div>

        {/* Beds Input */}
        <div className="filter-box bed-box">
          <input
            type="text"
            placeholder="Beds"
            className="filter-input filter-bed-input"
            value={bedrooms === 0 ? "Add Bed(s)" : `${bedrooms} Bed(s) & ${bathrooms} Bath(s)`}
            onClick={toggleBedDropdown}
          />
          
          {/* Bed Dropdown */}
          {showBedDropdown && (
            <div className="filter-bed-dropdown" ref={bedDropdownRef}>
              <div className="filter-bed-row">
                <div>Bedroom</div>
                <div className="filter-bed-controls">
                <button className="filter-bed-controls-scroll-button left" onClick={decrementBedroom}>-</button>
                  <span>{bedrooms}</span>
                  <button className="filter-bed-controls-scroll-button right" onClick={incrementBedroom}>+</button>
                </div>
              </div>
              <hr />
              <div className="filter-bed-row">
                <div>Bathroom</div>
                <div className="filter-bed-controls">
                  <button className="filter-bathroom-controls-scroll-button left" onClick={decrementBathroom}>-</button>
                  <span>{bathrooms}</span>
                  <button className="filter-bathroom-controls-scroll-button right" onClick={incrementBathroom}>+</button>
                </div>
              </div>
              <hr />
            </div>
          )}
        </div>

        {/* Buy/Sell Input Field */}
        <div className="filter-box buy-sell-box">
          <input
            type="text"
            placeholder="Buy or Sell"
            className="filter-input filter-buy-sell-input"
            value={buyOrSell.join(", ") || ""}
            onClick={toggleBuySellDropdown}
          />
        </div>

        {/* Buy/Sell Dropdown */}
        {showBuySellDropdown && (
          <div className="filter-buy-sell-dropdown" ref={buySellDropdownRef}>
            <label>
              <input
                type="checkbox"
                checked={buyOrSell.includes("Buy")}
                onChange={() => handleBuySellSelect("Buy")}
              />
              Buy
            </label>
            <hr />
            <label>
              <input
                type="checkbox"
                checked={buyOrSell.includes("Sell")}
                onChange={() => handleBuySellSelect("Sell")}
              />
              Sell
            </label>
          </div>
        )}

        {/* Property Type Input */}
        <div className="filter-box property-type-box">
          <input
            type="text"
            placeholder="Property"
            className="filter-input filter-property-type-input"
            value={selectedPropertyType || ""}
            onClick={togglePropertyDropdown}
          />
          
          {/* Property Type Dropdown */}
          {showPropertyDropdown && (
            <div className="filter-property-type-dropdown" ref={propertyDropdownRef}>
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

        {/* Search Button with Icon inside a Bubble */}
        <button className="filter-search-button" onClick={handleSearch}>
          <FaSearch className="search-icon" />
        </button>
      </div>
    
  );
};

export default FilterPanel;
