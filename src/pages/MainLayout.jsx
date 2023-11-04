import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { createContext, useState } from "react";

export const AppContext = createContext();

function MainLayout() {
  const [closeIcon, setCloseIcon] = useState(false);

  return (
    <div>
      <AppContext.Provider value={{ closeIcon, setCloseIcon }}>
        <div className="app">
          <div className="navigation">
            <NavBar />
          </div>

          <div className="content">
            <Outlet />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default MainLayout;
