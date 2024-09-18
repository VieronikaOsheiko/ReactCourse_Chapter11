import React, { useState } from 'react';
import { v4 } from "uuid";
import SearchInput from './SearchInput';
import AddToDOComponent from './AddToDOComponent';
import ToDoTable from './ToDoTable';
import ToDoEdit from './ToDoEdit'; // Імпорт компоненти редагування

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
      setNewToDo({ title: '' }); // Очищуємо форму після додавання
    } else {
      alert("Please enter a task title.");
    }
  }

  function handleDelete(id) {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  function handleEdit(toDo) {
    setSelectedToDo(toDo); // Встановлюємо вибране завдання
    setIsEditing(true);    // Увімкнути режим редагування
  }

  function handleSave(updatedToDo) {
    setToDos(toDos.map(td => td.id === updatedToDo.id ? updatedToDo : td)); // Оновлюємо список завдань
    setIsEditing(false); // Вимикаємо режим редагування
    setSelectedToDo(null);
  }

  function handleCancelEdit() {
    setIsEditing(false); // Вимикаємо режим редагування
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
      <AddToDOComponent
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
