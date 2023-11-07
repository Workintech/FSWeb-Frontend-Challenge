import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
import { toast } from "react-toastify";
function Header() {
  const { theme, setTheme, store, lang } = useContext(SiteContext);
  const notify = () => {
    if (lang === "ENG") {
      toast("O zaman hemen mustafabasaaar@gmail.com'a mail atıyorsun");
    }
    if (lang === "TÜRKÇE") {
      toast("Then you immediately send an e-mail to mustafabasaaar@gmail.com");
    }
  };

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
        <div className="header-skill">{store.baslik.skills}</div>
        <div className="header-projects">{store.baslik.projects}</div>
        <div className="hire-button">
          <button
            onClick={notify}
            className={theme === "LIGHT" ? "hire-button-dark" : ""}
          >
            {store.baslik.hireme}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
