/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Pirata One, cursive'],
        secondary: ['Burn The Witch']
      },
      colors: {
        primary: '#060606',
        secondary: '#96001E'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
