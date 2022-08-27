module.exports = {
  name: 'Grid-Layout',
  class: 'ds-grid-layout',
  props: {
    rows: {
      type: String,
      default: 'auto',
      required: true
    },
    gap: {
      type: String,
      default: '24px'
    },
    width: {
      type: String,
      default: ''
      // 100px
    },
    height: {
      type: String,
      default: ''
      // 100px
    },
    horizontalAlign: {
      type: String,
      default: 'start',
      options: [
        'start',
        'end',
        'center',
        'stretch',
        'space-around',
        'space-between',
        'space-evenly'
      ]
    },
    verticalAlign: {
      type: String,
      default: 'start',
      options: [
        'start',
        'end',
        'center',
        'stretch',
        'space-around',
        'space-between',
        'space-evenly'
      ]
    }
  }
}
