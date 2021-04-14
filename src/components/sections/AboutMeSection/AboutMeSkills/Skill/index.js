import React from "react";
import "./Skill.css";

const Skill = ({ skillName, src }) => {
  return (
    <div className="c-Skill flex flex-center">
      <img className="c-Skill__image " src={src} alt={skillName} />
      <span className="c-Skill__text">{skillName}</span>
    </div>
  );
};

export default Skill;
