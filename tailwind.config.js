module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        black: "#202020",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        cyan: "#288fc9",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
