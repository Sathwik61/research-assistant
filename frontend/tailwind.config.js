/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green-start': '#90EE90', // Starting color
        'custom-green-end': '#68ed68',   // Ending color (same as start for a solid gradient)
      },
    },
  },
  plugins: [],
}