import React, { useRef } from "react";

function App() {
  // const ROOT_URL

  function login() {
    console.log("login");
  }

  return (
    <div>
      <h1>Event app</h1>

      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="john.doe@company.com" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
