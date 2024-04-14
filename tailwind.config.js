/** @type {import('tailwindcss').Config} */
// const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pink: '#D8CFD0',
        Aquamarine700: "#008F6F",
        carouselText: "#808080",
        AquamarineBG: "#E9FFF7"
      },
      borderWidth: {
        buttonBorder: "0.8px solid var(--Aquamarine- 950, #00342B)"

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
}