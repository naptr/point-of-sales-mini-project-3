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
      borderWidth: {
        '1': '1px'
      },
      boxShadow: {
        'around': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      translate: {
        '17.5': '4.375rem'
      },
      transitionDuration: {
        '400': '400ms'
      },
      spacing: {
        '18': '4.5rem',
      },
      minHeight: {
        'custom': '704px'
      },
      maxHeight: {
        'custom': '656px',
        '50': '12.5rem'
      },
      height: {
        'custom-560': '560px',
        'custom-608': '608px',
        'custom-656': '656px',
        'custom-704': '704px',
        'custom-708': '708px',
        'custom-888': '888px'
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