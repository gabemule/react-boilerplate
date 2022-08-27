module.exports = {
  name: 'AccordionItem',
  class: 'ds-accordion-item',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
