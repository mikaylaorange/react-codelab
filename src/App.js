import React, { useState } from "react";
import logo from "./logo.svg";
import TextInput from "./TextInput.js";
import LoginButton from "./LoginButton.js";
import "./App.css";
import UserResponses from "./UserResponses.js";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton setUser={(user) => setUser(user)}/>
        {user != null && <p>Welcome, {user.displayName}</p>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextInput promptText="Name?" field="name" user={user}/>
        <TextInput promptText="Hometown?" field="hometown" user={user}/>
        <UserResponses/>
      </header>
    </div>
  );
}

export default App;
