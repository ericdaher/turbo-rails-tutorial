const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/components/**/*.{erb,haml,html,slim}',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'text-header':      '#292929',
        'text-body':        '#3D4343',
        'text-muted':       '#6F7171',
        'primary':          '#D92B50',
        'primary-rotate':   '#ED5B32',
        'primary-bg':       '#FFEBEB',
        'secondary':        '#6AB35B',
        'secondary-rotate': '#5BB35B',
        'tertiary':         '#FFD647',
        'glint':            '#B3D9FF',
        'white':            '#FFFFFF',
        'background':       '#FCF7F2',
        'light':            '#EEECEC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
