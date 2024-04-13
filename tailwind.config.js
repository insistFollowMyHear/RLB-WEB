/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#027BF0'
      },
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: [],
}