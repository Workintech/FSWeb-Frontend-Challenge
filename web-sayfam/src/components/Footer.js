import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";

function Footer(props) {
  const { theme, setTheme, store } = useContext(SiteContext);
  return (
    <footer
      className={
        theme === "LIGHT" ? "dark-footer-container" : "footer-container"
      }
    >
      <h1 className={theme === "LIGHT" ? "dark-footer-title" : "footer-title"}>
        {store.baslik.footer}
      </h1>
      <div className="footer-links-area">
        <p className="footer-mail">👉{props.profildata.mail}</p>
        <div className="footer-links">
          <p> {store.baslik.footerlink}</p>
          <a
            href="https://github.com/mustafabasaar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-başar-65749b259/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-linkedin"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
