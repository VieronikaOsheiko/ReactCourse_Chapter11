import React from "react";
import "../App.css";

function LoadUsersButton({ fetchUsers }) {
  return (
    <button onClick={fetchUsers} className="load-button">
      Завантажити користувачів
    </button>
  );
}

export default LoadUsersButton;
