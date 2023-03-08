/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fef9f8",
        secondary: "#00f6ff",
        Tomato: "#ef9273",
        Isabelline: "#EDE6E3",
        AirForceBlue: "#508CA4",
        BlackOlive: "#36382E",
        SeaGreen: "#0A8754",
        DelftBlue: "#1D3461",
        ChiliRed: "#EF846B",
        Orange: "#FFA500",
        DarkRed: "#ff6347",
        Green: "#008000",
        Red: "#FF0000"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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