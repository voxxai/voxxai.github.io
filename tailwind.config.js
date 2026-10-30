/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0d",
        fg: "#f5f6fb",
        mute: "#a1a8b8",
        signal: "#ff1f3d",
        gold: "#e8b84a",
        line: "rgba(221, 229, 255, 0.16)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        measure: "38rem",
      },
    },
  },
  plugins: [],
};
