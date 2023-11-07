import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
function Header() {
  const { theme, setTheme } = useContext(SiteContext);
  return (
    <header className="header-container">
      <div
        className={theme === "LIGHT" ? "header-symbol-dark" : "header-symbol"}
      >
        <div
          className={
            theme === "LIGHT" ? "header-symbol-text-dark" : "header-symbol-text"
          }
        >
          A
        </div>{" "}
      </div>
      <div className="header-links">
        <div className="header-skill">Skills</div>
        <div className="header-projects">Projects</div>
        <div className="hire-button">
          <button className={theme === "LIGHT" ? "hire-button-dark" : ""}>
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
