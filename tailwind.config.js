// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     fontFamily: {
//       bacasime: ['Bacasime Antique', 'serif'],
//       changa: ['Changa One', 'cursive'],
//       merriweather: ['Merriweather', 'serif']
//     },
//   },
//   plugins: [],
// }
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
            bacasime: ['Bacasime Antique', 'serif'],
            changa: ['Changa One', 'cursive'],
            merriweather: ['Merriweather', 'serif']
          },
  },
  plugins: [],
});

