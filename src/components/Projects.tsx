import React from "react";
import Typewriter from "typewriter-effect";
import {
  CardImages,
  TerminalTypewriter,
  TerminalTypewriterOutput,
  UI,
} from "./UI.tsx";

export default function Projects(): React.JSX.Element {
  return (
    <UI>
      <TerminalTypewriter text="> ls projects/" />
      <TerminalTypewriterOutput
        text={"tanvipremiumgroup/ movie-booking/ craftysocial/"}
      />
      <TerminalTypewriter text="> cat TanviPremiumGroup/details.txt" />
      <CardImages
        imageUrl="/tanvipremium.png"
        Link="https://tanvipremiumgroup.com/"
      >
        <Typewriter
          options={
            {
              strings: `
  <strong style="color:#f43f5e;">Title:</strong> Tanvi Premium Group<br/>
  <strong style="color:#f43f5e;">Stack:</strong> React, Astro, TailwindCSS<br/>
  <strong style="color:#f43f5e;">Deployment:</strong> Netlify</br>
  <strong style="color:#f43f5e;">Description:</strong> Originally built this website using React, Vite, and TailwindCSS, then migrated it to Astro to achieve better SEO, faster load times, and smoother performance.</br>
  <strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/HS-Astro#" style="color:#90D5FF">github.com/Robinxo/HS-Astro</a></br>
`,
              autoStart: true,
              cursor: "",
              delay: 10,
            } as const
          }
        />
      </CardImages>
      <TerminalTypewriter text="> cat Movie-booking/details.txt" />
      <CardImages
        imageUrl="/movieBooking.png"
        Link="https://frolicking-fairy-9e5986.netlify.app/"
      >
        <Typewriter
          options={
            {
              strings: `
                        <strong style="color:#f43f5e;">Title:</strong> Movie booking application</br>
                        <strong style="color:#f43f5e;">Stack:</strong>
                        <span style="display:inline-block; max-width:100%;">
                          React, Express, TailwindCSS, MongoDB, Node, Bun
                        </span><br/>
                        <strong style="color:#f43f5e;">Deployment:</strong> Frontend - Netlify , backend - Render.</br>
                        <strong style="color:#f43f5e;">Description:</strong> Built a full-stack web app as my final year project with secure user login, an admin panel, live booking, token-based authentication, multiple APIs, middleware, and protected routes all working together seamlessly.</br>
                        <strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/Movie-booking" style="color:#90D5FF">github.com/Robinxo/Movie-booking</a></br>
`,
              autoStart: true,
              cursor: "",
              delay: 10,
            } as const
          }
        />
      </CardImages>
      <TerminalTypewriter text="> cat craftySocial/details.txt" />
      <CardImages
        imageUrl="/craftySocial.png"
        Link="https://696734c0ef6b06e85ff71257--magnificent-dragon-a560e2.netlify.app/"
      >
        <Typewriter
          options={
            {
              strings: `                
<strong style="color:#f43f5e;">Title:</strong> Crafty Social<br/>
<strong style="color:#f43f5e;">Stack:</strong> React, TailwindCSS, Bun<br/>
<strong style="color:#f43f5e;">Deployment:</strong> Frontend - Netlify, Backend - Vercel<br/>
<strong style="color:#f43f5e;">Description:</strong> A modern social media platform designed for interactive user engagement, responsive design, and efficient performance.<br/>
<strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/Crafty-Social" style="color:#90D5FF">github.com/Robinxo/Crafty-Social</a><br/>
   `,
              autoStart: true,
              cursor: "",
              delay: 0,
            } as const
          }
        />
      </CardImages>
    </UI>
  );
}
