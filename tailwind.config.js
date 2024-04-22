/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        frutiger: "frutiger, sans-serif",
      },
      colors: {
        primary: "#caa860",
        secondary: "#347181",
        shadow: "#4682B4",
      },
      keyframes: {
        "go-next": {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(10px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "go-next": "go-next 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
