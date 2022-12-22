/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: {
    relative: true,
    "./public/index.html",
    "./src/components/Home.js",
    "./src/styles/craco.config.js"
  ],
},
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};