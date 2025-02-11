/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable manual toggling
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
