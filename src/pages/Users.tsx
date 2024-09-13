import { useLoaderData } from "react-router-dom";

interface User {
  id: number;
  name: string;
  [key: string]: any;
}

export const Users = () => {
  const users = useLoaderData() as User[];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
