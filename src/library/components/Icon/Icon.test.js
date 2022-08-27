import React from 'react'
import { shallow, render } from 'enzyme'

// components
import { DsIcon } from '@/library/components/Icon'

// config
import IconConfig from './Icon.config'

// constants
const IconClass = IconConfig.class
const IconPropImage = IconConfig.props.image.options[1]
const IconPropColor = IconConfig.props.color.default

describe('Icon Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsIcon image={IconPropImage} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = shallow(<DsIcon image={IconPropImage} />)
    expect(wrapper).toBeTruthy()
    expect(wrapper.find(IconClass)).toBeTruthy()
  })

  it('Loads the Component HTML with primary color', () => {
    const wrapper = shallow(
      <DsIcon color={IconPropColor} image={IconPropImage} />
    )
    expect(wrapper.find(`${IconClass}__${IconPropColor}`)).toBeTruthy()
  })
})
