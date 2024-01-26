import "./Homestyle.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { DiWebplatform } from "react-icons/di";
import { TbSquareLetterM } from "react-icons/tb";

const Home = () => {
  return (
    <div className="home-page page" id="home">
      <div className="nav-bar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="home-body">
        <div className="personal-info">
          <h2>Hello, I am</h2>
          <h1>
            Dev | <span> Charles </span>
          </h1>
          <p>
            Dedicated front-end developer skilled in HTML, CSS <br />&
            JavaScript, merging creativioty with technical enterprise <br />
            for visual appealing and user-centric websites.
          </p>
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
          <button>Download CV</button>
        </div>
        <div className="animation-side">
          <img src="images/dev.jpeg" alt="photo of developer" />
          <div className="circle">
            <div className="circle-content">
              <TbSquareLetterM />
              r.
              <DiWebplatform />
              eb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
