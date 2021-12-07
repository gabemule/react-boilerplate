import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Button } from '@/components/Button'

// Constants
const BUTTON_COMPONENT_TEXT = 'Button Component'
const BUTTON_COMPONENT_CLASS = '.storybook-button'
const BUTTON_COMPONENT_PRIMARY = '.storybook-button--primary'
const BUTTON_COMPONENT_SECONDARY = '.storybook-button--secondary'

/**
 * Setup method to avoid code repeat
 * @param props
 * @returns {{wrapper, props}}
 */
function setup(props) {
  const wrapper = shallow(<Button {...props} label={BUTTON_COMPONENT_TEXT} />)
  return { wrapper, props }
}

describe('Button Test Suite', () => {
  it('Should match snapshot', () => {
    expect(Button).toMatchSnapshot()
  })

  it('Should have class', () => {
    const { wrapper } = setup()
    expect(wrapper.find(BUTTON_COMPONENT_CLASS).exists()).toBe(true)
  })

  it('Should have primary class', () => {
    const { wrapper } = setup({ primary: true })
    expect(wrapper.find(BUTTON_COMPONENT_PRIMARY).exists()).toBe(true)
  })

  it('Should have secondary class', () => {
    const { wrapper } = setup({ primary: false })
    expect(wrapper.find(BUTTON_COMPONENT_SECONDARY).exists()).toBe(true)
  })

  it('Should have background color', () => {
    const testProp = '#d2d2d2'
    const { wrapper } = setup({ backgroundColor: testProp })
    expect(
      wrapper.find(BUTTON_COMPONENT_CLASS).props().style.backgroundColor
    ).toBe(testProp)
  })
})
