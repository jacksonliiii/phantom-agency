/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {}
  },
  plugins: [require("flowbite/plugin")],
};
