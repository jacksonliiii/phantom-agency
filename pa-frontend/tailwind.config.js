/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '990px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {},
  }, 
  plugins: [],
};
