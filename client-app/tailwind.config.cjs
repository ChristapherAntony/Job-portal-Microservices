/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#EDF2F6',
        myGray: "#4B5563",
        lightDarkBlue: '#1D2F38',
        textBlue: "#1279ED"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}