import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;
