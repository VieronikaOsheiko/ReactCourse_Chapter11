import React from "react";

const DeleteToDoButton = ({ id, onDelete }) => {
  return (
    <button className="delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteToDoButton;
