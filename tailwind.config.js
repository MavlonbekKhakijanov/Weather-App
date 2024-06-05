/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background__img: "url('/imgs/background.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
