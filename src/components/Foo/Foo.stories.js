import React from 'react'
import { Foo } from '@/components/Foo'

const componentProps = {
	title: 'Components/Foo',
	component: Foo
}

export default componentProps

const Template = (args) => <Foo {...args}> Foo Component </Foo>

export const Default = Template.bind({})
