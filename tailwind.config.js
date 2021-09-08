module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'logo': ['Dancing Script'],
      'caption': ['"Open Sans"', 'Nunito', 'sans-serif'],
      'body': ['"Open Sans"', 'Nunito', 'system-ui', 'sans-serif'],
    }
  },
  variants: {
    extends: {
      fill: ['hover']
    }
  }
}