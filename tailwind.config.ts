/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Cascadia Code"', "monospace"],
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow: "0 0 5px #10b981, 0 0 10px #10b981",
          },
          "50%": {
            textShadow: "0 0 10px #34d399, 0 0 20px #34d399",
          },
        },
        rainFront: {
          "0%": { backgroundPosition: "0 -100%, 0 0" },
          "100%": { backgroundPosition: "-50% 100%, 0 0" },
        },
        rainBack: {
          "0%": { backgroundPosition: "0 0, 0 -100%" },
          "100%": { backgroundPosition: "0 0, -30% 100%" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        rainFront: "rainFront 0.8s linear infinite",
        rainBack: "rainBack 1.6s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".rain": {
          position: "absolute",
          inset: "0",
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(120deg,rgba(255,255,255,0.15)_0_2px,transparent_2px_12px),repeating-linear-gradient(120deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_8px)",
          backgroundSize: "200% 200%,150% 150%",
          mixBlendMode: "screen",
          animation:
            "rainFront 0.8s linear infinite, rainBack 1.6s linear infinite",
          zIndex: "10",
          "@media (prefers-color-scheme: light)": {
            mixBlendMode: "multiply",
          },
        },
      });
    },
  ],
};
