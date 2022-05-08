import "./App.css";
import { Routes } from "./routes/routes";

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
        {isAuthenticated && (
          <div style={{ position: "fixed", left: 0 }}>
            <a href="/userManagement">User management </a>
            <br />
            <a href="/dashboard">Dashboard</a>
            <a onClick={logOut}>Logout</a>
          </div>
        )}
        <Routes />
      </header>
    </div>
  );
}

export default App;
