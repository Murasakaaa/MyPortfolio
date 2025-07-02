// tailwind.config.js
module.exports = {
    content: ["./*.html", "./mainfiles/**/*.{js,html}"],
    theme: {
      extend: {
        backgroundImage: {
        'diagonal-fade': 'linear-gradient(45deg, transparent, black, transparent)',
      },
      colors: {
        rich_black: {
          DEFAULT: '#071013',
          100: '#010304',
          200: '#030607',
          300: '#04090b',
          400: '#060d0f',
          500: '#071013',
          600: '#214b59',
          700: '#3b87a0',
          800: '#72b4cb',
          900: '#b8dae5',
        },
        honeydew: {
          DEFAULT: '#f0fff0',
          100: '#006300',
          200: '#00c600',
          300: '#2aff2a',
          400: '#8dff8d',
          500: '#f0fff0',
          600: '#f3fff3',
          700: '#f6fff6',
          800: '#f9fff9',
          900: '#fcfffc',
        },
        tea_green: {
          DEFAULT: '#d6f7ad',
          100: '#2d4c08',
          200: '#5a980f',
          300: '#88e417',
          400: '#aeef5f',
          500: '#d6f7ad',
          600: '#ddf8bc',
          700: '#e6facd',
          800: '#eefcde',
          900: '#f7fdee',
        },
        hookers_green: {
          DEFAULT: '#456e5c',
          100: '#0e1612',
          200: '#1b2c25',
          300: '#294237',
          400: '#37584a',
          500: '#456e5c',
          600: '#5e977e',
          700: '#85b29f',
          800: '#adccbf',
          900: '#d6e5df',
        },
      },
      screens: {
        'min400': '400px',
      },
        fontSize: {
          '10xl': '10rem', // 160px
          '11xl': '12rem', // 192px
          '12xl': '14rem', // 224px
          '13xl': '16rem',
          '14xl': '18rem',
          '15xl': '20rem',
        },
        fontFamily: {
          archivo: ['Archivo', 'sans-serif'],
          schabo: ['"Schabo X Condensed"', 'sans-serif'],
          schabo2: ['"Schabo Condensed"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  