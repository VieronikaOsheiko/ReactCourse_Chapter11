import React from "react";
import "../App.css";

function UserItem({ user, onDelete }) {
  return (
    <li className="user-item">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <button onClick={() => onDelete(user.id)}>Видалити</button>
      </div>
    </li>
  );
}

export default UserItem;
