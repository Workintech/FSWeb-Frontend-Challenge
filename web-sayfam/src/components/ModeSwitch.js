import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function ModeSwitch() {
  const { theme, setTheme, lang, setLang } = useContext(SiteContext);
  function clickHandler() {
    if (theme === "LIGHT") {
      setTheme("DARK");
    }
    if (theme === "DARK") {
      setTheme("LIGHT");
    }
  }
  function langHandler() {
    if (lang === "TÜRKÇE") {
      setLang("ENG");
    }
    if (lang === "ENG") {
      setLang("TÜRKÇE");
    }
  }

  return (
    <div className="ModeSwitch-container">
      <div className="lightmode-container">
        <div className={theme === "LIGHT" ? "darkmode" : "lightmode"}>
          <button
            onClick={clickHandler}
            className={
              theme === "LIGHT" ? "toggle-button-dark" : "toggle-button"
            }
          ></button>
        </div>
        <div
          className={theme === "LIGHT" ? "darkmode-title" : "lightmode-title"}
        >
          {theme} MODE
        </div>
      </div>
      <div className="or-symbol">|</div>
      <div className="language-container">
        <button
          onClick={langHandler}
          className={
            theme === "LIGHT" ? "language-color-dark" : "language-color_one"
          }
        >
          {lang}
        </button>
        <span className="language-color_two">'YE GEÇ</span>
      </div>
    </div>
  );
}
export default ModeSwitch;
