import { useState } from "react";
import { getUsers, deleteUser as apiDeleteUser } from "../apiMethods";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      const userList = await getUsers();
      setUsers(userList);
    } catch (err) {
      setError("Не вдалося завантажити користувачів.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await apiDeleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Не вдалося видалити користувача.");
    }
  };

  return { users, error, fetchUsers, deleteUser, setUsers };
};
