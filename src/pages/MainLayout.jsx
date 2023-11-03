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
          <NavBar />
        </div>
      </AppContext.Provider>

      <Outlet />
    </div>
  );
}

export default MainLayout;
