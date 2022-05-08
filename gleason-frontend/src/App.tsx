import { Routes } from "./routes/routes";
import "./App.css";
import { TopNavBar } from "./components/nav-bar/top-nav-bar.component";
import { useCallback, useState } from "react";
import { SideNavBar } from "./components/nav-bar/side-nav-bar.component";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!sessionStorage.getItem("isAuthenticated")
  );
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const toggleDrawerCallback = useCallback(
    (event?: any) => {
      setToggleDrawer(!toggleDrawer);
    },
    [toggleDrawer]
  );

  const logOut = useCallback(() => {
    sessionStorage.clear();
    // eslint-disable-next-line no-restricted-globals
    location.href = "/login";
    setIsAuthenticated(false);
  }, []);

  return (
    <div className="App">
      <TopNavBar
        isAuthenticated={isAuthenticated}
        logoutCallback={logOut}
        toggleDrawerCallback={toggleDrawerCallback}
      />
      <SideNavBar
        navItems={[
          <a href="/userManagement">User management </a>,
          <a href="/dashboard">Dashboard</a>,
        ]}
        open={toggleDrawer}
        toggleDrawerCallback={toggleDrawerCallback}
      />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
