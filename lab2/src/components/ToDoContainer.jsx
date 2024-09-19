import React, { useState } from 'react';
import { v4 } from "uuid";
import SearchInput from './SearchInput';
import AddToDoComponent from './AddToDoComponent';
import ToDoTable from './ToDoTable';
import ToDoEdit from './ToDoEdit';

const ToDoContainer = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState({ title: '' });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedToDo, setSelectedToDo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleNewTitleChange(event) {
    setNewToDo({ ...newToDo, title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo && newToDo.title.trim() !== "") {
      setToDos([...toDos, { ...newToDo, id: v4() }]);
      setNewToDo({ title: '' });
    } else {
      alert("Please enter a task title.");
    }
  }

  function handleDelete(id) {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  function handleEdit(toDo) {
    setSelectedToDo(toDo);
    setIsEditing(true);
  }

  function handleSave(updatedToDo) {
    setToDos(toDos.map(td => td.id === updatedToDo.id ? updatedToDo : td));
    setIsEditing(false);
    setSelectedToDo(null);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setSelectedToDo(null);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredToDos = toDos.filter(toDo =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <AddToDoComponent
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} onEdit={handleEdit} />
      {isEditing && selectedToDo && (
        <ToDoEdit toDo={selectedToDo} onSave={handleSave} onCancel={handleCancelEdit} />
      )}
    </>
  );
};

export default ToDoContainer;
