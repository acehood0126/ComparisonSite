/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mark: ["Mark", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        purple: "#873EFA",
        pink: "#C74EF8",
        specialwhite: "#EDF2F0",
        gray: "#a0a5a8",
        black: "#181818",
        lightpink: "#fed2e1",
        lightpurple: "#b4bbff",
        darkblue: "#42538b",
        lightblue: "#d7e5ff",
        whitepink: "#f2e0fa",
      },
      dropShadow: {
        threeDboxOuter: ["8px 8px 8px #d1d9e6", "-6px -6px 6px #fff"],
        threeDboxOuterMiddle: ["4px 4px 4px #d1d9e6", "-4px -4px 4px #fff"],
      },
      boxShadow: {
        threeDboxInner: [
          "inset 2px 2px 2px #d1d9e6",
          "inset -2px -2px 2px #fff",
        ],
        threeDTopCircleInner: [
          "inset 4px 4px 4px #d1d9e6",
          "inset -4px -4px 4px #fff",
        ],
        threeDBottomCircleInner: [
          "inset 0px 4px 4px #d1d9e6",
          "inset 0px -4px 4px #fff",
        ],
      },
    },
  },
  plugins: [],
};
