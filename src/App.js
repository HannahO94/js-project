import React, { useRef, useState } from "react";

function App() {
  const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
  const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

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
      .then((data) => console.log(data.token));
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
