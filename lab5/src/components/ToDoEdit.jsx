/*import React, { useState } from "react";

const ToDoEdit = ({ toDo, onSave, onCancel }) => {
  const [title, setTitle] = useState(toDo.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a valid title.");
      return;
    }
    onSave({ ...toDo, title });
  };

  return (
    <form className="edit-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Edit ToDo Title"
      />
      <button className="save" type="submit">Save</button>
      <button className="cancel" type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ToDoEdit;
*/