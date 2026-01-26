import { motion } from "motion/react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

type TerminalTypewriterProps = {
  text: string;
  className?: string;
};
interface UIProps {
  children: React.ReactNode;
}
type CardImagesProp = {
  Link: string;
  imageUrl: string;
  children: React.ReactNode;
};

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
        <main className="flex-1"> {children}</main>
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

export { UI, TerminalTypewriter, TerminalTypewriterOutput, Form, CardImages };
