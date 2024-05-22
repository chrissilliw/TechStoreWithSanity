"use client";
import { links } from "@/lib/links";
import Link from "next/link";
import NavLink from "./NavLink";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import Cart from "../Cart/Cart";
import { useStateContext } from "@/app/context/StateContext";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { status, data: session } = useSession();

  return (
    <>
      <div className="py-6">
        <div className="flex items-center justify-between mx-auto max-w-2xl sm:px-6 lg:max-w-6xl">
          {/* LOGO CONTAINER */}
          <Link href="/">
            <h1 className="text-4xl font-bold">MHz Data</h1>
          </Link>
          {/* NAVBAR LINKS CONTAINER */}
          <div className="flex items-center h-auto gap-10">
            <nav className="hidden md:flex gap-4">
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
        {showCart && <Cart />}
      </div>
    </>
  );
};

export default Navbar;
