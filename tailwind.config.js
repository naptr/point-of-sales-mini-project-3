const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'caption': ['"Open Sans"', 'Nunito', 'sans-serif'],
      'title': ['Philosopher', '"Open Sans"', 'Nunito', 'system-ui', 'sans-serif'],
      'body': ['"Open Sans"', 'Nunito', 'system-ui', 'sans-serif'],
    },
    extend: {
      translate: {
        '17.5': '4.375rem'
      },
      transitionDuration: {
        '400': '400ms'
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  },
  variants: {
    extends: {
      fill: ['hover'],
    }
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('required', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`
        })
      })
    })
  ]
}