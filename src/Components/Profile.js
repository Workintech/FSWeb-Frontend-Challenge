import React from "react";
import "../CSS/profile.css";
import profilePic from "../assets/image 2.png";

const Profile = () => {
  return (
    <section className="section-profile">
      <div className="profile-left">
        <h1>Profile</h1>
        <h3>Basic Information</h3>
        <p>
          <span>Doğum Tarihi: </span>24.03.1996{" "}
        </p>
        <p>
          <span>İkamet Şehri: </span>Ankara
        </p>
        <p>
          <span>Eğitim Durumu: </span>Hacettepe Ünv. Biyoloji Lisans, 2016{" "}
        </p>
        <p>
          <span>Tercih Ettiği Rol: </span>Frontend, UI
        </p>
      </div>
      <img src={profilePic} alt="profile" id="profilePic" />

      <div className="About-Me">
        <h3>About Me</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
          odit laborum aliquam voluptatum nisi mollitia.{" "}
        </p>
        <p>
          Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
          deserunt quam temporibus cumque magnam!
        </p>
      </div>
    </section>
  );
};
export default Profile;
