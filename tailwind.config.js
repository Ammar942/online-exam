const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#462052",
        "medium-purple": "#551a67",
        "light-purple": "#e0d0f3",
      },
    },
  },
  plugins: [],
};
