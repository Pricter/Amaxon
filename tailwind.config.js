/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ember': ['Ember-Rg', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        amaxon_blue: {
          light: "#232F3E",
          DEFAULT: "#121921",
        },
      },
    },
  },
  plugins: [],
}
