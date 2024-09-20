import React from 'react';

const Filters = ({ onFilterChange }) => {
  return (
    <div className="dashboard-filters">
    <div className="filters">
      <div className="filter">
        <label>Energy Type</label>
        <select onChange={onFilterChange}>
        <option value="Appliances">Appliances</option>
        <option value="Overall">Overall</option>
      </select>
      </div>

      <div className="filter">
        <label>Time Range</label>
        <input
          type="range"
          min="1"
          max="12"
          onChange={(e) => onFilterChange('timeRange', e.target.value)}
        />
      </div>
    </div>
    </div>
  );
};

export default Filters;