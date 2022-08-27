import React from 'react'
import { shallow, render } from 'enzyme'

// components
import { DsAccordion } from '@/library/components/Accordion'

// config
import AccordionConfig from './Accordion.config'

const AccordionClass = AccordionConfig.class
const mockedItems = [
  {
    title: 'Accordion 1',
    content: 'lorem ipsum dolor sit amet'
  },
  {
    title: 'Accordion 2',
    content: 'lorem ipsum dolor sit amet'
  }
]

describe('Accordion Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsAccordion items={mockedItems} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = shallow(<DsAccordion items={mockedItems} />)
    expect(wrapper).toBeTruthy()
    expect(wrapper.find(AccordionClass)).toBeTruthy()
  })
})
