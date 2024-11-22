import React from "react";
import UserItem from "./UserItem";
import "../App.css";

function UserList({ users, onDelete }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default UserList;
