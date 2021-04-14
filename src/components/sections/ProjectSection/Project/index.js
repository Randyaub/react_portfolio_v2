import React from "react";
import ProjectButtons from "./ProjectButtons";
import "./Project.css";

const Project = ({
  title,
  paragraph,
  index,
  technology,
  gitLink,
  websiteLink,
  projectImage,
  reverse,
}) => {
  const Image = () => {
    return (
      <img
        className="c-Project__image"
        src={projectImage}
        alt={"Project Displayed In Phone and Mobile"}
      />
    );
  };

  return (
    <li className="c-Project flex flex-center">
      {reverse ? "" : Image()}
      <div
        className={
          !reverse ? "c-Project__details" : " c-Project__details-reverse"
        }
      >
        <div>
          <p className="c-Project__indexTitle">PROJECT - 0{index}. </p>
          <h2 className="c-Project__title">{title}</h2>
          <div className="l-Project__paragraph">
            <p className="c-Project__paragraph">{paragraph}</p>
          </div>
        </div>
        <ProjectButtons gitLink={gitLink} websiteLink={websiteLink} />
        <div>
          {technology &&
            technology.map((tech) => {
              return (
                <span key={tech} className="c-Project__tech">
                  {tech}
                </span>
              );
            })}
        </div>
      </div>
      {reverse ? Image() : ""}
    </li>
  );
};

export default Project;
