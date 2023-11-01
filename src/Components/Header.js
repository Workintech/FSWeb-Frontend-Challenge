import React from "react";
import headerPic from "../assets/a.JPG";
import Button from "../Utils/Button";

const Header = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-violet-300 lg:w-screen">
    <section className="min-h-screen bg-violet-300 p-20 rounded items-center flex h-2/3 lg:flex-row flex-col-reverse justify-center items-center">
      <div className="space-y-16 pt-25 mt-10 pb-4">
        <div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pt-16">
        <img
          src={headerPic}
          className="max-w-[12rem] aspect-auto drop-shadow-xl rounded-[2rem] pb-4 hover:scale-110 "
        />
      </div>
      <div className="pb-12"></div>
  
          <h1 className="font-mono   pt-16 text-center underline text-2xl lg:text-5xl text-[#cbf281] font-bold ">
            I'm a Full Stack Developer
          </h1>
          <p className="font-mono  pt-16 leading-7 text-center text-sm lg:text-base">
          Hello, I am Bahar Gumuser. If you are looking for a developer and my profile interests you, you can contact me!"
          </p>
          <div className="flex justify-center items-center pt-16 rounded-xl drop-shadow-2xl border-solid border-slate-800  ">
          <Button/>
          </div>
        </div>
     
     
      </div>
    </section>
    
    </div>
  );
};
export default Header;
