import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ExampleComponent } from '../Example'

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponent
} as ComponentMeta<typeof ExampleComponent>

const Template: ComponentStory<typeof ExampleComponent> = (args) => (
  <ExampleComponent {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  text: 'Example'
}
