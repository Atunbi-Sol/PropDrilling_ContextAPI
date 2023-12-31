import React, { useContext } from "react";
import UserContext from "../context/userContext";

const User = ({ id, name }) => {
  const{deleteUser} = useContext(UserContext);
  // console.log(data)
  return (
    <div className="--flex-between">
      <h3 className="--text-light">{name}</h3>
      <button className="--btn --btn-danger" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
