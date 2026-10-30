/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161411",
        paper: "#f3efe6",
        mute: "#b7ad9f",
        brass: "#e0c27a",
        oxide: "#f0a598",
        line: "rgba(243, 239, 230, 0.16)",
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
