import { useEffect, useState } from "react";
import { getUsers } from "@services/users";

export default function Users() {
  const [user, setUser] = useState(null);

  async function fetchUsers() {
    await getUsers().then((data) => {
      setUser(data);
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!user) {
    return <>"loading..."</>;
  }

  return (
    <>
      <h2>Users</h2>
      <div>Name: {user.name}</div>
      <div>Location: {user.location}</div>
    </>
  );
}
