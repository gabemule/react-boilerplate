var IconConfig = require('../Icon/Icon.config')

module.exports = {
  name: 'Button',
  class: 'ds-button',
  props: {
    type: {
      type: String,
      default: 'primary',
      options: ['primary', 'secondary', 'danger', 'warning']
    },
    size: {
      type: String,
      default: 'medium',
      options: ['large', 'medium', 'small']
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: IconConfig.props.image.default,
      options: IconConfig.props.image.options
    }
  }
}
