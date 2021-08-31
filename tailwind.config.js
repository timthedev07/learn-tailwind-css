/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
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
        cyan: "#0592e3",
        cyanHover: "#4fb7f7",
        cyanActive: "#2371a1",
        cyanElementBackdrop: "#b8cdd9",
      }),
      // custom keyframes
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },

          "50%": { transform: "rotate(3deg)" },
        },
      },
      // and reference them in custom animation class
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
