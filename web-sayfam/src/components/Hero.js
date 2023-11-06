import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import laptoplukız from "../images/laptoplukız.png";
function Hero(props) {
  return (
    <div className="hero-container">
      <div>
        <div className="hero-name-area">
          <p className="straight-line"></p>
          <p className="hero-name">{props.profildata.name}</p>
        </div>
        <h1 className="hero-topic">Creative thinker Minimalism lover</h1>
        <p className="hero-explanation">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <div id="flex-buttons">
          <button className="hire-button">Hire Me</button>
          <button className="hire-button">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#3730A3" }}
            />
            Github
          </button>
          <button className="hire-button">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="xl"
              style={{ color: "#3730A3" }}
            />
            Linkedin
          </button>
        </div>
      </div>
      <div>
        <img src={laptoplukız} alt="hero component resim" />
      </div>
    </div>
  );
}
export default Hero;
