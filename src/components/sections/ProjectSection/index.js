import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { Element } from "react-scroll";
import ScrollOnView from "../../common/ScrollOnView";
import Project from "./Project";
import "./ProjectSection.css";

const ProjectSection = () => {
  //[0] = height [1] = width
  const windowSize = useWindowSize();
  return (
    <>
      {/*Element is for react-scroll*/}
      <Element name="scrollToProjects" />
      <h2 className="section__title">Projects</h2>
      <section className="c-ProjectSection">
        <div className="c-ProjectSection__content">
          <ul>
            <ScrollOnView>
              <Project
                title={"E-Commerce Clothing Store"}
                projectImage={"ProjectImage.svg"}
                paragraph={
                  "The design of this website was largely based off of both Uniqlo’s and H&M’s own websites. There includes both a men’s and women’s section. In each section there is main categories and sub-categories. When an item is selected the user is directed to the product page where they may select a size and/or colour variant. After the user has selected the items he/she may go to the cart and proceed with the purchase. All purchases are viewable and are located differently depending on whether the user is a guest or logged in."
                }
                index={1}
                technology={["React", "Express", "Node.js", "PostgreSQL"]}
                gitLink={"https://github.com/Randyaub/clothes_fullstack_site"}
                websiteLink={
                  "https://clever-brown-2542ea.netlify.app/men/Shop-Category/all"
                }
              />
            </ScrollOnView>
            <ScrollOnView reverse>
              <Project
                reverse={windowSize[1] > 1200}
                title={"Humane Society Landing Page"}
                projectImage={"ProjectImage2.svg"}
                paragraph={
                  "This website was created because I believed my home towns humane society website the Regina Humane Society could be improved. My hometowns website gave me a feeling of information overload and had some weird visual hierarchy. I wanted to avoid that so I decided to focus on making the website feel less cluttered and to give the website some order. The website is fully responsive for any device. Overall I believe I succeeded In my goal and made a more cohesive viewing experience. "
                }
                index={2}
                technology={["React"]}
                gitLink={"https://github.com/Randyaub/react_humane_society"}
                websiteLink={"https://brave-lewin-7a5e7e.netlify.app/"}
              />
            </ScrollOnView>
            <ScrollOnView>
              <Project
                title={"Weather App"}
                projectImage={"ProjectImage3.svg"}
                paragraph={
                  "This website uses the OpenWeatherAPI free version. This is yet another website I made because I was inspired by a similar website, specifically The Weather Network’s seven days section. All the information on the page is taken from the OpenWeatherAPI including the images with the exception of the logo which was created by me."
                }
                index={3}
                technology={["React", "OpenWeatherAPI"]}
                gitLink={"https://github.com/Randyaub/weather_app"}
                websiteLink={"https://naughty-hugle-69c260.netlify.app/"}
              />
            </ScrollOnView>
            <ScrollOnView reverse>
              <Project
                reverse={windowSize[1] > 1200}
                title={"Portfolio V1"}
                projectImage={"ProjectImage4.svg"}
                paragraph={
                  "This is my previous portfolio. I did not use it for too long because there was a lot I wanted to change. Like the dark theme, and the overuse of white borders. Nevertheless I learned a lot creating my previous portfolio website and it inspired me to create the website you are currently viewing."
                }
                index={4}
                technology={["React", "EmailJS"]}
                gitLink={"https://github.com/Randyaub/react_portfolio_v1"}
                websiteLink={"https://boring-ramanujan-a71d13.netlify.app/"}
              />
            </ScrollOnView>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
