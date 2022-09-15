/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:"#1d1d1d",
        sidebar_color:"#181818",
        light_purple:"#3F51B3",
        dark_purple:"#303E9F",
        cream:"#909096",
        neon_green:"#08fdd8",
      },
      fontFamily:{
        Oxygen:"Oxygen"
      }
    },
  },
  plugins: [],
}
