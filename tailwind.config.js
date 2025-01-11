const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marquis': "#007CFF",
        'marquis-darker': "#006ced",
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

