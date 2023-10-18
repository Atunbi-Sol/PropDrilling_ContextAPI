import { useState } from "react";
import { userData } from "../src/data";
import UserList from "../src/components/UserList";
import UserContext from "./context/userContext";

function App() {
  const [users, setUsers] = useState(userData);

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser }}>
      <div className="--flex-center ">
        <div className="--width-500px --my">
          <h2>Props Drilling</h2>
          <UserList />
          {/* <UserList users={users} deleteUser={deleteUser} /> */}
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
