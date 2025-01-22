/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},

      colors: {
        primary: {
          50: "#e8f1f8",
          100: "#b8d4ea",
          200: "#96c0e0",
          300: "#66a3d2",
          400: "#4991c9",
          500: "#1b75bc",
          600: "#196aab",
          700: "#135385",
          800: "#0f4067",
          900: "#0b314f",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
