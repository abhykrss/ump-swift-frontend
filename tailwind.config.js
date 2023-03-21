module.exports = {
  content: ["./*.html", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "app-theme": "#00A4EF",
      },
      inset: {
        "85%": "85%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
