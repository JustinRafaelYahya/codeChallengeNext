import Carousel from "react-multi-carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

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
        <div>
          <img
            className="rounded-full w-50 mx-auto bg-white"
            src={u.picture.medium}
            alt="/"
          />
          <div className="text-center">
            <h2 className="border-b font-semibold text-lg my-1 mb-3">
              {u.name.first} {u.name.last}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}