import logo from "../assets/logo.svg";
import menu from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-close.svg";
import "../styling/navbar.css";
import { useContext } from "react";
import { AppContext } from "../pages/MainLayout";
import { NavLink } from "react-router-dom";

function NavBarMobile() {
  const { closeIcon, setCloseIcon } = useContext(AppContext);

  {
    closeIcon
      ? (document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)")
      : (document.body.style.backgroundColor = "#fff");
  }
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img src={logo} alt="logo" width={75} />
        {!closeIcon ? (
          <img
            src={menu}
            alt="nav bar menu"
            onClick={() => setCloseIcon(true)}
          />
        ) : (
          <img
            src={closeMenu}
            alt="close menu"
            onClick={() => setCloseIcon(false)}
          />
        )}

        {closeIcon && (
          <div className={`modal`}>
            <ul>
              <li className="page-link">
                <NavLink to={"/portfolio"} onClick={() => setCloseIcon(false)}>Portfolio</NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/about"} onClick={() => setCloseIcon(false)}>About Us</NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/contact"} onClick={() => setCloseIcon(false)}>contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBarMobile;
