import React from 'react'
import { shallow } from 'enzyme'

// Components
import { Bar } from '@/components/Bar'

// Constants
const BAR_COMPONENT_TEXT = 'Bar Component'
const BAR_COMPONENT_CLASS = '.bar'

/**
 * Setup method to avoid code repeat
 * @param props
 * @returns {{wrapper, props}}
 */
function setup(props) {
	const wrapper = shallow(<Bar>{BAR_COMPONENT_TEXT}</Bar>)
	return { wrapper, props }
}

describe('Bar Test Suite', () => {
	it('Should match snapshot', () => {
		expect(Bar).toMatchSnapshot()
	})
	it('Should have class', () => {
		const { wrapper } = setup()
		expect(wrapper.find(BAR_COMPONENT_CLASS).exists()).toBe(true)
	})
	it('Should have text', () => {
		const { wrapper } = setup()
		expect(wrapper.find(BAR_COMPONENT_CLASS).text()).toBe(BAR_COMPONENT_TEXT)
	})
})
