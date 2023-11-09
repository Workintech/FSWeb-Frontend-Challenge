import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import laptoplukız from "./laptoplukız.png";
import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { toast } from "react-toastify";
function Hero(props) {
  const { theme, setTheme, store, lang } = useContext(SiteContext);

  const redirectToGitHub = () => {
    window.open("https://github.com/mustafabasaar?tab=repositories", "_blank");
  };
  const redirectToLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/mustafa-ba%C5%9Far-65749b259/",
      "_blank"
    );
  };
  const notify = () => {
    if (lang === "ENG") {
      toast("O zaman hemen mustafabasaaar@gmail.com'a mail atıyorsun");
    }
    if (lang === "TÜRKÇE") {
      toast("Then you immediately send an e-mail to mustafabasaaar@gmail.com");
    }
  };

  return (
    <div className="hero-container">
      <div>
        <div className="hero-name-area">
          <p className="straight-line"></p>
          <span className={theme === "LIGHT" ? "hero-name-dark" : "hero-name"}>
            {props.profildata.name}
          </span>
        </div>
        <h1 className="hero-topic">{store.baslik.hero}</h1>
        <p className="hero-explanation">{store.baslik.heroabout}</p>
        <div id="flex-buttons">
          <button onClick={notify} className="hire-button">
            {store.baslik.hireme}
          </button>
          <button onClick={redirectToGitHub} className="hire-button">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className={theme === "LIGHT" ? "icon-dark" : ""}
              style={{ color: "#3730A3" }}
            />
            Github
          </button>
          <button onClick={redirectToLinkedin} className="hire-button">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="xl"
              className={theme === "LIGHT" ? "icon-dark" : ""}
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
