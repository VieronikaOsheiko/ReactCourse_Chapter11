import React from "react";

const AddToDOComponent = ({ title, onTitleChange, onSubmit }) => {
  return (
    <form className="add-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={title || ''}
        onChange={onTitleChange}
        placeholder="New ToDo"
      />
      <button className="add-todo-button" type="submit">Add</button>
    </form>
  );
};

export default AddToDOComponent;
