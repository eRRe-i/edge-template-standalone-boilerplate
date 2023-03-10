/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./views/*.edge",
    "./views/**/*.edge"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
