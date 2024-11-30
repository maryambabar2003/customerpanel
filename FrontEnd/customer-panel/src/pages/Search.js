import React, { useState } from "react";
import SearchResults from "../components/SearchResult";  // Import the new component
import FilterPanel from "../components/FilterPanel";    // Import the FilterPanel component
import "./Search.css";

const SearchPage = () => {
  const [location, setLocation] = useState("");
  const [buyOrSell, setBuyOrSell] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [propertyType, setPropertyType] = useState("");
  const [advancedFiltersOpen, setAdvancedFiltersOpen] = useState(false);

  const properties = [
    {
      id: 1,
      location: "New York, NY",
      imageUrl: "/assets/image1.webp", // Actual URL
      price: 500000,
      beds: 3,
      baths: 2,
      area: "1500 sqft",
      type: "House",
      address: "123 Park Ave, New York, NY 10001"
    },
    {
      id: 2,
      location: "Los Angeles, CA",
      imageUrl: "/assets/image1.webp", // Same image
      price: 600000,
      beds: 4,
      baths: 3,
      area: "2000 sqft",
      type: "Condo",
      address: "456 Sunset Blvd, Los Angeles, CA 90028"
    },
    {
      id: 3,
      location: "Chicago, IL",
      imageUrl: "/assets/image1.webp", // Same image
      price: 450000,
      beds: 2,
      baths: 1,
      area: "1200 sqft",
      type: "Townhome",
      address: "789 Michigan Ave, Chicago, IL 60611"
    },
    {
      id: 4,
      location: "Miami, FL",
      imageUrl: "/assets/image1.webp", // Same image
      price: 700000,
      beds: 5,
      baths: 4,
      area: "2500 sqft",
      type: "House",
      address: "321 Ocean Drive, Miami Beach, FL 33139"
    },
    {
      id: 5,
      location: "Dallas, TX",
      imageUrl: "/assets/image1.webp", // Same image
      price: 550000,
      beds: 3,
      baths: 2,
      area: "1800 sqft",
      type: "Condo",
      address: "654 Elm St, Dallas, TX 75201"
    },
    {
      id: 6,
      location: "San Francisco, CA",
      imageUrl: "/assets/image1.webp", // Same image
      price: 900000,
      beds: 6,
      baths: 5,
      area: "3500 sqft",
      type: "House",
      address: "987 Golden Gate Ave, San Francisco, CA 94102"
    },
    {
      id: 7,
      location: "Seattle, WA",
      imageUrl: "/assets/image1.webp", // Same image
      price: 500000,
      beds: 3,
      baths: 2,
      area: "1600 sqft",
      type: "Townhome",
      address: "234 Pine St, Seattle, WA 98101"
    },
    {
      id: 8,
      location: "Austin, TX",
      imageUrl: "/assets/image1.webp", // Same image
      price: 450000,
      beds: 2,
      baths: 1,
      area: "1300 sqft",
      type: "Condo",
      address: "567 Congress Ave, Austin, TX 73301"
    },
    {
      id: 9,
      location: "Boston, MA",
      imageUrl: "/assets/image1.webp", // Same image
      price: 650000,
      beds: 4,
      baths: 3,
      area: "2100 sqft",
      type: "House",
      address: "135 Beacon St, Boston, MA 02116"
    },
  ];

  return (
    <div className="search-results-page">
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {/* Include the FilterPanel above the SearchResults */}
      <FilterPanel />
      {/* Show the results section */}
      <SearchResults properties={properties} />
    </div>
  );
};

export default SearchPage;
