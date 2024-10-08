import React from 'react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchInput;
