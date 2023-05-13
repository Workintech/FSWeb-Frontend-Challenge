import React from "react";
import headerPic from "../assets/a.JPG";

import Button from "../Utils/Button";

const Header = () => {
  return (
    <section className="min-h-screen bg-violet-300 p-20 m-0 rounded items-center flex flex-3 lg:flex-row flex-col-reverse">
      <div className=" flex flex-2 flex-col justify-start">
        <header className="underline font-mono text-center lg:text-left text-[#cbf281] text-[22px] font-bold py-14">
          Bahar Gümüşer
        </header>
        <div>
          <h1 className="font-mono text-center lg:text-left text-5xl text-[#cbf281] font-bold pb-10">
            I'm a Full Stack Developer...
          </h1>
          <p className="font-mono font-[12px] leading-7 text-center lg:text-left pt-10  ">
            Hello, if you are looking for a junior developer and my profile
            interests you, you can contact me!
          </p>

          <Button />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={headerPic}
          className="max-w-[12rem] aspect-auto drop-shadow-xl rounded-[2rem]"
        />
      </div>
    </section>
  );
};
export default Header;
