import React from 'react'
import { render } from 'enzyme'

// components
import { DsSubtitle } from '@/library/components/Subtitle'

// config
import SubtitleConfig from './Subtitle.config'

// constants
const SubtitleClass = SubtitleConfig.class
const SubtitlePropText = 'Subtitle Default Text'

describe('Subtitle Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsSubtitle>{SubtitlePropText}</DsSubtitle>)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = render(<DsSubtitle>{SubtitlePropText}</DsSubtitle>)

    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toBe(SubtitlePropText)
    expect(wrapper.find(SubtitleClass)).toBeTruthy()
  })
})

describe('Props', () => {
  SubtitleConfig.props.type.options.forEach((type) => {
    it(`Accept prop type: ${type}`, () => {
      const wrapper = render(
        <DsSubtitle type={type}>{SubtitlePropText}</DsSubtitle>
      )
      expect(wrapper.find(`${SubtitleClass}--${type}`)).toBeTruthy()
    })
  })
})
