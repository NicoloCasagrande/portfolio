/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      purple: colors.violet,
      tertiary: colors.blue,
      primary: colors.slate,
      secondary: colors.amber,
      white: "#fff",
      black: "#000",
      slate: colors.slate,
      background: "#260296",
    },
    extend: {
      lineHeight: {
        11: "3.2rem",
        12: "4rem",
        13: "5rem",
        14: "8rem",
      },
    },
  },
  plugins: [],
};
