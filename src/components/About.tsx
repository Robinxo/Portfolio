import React from "react";
import Typewriter from "typewriter-effect";

export default function About(): React.ReactElement {
  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] font-mono rounded-lg shadow-xl mx-auto border border-[#1f1f1f] w-full max-w-3xl p-6 relative overflow-hidden mb-10 lg:max-w-11/12 lg:px-10 min-h-screen">
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
                  strings: "> whoami",
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
                strings:
                  "Om Rawat here really into full stack development and being on my terminal coding as you can see how much i love terminal my whole site theme is  based that.",
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
                  strings: "> skills --list",
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
                strings:
                  "<li>JavaScript</li><li>React</li><li>Node.js</li><li>TypeScript</li><li>Express</li><li>MongoDB</li><li>TailwindCSS</li><li>Vite</li><li>PHP</li> <li>Bun</li><li>C++</li>",
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
                  strings: "> coming soon",
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
                strings: "",
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
                  strings: "",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </span>
        </p>
        <p className="ml-4 text-gray-300"></p>
      </div>
    </div>
  );
}
