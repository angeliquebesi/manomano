module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        lightgrey: "#F5F6F7",
        lightgrey2: "#ecedf0",
        teal: "#29b9ad",
        darkblue: "#0C193A",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        mini: "12px",
        normal: "16px",
        h1: "20px",
      },
    },
  },
  plugins: [],
};
