import React from "react";
import "../CSS/projects.css";
import ProjectsArray from "../Utils/ProjectsArray";

const Profile = () => {
  return (
    <div className="text-center">
    <section className="section-project">
    <h1 className="section-profile-header">A Few of My Projects</h1>
      <ProjectsArray />
     
    </section>
    </div>
  );
};
export default Profile;
