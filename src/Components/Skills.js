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
    <section
      className="section-skills"
      class="min-h-[80vh] md:min-h-screen items-center bg-[#cbf281] pl-3 lg:flex-row flex-col-reverse"
    >
      <h2
        class="header-skills"
        className="text-center text-5xl font-mono p-8 mb-4"
      >
        Skills
      </h2>
      <div className="right-skills">
        <div className="skills-set" id="skillsUpdate">
          <p> JScript</p>
          <img src={jsPic} alt="js" className="font-mono" />
        </div>

        <div className="skills-set">
          <p> Node</p>
          <img src={nodePic} alt="node" />
        </div>

        <div className="skills-set" id="skillsUpdate">
          <p> React </p>
          <img src={reactPic} alt="react" />
        </div>

        <div className="skills-set">
          <p>VSCode</p>
          <img src={vscodePic} alt="vsCode" />
        </div>

        <div className="skills-set" id="skillsUpdate">
          <p>Redux</p>
          <img src={reduxPic} alt="redux" />
        </div>

        <div className="skills-set">
          <p> Figma</p>
          <img src={figmaPic} alt="figma" />
        </div>
      </div>
    </section>
  );
};
export default Skills;
