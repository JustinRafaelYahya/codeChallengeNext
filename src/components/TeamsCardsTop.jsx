import { useState, useEffect } from "react";
import axios from "axios";

export default function TeamsCardsTop() {
  const URL = "https://randomuser.me/api/";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  return (
    <div>
      {users.map((u) => (
        <div key={u.login.uuid}>
          <img
            className="rounded-full mx-auto bg-white"
            src={u.picture.medium}
            width={80}
            height={80}
            alt={`${u.name.first}${u.name.last}`}
          />
          <div className="text-center">
            <h2 className="font-semibold text-lg my-1 mb-3">
              {u.name.title}. {u.name.first} {u.name.last}
            </h2>
            <p className=" mx-2 text-sm mb-1 text-center">{u.email}</p>
            <p className=" border-b mx-2 pb-2 text-sm mb-2 text-center">
              {u.cell}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
