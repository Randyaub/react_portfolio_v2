import React from "react";
import Skill from "./Skill";
import "./AboutMeSkills.css";

const AboutMeSkills = () => {
  const skills = [
    { src: "HTML5.svg", skillName: "HTML5" },
    { src: "CSS3.svg", skillName: "CSS3" },
    { src: "JAVASCRIPT.svg", skillName: "JavaScript" },
    { src: "NODEJS.svg", skillName: "Node.js" },
    { src: "REACT.svg", skillName: "React" },
  ];

  return (
    <div className="c-AboutMeSkills flex flex-space-btw">
      {skills.map((skill) => {
        return <Skill src={skill.src} skillName={skill.skillName} />;
      })}
    </div>
  );
};

export default AboutMeSkills;
