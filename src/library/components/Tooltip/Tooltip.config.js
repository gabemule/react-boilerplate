module.exports = {
  name: 'Tooltip',
  class: 'ds-tooltip',
  props: {
    position: {
      type: String,
      default: 'top',
      options: ['top', 'right', 'bottom', 'left']
    },
    placement: {
      type: String,
      default: 'center',
      options: ['center', 'end', 'initial']
    },
    text: {
      type: String,
      default: ''
    }
  }
}
