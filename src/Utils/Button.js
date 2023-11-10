import React from "react";

const Button = () => {
  return (
    <div className="flex  justify-center lg:justify-center space-x-4 mt-0 lg:mt-6 ">
      <button>
        <a
          href="https://www.linkedin.com/in/bahar-gumuser-83b0801b2/"
          target="_blank"
          className="px-5 py-3 rounded-xl  border-solid  hover:bg-[#a5b4fc] bg-[#ffffff]"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </button>
      <button>
        <a
          href="https://github.com/bahargumuser"
          target="_blank"
          className="px-5 py-3 rounded-xl  border-solid  hover:bg-[#a5b4fc] bg-[#ffffff]"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </button>
    </div>
  );
};
export default Button;
