import React from "react";
import { Separator } from "@/components/ui/separator";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full mt-14 pt-10 bg-slate-500">
        <div className="mx-auto px-6 py-6 md:px-6 max-sm:px-2 lg:max-w-6xl">
          <Separator className="my-4 opacity-50" />
          <div className="w-full">
            <p className="flex items-center text-white text-sm">
              <FaRegCopyright className="mr-1" />
              {currentYear}, MZh Data AB. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
