import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function EventListPage() {
  const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
  const EVENT_LIST_URL = `${ROOT_URL}events/events/`;
  const { token } = useContext(UserContext);
  const [eventList, setEventList] = useState(null);

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
        setEventList(data.results);
      });
  }

  return (
    <div>
      <h1>Event List Page</h1>
      {eventList &&
        eventList.map((eventItem) => {
          return (
            <div key={eventItem.id}>
              <p>{eventItem.title}</p>;
            </div>
          );
        })}
    </div>
  );
}
