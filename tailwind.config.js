module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Zilla Slab, serif',
      },
      colors: {
        'lotus-beige': '#fff3e1',
        'lotus-red': '#b8513d',
        'lotus-red-light': '#D37F75',
        'lotus-green': '#97b73e',
        'lotus-orange': '#db961d',
      },
      fontFamily: {
        'lotus-pixelmix': 'pixelmix',
        'lotus-pixelmix-bold': 'pixelmix-bold',
        'lotus-theboldfont': 'theboldfont',
      },
    },
  },
  plugins: [],
}
