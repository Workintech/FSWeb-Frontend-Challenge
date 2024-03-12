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
      'bluecard': '#ddeefe',
      'greencard': '#d9f6f1',
      'blue2': '#82bbff',
      'acikkahve':'#484148',
      'koyukahve': '#2a262b'
      }
    },
    
  },
  plugins: [],
}