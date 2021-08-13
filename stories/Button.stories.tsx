import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src/Button'
import { Size, Color, Variants } from '../src/types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: false
    },
    dimension: {
      options: Object.values(Size),
      control: { type: 'select' }
    },
    color: {
      options: Object.values(Color),
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    className: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

const IconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <svg
      data-position='start'
      width='24'
      height='24'
      version='1.1'
      viewBox='0 0 460.8 460.8'
    >
      <title>illustration/repo</title>
      <path
        d='M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641
            S296.261,0,230.432,0z'
      />
      <path
        d='M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784
            c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555
            c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943
            c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167
            c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02
            c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898
            C436.8,341.682,437.322,338.024,435.755,334.89z'
      />
    </svg>
    Button
  </Button>
)

const CleanIconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <svg
      data-position='start'
      width='24'
      height='24'
      version='1.1'
      viewBox='0 0 460.8 460.8'
    >
      <title>illustration/repo</title>
      <path
        d='M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641
            S296.261,0,230.432,0z'
      />
      <path
        d='M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784
            c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555
            c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943
            c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167
            c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02
            c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898
            C436.8,341.682,437.322,338.024,435.755,334.89z'
      />
    </svg>
  </Button>
)

export const Contained = Template.bind({})

Contained.args = {
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const ContainedIcon = IconTemplate.bind({})

ContainedIcon.args = {
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const Outlined = Template.bind({})

Outlined.args = {
  disabled: false,
  variant: Variants.OUTLINED,
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const OutlinedIcon = IconTemplate.bind({})

OutlinedIcon.args = {
  disabled: false,
  variant: Variants.OUTLINED,
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const Text = Template.bind({})

Text.args = {
  disabled: false,
  variant: Variants.TEXT,
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const TextIcon = IconTemplate.bind({})

TextIcon.args = {
  disabled: false,
  variant: Variants.TEXT,
  dimension: Size.MEDIUM,
  color: Color.PRIMARY
}

export const Icon = CleanIconTemplate.bind({})

Icon.args = {
  variant: Variants.ICON,
  color: Color.PRIMARY,
  dimension: Size.MEDIUM,
  disabled: false
}
