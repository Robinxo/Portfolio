import { motion } from "motion/react";
import { useState } from "react";

interface UIProps {
  children: React.ReactNode;
}
const UI = ({ children }: UIProps) => {
  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] font-mono rounded-lg shadow-xl mx-auto border border-[#1f1f1f] w-full max-w-3xl p-6 relative overflow-hidden mb-10 lg:max-w-11/12 lg:px-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <motion.span
            className="w-3 h-3 bg-red-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
          ></motion.span>
          <motion.span
            className="w-3 h-3 bg-yellow-400 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
          ></motion.span>
          <motion.span
            className="w-3 h-3 bg-green-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
          ></motion.span>
          <p className="text-xs text-gray-500 ml-3">om@portfolio:~</p>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_API_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <form onSubmit={onSubmit} className="font-mono text-sm space-y-2 pb-20">
      <input
        className="w-full bg-black text-emerald-400 border border-zinc-700 px-2 py-1 outline-none focus:border-emerald-400"
        type="text"
        name="name"
        placeholder="name"
        required
      />

      <input
        className="w-full bg-black text-emerald-400 border border-zinc-700 px-2 py-1 outline-none focus:border-emerald-400"
        type="email"
        name="email"
        placeholder="email"
        required
      />

      <textarea
        className="w-full bg-black text-emerald-400 border border-zinc-700 px-2 py-1 outline-none focus:border-emerald-400 resize-none h-24"
        name="message"
        placeholder="message"
        required
      />

      <button
        className="bg-black text-emerald-400 border border-emerald-400 px-1 py-1 hover:bg-emerald-400 hover:text-black transition "
        type="submit"
      >
        [ submit ]
      </button>

      <p className="text-zinc-500 text-xs">{result}</p>
    </form>
  );
};

import Marquee from "react-fast-marquee";
import {
  Cpp,
  Js,
  Ts,
  Tailwindcss,
  ReactIcon,
  Mongodb,
  Css3,
  Express,
  Git,
  Github,
  Html,
  Nextjs,
  Node,
  Docker,
  Netlify,
  MySql,
  Python,
  Django,
} from "../icons/Svg.ts";
const icons = [
  Cpp,
  Js,
  Ts,
  Tailwindcss,
  ReactIcon,
  Mongodb,
  Css3,
  Express,
  Git,
  Github,
  Html,
  Nextjs,
  Node,
  Docker,
  Netlify,
  MySql,
  Python,
  Django,
];

const IconsMarquee = () => {
  return (
    <p className="ml-4 text-gray-300">
      <Marquee autoFill={true} speed={100} pauseOnHover={true}>
        <div className="flex items-center">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="mx-5"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "tween",
                duration: 0.09,
                ease: "easeOut",
              }}
            >
              <Icon className="size-15 text-gray-300 hover:text-emerald-400 transition" />
            </motion.div>
          ))}
        </div>
      </Marquee>
    </p>
  );
};

type CardImagesProp = {
  Link: string;
  imageUrl: string;
  children: React.ReactNode;
};

const CardImages = ({ children, imageUrl, Link }: CardImagesProp) => {
  return (
    <section className="ml-4 text-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <a href={Link} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={imageUrl}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            whileHover={{
              scale: 1.1,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
          />
        </a>
        {children}
      </div>
    </section>
  );
};

import Typewriter from "typewriter-effect";

type TerminalTypewriterProps = {
  text: string;
  className?: string;
};

function TerminalTypewriter({ text, className = "" }: TerminalTypewriterProps) {
  return (
    <p>
      <span
        className={`text-emerald-400 px-1 font-semibold animate-pulse ${className}`}
      >
        <Typewriter
          options={{
            strings: text,
            autoStart: true,
            cursor: "",
            delay: 12,
          }}
        />
      </span>
    </p>
  );
}

const TerminalTypewriterOutput = ({ text }: TerminalTypewriterProps) => {
  return (
    <p className="ml-4 text-gray-300">
      <Typewriter
        options={{
          delay: 10,
          cursor: "",
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
      />
    </p>
  );
};

import Tooltip from "@mui/material/Tooltip";

const Links = {
  github: "https://github.com/Robinxo",
  linkedin: "https://linkedin.com/in/omr18",
  email: "mailto:omrawat.work@gmail.com",
  pdf: "./resume.pdf",
} as const;

const HeaderLinks = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-5">
      {/* GitHub */}
      <motion.a
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "tween",
          duration: 0.09,
          ease: "easeOut",
        }}
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center gap-3 rounded-xl bg-[#18181B] px-6 py-3 text-base font-mono font-bold tracking-wide text-zinc-200  hover:text-amber-200 transition-colors shadow-md hover:shadow-lg hover:bg-[#1f1f22] cursor-pointer"
        href={Links.github}
      >
        <svg
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden md:block ">GitHub</span>
      </motion.a>
      <Tooltip title="Let's connect?" arrow>
        {/* LinkedIn */}
        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
          rel="noopener noreferrer"
          transition={{
            type: "tween",
            duration: 0.09,
            ease: "easeOut",
          }}
          className="flex items-center gap-3 rounded-xl bg-[#18181B] px-6 py-3 text-base font-mono font-bold tracking-wide text-zinc-200  hover:text-amber-200 transition-colors shadow-md hover:shadow-lg hover:bg-[#1f1f22] cursor-pointer"
          target="_blank"
          href={Links.linkedin}
        >
          <svg
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <path
              d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
              fill="currentColor"
            />
            <path
              d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
              fill="currentColor"
            />
            <path
              d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
              fill="currentColor"
            />
          </svg>
          <span className="hidden md:block">LinkedIn</span>
        </motion.a>
      </Tooltip>
      {/* Email */}
      <motion.a
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.95 }}
        rel="noopener noreferrer"
        transition={{
          type: "tween",
          duration: 0.09,
          ease: "easeOut",
        }}
        target="_blank"
        className="flex items-center gap-3 rounded-xl bg-[#18181B] px-6 py-3 text-base font-mono font-bold tracking-wide text-zinc-200  hover:text-amber-200 transition-colors shadow-md hover:shadow-lg hover:bg-[#1f1f22] cursor-pointer"
        href={Links.email}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
        </svg>
        <span className="hidden md:block">Email</span>
      </motion.a>

      {/* Resume */}
      <motion.a
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        rel="noopener noreferrer"
        transition={{
          type: "tween",
          duration: 0.09,
          ease: "easeOut",
        }}
        target="_blank"
        className="flex items-center gap-3 rounded-xl bg-[#18181B] px-6 py-3 text-base font-mono font-bold tracking-wide text-zinc-200  hover:text-amber-200 transition-colors shadow-md hover:shadow-lg hover:bg-[#1f1f22] cursor-pointer"
        href={Links.pdf}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 22 22"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path d="M15 3V4H16V5H17V6H18V7H19V8H20V9H21V18H20V19H2V18H1V4H2V3H15M15 6H14V10H18V9H17V8H16V7H15V6M3 5V17H19V12H13V11H12V5H3Z" />
        </svg>
        <span className="hidden md:block">Resume</span>
      </motion.a>
    </nav>
  );
};

export {
  UI,
  TerminalTypewriter,
  TerminalTypewriterOutput,
  Form,
  CardImages,
  IconsMarquee,
  HeaderLinks,
};
