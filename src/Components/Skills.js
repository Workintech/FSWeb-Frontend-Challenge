import React from "react";
import jsPic from "../assets/js.png";
import nodePic from "../assets/node-logo 1 (2).png";
import reactPic from "../assets/Rectangle 35 (3).png";
import reduxPic from "../assets/Group 101.png";
import vscodePic from "../assets/Group 101 (1).png";
import figmaPic from "../assets/figma-logo 1.png";
import "../CSS/skills.css";

const Skills = () => {
  return (
    <section className="section-skills">
      <h2 className="header-skills">Skills</h2>
      <div className="right-skills">
        <div className="skills-set">
          <img src={jsPic} alt="js" />
          <p> JScript</p>
        </div>

        <div className="skills-set">
          <img src={nodePic} alt="node" />
          <p> Node</p>
        </div>

        <div className="skills-set">
          <img src={reactPic} alt="react" />
          <p> React </p>
        </div>

        <div className="skills-set">
          <img src={vscodePic} alt="vsCode" />
          <p>VSCode</p>
        </div>

        <div className="skills-set">
          <img src={reduxPic} alt="redux" />
          <p>Redux</p>
        </div>

        <div className="skills-set">
          <img src={figmaPic} alt="figma" />
          <p> Figma</p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
