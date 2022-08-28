module.exports = {
  name: 'Heading',
  class: 'ds-heading',
  props: {
    type: {
      type: String,
      default: 'display',
      options: ['display', 'x-large', 'large', 'medium', 'small', 'x-small']
    }
  }
}
