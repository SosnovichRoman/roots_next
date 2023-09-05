/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        mplus: ['M PLUS Rounded 1c', 'sans-serif']
      },
      lineHeight: {
        auto: 'normal'
      },
      colors: {
        'accent-1': "#F8F5FF",
        'neutral-main': '#FFFBF8',
        'main': '#042D1E',
        'main-3': '#88A599',
        'main-dark': '#031b12',
      },
      spacing: {
        15: '3.75rem'
      }
    },
  },
  plugins: [],
}
