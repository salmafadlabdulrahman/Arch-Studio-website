import "../styling/home.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
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

          <Link to={"/portfolio"}>
            <button className="btn btn-dark">
              See Our Portfolio <ArrowRightIcon width={25} />
            </button>
          </Link>
        </div>
      </div>

      <main>
        <div className="main-container">
          <span className="line"></span>

          <div className="welcome-message">
            <h2>
              Welcome to <br />
              Arch Studio
            </h2>
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>

        <div className="teams-container">
          <div className="teams-wrapper">
            <div className="team-img-overlay"></div>
            <div className="team-content">
              <h2>
                Small team,
                <br /> big ideas
              </h2>
              <button className="about-us-btn">
                <span>About Us</span>
                <ArrowRightIcon width={25} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
/*btn btn-dark about-us-btn */
