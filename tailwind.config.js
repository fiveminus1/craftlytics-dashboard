/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        hubot: ['Hubot Sans', 'sans-serif'],
      },
      colors: {
        'custom-black': '#080705',
        'custom-gray': '#40434E',
        'custom-dark-red': '#702632',
        'custom-red': '#912F40',
        'custom-white': '#FFFFFA',
      },
      borderColor: {
        'gradient': 'linear-gradient(90deg, #912F40, #702632)',
      },
    },
  },
  plugins: [],
}

