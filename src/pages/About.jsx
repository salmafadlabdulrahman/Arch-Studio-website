import aboutBackground from "../assets/about/mobile/image-hero.jpg";
import "../styling/about.css";

//style={{backgroundImage: `url(${aboutBackground})`}}
function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <img src={aboutBackground} />

        <div className="about-team-container">
          <div className="about-team-content">
            <h1>Your team of professionals</h1>
            <p>
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
