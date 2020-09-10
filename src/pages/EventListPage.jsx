import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export default function EventListPage() {
  const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
  const EVENT_LIST_URL = `${ROOT_URL}events/events/`;
  const { token } = useContext(UserContext);

  useEffect(() => {
    fetchEventList();
  });

  function fetchEventList() {
    fetch(EVENT_LIST_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Event List Page</h1>
    </div>
  );
}
