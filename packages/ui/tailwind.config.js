/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './.storybook/preview.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins']
      }
    }
  },
  plugins: []
};
