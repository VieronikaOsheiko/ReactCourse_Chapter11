import React, { useState } from "react";
import ToDoTable from "./ToDoTable";
import AddToDoComponent from "./AddToDoComponent";
import SearchInput from "./SearchInput";
import useGetAllToDo from "./hooks/useToDos";
import Loading from "./Loading";

const ToDoContainer = () => {
  const { isLoading, data: toDos, setData: setToDos } = useGetAllToDo();
  const [newToDo, setNewToDo] = useState({ title: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleNewTitleChange = (event) => {
    setNewToDo({ ...newToDo, title: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newToDo.title.trim()) {
      const newTodoWithId = { id: Date.now(), ...newToDo };
      setToDos([...toDos, newTodoWithId]);
      setNewToDo({ title: "" });
    } else {
      alert("ToDo title cannot be empty.");
    }
  };

  const handleDelete = (id) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  const handleEdit = (id, newTitle) => {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, title: newTitle } : toDo
    );
    setToDos(updatedToDos);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Loading isLoading={isLoading}>
        <>
          <AddToDoComponent
            title={newToDo.title}
            onTitleChange={handleNewTitleChange}
            onSubmit={handleSubmit}
          />
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <ToDoTable
            toDos={filteredToDos}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </>
      </Loading>
    </div>
  );
};

export default ToDoContainer;
