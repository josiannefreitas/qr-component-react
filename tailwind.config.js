/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        600: '#2C7DFA'
      },
      slate: {
        900: '#1f314f',
        500: '#68778d',
        300: '#d5e1ef'
      },
      white: '#ffffff'
    },
    fontFamily: {
      serif: ['Outfit', 'serif']
    },
    extend: {
      boxShadow: {
        shadow: '0 25px 25px 0 rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
