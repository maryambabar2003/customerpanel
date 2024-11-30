import React, { useEffect, useRef, useState } from "react";
import "../styles/SearchResult.css";
import 'font-awesome/css/font-awesome.min.css';
import { FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';

const SearchResults = ({ properties }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`search-results-container ${isVisible ? "animate" : ""}`}
      ref={componentRef}
    >
      <div className="results-header">
        <h2 className="results-heading">Search Results</h2>
      </div>

      <div className="results-header">
        <span>Over 235 Results</span>
        <div className="sort-dropdown">
          <label>Sort by:</label>
          <select>
            <option value="recommended">Recommended</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="area-low-to-high">Area: Low to High</option>
            <option value="area-high-to-low">Area: High to Low</option>
          </select>
        </div>
      </div>

      {/* Property Cards */}
      <div className="property-cards">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className="property-card"
            style={{
              animationDelay: `${index * 0.1}s`, // Stagger the delay
            }}
          >
            <div className="image-container">
              <img src={property.imageUrl} alt={property.location} />
              <div className="heart-icon">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="black" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="card-info">
              <h3 className="property-address">{property.address}</h3>
              <div className="property-area">
                <span className="location-icon"><FaMapMarkerAlt /></span>
                <span>{property.area}</span>
              </div>
              <div className="card-details">
                <span><FaBed /> {property.beds} Beds</span>
                <span><FaBath /> {property.baths} Baths</span>
                <span><FaRuler /> {property.area}</span>
              </div>
              <div className="price">Rs. {property.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
