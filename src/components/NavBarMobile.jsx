import logo from "/assets/logo.svg";
import menu from "/assets/icons/icon-hamburger.svg";
import closeMenu from "/assets/icons/icon-close.svg";
import "../styling/navbar.css";
import { useContext } from "react";
import { AppContext } from "../pages/MainLayout";
import { NavLink, Link } from "react-router-dom";

function NavBarMobile() {
  const { closeIcon, setCloseIcon } = useContext(AppContext);
  
  closeIcon ? document.body.classList.add('nav-open') : document.body.classList.remove('nav-open');

  {
    closeIcon ? (document.body.style.background = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5))") : (document.body.style.background = "#fff");
    
  }
  
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}><img src={logo} alt="logo" width={75} /></Link>
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
                <NavLink to={"/portfolio"} onClick={() => setCloseIcon(false)}>
                  Portfolio
                </NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/about"} onClick={() => setCloseIcon(false)}>
                  About Us
                </NavLink>
              </li>
              <li className="page-link">
                <NavLink to={"/contact"} onClick={() => setCloseIcon(false)}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBarMobile;
