import React from "react";
import { Atom } from "../icons/Atom";

export const Navbar = (): React.JSX.Element => {
  return (
    <div className="flex flex-row justify-between fixed top-0 left-0 right-0 bg-[#09090B] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60 h-20 z-50">
      <Atom />
      <nav className="flex justify-center md:justify-end items-center font-mono text-lg sm:text-xl md:text-1xl  py-4 sm:py-5 md:py-6 space-x-6 sm:space-x-8 md:space-x-10">
        <a
          href="#projects"
          className="text-amber-50 hover:text-amber-200 transition-colors"
        >
          projects
        </a>

        <a
          href="#about"
          className="text-amber-50 hover:text-amber-200 transition-colors"
        >
          about
        </a>
        <a
          href=""
          className="text-amber-50 hover:text-amber-200 transition-colors"
        >
          contact
        </a>
      </nav>
    </div>
  );
};
