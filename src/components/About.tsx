import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { TerminalTypewriter, TerminalTypewriterOutput, UI } from "./UI";
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

export default function About(): React.ReactElement {
  return (
    <UI>
      <TerminalTypewriter text="> whoami" />
      <TerminalTypewriterOutput
        text={
          "Full-stack developer focused on building clean, scalable web applications using modern JavaScript stacks. I prefer terminal-first workflows and care about writing code that stays readable and maintainable."
        }
      />
      <TerminalTypewriter text="> skills --list" />
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
      <TerminalTypewriter text="> what-i-build" />
      <TerminalTypewriterOutput
        text={`<li>Full-stack apps with auth, roles, dashboards</li>
                          <li>REST APIs with validation and error handling</li>
                          <li>Responsive UI systems</li>
                          <li>Internal tools and small experiments</li>`}
      />
      <TerminalTypewriter text="> how-i-work" />
      <TerminalTypewriterOutput
        text={`<li>Design APIs before UI</li>
                          <li>Break problems into small parts</li>
                          <li>Prefer clarity over clever tricks</li>
                          <li>Optimize after correctness</li>
                          <li>Care about long-term maintainability</li>`}
      />
      <TerminalTypewriter text="> now" />
      <TerminalTypewriterOutput
        text={`<li>Deepening backend and system design skills</li>
                          <li>Actively looking for junior full-stack / frontend roles</li>`}
      />
    </UI>
  );
}
