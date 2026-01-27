import React from "react";
import {
  IconsMarquee,
  TerminalTypewriter,
  TerminalTypewriterOutput,
  UI,
} from "./UI";

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
      <IconsMarquee />
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
