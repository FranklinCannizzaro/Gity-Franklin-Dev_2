/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        gity: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          400: '#818CF8',
          600: '#1D3A8A',
          700: '#1A3070',
          800: '#152558',
          900: '#0F1B42',
        },
      },
      borderRadius: {
        '10': '10px',
        '12': '12px',
      },
    },
  },
  plugins: [],
}
