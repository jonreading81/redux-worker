import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/users";

const Home = () => {
  const [id, setId] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const name = user && user.name;

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      />
      <button type="button" onClick={() => dispatch(fetchUser(id))}>
        Fetch User
      </button>

      {name && <h1>Name: {name}</h1>}
    </div>
  );
};

export default Home;
