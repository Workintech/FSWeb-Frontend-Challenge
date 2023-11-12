import React from "react";
import headerPic from "../assets/black1.jpg";
import Button from "../Utils/Button";

const Header = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center lg:w-screen">
    <section className="min-h-screen  bg-[#ffffff]  p-4 lg:p-20 rounded  flex h-2/3 lg:flex-row flex-col-reverse justify-center items-center w-screen">
      <div className="space-y-16 pt-25 mt-10 pb-4">
        <div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 pt-16 group ">
        <img
          src={headerPic}
          className="w-40 lg:w-72 aspect-auto drop-shadow-xl  rounded-[2rem] pb-4 lg:pb-0 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
      </div>
      <div className="pb-12"></div>
  
          <h1 className="font-mono pt-16 mt-[120px] lg:mt-2 text-center text-2xl lg:text-5xl text-[#a5b4fc] font-bold  ">
            I'm a Full Stack Developer
          </h1>
          <p className="font-mono  pt-10 leading-7 text-[#373737] text-center text-sm lg:text-base">
          Hello, I am Bahar Gumuser.
          If you are looking for a developer and my profile interests you, you can contact me!"
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
