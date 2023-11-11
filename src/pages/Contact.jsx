import { Link } from "react-router-dom";
import "../styling/contact.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AppContext } from "./MainLayout";
import { useMediaQuery } from "react-responsive";
import Map from "../components/Map";

function Contact() {
  const { closeIcon } = useContext(AppContext);
  const isMobile = useMediaQuery({ query: "(max-width: 759px)" });
  const [fields, setFields] = useState([
    { id: "name", value: "" },
    { id: "email", value: "" },
    { id: "message", value: "" },
  ]);
  const [sendMessage, setSendMessage] = useState(false);

  const updateForm = (event, fieldId) => {
    const updatedFields = fields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setFields(updatedFields);
  };

  const checkFields = (e) => {
    setSendMessage(true);
    fields.map((field) => {
      if (field.value === "") {
        e.preventDefault();
      }
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          {isMobile ? (
            <div className="contact-project-container">
              <div className="contact-background">
                <div className="contact-background-overlay"></div>
              </div>
              <div
                className={`contact-project-content`}
                style={{ background: closeIcon ? "inherit" : "" }}
              >
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
          ) : (
            <div className="hero-container">
              <div className="contact-img-container">
                <div className="contact-hero-img"></div>
                <div className="contact-hero-img-overlay"></div>
              </div>

              <div className="contact-body">
                <h1>Contact</h1>
                <span className="line"></span>
                <h2>Tell us about your project</h2>
                <p>
                  We'd love to hear more about your project. Please, leave a
                  message below or give us a call. We have two offices, one in
                  Texas and one in Tennessee. If you find yourself nearby, come
                  say hello!
                </p>
              </div>
            </div>
          )}
        </div>

        {!isMobile ? <span className="line"></span> : ""}
        <div className="contact-details-container">
          <h1>Contact Details</h1>
          <div className="office-container">
            <div className="office-info">
              <h3>Main Office</h3>
              <p>Mail: archone@mail.com</p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: 123-456-3541</p>
            </div>
            <Link>
              View on Map <ArrowRightIcon width={25} />
            </Link>
          </div>

          <div className="office-container">
            <div className="office-info">
              <h3>Office ||</h3>
              <p>Mail: archtwo@mail.com</p>
              <p>Address: 3399 Wines Lane TX</p>
              <p>Phone: 832-123-4321</p>
            </div>
            <Link>
              View on Map <ArrowRightIcon width={25} />
            </Link>
          </div>
        </div>

        <div className="location-map" id="somthing">
          <Map />
        </div>

        <div className="contactUs-container">
          <h2>
            Connect <br />
            with us
          </h2>
          <div className="contact-fields">
            <form onSubmit={checkFields}>
              <label htmlFor="name"></label>
              {sendMessage && fields[0].value === "" ? (
                <span className="error-msg">Can't be empty</span>
              ) : (
                ""
              )}
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(event) => updateForm(event, "name")}
                style={{
                  borderBottom: sendMessage
                    ? fields[0].value === ""
                      ? "1px solid red"
                      : "1px solid green"
                    : "1px solid #000",
                }}
              />

              <label htmlFor="email"></label>
              {sendMessage && fields[0].value === "" ? (
                <span className="error-msg">Can't be empty</span>
              ) : (
                ""
              )}
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(event) => updateForm(event, "email")}
                style={{
                  borderBottom: sendMessage
                    ? fields[1].value === ""
                      ? "1px solid red"
                      : "1px solid green"
                    : "1px solid #000",
                }}
              />

              <label htmlFor="message"></label>

              {sendMessage && fields[0].value === "" ? (
                <span className="error-msg">Can't be empty</span>
              ) : (
                ""
              )}
              <textarea
                type="text"
                placeholder="Message"
                cols={30}
                rows={4}
                name="message"
                onChange={(event) => updateForm(event, "message")}
                style={{
                  borderBottom: sendMessage
                    ? fields[2].value === ""
                      ? "1px solid red"
                      : "1px solid green"
                    : "1px solid #000",
                }}
              />

              <button type="submit" onClick={(e) => checkFields(e)}>
                <ArrowRightIcon width={30} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
