import aboutBackground from "../assets/about/mobile/image-hero.jpg";
import "../styling/about.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-wrapper">
          <div className="about-team-container">
            <div className="about-background"></div>
            <div className="about-team-content">
              <h1>Your team of professionals</h1>
              <p>
                Our small team of world-class professionals will work with you
                every step of the way. Strong relationships are at the core of
                everything we do. This extends to the relationship our projects
                have with their surroundings.
              </p>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="heritage-section-container">
          <div className="heritage-content-container">
            <h1>
              Our
              <br /> Heritage
            </h1>
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
      </div>
    </>
  );
}

export default About;