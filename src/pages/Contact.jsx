import { Link } from "react-router-dom";
import "../styling/contact.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
//import contactBackground from "../assets/contact/mobile/image-hero.jpg"
import mapImage from "../assets/contact/mobile/image-map.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-project-container">
            <div className="contact-background">
              <div className="contact-background-overlay"></div>
            </div>
            <div className={`contact-project-content`}>
              <h1>Tell us about your project</h1>
              <p>
                We'd love to hear more about your project. Please, leave a
                message below or give us a call. We have two offices, one in
                Texas and one in Tennessee. If you find yourself nearby, come
                say hello!
              </p>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="contact-details-container">
          
          <h1>Contact Details</h1>
          <div className="office-info">
            <h3>Main Office</h3>
            <p>Mail: archone@mail.com</p>
            <p>Address: 1892 Chenoweth Drive TN</p>
            <p>Phone: 123-456-3541</p>
            <Link>
              View on Map <ArrowRightIcon width={25} />
            </Link>
          </div>

          <div className="office-info">
            <h3>Office ||</h3>
            <p>Mail: archtwo@mail.com</p>
            <p>Address: 3399 Wines Lane TX</p>
            <p>Phone: 832-123-4321</p>
            <Link>
              View on Map <ArrowRightIcon width={25} />
            </Link>
          </div>
        </div>

        {/*<div className="map-container">
          <img src={mapImage} alt="" />
  </div>*/}

        <div className="contactUs-container">
          <h2>Connect with us</h2>
          <div className="contact-fields">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message" cols={30} rows={4}/>

            <button>
              <ArrowRightIcon width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
/*style={{backgroundImage: `url(${contactBackground})`}} */
