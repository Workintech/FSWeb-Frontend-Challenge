import React from "react";
import headerPic from "../assets/hero-right.png";
import "../CSS/header.css";
import Button from "../Utils/Button";
import "../CSS/update.css";

const Header = () => {
  return (
    <section className="bg-violet-300 p-40 m-0 rounded object-contain items-center flex-wrap max-w-100">
      <div className="hero">
        <header
          className="underline font-mono mr-2 pr-3 text-left"
          id="headerFontUpBG"
        >
          Bahar Gümüşer
        </header>
        <div class="heroleft">
          <h1 className="font-mono text-4xl w-1/2" id="headerFontUp">
            I'm a Full Stack Developer...
          </h1>
          <p
            className="heroleftP"
            class="font-mono w-1/2 font-medium leading-7 text-xl"
            id="headerFontUp"
          >
            Hello, if you are looking for a junior developer and my profile
            interests you, you can contact me!
          </p>
          <Button />
        </div>
        <img src={headerPic} alt="Header Picture" className="headerImage" />
      </div>
    </section>
  );
};
export default Header;
