"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useStateContext } from "@/app/context/StateContext";
import { links } from "@/lib/links";
import NavLink from "./NavLink";
// import Link from "next/link";

const MobileMenu = () => {
  const { openMenu, setOpenMenu } = useStateContext();

  const listVariants = {
    closed: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const coverBackground = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    opened: {
      opacity: 0.6,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            variants={coverBackground}
            initial="closed"
            animate="opened"
            exit="exit"
            className="absolute top-0 w-full h-full overflow-y-hidden bg-gray-900 opacity-80 z-10"
            onClick={() => setOpenMenu(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            exit="exit"
            className="absolute top-0 left-0 h-screen w-[200px] pt-28 pl-5 flex flex-col bg-slate-400 z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className="text-xl"
                key={link.title}
              >
                <NavLink link={link} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
