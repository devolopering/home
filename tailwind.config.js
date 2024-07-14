/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-w-800px': {'max': '800px'},
        'md-800': '800px',  
      },
    },
  },
  plugins: [],
}

