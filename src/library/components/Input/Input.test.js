import React from 'react'
import { render } from 'enzyme'

// components
import { DsInput } from './index'

// config
import InputConfig from './Input.config'

// constants
const InputClass = InputConfig.class
// const InputPropText = "Heading Default Text";

describe('Heading Component', () => {
  it('Matches Snapshot', () => {
    const wrapper = render(<DsInput />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    const wrapper = render(<DsInput />)
    expect(wrapper).toBeTruthy()
    expect(wrapper.find(InputClass)).toBeTruthy()
  })
})

// describe("Props", () => {
//   InputConfig.props.type.options.forEach(type => {
//     it(`Accept prop type: ${type}`, () => {
//       const wrapper = render(<DsInput />);
//       expect(wrapper.find(`${InputClass}--${type}`)).toBeTruthy();
//     });
//   });
// });
