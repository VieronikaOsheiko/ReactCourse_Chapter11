import React from "react";
import "../App.css";

function FilterBox({ filter, setFilter }) {
  return (
    <input
      type="text"
      placeholder="Фільтрувати за іменем..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="filter-box"
    />
  );
}

export default FilterBox;
