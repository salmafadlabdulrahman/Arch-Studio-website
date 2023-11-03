import logo from "../assets/logo.svg";
import "../styling/navbar.css";

import { useMediaQuery } from "react-responsive";
import NavBarMobile from "./NavBarMobile";

function NavBar() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1201px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 741px) and (max-width: 1200px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });

  return (
    <div className="nav-container">
      {!isDesktop && <NavBarMobile />}
      {isDesktop && (
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <ul>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavBar;

