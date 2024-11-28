import React from "react";
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="content">
        <h3>{property.title}</h3>
        <p>{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
