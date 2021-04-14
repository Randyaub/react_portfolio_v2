import React from "react";
import { motion } from "framer-motion";

const HyperLinkAnimation = ({ children, href, title, className }) => {
  return (
    <motion.a
      className={className}
      href={href}
      target="__blank"
      title={title}
      style={{ display: "inline-flex" }}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.a>
  );
};

export default HyperLinkAnimation;
