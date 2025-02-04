const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#462052",
        "medium-purple": "#551a67",
        "light-purple": "#e0d0f3",
        beige: "#edeadb",
      },
      scrollbar: ["rounded"],
    },
    colors: {
      text: "#09070a",
      background: "#f8f6f9",
      primary: "#551a67",
      secondary: "#c9abbc",
      accent: "#b48b9c",
      white: "#ffffff",
      transparent: colors.transparent,
      red: colors.red,
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
