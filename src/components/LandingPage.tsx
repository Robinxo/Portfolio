import Typewriter from "typewriter-effect";
import Weather from "../utils/Weather";
import { HeaderLinks } from "./UI";

export const LandingPage = (): React.JSX.Element => {
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
      <HeaderLinks />
      <Weather />
    </div>
  );
};
