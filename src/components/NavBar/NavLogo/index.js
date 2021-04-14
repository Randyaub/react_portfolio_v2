import React from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import "./NavLogo.css";

const NavLogo = ({ linkClicked }) => {
  const scrollToTop = () => {
    linkClicked();
    scroll.scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <span className="c-NavLogo" onClick={() => scrollToTop()}>
        RANDY<span className="c-NavLogo__accent">AUBICHON</span>
      </span>
    </motion.div>
  );
};

export default NavLogo;
