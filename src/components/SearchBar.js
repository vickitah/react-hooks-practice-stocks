import React from "react";

function SearchBar({ onSort, onFilter }) {
  function handleSortChange(e) {
    onSort(e.target.value);
  }

  function handleFilterChange(e) {
    onFilter(e.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <select onChange={handleSortChange}>
        <option value="">None</option>
        <option value="Alphabetically">Alphabetically</option>
        <option value="Price">Price</option>
      </select>

      <strong>Filter:</strong>
      <select onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Health">Health</option>
        {/* Add more types if they exist */}
      </select>
    </div>
  );
}

export default SearchBar;

