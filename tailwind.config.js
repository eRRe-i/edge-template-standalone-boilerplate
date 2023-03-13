/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./views/*.edge",
    "./views/**/*.edge"
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'Helvetica', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
