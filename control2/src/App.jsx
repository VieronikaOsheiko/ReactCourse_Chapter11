import React, { useState } from "react";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";
import LoadUsersButton from "./components/LoadUsersButton";
import ErrorMessage from "./components/ErrorMessage";
import { useUsers } from "./hooks/useUsers";
import "./App.css";

function App() {
  const { users, error, fetchUsers, deleteUser, setUsers } = useUsers();
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Користувачі з API:</h2>
      <LoadUsersButton fetchUsers={fetchUsers} />
      <ErrorMessage error={error} />
      <FilterBox filter={filter} setFilter={setFilter} />
      <UserList users={filteredUsers} onDelete={deleteUser} />
    </div>
  );
}

export default App;
