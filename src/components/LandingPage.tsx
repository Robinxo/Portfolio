import Typewriter from "typewriter-effect";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const BACKEND_URL = "http://localhost:3000";

const Links = {
  github: "https://github.com/Robinxo",
  linkedin: "https://linkedin.com/in/omr18",
  email: "mailto:omrawat.work@gmail.com",
  pdf: "./resume.pdf",
} as const;

interface Data {
  ip: string;
  city: string;
  actual: string;
}

export const LandingPage = (): React.JSX.Element => {
  const [data, SetDataa] = useState<Data | null>(null);
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}`);
        const getit = await res.json();
        SetDataa(getit);
      } catch (err) {
        console.error("❌ Error tracking visit:", err);
      }
    };
    trackVisit();
  }, []);
  const weather = data?.actual;
  const city = data?.city;

  const weatherVisuals: Record<
    string,
    { img: string; color: string; message: (w: string, c: string) => string }
  > = {
    Sunny: {
      img: "https://i.pinimg.com/originals/65/98/31/6598313112d22526d2931969c8cf57d8.gif",
      color: "shadow-amber-100/20",
      message: (w, c) => `Glad to know it’s ${w.toLowerCase()} in ${c}`,
    },
    "Partly Cloudy": {
      img: "https://i.pinimg.com/originals/58/2f/bb/582fbb4259b2ea8f182844686ba7f39c.gif",
      color: "shadow-sky-100/20",
      message: (w, c) => `Seems ${w.toLowerCase()} skies over ${c}`,
    },
    Cloudy: {
      img: "https://i.pinimg.com/originals/de/d7/d1/ded7d113506d8d4287f893a3c01a0323.gif",
      color: "shadow-zinc-200/20",
      message: (w, c) => `${c} is wrapped in ${w.toLowerCase()} skies today`,
    },
    Foggy: {
      img: "https://i.pinimg.com/originals/74/45/0d/74450d7eca072da5a97bf7e41313618e.gif",
      color: "shadow-gray-100/30",
      message: (w, c) => `${c} looks quite ${w.toLowerCase()} right now`,
    },
    Drizzle: {
      img: "https://i.pinimg.com/originals/0e/59/55/0e59557c84793946019c9ab5a2438ed0.gif",
      color: "shadow-blue-200/30",
      message: (w, c) => `Light ${w.toLowerCase()} over ${c}`,
    },
    "Freezing Rain": {
      img: "https://i.pinimg.com/originals/90/47/8c/90478cce1b1954f4283ea98a5b433c9a.gif",
      color: "shadow-cyan-100/30",
      message: (w, c) => `${w} falling in ${c} — stay warm!`,
    },
    Rainy: {
      img: "https://i.pinimg.com/originals/d9/e9/3f/d9e93f5ce187a25330775a0ba5aaf006.gif",
      color: "shadow-blue-300/30",
      message: (w, c) => `Looks like it’s ${w.toLowerCase()} in ${c}`,
    },
    Snowy: {
      img: "https://i.pinimg.com/originals/fa/ae/65/faae656df5906380cdd8323b4b42145a.gif",
      color: "shadow-slate-100/30",
      message: (w, c) => `${c} is covered in ${w.toLowerCase()} bliss ❄️`,
    },
    Stormy: {
      img: "https://i.pinimg.com/originals/a2/75/0e/a2750ea85f34b50b9cb30d870b720b97.gif",
      color: "shadow-purple-200/40",
      message: (w, c) => `${w} Thunder rolls over ${c} — stay safe! ⚡`,
    },
  };

  return (
    <div className=" bg-[#09090B]  flex flex-col justify-center items-center px-6 sm:px-20 md:px-40 lg:px-60 min-h-screen">
      <h1 className="text-center text-amber-50 font-mono text-4xl sm:text-6xl lg:text-7xl mb-4">
        Hi, I’m <span className="text-amber-200">Om Rawat</span> and I’m a
      </h1>
      <div className="text-center text-amber-50 font-mono font-extrabold text-5xl sm:text-7xl lg:text-8xl italic mb-5">
        <Typewriter
          options={
            {
              strings: ["FULL STACK DEVELOPER"],
              autoStart: true,
              loop: true,
            } as const
          }
        />
      </div>
      <span className="font-mono text-xl text-amber-200 mb-10 block self-right">
        I write code for a living
      </span>

      <nav className="flex flex-wrap justify-center gap-5">
        {/* GitHub */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Links.github}
          className="flex items-center gap-2 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-mono font-semibold text-zinc-200 hover:text-amber-200 transition-all shadow-sm hover:shadow-md hover:bg-[#1f1f22]"
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
        </a>
        <Tooltip title="Let's connect?" arrow>
          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Links.linkedin}
            className="flex items-center gap-2 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-mono font-semibold text-zinc-200 hover:text-amber-200 transition-all shadow-sm hover:shadow-md hover:bg-[#1f1f22]"
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
          </a>
        </Tooltip>
        {/* Email */}
        <a
          target="_blank"
          href={Links.email}
          className="flex items-center gap-2 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-mono font-semibold text-zinc-200 hover:text-amber-200 transition-all shadow-sm hover:shadow-md hover:bg-[#1f1f22]"
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
        </a>

        {/* Resume */}
        <a
          target="_blank"
          href={Links.email}
          className="flex items-center gap-2 rounded-lg bg-[#18181B] px-4 py-2 text-sm font-mono font-semibold text-zinc-200 hover:text-amber-200 transition-all shadow-sm hover:shadow-md hover:bg-[#1f1f22]"
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
        </a>
      </nav>

      {weather && weatherVisuals[weather] && (
        <div className="mb-10 mt-6 pt-6">
          <img
            src={weatherVisuals[weather].img}
            alt={`${weather} weather`}
            className={`mx-auto w-[280px] sm:w-[320px] md:w-[480px] rounded-xl shadow-lg ${weatherVisuals[weather].color}`}
          />
          <p className="justify-center pt-5 text-amber-200 font-mono">
            {weatherVisuals[weather].message(weather, city || "your area")}
          </p>
        </div>
      )}
    </div>
  );
};
