import React, { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import "./BouncingArrow.css";

const BouncingArrow = () => {
  const [isVisible, setIsVisible] = useState(window.scrollY < 30);
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY < 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="l-BouncingArrow">
      <div
        className={`c-BouncingArrow ${isVisible ? "opacity-1" : "opacity-0"}`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: ["20%", "-60%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              duration: 0.7,
            }}
          >
            <BsChevronDoubleDown className="c-BouncingArrow__arrow" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BouncingArrow;
