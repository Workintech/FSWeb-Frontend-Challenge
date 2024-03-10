/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'pink2': '#e92577',
      'yellow2': '#ffe86e',
      }
    },
    
  },
  plugins: [],
}