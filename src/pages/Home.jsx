import "../styling/home.css";
import "../App.css"
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ResponsiveImage, ResponsiveImageSize } from "react-responsive-image";

//Images
import logo from "../assets/logo.svg";
//Mobile
import ProjectDelSolMobileImg from "../assets/portfolio/mobile/image-del-sol.jpg";
import Tower228blMobileImg from "../assets/portfolio/mobile/image-228b.jpg";
import ProtoTypeMobileImg from "../assets/portfolio/mobile/image-prototype.jpg";

//Tablet
import ProjectDelSolTabletImg from "../assets/portfolio/tablet/image-del-sol.jpg";
import Tower228blTabletImg from "../assets/portfolio/tablet/image-228b.jpg";
import ProtoTypeTabletImg from "../assets/portfolio/tablet/image-prototype.jpg";

//Desktop
import ProjectDelSolDesktopImg from "../assets/portfolio/desktop/image-del-sol.jpg";
import Tower228blDesktopImg from "../assets/portfolio/desktop/image-228b.jpg";
import ProtoTypeDesktopImg from "../assets/portfolio/desktop/image-prototype.jpg";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isTablet = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1200px)",
  });

  return (
    <div className="home">
      <div className="hero-wrapper">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-header">Project <br />Paramour</h1>
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
              <Link to={"/about"}>
                <button className="about-us-btn">
                  <span>About Us</span>
                  <ArrowRightIcon width={25} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="featured">
          <div className="featured-container">
            <div className="featured-content">
              <h2>Featured</h2>
              <div className="images-container">
                <div className="img-container">
                  <div className="feature-overlay"></div>
                  <ResponsiveImage>
                    <ResponsiveImageSize
                      minWidth={100}
                      maxWidth={700}
                      path={ProjectDelSolMobileImg}
                    />

                    <ResponsiveImageSize
                      minWidth={699}
                      maxWidth={1200}
                      path={ProjectDelSolTabletImg}
                    />

                    <ResponsiveImageSize
                      minWidth={1201}
                      path={ProjectDelSolDesktopImg}
                    />
                  </ResponsiveImage>

                  <div className="img-description">
                    <h3>Project Del Sol</h3>
                    <Link to={`/portfolio`}>View All Projects</Link>
                  </div>
                </div>

                <div className="img-container">
                  <div className="feature-overlay"></div>
                  <ResponsiveImage>
                    <ResponsiveImageSize
                      minWidth={100}
                      maxWidth={700}
                      path={Tower228blMobileImg}
                    />

                    <ResponsiveImageSize
                      minWidth={699}
                      maxWidth={1200}
                      path={Tower228blTabletImg}
                    />

                    <ResponsiveImageSize
                      minWidth={1201}
                      path={Tower228blDesktopImg}
                    />
                  </ResponsiveImage>
                  <div className="img-description">
                    <h3>228B Tower</h3>
                    <Link to={`/portfolio`}>View All Projects</Link>
                  </div>
                </div>

                <div className="img-container">
                  <div className="feature-overlay"></div>
                  <ResponsiveImage>
                    <ResponsiveImageSize
                      minWidth={100}
                      maxWidth={700}
                      path={ProtoTypeMobileImg}
                    />

                    <ResponsiveImageSize
                      minWidth={699}
                      maxWidth={1200}
                      path={ProtoTypeTabletImg}
                    />

                    <ResponsiveImageSize
                      minWidth={1201}
                      path={ProtoTypeDesktopImg}
                    />
                  </ResponsiveImage>
                  <div className="img-description">
                    <h3>Le Prototype</h3>
                    <Link to={`/portfolio`}>View All Projects</Link>
                  </div>
                </div>

                <Link to={"/portfolio"}><button className="see-all-btn">See All <ArrowRightIcon width={20}/></button></Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <span><Link className="footer-logo"><img src={logo} className="footer-img" width={75} /></Link></span>
        <div className="footer-content">
          <ul>
            <Link to={`/portfolio`}><li>Portfolio</li></Link>
            <Link to={`/about`}><li>About Us</li></Link>
            <Link to={`/contact`}><li>Contacts</li></Link>
          </ul>

          <Link to={`/portfolio`}><button className="btn-dark portfolio">See Our Portfolio <ArrowRightIcon width={20}/></button></Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
