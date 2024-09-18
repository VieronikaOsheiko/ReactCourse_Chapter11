import React from "react";

const ToDoTable = ({ toDos, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => (
          <tr key={toDo.id.toString()}>
            <td>{toDo.id.toString()}</td>
            <td>{toDo.title}</td>
            <td>
              <button className="delete-button" onClick={() => onDelete(toDo.id)}>Delete</button>
              <button className="edit-button" onClick={() => onEdit(toDo)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoTable;
