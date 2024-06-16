import { useState, useEffect } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";

export default function TeamsCardsTopAboutPage() {
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
            className="rounded-full w-50 mx-auto bg-white"
            src={u.picture.medium}
            width={80}
            height={80}
            alt={`${u.name.first}${u.name.last}`}
          />
          <div className="text-center">
            <h2 className="border-b font-semibold text-lg my-1 mb-3">
              {u.name.title}. {u.name.first} {u.name.last}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
