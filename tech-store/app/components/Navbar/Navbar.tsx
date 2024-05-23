"use client";
import { links } from "@/lib/links";
import Link from "next/link";
import NavLink from "./NavLink";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../Cart/Cart";
import { useStateContext } from "@/app/context/StateContext";
import { useSession } from "next-auth/react";
// import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { showCart, setShowCart, openMenu, setOpenMenu, totalQuantities } =
    useStateContext();
  const { status, data: session } = useSession();
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      width: 20,
      rotate: 45,
      // backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      width: 20,
      rotate: -45,
      // backgroundColor: "rgb(255, 255, 255)",
    },
  };

  return (
    <>
      <div className="py-6">
        <div className="flex items-center justify-between mx-auto sm:px-6 lg:max-w-6xl">
          {/* HAMBURGER BUTTON CONTAINER */}
          <div className="lg:hidden">
            <button
              className="w-10 h-4 flex flex-col justify-between z-50 relative"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <motion.div
                variants={topVariants}
                animate={openMenu ? "opened" : "closed"}
                className="w-6 h-0.5 bg-black rounded origin-left"
              ></motion.div>
              <motion.div
                variants={centerVariants}
                animate={openMenu ? "opened" : "closed"}
                className="w-8 h-0.5 bg-black rounded"
              ></motion.div>
              <motion.div
                variants={bottomVariants}
                animate={openMenu ? "opened" : "closed"}
                className="w-4 h-0.5 bg-black rounded origin-left"
              ></motion.div>
            </button>
          </div>
          {/* LOGO CONTAINER */}
          <Link href="/">
            <h1 className="text-4xl font-bold">MHz Data</h1>
          </Link>
          {/* NAVBAR LINKS CONTAINER */}
          <div className="flex items-center h-auto gap-10">
            <nav className="hidden lg:flex gap-4">
              {links.map((link) => (
                <NavLink link={link} key={link.title} />
              ))}
            </nav>
            {status === "loading" && <div>Loading...</div>}
            {status === "authenticated" && <div>{session.user!.name}</div>}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">
                <FaRegUserCircle size={22} />
              </Link>
            )}

            <div className="cursor-pointer" onClick={() => setShowCart(true)}>
              <IoBagOutline size={22} />
            </div>
          </div>
        </div>
        {/* {openMenu && <MobileMenu />} */}
        <MobileMenu />
        {/* {showCart && <Cart />} */}
        <Cart />
      </div>
    </>
  );
};

export default Navbar;
