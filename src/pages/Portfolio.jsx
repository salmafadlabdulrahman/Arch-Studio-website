import { useMediaQuery } from "react-responsive";
import "../styling/portfolio.css";

/*const portfolioImg = [
  "image-228b",
  "image-del-sol",
  "image-edelweiss",
  "image-eebox",
  "image-federal",
  "image-hypers",
  "image-netcry",
  "image-paramour",
  "image-prototype",
  "image-seraph",
  "image-sxiv",
  "image-trinity",
];*/

import projectsData from "../../projects";

function Portfolio() {
  const desktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const tablet = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1200px)",
  });
  const mobile = useMediaQuery({ query: "(max-width: 759px)" });

  return (
    <div className="portfolio">
      <div className="portfolio-wrapper">
        <div className="portfolio-images-container">
          {projectsData.map((item, index) => (
            <div className="portfolio-img-container" key={index}>
              <div className="portfolio-overlay"></div>
              {desktop ? (
                <img src={item.image.desktop} />
              ) : tablet ? (
                <img src={item.image.tablet} />
              ) : (
                <img src={item.image.mobile} />
              )}
              <div className="project-description">
                <h4 className="project-name">{item.name}</h4>
                <h5 className="project-date">{item.dateCompleted}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

/*style={{
                backgroundImage: `url(${
                  desktop
                    ? item.image.desktop
                    : tablet
                    ? item.image.tablet
                    : item.image.mobile
                })`,
              }} */
