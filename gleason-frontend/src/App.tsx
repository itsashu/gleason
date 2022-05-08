import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoginPage } from "./login-page";
import { Routes } from "./routes";

function App() {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const logOut = () => {
    sessionStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.href = "/login";
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {isAuthenticated && (
          <div style={{ position: "fixed", left: 0 }}>
            <a href="/userManagement">User management </a>
            <br />
            <a href="/dashboard">Dashboard</a>
            <a onClick={logOut}>Logout</a>
          </div>
        )}
        <Routes />
        {/* <LoginPage /> */}
      </header>
    </div>
  );
}

export default App;
