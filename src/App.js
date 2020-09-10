import React, { useRef, useState } from "react";

function App() {
  const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
  const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log(email, password);
    fetch(LOGIN_URL);
  }

  return (
    <div>
      <h1>Event app</h1>

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
    </div>
  );
}

export default App;
