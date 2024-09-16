
import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      className="search-input" /* Додаємо клас для стилізації */
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
