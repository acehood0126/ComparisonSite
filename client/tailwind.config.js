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
      },
    },
  },
  plugins: [],
};
