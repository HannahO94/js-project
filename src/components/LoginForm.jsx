import React, { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function LoginForm() {
  const history = useHistory();
  const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
  const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(UserContext);

  function login() {
    console.log(email, password);
    const payload = {
      email: email,
      password: password,
    };
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
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
