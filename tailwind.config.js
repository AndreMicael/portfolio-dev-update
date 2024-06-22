const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontSize: {
        sm2: '1rem',
      },
      container: {
        center: true,
      },
      colors: {
        'verde': '#23CE99',
        'verde-light': '#56ff88',
        'verde-shadow': '#14a578',
        'cinza': '#898989;.'
      },
     
    },
  },
  plugins: [

    flowbite.plugin(),

  ],
};
