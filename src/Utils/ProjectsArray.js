import React from "react";
import projectsPic from "../assets/Rectangle 41.png";
import projectsPic1 from "../assets/Rectangle 41 (1).png";

const myList = [
  {
    pic: projectsPic,
    name: "Workintech",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tags: ["react", "redux", "vercel"],
    github: "https://github.com/bahargumuser/FSWeb-S6-Challenge",
    vercel: "projects linki gelecek",
  },
  {
    pic: projectsPic1,
    name: "Journey",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tags: ["react", "redux", "vercel"],
    github: "https://github.com/bahargumuser/FSWeb-S7-Challenge",
    vercel: "projects linki gelecek",
  },
];

const projectsArray = () => {
  return (
    <>
      {myList.map((list) => (
        <div key={list.name} className="project-card-container">
          <img src={list.pic} alt={list.name} />
          <div className="text-card">
            <h2>{list.name}</h2>
            <p className="description-project">{list.description}</p>
            <div className="tags--project">
              {list.tags.map((tag) => (
                <p className="text-project-tag">{tag}</p>
              ))}{" "}
            </div>
            <div className="links-projects">
              <a href={list.vercel}>View Site</a>
              <a href={list.github}>Github</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default projectsArray;
