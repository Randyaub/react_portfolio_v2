import React from "react";
import { motion } from "framer-motion";

const ButtonAnimation = ({ className, clickEvent, children, type }) => {
  return (
    <motion.button
      onClick={clickEvent}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      className={className}
      type={type ? type : null}
    >
      {children}
    </motion.button>
  );
};

export default ButtonAnimation;
