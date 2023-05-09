import React from "react";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <section
      className="section-footer"
      /* className="text-mono w-full h-96 text-2xl m-24 text-center" */
    >
      <div className="kare">
        <p>Got a question or proposal, or just want to say hello?</p>
        <p>Go ahead,</p>
        <h2 id="sendMeMsc">Send me a message!</h2>

        <div class="email">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/bahar-gumuser-83b0801b2/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/bahargumuser" target="_blank">
              <i class="fa-brands fa-square-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
