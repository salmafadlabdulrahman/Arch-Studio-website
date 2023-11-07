import logo from "/assets/logo.svg";
import "../styling/navbar.css";
import "../App.css";

import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./NavBarMobile";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1200px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });
  const location = useLocation();

  return (
    <div className="nav-container">
      {isMobile && <NavBarMobile />}
      {!isMobile && (
        <>
          <div className="vertical-decoration" style={{gap: location.pathname === "/" ? "5em" : "8em"}}>
            <div className="line-decoration"></div>
            <div className="page-name" >
              {location.pathname === "/"
                ? "HOME"
                : location.pathname.split("/")[1]}
            </div>
          </div>

          <nav className="navbar">
            <div className="nav-wrapper">
              <NavLink to={"/"}>
                <img src={logo} alt="logo" width={70} className="logo" />
              </NavLink>
              <ul>
                <li className="page-link">
                  <NavLink to={"/portfolio"}>Portfolio</NavLink>
                </li>
                <li className="page-link">
                  <NavLink to={"/about"}>About Us</NavLink>
                </li>
                <li className="page-link">
                  <NavLink to={"/contact"}>contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

export default NavBar;
