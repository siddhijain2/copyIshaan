/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#EDE6E3",
        secondary: "#00f6ff",
        Tomato: "#F06449",
        Isabelline:"#EDE6E3",
        AirForceBlue:"#508CA4",
        BlackOlive:"#36382E",
        SeaGreen:"#0A8754",
        DelftBlue:"#1D3461",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};