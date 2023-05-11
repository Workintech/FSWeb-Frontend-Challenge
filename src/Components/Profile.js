import React from "react";
import "../CSS/profile.css";
import profilePic from "../assets/k.JPEG";

const Profile = () => {
  return (
    <section className="section-profile">
      <div className="profile-left">
        <h1>Profile</h1>
        <h2>Basic Information</h2>
        <p>
          <span>Birthyear: </span>1996{" "}
        </p>
        <p>
          <span>Country: </span>Turkey
        </p>
        <p>
          <span>E-mail: </span>bahargumuser@gmail.com
        </p>
        <p>
          <span>Educational Status: </span>Ankara University, 2021{" "}
        </p>
        <p>
          <span>Preferred Job: </span> Junior Developer
        </p>
      </div>
      <img src={profilePic} alt="profile" id="profilePic" />

      <div className="About-Me">
        <h3 /* className="tc-[#cbf281]" */>About Me</h3>
        <p>
          I am a person who has built my life on new information and new
          discoveries. After graduating from university, I became interested in
          software and wanted to learn new things.{" "}
        </p>
        <p>
          Over time, software became a passion for me. I used this passion for
          my professional purposes and decided to turn it into a business. I
          improve myself a little bit more every day to be successful.
        </p>
      </div>
    </section>
  );
};
export default Profile;
