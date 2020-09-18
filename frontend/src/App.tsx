import React, { useEffect, useState } from "react";
import api from "./services/api";
import User from "./components/User";
interface IUsers {
  name: string;
  email: string;
}
function App() {
  const [users, setState] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get<IUsers[]>("/users").then((response) => {
      setState(response.data);
    });
  });

  return (
    <div className="App">
      <h1>Usuários</h1>
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
