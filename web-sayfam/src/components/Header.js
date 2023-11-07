import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { toast } from "react-toastify";
function Header() {
  const { theme, setTheme } = useContext(SiteContext);
  const notify = () =>
    toast("O zaman hemen mustafabasaaar@gmail.com'a mail atıyorsun");

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
          <button
            onClick={notify}
            className={theme === "LIGHT" ? "hire-button-dark" : ""}
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
