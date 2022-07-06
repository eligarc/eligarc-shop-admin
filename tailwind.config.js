const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
