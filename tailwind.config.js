/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const vcColors = [
  {
    name: 'vc-blue',
    title: 'Blue',
    value: '#4B6AF0',
  },
  {
    name: 'vc-turqoise',
    title: 'Turqoise',
    value: '#78C9B8',
  },
  {
    name: 'vc-orange',
    title: 'Orange',
    value: '#F29C4D',
  },
  {
    name: 'vc-yellow',
    title: 'Yellow',
    value: '#F1D356',
  },
  {
    name: 'vc-lightblue',
    title: 'Light Blue',
    value: '#56A9EB',
  },
  {
    name: 'vc-red',
    title: 'Red',
    value: '#E96C61',
  },
  {
    name: 'vc-lightpurple',
    title: 'Light Purple',
    value: '#C676BD',
  },
  {
    name: 'vc-gray',
    title: 'Gray',
    value: '#D4D4D4',
  }
]

exports.vcColors = vcColors

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
      colors: Object.fromEntries(
        vcColors.map((color) => [color.name, color.value])
      ),
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
  vcColors
}
