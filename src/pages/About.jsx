import { useContext } from "react";
import "../styling/about.css";
import { AppContext } from "./MainLayout";

import leaderssData from "../../leadersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";
import heroImg from "../../public/assets/about/image-hero.jpg";
import heritageImg from "../../public/assets/about/image-heritage.jpg";

function About() {
  const { closeIcon } = useContext(AppContext);
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-wrapper">
            {isMobile ? (
              <div className="about-team-container">
                <div className="about-background"></div>
                <div
                  className={`about-team-content`}
                  style={{ background: closeIcon ? "inherit" : "" }}
                >
                  {!isMobile ? <span className="line"></span> : ""}
                  <h1>Your team of professionals</h1>
                  <p>
                    Our small team of world-class professionals will work with
                    you every step of the way. Strong relationships are at the
                    core of everything we do. This extends to the relationship
                    our projects have with their surroundings.
                  </p>
                </div>
              </div>
            ) : (
              <div className="about-hero-container">
                {/*<img src={heroImg} />*/}
                <div className="hero-img-container">
                  <div className="hero-img"></div>
                  <div className="hero-img-overlay"></div>
                </div>

                <div className="hero-content">
                  <h1>About</h1>
                  <span className="line"></span>
                  <h2>
                    Your team of <br /> professionals
                  </h2>
                  <p>
                    Our small team of world-class professionals will work with
                    you every step of the way. Strong relationships are at the
                    core of everything we do. This extends to the relationship
                    our projects have with their surroundings.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="heritage-section-container">
            <div className="heritage-content-container">
              <span className="line"></span>
              <h1>
                Our
                <br /> Heritage
              </h1>
              <div className="heritage-body">
                <p>
                  Founded in 2007, we started as a trio of architects. Our
                  complimentary skills and relentless attention to detail turned
                  Arch into one of the most sought after boutique firms in the
                  country.
                </p>
                <p>
                  {" "}
                  Specialiazing in Urban Design allowed us to focus on creating
                  exceptional structures that live in harmony with their
                  surroundings. We consider every detail from every surrounding
                  element to inform our designs.
                </p>

                <p>
                  {" "}
                  Our small team of world-class professionals provides input on
                  every project.
                </p>
              </div>
            </div>
            {isDesktop ? <img src={heritageImg} /> : ""}
          </div>

          <div className="leaders-section-container">
            <div className="leaders-content">
              <h1>
                The <br />
                Leaders
              </h1>
              <div className="leaders-wrapper">
                {leaderssData.map((leader, index) => (
                  <div className="leader" key={index}>
                    <img src={leader.path} />
                    <h3>{leader.name}</h3>
                    <h4>{leader.title}</h4>
                    {!isDesktop ? (
                      <div className="social-media-container">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        <FontAwesomeIcon icon={faXTwitter} className="icon" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
