import React from 'react';

const FilterPanel = ({ onFilterChange }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h4>Filters</h4>
      <label>
        Price Range:
        <input type="range" min="0" max="10000" onChange={onFilterChange} />
      </label>
      <br />
      <label>
        Property Type:
        <select onChange={onFilterChange}>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
      </label>
    </div>
  );
};

export default FilterPanel;
