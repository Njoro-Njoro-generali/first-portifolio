import { useState } from "react";
import "./Projectstyle.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Projects = () => {
  const projectName = ["Daily Calender", "Tic Tac Toe Game", "Music Player"];
  const projects = ["daily", "game", "player"];
  const [index, setIndex] = useState(0);

  const increaseIndex = () => {
    if (index == 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const reduceIndex = () => {
    if (index == 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="projects-page page" id="Projects">
      <div className="top">
        <h1>
          Latest <span>Projects</span>
        </h1>
      </div>
      <div className="bottom">
        <div className="right arrow" onClick={increaseIndex}>
          <FaChevronRight />
        </div>
        <div className="left arrow" onClick={reduceIndex}>
          <FaChevronLeft />
        </div>
        <div
          className="project"
          style={{
            background: `url(images/${projects[index]}.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h2>{projectName[index]}</h2>
      </div>
    </div>
  );
};

export default Projects;
