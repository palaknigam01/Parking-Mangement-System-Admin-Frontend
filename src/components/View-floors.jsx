import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./Viewslots.css";

const Viewfloor = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("");
    setUser(result.data);
    console.log(result);
  };

  return (
    <div>
      <h2>View Floor's</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Floor no</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.albumId}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Viewfloor;
