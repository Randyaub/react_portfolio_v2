import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import "./NavBar.css";

const NavBar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const linkClicked = () => {
    setIsMobileOpen(false);
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const links = [
    { linkText: "ABOUT", element: "scrollToAbout" },
    { linkText: "PROJECTS", element: "scrollToProjects" },
    { linkText: "CONTACT", element: "scrollToContacts" },
  ];

  return (
    <>
      <header>
        <nav className={`flex flex-space-btw h-full `}>
          <div className="c-NavBar__left">
            <NavLogo linkClicked={linkClicked} />
          </div>
          <div className="c-NavBar__right">
            <GiHamburgerMenu
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="c-NavBarHamburger"
              size={25}
            />
            <motion.ul
              className="c-NavBar__list flex"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {links.map((link) => {
                return (
                  <NavLink
                    key={link.linkText}
                    linkText={link.linkText}
                    //Element to scroll to
                    element={link.element}
                  />
                );
              })}
            </motion.ul>
          </div>
        </nav>
        <div
          className={`c-NavBar__mobile ${isMobileOpen && "c-Mobile-visible"}`}
        >
          <ul className="flex flex-col flex-center h-full">
            {links.map((link) => {
              return (
                <NavLink
                  key={link.linkText}
                  linkText={link.linkText}
                  //Element to scroll to
                  element={link.element}
                  linkClicked={linkClicked}
                />
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
