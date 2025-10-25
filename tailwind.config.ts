export default {
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Cascadia Code"', "monospace"],
      },
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 5px #10b981, 0 0 10px #10b981" },
          "50%": { textShadow: "0 0 10px #34d399, 0 0 20px #34d399" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
};
