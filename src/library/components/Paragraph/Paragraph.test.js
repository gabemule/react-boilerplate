import React from 'react'
import { shallow, render } from 'enzyme'

// components
import { DsParagraph } from '@/library/components/Paragraph'

// config
import ParagraphConfig from './Paragraph.config'

// components
const paragraphClass = ParagraphConfig.class
const paragraphPropText = 'Text Default Text'

describe('Text Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(
      <DsParagraph type={'large'}>{paragraphPropText}</DsParagraph>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = render(
      <DsParagraph type={'large'}>{paragraphPropText}</DsParagraph>
    )

    expect(wrapper).toBeTruthy()
    expect(wrapper.text()).toBe(paragraphPropText)
    expect(wrapper.find(paragraphClass)).toBeTruthy()
  })
})

describe('Props', () => {
  ParagraphConfig.props.type.options.forEach((type) => {
    it(`Accept prop type: ${type}`, () => {
      const wrapper = shallow(
        <DsParagraph type={type}>{paragraphPropText}</DsParagraph>
      )
      expect(wrapper.find(`${paragraphClass}--${type}`)).toBeTruthy()
    })
  })
})
