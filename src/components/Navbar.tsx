import React, { useEffect, useState } from "react";
import { Atom } from "../icons/Atom";

const sections = ["projects", "about", "contact"];

export const Navbar = (): React.JSX.Element => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px", // triggers near middle of viewport
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (id: string) =>
    `transition-colors ${
      active === id ? "text-amber-300 " : "text-amber-50 hover:text-amber-200"
    }`;

  return (
    <div className="flex flex-row justify-between fixed top-0 left-0 right-0 bg-[#09090B] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60 h-20 z-50">
      <Atom />

      <nav className="flex justify-center md:justify-end items-center font-mono text-lg sm:text-xl py-4 space-x-6 sm:space-x-8 md:space-x-10">
        <a href="#projects" className={linkClass("projects")}>
          projects
        </a>

        <a href="#about" className={linkClass("about")}>
          about
        </a>

        <a href="#contact" className={linkClass("contact")}>
          contact
        </a>
      </nav>
    </div>
  );
};
