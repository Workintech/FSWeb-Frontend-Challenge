import workintech from "../images/workintech.png";
import randomjokes from "../images/randomjokes.png";
import journey from "../images/journey.png";
import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
function Projects() {
  const { store } = useContext(SiteContext);
  return (
    <div className="project-container">
      <p className="vector-two"></p>
      <h1 className="projects-title">{store.baslik.projects}</h1>
      <div className="projects-area">
        <div className="project-area">
          <img src={workintech} alt="projects componensts resim 1" />
          <h3 className="project-title">Workintech</h3>
          <p className="project-explanation">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="project-buttons">
            <button className="project-button">react</button>
            <button className="project-button">redux</button>
            <button className="project-button">axios</button>
          </div>
          <div className="project-link">
            <a
              href="https://github.com/mustafabasaar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://app.workintech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="project-area">
          <img src={randomjokes} alt="projects componensts resim 1" />
          <h3 className="project-title">Random Jokes</h3>
          <p className="project-explanation">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="project-buttons">
            <button className="project-button">react</button>
            <button className="project-button">redux</button>
            <button className="project-button">axios</button>
          </div>
          <div className="project-link">
            <a
              href="https://github.com/mustafabasaar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://app.workintech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="project-area">
          <img src={journey} alt="projects componensts resim 1" />
          <h3 className="project-title">Journey</h3>
          <p className="project-explanation">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="project-buttons">
            <button className="project-button">react</button>
            <button className="project-button">redux</button>
            <button className="project-button">axios</button>
          </div>
          <div className="project-link">
            <a
              href="https://github.com/mustafabasaar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://app.workintech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
