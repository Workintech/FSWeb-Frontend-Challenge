import React from "react";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="section1-footer">
        <h2>Send me a message!</h2>
        <p>Got a question or proposal,</p>
        <p> or just want to say hello?</p>
        <p>Go ahead.</p>
        <h3>almilasucode@gmail.com</h3>
      </div>
      <div className="icons">
        <a href="https://twitter.com/eskiniiz">
          {" "}
          <i class="fa-brands fa-twitter"></i>
        </a>
        <i class="fa-brands fa-codepen"></i>
        <i class="fa-solid fa-at"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </section>
  );
};
export default Footer;
