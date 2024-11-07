/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        fiap: "#E91C5D",
        darkblack: "#21252d",
        midlack: "#252A33",
        lightBlack: "#282e39",
      },
      fontFamily: {
        bangers: ["Bangers_400Regular"],
      },
    },
  },
  plugins: [],
};
