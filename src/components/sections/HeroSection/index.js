import React from "react";
import { motion } from "framer-motion";
import GoToProjectsButton from "./GoToProjectsButton";
import "./HeroSection.css";

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="c-HeroSection flex flex-center flex-space-btw">
      <motion.div
        className="c-HeroSection__content flex flex-col"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h1 className="c-HeroSection__title">
          Creating Exceptional Digital Experiences
        </h1>
        <p className="c-HeroSection__paragraph">
          Regina-born software developer currently working in Calgary.
        </p>
        <GoToProjectsButton />
      </motion.div>
      <div>
        <img
          className="c-HeroSection__background"
          src="HeroDesign.svg"
          alt="background design"
        />
      </div>
    </section>
  );
};

export default HeroSection;
