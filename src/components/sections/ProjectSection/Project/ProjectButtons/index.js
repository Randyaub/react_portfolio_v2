import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import HyperLinkAnimation from "../../../../common/HyperLinkAnimation";
import "./ProjectButtons.css";

const ProjectButtons = ({ gitLink, websiteLink }) => {
  return (
    <div className="c-ProjectButtons">
      <HyperLinkAnimation
        className="c-ProjectButtons__btn"
        href={websiteLink}
        title={"Go To GitHub"}
      >
        <span>Live Version</span>
        <FaExternalLinkAlt className="social__icons" size={18} />
      </HyperLinkAnimation>
      <HyperLinkAnimation
        className="c-ProjectButtons__btn c-ProjectButtons-reverse"
        href={gitLink}
        title="Go To Live Website"
      >
        <span>GitHub</span>
        <FaGithub className="social__icons-reverse" size={20} />
      </HyperLinkAnimation>
    </div>
  );
};

export default ProjectButtons;
