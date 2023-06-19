/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vc-blue': '#4B6AF0',
        'vc-turqoise': '#78C9B8',
        'vc-orange': '#F29C4D',
        'vc-yellow': '#F1D356',
        'vc-lightblue': '#56A9EB',
        'vc-red': '#E96C61',
        'vc-lightpurple': '#C676BD',
      },
      backgroundImage: {
        'mobile-hero': "url('/images/mobile-hero.svg')",
        'desktop-hero': "url('/images/desktop-hero.svg')",
        'process-decoration-green':
          "url('/images/decoration/process-green.svg')",
        'process-decoration-orange':
          "url('/images/decoration/process-orange.svg')",
        'process-decoration-blue': "url('/images/decoration/process-blue.svg')",
      },
      fontFamily: {
        sans: ['Satoshi', defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
