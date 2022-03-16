import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mediaURL } from "../../Utils/Constants";
import "./Footer.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Validations from "../../helpers/validations";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");

  const submit = (e) => {
    if (Validations.EmailValidation(email)) {
      setSubscribed(true);
      alert(
        `don't worry, you aren't going to receive anyting to ${email} newletters.`
      );
    } else setValidationError("Invalid email");
  };

  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${mediaURL}/v1646986485/media/content/Footer_Banner.jpg)`,
      }}
    >
      <div className="footer__content">
        {subscribed ? (
          <div className="footer__subscribedContainer">
            <h3 className="footer__title footer--subscribed">Subscribed</h3>
            <CheckCircleOutlineIcon sx={{ width: 50, height: 50 }} />
          </div>
        ) : (
          <>
            <h3 className="footer__title">Subscribe</h3>
            <h3 className="footer__subTitle">
              Subscribe to our newsletter to stay updated every moment
            </h3>
            <div className="footer__inputContainer">
              <input
                className="footer__inputField"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
              <button className="footer__inputSubmt" onClick={submit}>
                Submit
              </button>
            </div>
            {validationError && (
              <span className="footer__validationError">{validationError}</span>
            )}
          </>
        )}
      </div>
      <Link to="/project" className="footer__aboutContainer">
        About this app&nbsp;
        <InfoOutlinedIcon />
      </Link>
    </div>
  );
}
