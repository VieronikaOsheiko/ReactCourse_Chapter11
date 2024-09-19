import React, { useState } from "react";

const ToDoEdit = ({ toDo, onSave, onCancel }) => {
  const [title, setTitle] = useState(toDo.title);

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a valid title.");
      return;
    }
    const updatedToDo = { ...toDo, title };
    onSave(updatedToDo);
  }

  return (
    <form className="edit-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit ToDo Title"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ToDoEdit;
