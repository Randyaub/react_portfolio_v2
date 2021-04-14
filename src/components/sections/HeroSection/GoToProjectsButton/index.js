import React from "react";
import { scroller } from "react-scroll";
import ButtonAnimation from "../../../common/ButtonAnimation";
import "./NavigationButton.css";

const GoToProjectsButton = () => {
  const scrollToElement = () => {
    scroller.scrollTo("scrollToProjects", {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <ButtonAnimation
      clickEvent={scrollToElement}
      className="c-NavigationButton flex flex-center"
    >
      <span className="c-NavigationButton__text">Go To My Work</span>
    </ButtonAnimation>
  );
};

export default GoToProjectsButton;
