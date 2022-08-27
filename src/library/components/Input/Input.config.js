var IconConfig = require('../Icon/Icon.config')

module.exports = {
  name: 'Input',
  class: 'ds-input',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      options: ['text', 'password', 'email']
    },
    animated: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      options: ['small', 'medium', 'large']
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ' '
    },
    value: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: '',
      options: ['', 'error', 'success']
    },
    feedback: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'info',
      options: IconConfig.props.image.options
    },
    tooltip: {
      type: String,
      default: ''
    }
  }
}
