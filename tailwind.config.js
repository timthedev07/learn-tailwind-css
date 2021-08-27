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
        cyanHover: "#4fb7f7",
        cyanActive: "#2371a1",
        cyanElementBackdrop: "#b8cdd9",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
