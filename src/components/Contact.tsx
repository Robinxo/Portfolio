import React, { useState } from "react";
import Typewriter from "typewriter-effect";

export const Contact = (): React.JSX.Element => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "b53b42c4-5d52-4ddc-87f8-87bd47c00547");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <>
      <div className="bg-[#0a0a0a] text-[#e5e5e5] font-mono rounded-lg shadow-xl mx-auto border border-[#1f1f1f] w-full max-w-3xl p-6 relative overflow-hidden mb-10 lg:max-w-11/12 lg:px-10 min-h-screen">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <p className="text-xs text-gray-500 ml-3">om@portfolio:~</p>
        </div>
        <div className="space-y-3">
          <p>
            <span className="text-emerald-400 font-semibold animate-pulse">
              <Typewriter
                options={
                  {
                    strings: "> contact --help",
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
                    "Reach me through any of the channels below. I usually reply within 24 hours.",
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </p>
          <p>
            <span className="text-emerald-400 font-semibold animate-pulse">
              <Typewriter
                options={
                  {
                    strings: "> contact --methods",
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
                  strings: `<li><strong style="color:#f43f5e;">email:</strong><u><a target="_blank" style="color:#90D5FF" href="mailto:omrawat.work@gmail.com">omrawat.work@gmail.com</a></u></li>
                             <li><strong style="color:#f43f5e;">Github:</strong><a target="_blank" href="https://github.com/Robinxo" style="color:#90D5FF">github.com/Robinxo</a></br></li>
                             <li><strong style="color:#f43f5e;">linkedin:</strong><a target="_blank" href="https://www.linkedin.com/in/omr18/" style="color:#90D5FF">linkedin.com/in/omr18/</a></br></li>
 `,
                  autoStart: true,
                  cursor: "",
                  delay: 10,
                } as const
              }
            />
          </p>
          <p>
            <span className="text-emerald-400 font-semibold animate-pulse">
              <Typewriter
                options={
                  {
                    strings: "> contact --form",
                    autoStart: true,
                    cursor: "",
                    delay: 10,
                  } as const
                }
              />
            </span>
          </p>

          <form onSubmit={onSubmit} className="font-mono text-sm space-y-2">
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
        </div>
      </div>
    </>
  );
};
