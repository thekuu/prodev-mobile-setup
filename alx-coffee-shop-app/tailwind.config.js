/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C67C4E',
        secondary: '#131313',
        light: '#FFF5EE',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['SourceSerifPro', 'serif'],
      },
    },
  },
  plugins: [],
}