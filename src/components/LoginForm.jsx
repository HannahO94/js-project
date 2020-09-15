import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import EventKit from "../data/EventKit";

export default function LoginForm() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const eventKit = new EventKit();

  function login() {
    eventKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        eventKit.setToken(data.token);
        history.push("/event-list");
      });
  }

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="john.doe@company.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
}
