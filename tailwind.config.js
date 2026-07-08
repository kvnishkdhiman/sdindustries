/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2A4A', // navy
        secondary: '#E4572E', // accent orange (used as secondary)
        accent: '#E4572E', // keep alias
        background: '#FFFFFF',
        altBackground: '#F5F6F7',
        border: '#E0E0E0',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
