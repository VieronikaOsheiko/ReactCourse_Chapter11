import React, { useState } from "react"; 
import ToDoTable from "./ToDoTable";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";
import useToDos from "./hooks/useToDos.js";
import Loading from "./Loading";
import ToDoEdit from "./ToDoEdit";
const ToDoContainer = () => {
  const { isLoading, data: toDos, setData: setToDos } = useToDos();
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingToDo, setEditingToDo] = useState(null); 
  function handleNewTitleChange(event) {
    setNewToDo({ ...newToDo, title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToDo.title.trim()) {
      if (editingToDo) {
        const updatedToDos = toDos.map((toDo) => 
          toDo.id === editingToDo.id ? { ...toDo, title: newToDo.title } : toDo
        );
        setToDos(updatedToDos);
        setEditingToDo(null); 
      } else {
        const newTodoWithId = { id: Date.now(), ...newToDo };
        setToDos([...toDos, newTodoWithId]);
      }
      setNewToDo({ title: "" });
    } else {
      alert("ToDo title cannot be empty.");
    }
  }

  function handleDelete(id) {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleEdit(toDo) {
    setEditingToDo(toDo);
    setNewToDo({ title: toDo.title }); 
  }

  function handleSave(updatedToDo) {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === updatedToDo.id ? updatedToDo : toDo
    );
    setToDos(updatedToDos);
    setEditingToDo(null); 
    setNewToDo({ title: "" }); 
  }

  function handleCancel() {
    setEditingToDo(null); 
    setNewToDo({ title: "" }); 
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Loading isLoading={isLoading}>
        <AddToDoComponent
          title={newToDo.title}
          onTitleChange={handleNewTitleChange}
          onSubmit={handleSubmit}
        />

        <SearchInput
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        {isLoading && <p>Loading...</p>}

        {!isLoading && editingToDo ? (
          <ToDoEdit 
            toDo={editingToDo} 
            onSave={handleSave} 
            onCancel={handleCancel} 
          />
        ) : (
          <ToDoTable 
            toDos={filteredToDos} 
            onDelete={handleDelete} 
            onEdit={handleEdit} 
          />
        )}
      </Loading>
    </div>
  );
};

export default ToDoContainer;
