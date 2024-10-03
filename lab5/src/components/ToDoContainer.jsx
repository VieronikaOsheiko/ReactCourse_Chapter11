import React, { useState } from "react"; 
import ToDoTable from "./ToDoTable";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";
import useToDos from "./hooks/useToDos.js";
import Loading from "./Loading";

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
        setEditingToDo(null); // Скидаємо стан редагування
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
    setNewToDo({ title: toDo.title }); // Встановлюємо назву завдання для редагування
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Loading isLoading={isLoading}  >
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

        {!isLoading && (
          <ToDoTable toDos={filteredToDos} onDelete={handleDelete} onEdit={handleEdit} />
        )}
      </Loading>
    </div>
  );
};

export default ToDoContainer;
