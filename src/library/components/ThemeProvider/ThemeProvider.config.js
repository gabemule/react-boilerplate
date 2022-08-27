module.exports = {
  name: 'ThemeProvider',
  class: 'ds-theme-provider',
  props: {
    theme: {
      type: String,
      default: 'light',
      options: ['light', 'dark']
    },
    library: {
      type: String,
      default: 'core',
      options: ['core', 'mkt']
    }
  }
}
