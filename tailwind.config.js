/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gold: '#d1aa4b',
        lightGold : '#e9d5a9'
      }
    },
  },
  plugins: [],
}

