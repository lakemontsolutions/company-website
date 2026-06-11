/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#faf8f4',
          100: '#f4f0e8',
          200: '#ede8dc',
          DEFAULT: '#e8e2d5',
        },
        charcoal: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
