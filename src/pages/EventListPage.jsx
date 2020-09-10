import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function EventListPage() {
  const { token } = useContext(UserContext);
  return (
    <div>
      <h1>Event List Page</h1>
      <p>Token: {token}</p>
    </div>
  );
}
