import logo from "../assets/logo.svg";
import "../styling/navbar.css";

import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";

function NavBar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1200px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });

  return (
    <div className="nav-container">
      {isMobile && <NavBarMobile />}
      {!isMobile && (
        <nav className="navbar">
          <div className="nav-wrapper">
            <NavLink to={"/"}><img src={logo} alt="logo" /></NavLink>
            <ul>
            <li className="page-link">
                <NavLink to={"/portfolio"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/about"}>
                  About Us
                </NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/contact"}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
