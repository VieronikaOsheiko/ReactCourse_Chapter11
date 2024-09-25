import React, { useState } from "react";
import SearchInput from "./SearchInput";
import AddToDoComponent from "./AddToDoComponent";
import ToDoTable from "./ToDoTable";
import ToDoEdit from "./ToDoEdit";
import useGetAllToDo from "./Hooks/UseToDos.js";

const ToDoContainer = () => {
  const { isLoading, data, setData } = useGetAllToDo(); // Get data from API
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedToDo, setSelectedToDo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleNewTitleChange(event) {
    setNewToDo({ ...newToDo, title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo && newToDo.title.trim() !== "") {
      setData([...data, { ...newToDo, id: v4() }]); // Add to the API data
      setNewToDo({ title: "" });
    } else {
      alert("Please enter a task title.");
    }
  }

  function handleDelete(id) {
    setData(data.filter((toDo) => toDo.id !== id)); // Remove from API data
  }

  function handleEdit(toDo) {
    setSelectedToDo(toDo);
    setIsEditing(true);
  }

  function handleSave(updatedToDo) {
    setData(data.map((td) => (td.id === updatedToDo.id ? updatedToDo : td)));
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

  const filteredToDos = data.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <AddToDoComponent
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable
        toDos={filteredToDos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {isEditing && selectedToDo && (
        <ToDoEdit
          toDo={selectedToDo}
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      )}
    </>
  );
};

export default ToDoContainer;