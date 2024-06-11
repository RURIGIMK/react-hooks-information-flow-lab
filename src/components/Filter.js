import React from 'react';

function Filter({ selectedCategory, onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select value={selectedCategory} onChange={handleChange}>
      <option value="all">All</option>
      <option value="fruits">Fruits</option>
      <option value="dairy">Dairy</option>
      <option value="bakery">Bakery</option>
      {/* Add more categories as needed */}
    </select>
  );
}

export default Filter;
