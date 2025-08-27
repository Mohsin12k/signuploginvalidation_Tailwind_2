const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Segui UI", "sans-serif"]
      },
      keyframes: {
        rotateAfter: {
          '0%': {transform: "rotate(0deg)"},
          '100%': {transform: "rotate(720deg)"},
        },
        rotateBefore: {
          '0%': {transform: "rotate(0deg)"},
          '100%': {transform: "rotate(-720deg)"}
        },
      },
      animation: {
        'rotate-after': 'rotateAfter 0.5s ease-in-out',
        'rotate-before': 'rotateBefore 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}

