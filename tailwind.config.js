/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#202020',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}