/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1ED760",
          dark: "#1CB752",
          darker: "#179B47",
          light: "#4EEA89",
          lighter: "#B9F5D0",
        },
      },
    },
  },
  presets: [require("nativewind/preset")], // 👈 This is the missing piece!
  plugins: [],
};
