/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#3D4261',
        'primary': '#3D4261',
        'secondary': '#BCC5FC',
        'darkGreen': '#3D615F',
        'lightGreen': '#A8DBD9',
        'highlightRed': '#E23039',
        'accentGold': '#E9B069',
        'lightGrey': '#EDEFF4',
        'darkPurple': '#725289',
        'white': '#fff'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
