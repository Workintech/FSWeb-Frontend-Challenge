function Footer(props) {
  return (
    <footer className="footer-container">
      <h1 className="footer-title">
        Let’s work together on your next product.
      </h1>
      <div className="footer-links-area">
        <p className="footer-mail">👉{props.profildata.mail}</p>
        <div className="footer-links">
          <p>Personal Blog</p>
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
