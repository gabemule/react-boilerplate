import React from 'react'
import { shallow, render } from 'enzyme'

// components
import { DsButton } from '@/library/components/Button'

// config
import ButtonConfig from './Button.config'

// constants
const ButtonClass = ButtonConfig.class
const ButtonText = 'Button Default Text'

describe('Button Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsButton>{ButtonText}</DsButton>)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = shallow(<DsButton>{ButtonText}</DsButton>)
    expect(wrapper).toBeTruthy()
    expect(wrapper.find(ButtonClass)).toBeTruthy()
  })
})
