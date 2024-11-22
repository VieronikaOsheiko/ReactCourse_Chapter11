export async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.data;
}

export async function deleteUser(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return true;
}
