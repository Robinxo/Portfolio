import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";

export default function Projects(): React.JSX.Element {
  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] font-mono rounded-lg shadow-xl mx-auto border border-[#1f1f1f] w-full max-w-3xl p-6 relative overflow-hidden mb-10 lg:max-w-11/12 lg:px-10">
      {/* Fake terminal header */}
      <div className="flex items-center gap-2 mb-4">
        <motion.span
          className="w-3 h-3 bg-red-500 rounded-full"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "tween",
            duration: 0.12,
            ease: "easeOut",
          }}
        ></motion.span>
        <motion.span
          className="w-3 h-3 bg-yellow-400 rounded-full"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "tween",
            duration: 0.12,
            ease: "easeOut",
          }}
        ></motion.span>
        <motion.span
          className="w-3 h-3 bg-green-500 rounded-full"
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "tween",
            duration: 0.12,
            ease: "easeOut",
          }}
        ></motion.span>

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
                strings: "TanviPremiumGroup/ Movie-Booking/ craftySocial/",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <a
              href="https://tanvipremiumgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="/tanvipremium.png"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
              />
            </a>
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
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://frolicking-fairy-9e5986.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="/movieBooking.png"
                className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
                whileHover={{
                  scale: 1.1,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
              />
            </a>
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
          </div>
        </p>
        <p className="mt-4">
          <span className="text-emerald-400 font-semibold animate-pulse">
            <Typewriter
              options={
                {
                  strings: "> cat craftySocial/details.txt",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300">
          <div
            className="
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            <a
              href="https://696734c0ef6b06e85ff71257--magnificent-dragon-a560e2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src="/craftySocial.png"
                className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
                whileHover={{
                  scale: 1.1,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </a>
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
          </div>
        </p>
      </div>
    </div>
  );
}
