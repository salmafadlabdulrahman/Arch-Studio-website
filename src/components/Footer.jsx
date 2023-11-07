import { Link } from "react-router-dom"
import logo from "../assets/logo.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; 
import "../styling/footer.css"

function Footer() {
  return (
    <div>
      <footer>
          <div className="footer-content">
            <span>
              <Link className="footer-logo">
                <img src={logo} className="footer-img" width={70} />
              </Link>
            </span>
            <ul>
              <Link to={`/portfolio`}>
                <li>Portfolio</li>
              </Link>
              <Link to={`/about`}>
                <li>About Us</li>
              </Link>
              <Link to={`/contact`}>
                <li>Contacts</li>
              </Link>
            </ul>

            <Link to={`/portfolio`}>
              <button className="btn-dark portfolio">
                See Our Portfolio <ArrowRightIcon width={20} />
              </button>
            </Link>
          </div>
        </footer>
    </div>
  )
}

export default Footer
