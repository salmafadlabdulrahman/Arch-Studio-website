import "../styling/home.css";
import { ArrowRightIcon  } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero-wrapper">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-header">Project Paramour</h1>
          <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>

          <Link to={"/portfolio"}><button className="btn btn-dark">See Our Portfolio <ArrowRightIcon width={25} /></button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
