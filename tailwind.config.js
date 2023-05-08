/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,ts,tsx,html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

