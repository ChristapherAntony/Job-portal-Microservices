/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#F0F9FF',
        myGray: "#4B5563",
        lightDarkBlue: '#1D2F38'
      }
    },
  },
  plugins: [],
}