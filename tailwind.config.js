/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070b",
        panel: "#0d1117",
        panelAlt: "#111827",
        line: "#1f2937",
        neonBlue: "#38bdf8",
        neonGreen: "#34d399",
        muted: "#94a3b8",
      },
      boxShadow: {
        neon: "0 0 24px rgba(56, 189, 248, 0.28)",
        greenGlow: "0 0 28px rgba(52, 211, 153, 0.22)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.95" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
