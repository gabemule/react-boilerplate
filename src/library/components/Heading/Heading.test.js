import React from 'react'
import { render } from 'enzyme'

// components
import { DsHeading } from './index'

// config
import HeadingConfig from './Heading.config'

// constants
const HeadingClass = HeadingConfig.class
const HeadingPropText = 'Heading Default Text'

describe('Heading Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(
      <DsHeading type={'display'}>{HeadingPropText}</DsHeading>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = render(
      <DsHeading type={'display'}>{HeadingPropText}</DsHeading>
    )
    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toBe(HeadingPropText)
    expect(wrapper.find(HeadingClass)).toBeTruthy()
  })
})

describe('Props', () => {
  HeadingConfig.props.type.options.forEach((type) => {
    it(`Accept prop type: ${type}`, () => {
      const wrapper = render(
        <DsHeading type={type}>{HeadingPropText}</DsHeading>
      )
      expect(wrapper.find(`${HeadingClass}--${type}`)).toBeTruthy()
    })
  })
})
