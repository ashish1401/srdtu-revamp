/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#112852",
        secondary: "rgb(59, 130, 246)",
        tertiary: "white"
      },
      fontFamily: {
        "pop": ['Poppins', 'sans-serif'],
        "sora": ["Sora", "sans-serif"],
        "exo": ['Exo', 'sans-serif']
      }

    },
  },
  plugins: [],
}