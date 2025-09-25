// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}', './docs/**/*.{vue,js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
