import "./Servicesstyle.css";
import { VscCode } from "react-icons/vsc";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaPaintbrush } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services-page page" id="Services">
      <div className="top">
        <h1>
          My <span>Services</span>
        </h1>
      </div>

      <div className="bottom">
        <div className="service">
          <div className="icon">
            <FaPaintbrush />
          </div>
          <h1>Web Design</h1>
          <p>
            Creating visually appealing and user-friendly websites that adapt
            seamlessly to various devices and screen sizes. Developing
            wireframes and prototypes to visualize the website's structure and
            functionality before the actual development phase.
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <div className="icon">
            <VscCode />
          </div>
          <h1>Web Development</h1>
          <p>
            Tailored solutions based on client needs, utilizing various
            technologies such as HTML5, CSS, JavaScript, and frameworks like
            React or Vue.js. Developing secure and scalable e-commerce platforms
            with payment gateway integration, ensuring a smooth customer
            experience.
          </p>
          <button>Read More</button>
        </div>

        <div className="service">
          <div className="icon">
            <BsFillBarChartLineFill />
          </div>
          <h1>Digital Marketing</h1>
          <p>
            Enter the realm of digital marketing. Boost brand visibility, engage
            audience and drive growth through strategit online campaigns and
            analytics.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
