import "./CallAction.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CallAction = () => {
  return (
    <div className="action-page">
      <div className="footer">
        <h2>Join Charles Dev</h2>
        <p>Get details, costs & more...</p>
        <input type="emai" placeholder="Email..." />
      </div>
      <div className="footer">
        <h2>Connect with Charles Dev</h2>
        <p>Get involved in social media.</p>
        <div className="find-me">
          <div className="icon-holder">
            <FaFacebookF />
          </div>
          <div className="icon-holder">
            <FaXTwitter />
          </div>
          <div className="icon-holder">
            <FaInstagram />
          </div>
          <div className="icon-holder">
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Download CV</h2>
        <p>Get to know more...</p>
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default CallAction;
