import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { Element } from "react-scroll";
import "./AboutMeSection.css";
import ScrollOnView from "../../common/ScrollOnView";
import AboutMeSkills from "./AboutMeSkills";

const AboutMeSection = () => {
  const windowSize = useWindowSize();
  const isWidthBelow1024px = () => {
    return windowSize[1] < 1201;
  };

  const Image = () => {
    return (
      <img
        className="c-AboutMeSection__image"
        src="AboutMeDesign.svg"
        alt="Randy Aubichon drawing with a pen"
      />
    );
  };

  return (
    <>
      {/*Element is for react-scroll*/}
      <h2 className="section__title">About</h2>
      <Element name="scrollToAbout" />
      <section className="c-AboutSection">
        <ScrollOnView reverse>
          <div className="c-AboutMeSection__content flex flex-center">
            {isWidthBelow1024px() && Image()}
            <div>
              <h2 className="c-AboutMeSection__title">WELCOME</h2>
              <p className="c-AboutMeSection__paragraph">
                My name is Randy and I enjoy creating responsive and
                user-friendly websites. My web development journey started with
                the creation of a social media website for my university class.
                I discovered how fullfilling the development process can be and
                started learning more about web development ever since.
              </p>
              <p className="c-AboutMeSection__paragraph2">
                Besides programming I also enjoy drawing with a pen or a pencil.
                Usually my notes are full of random doodles and I also enjoy
                reading if I can find a good book.
              </p>
              <h2 className="c-AboutMeSection__subtitle">SKILLS</h2>
              <AboutMeSkills />
            </div>
            {!isWidthBelow1024px() && Image()}
          </div>
        </ScrollOnView>
      </section>
    </>
  );
};

export default AboutMeSection;
