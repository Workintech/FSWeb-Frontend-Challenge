import React from "react";
import projectsPic from "../assets/minnet günlüğü 2.png";
import projectsPic1 from "../assets/noname.png";

const myList = [
  {
    pic: projectsPic,
    name: "Thankfulness Diary",
    description:
      "It's a great site to give thanks for what you have every day! When we want to add new notes and delete existing notes, a request is sent to the API. All written notes are saved and can be reopened at any time. According to on the response, store and localStorage are updated. Developed with React, JavaScript, CSS and HTML.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/fsweb-s10-challenge",
    vercel: "https://minnetgunlugu-dusky.vercel.app/yeni-not",
  },
  {
    pic: projectsPic1,
    name: "Star Wars API",
    description:
      "A site for Star Wars fans where they can list all the characters! It can also be listed in which movies the characters have been in. Character and movie information was retrieved from API endpoints. All data is included in the DOM. Developed with JavaScript and React. Styled-components was used for styling.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/FSWeb-S6-Challenge",
    vercel: "https://star-wars-kappa-jet.vercel.app/",
  },
];

const projectsArray = () => {
  return (
    <>
      {myList.map((list) => (
        <div key={list.name} className="project-card-container">
          <img src={list.pic} alt={list.name} className="projectImg" />
          <div className="text-card">
            <h2>{list.name}</h2>
            <p className="description-project">{list.description}</p>
            <div className="tags--project">
              {list.tags.map((tag) => (
                <p className="text-project-tag">{tag}</p>
              ))}
            </div>
            <div className="links-projects">
              <a href={list.vercel} target="_blank">
                View Site
              </a>
              <a href={list.github} target="_blank">
                View GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default projectsArray;
