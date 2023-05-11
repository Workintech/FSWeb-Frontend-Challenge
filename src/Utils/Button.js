import React from "react";

const Button = () => {
  return (
    <div className="flex pt-8 justify-center lg:justify-start space-x-4 ">
      <button mr-2>
        <a
          href="https://www.linkedin.com/in/bahar-gumuser-83b0801b2/"
          target="_blank"
          className="px-5 py-1 rounded-xl drop-shadow-2xl border-solid  border-slate-800 hover:bg-[#cbf281] bg-white"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </button>
      <button>
        <a
          href="https://github.com/bahargumuser"
          target="_blank"
          className="px-5 py-1 rounded-xl drop-shadow-2xl border-solid  border-slate-800 hover:bg-[#cbf281] bg-white"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </button>
    </div>
  );
};
export default Button;
