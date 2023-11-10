import React from "react";
import projectsPic from "../assets/minnet günlüğü.png";
import tarde from "../assets/TARDE.png";
import locations from "../assets/locations.png"
import starwars from "../assets/Star wars i.png"

const myList = [
  {
    pic: tarde,
    name: "TARDE Association",
    description:
      "In response to the 2023 earthquake in our country, we created a project to offer psychosocial aid to earthquake survivors. This initiative streamlined the operations of the Trauma and Disaster Mental Health Studies Association in the affected area. The project empowered mobile psychologists in the region to efficiently handle client data, ultimately improving accessibility for individuals seeking psychological support.",
    tags: ["next.js", "knex", "vite"],
    github: "https://github.com/Workintech-Graduate-Projects/Tarde-app",
    githubbe: "https://github.com/Workintech-Graduate-Projects/tarde-BE",
    vercel: "https://tarde-app.vercel.app/",
  },
  {
    pic: locations,
    name: "Location Recording",
    description:
      "A site for Star Wars fans where they can list all the characters! It can also be listed in which movies the characters have been in. Character and movie information was retrieved from API endpoints. All data is included in the DOM. Developed with JavaScript and React. Styled-components was used for styling.",
    tags: [ "javascript", "react", "node.js"],
    github: "https://github.com/bahargumuser/SAMM",
    githubbe: "https://github.com/bahargumuser/SAMM-be",
  },
  {
    pic: starwars,
    name: "Star Wars API",
    description:
      "A site for Star Wars fans where they can list all the characters! It can also be listed in which movies the characters have been in. Character and movie information was retrieved from API endpoints. All data is included in the DOM. Developed with JavaScript and React. Styled-components was used for styling.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/FSWeb-S6-Challenge",
    vercel: "https://star-wars-kappa-jet.vercel.app/",
  },
  {
    pic: projectsPic,
    name: "Thankfulness Diary",
    description:
      "It's a great site to give thanks for what you have every day! When we want to add new notes and delete existing notes, a request is sent to the API. All written notes are saved and can be reopened at any time. According to on the response, store and localStorage are updated. Developed with React, JavaScript, CSS and HTML.",
    tags: ["react", "javascript", "vercel"],
    github: "https://github.com/bahargumuser/fsweb-s10-challenge",
    vercel: "https://minnetgunlugu-dusky.vercel.app/yeni-not",
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
              
              {list.githubbe && (
                <a href={list.githubbe} target="_blank">
                View GitHub Be
              </a>
              )}
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default projectsArray;
