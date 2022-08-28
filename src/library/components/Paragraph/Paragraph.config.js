module.exports = {
  name: 'Paragraph',
  class: 'ds-paragraph',
  props: {
    type: {
      type: String,
      default: 'small',
      options: ['large', 'small']
    }
  }
}
