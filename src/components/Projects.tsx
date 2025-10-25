import React from "react";
import Typewriter from "typewriter-effect";

export default function Projects(): React.JSX.Element {
  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] font-mono rounded-lg shadow-xl mx-auto border border-[#1f1f1f] w-full max-w-3xl p-6 relative overflow-hidden mb-10 lg:max-w-11/12 lg:px-10">
      {/* Fake terminal header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <p className="text-xs text-gray-500 ml-3">om@portfolio:~</p>
      </div>

      {/* Terminal content */}
      <div className="space-y-3">
        <p>
          <span className="text-emerald-400 font-semibold animate-pulse">
            <Typewriter
              options={
                {
                  strings: "> ls projects/",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300">
          <Typewriter
            options={
              {
                strings: "TanviPremiumGroup/ Movie-Booking/ portfolio/",
                autoStart: true,
                cursor: "",
                delay: 10,
              } as const
            }
          />
        </p>

        <p className="mt-4">
          <span className="text-emerald-400 font-semibold animate-pulse">
            <Typewriter
              options={
                {
                  strings: "> cat TanviPremiumGroup/details.txt",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300">
          <Typewriter
            options={
              {
                strings: `
  <strong style="color:#f43f5e;">Title:</strong> Tanvi Premium Group<br/>
  <strong style="color:#f43f5e;">Stack:</strong> React, Astro, TailwindCSS<br/>
  <strong style="color:#f43f5e;">Description:</strong> Originally built this website using React, Vite, and TailwindCSS, then migrated it to Astro to achieve better SEO, faster load times, and smoother performance.</br>
  <strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/HS-Astro#" style="color:#90D5FF">github.com/Robinxo/HS-Astro</a></br>
  <strong style="color:#f43f5e;">Url:</strong> <a target="_blank" href="https://tanvipremiumgroup.com/" style="color:#90D5FF">tanvipremiumgroup.com</a>
`,
                autoStart: true,
                cursor: "",
                delay: 10,
              } as const
            }
          />
        </p>

        <p className="mt-4">
          <span className="text-emerald-400 font-semibold animate-pulse">
            <Typewriter
              options={
                {
                  strings: "> cat Movie-Booking/details.txt",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300">
          <Typewriter
            options={
              {
                strings: `
  <strong style="color:#f43f5e;">Title:</strong> Movie booking application</br>

<strong style="color:#f43f5e;">Stack:</strong>
<span style="display:inline-block; max-width:100%;">
  React, Express, TailwindCSS, MongoDB, Node, Bun
</span><br/>
  <strong style="color:#f43f5e;">Description:</strong> Built a full-stack web app as my final year project with secure user login, an admin panel, live booking, token-based authentication, multiple APIs, middleware, and protected routes all working together seamlessly.</br>
  <strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/Movie-booking" style="color:#90D5FF">github.com/Robinxo/Movie-booking</a></br>
  <strong style="color:#f43f5e;">Url:</strong> <a target="_blank" href="https://frolicking-fairy-9e5986.netlify.app/" style="color:#90D5FF">Movie booking application </a>
`,
                autoStart: true,
                cursor: "",
                delay: 10,
              } as const
            }
          />
        </p>

        <p className="mt-4">
          <span className="text-emerald-400 font-semibold animate-pulse">
            <Typewriter
              options={
                {
                  strings: "> cat portfolio/details.txt",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300">
          <Typewriter
            options={
              {
                strings: `                
  <strong style="color:#f43f5e;">Title:</strong>portfolio<br/>
  <strong style="color:#f43f5e;">Stack:</strong> React,TailwindCSS,Bun<br/>
  <strong style="color:#f43f5e;">Description:</strong> This site that you are scrolling through.</br>
  <strong style="color:#f43f5e;">Github:</strong> <a target="_blank" href="https://github.com/Robinxo/Movie-booking" style="color:#90D5FF">github.com/Robinxo/Movie-booking</a></br>
  <strong style="color:#f43f5e;">Url:</strong> <a target="_blank" href="/" style="color:#90D5FF">portfolio</a>
   `,
                autoStart: true,
                cursor: "",
                delay: 0,
              } as const
            }
          />
        </p>
      </div>
    </div>
  );
}
