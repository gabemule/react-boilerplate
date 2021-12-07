import React from 'react'
import { Bar } from '@/components/Bar'

const componentProps = {
  title: 'Components/Bar',
  component: Bar
}

export default componentProps

const Template = (args) => <Bar {...args}> Bar Component </Bar>

export const Default = Template.bind({})
