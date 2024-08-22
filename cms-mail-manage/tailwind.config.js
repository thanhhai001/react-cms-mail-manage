/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'h-page' : 'height: calc(100%-80px);'
      }
    },
  },
  plugins: [],
}
