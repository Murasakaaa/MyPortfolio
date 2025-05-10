// tailwind.config.js
module.exports = {
    content: ["./*.html", "./mainfiles/**/*.{js,html}"],
    theme: {
      extend: {
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
        },
      },
    },
    plugins: [],
  }
  