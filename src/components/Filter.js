import React from "react";

function Filter({ onCategoryChange, searchBy, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" value={searchBy} placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
