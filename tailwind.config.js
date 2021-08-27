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
        cyanHover: "#3092cb",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
