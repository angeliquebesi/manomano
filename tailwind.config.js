module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "whitesmoke",
        lightgrey: "#F5F6F7",
        lightgrey2: "#ecedf0",
        lightgrey3: "#eee",
        teal: "#29b9ad",
        darkblue: "#0C193A",
        darkgrey: "#222",
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
        h1: "30px",
        h2: "20px",
      },
    },
  },
  plugins: [],
};
