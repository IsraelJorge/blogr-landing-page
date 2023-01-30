/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          red_400: "hsl(356, 100%, 66%)",
          red_300: "hsl(355, 100%, 74%)",
          blue_900: "hsl(208, 49%, 24%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          gray_100: " hsl(240, 2%, 79%)",
          gray_200: " hsl(207, 13%, 34%)",
          gray_800: "hsl(240, 10%, 16%)",
        },
        gradient: {
          red_100: "hsl(13, 100%, 72%)",
          red_500: "hsl(353, 100%, 62%)",

          blue_800: " hsl(237, 17%, 21%)",
          blue_700: "hsl(237, 23%, 32%)",
        },
      },

      fontFamily: {
        ubunto: ["Ubuntu", "sans-serif"],
        overpass: ["Overpass, sans-serif"],
      },

      backgroundSize: {
        "45%": "45%",
        "50%": "50%",
        "70%": "70%",
        "80%": "80%",
        "100%": "100%",
        "200%": "200%",
        "500%": "500%",
      },
      screens: {
        "2xl": { max: "1535px" },

        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
