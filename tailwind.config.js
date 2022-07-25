module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      colors: {
        'violet': '#9311c9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
