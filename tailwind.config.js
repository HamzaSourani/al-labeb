/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D0B372",
        secondary: "#00008b",
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
