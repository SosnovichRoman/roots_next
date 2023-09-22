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
        'placeholder': '#6C6C6C',
        'golden': '#FFDF00',
      },
      spacing: {
        15: '3.75rem'
      },
      boxShadow: {
        'small': '0px 2px 10px -1px rgba(0, 0, 0, 0.25)',
        'medium': '0px 4px 20px -2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
