module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // './src/**/*.{html,js}',
    // './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      colors: {
        'primary':'#A0C5F8',
        'gradientBlue-1': '#2B5876',
        'gradientBlue-2': '#4E4376',
        'secondaryGradientBlue-1': 'rgba(107, 102, 166, 0.3)',
        'secondaryGradientBlue-2': 'rgba(117, 209, 221, 0.3)',
        'cardGradientBlue-1': 'rgba(166, 161, 224, 0.3)',
        'cardGradientBlue-2': 'rgba(161, 243, 254, 0.3)',
      },
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
  darkMode: 'class',
}
