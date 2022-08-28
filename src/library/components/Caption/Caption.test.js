import React from 'react'
import { shallow, render } from 'enzyme'

// components
import { DsCaption } from './index'

// config
import CaptionConfig from './Caption.config'

// constants
const CaptionClass = CaptionConfig.class
const CaptionText = 'Caption Default Text'

describe('Caption Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsCaption>{CaptionText}</DsCaption>)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = shallow(<DsCaption>{CaptionText}</DsCaption>)
    expect(wrapper).toBeTruthy()
    expect(wrapper.find(CaptionClass)).toBeTruthy()
    expect(wrapper.text()).toBe(CaptionText)
  })
})
