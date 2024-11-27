import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import './PropertyList.css';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the backend (for now, we'll simulate with a static array)
    setProperties([
      { id: 1, title: "Luxurious Apartment", price: "$1,500", image: "image1.jpg" },
      { id: 2, title: "Modern Villa", price: "$2,000", image: "image2.jpg" },
      // Add more properties as needed
    ]);
  }, []);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
