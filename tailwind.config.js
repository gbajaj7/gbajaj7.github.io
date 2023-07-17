module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fcf8ff",
          500: "#a09a9a",
          900: "#222222",
          "50_01": "#fffafa",
          "50_02": "#fffbfb",
          "300_cc": "#e2ddddcc",
        },
        green: { 200: "#85e0a3" },
        light_blue: { 400: "#19bcfd" },
        orange: { 100: "#fdddbf" },
        black: { 900: "#000000", "900_01": "#0e0e0e" },
        deep_orange: { 300: "#ff7262" },
        white: { A700: "#ffffff" },
        indigo: { 500: "#50589f" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
